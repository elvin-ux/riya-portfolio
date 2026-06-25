import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// ---------------------------------------------------------------------------
// Rate Limiting — in-memory store (per-IP, 3 requests per 10 minutes)
// ---------------------------------------------------------------------------

interface RateEntry {
  count: number;
  resetAt: number;
}

const rateLimitStore = new Map<string, RateEntry>();
const RATE_LIMIT_MAX = 3;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes

function checkRateLimit(ip: string): { allowed: boolean; retryAfter?: number } {
  const now = Date.now();
  const entry = rateLimitStore.get(ip);

  if (!entry || now > entry.resetAt) {
    // Fresh window
    rateLimitStore.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return { allowed: true };
  }

  if (entry.count >= RATE_LIMIT_MAX) {
    const retryAfter = Math.ceil((entry.resetAt - now) / 1000);
    return { allowed: false, retryAfter };
  }

  entry.count += 1;
  return { allowed: true };
}

// ---------------------------------------------------------------------------
// Sanitization — strip HTML tags and trim whitespace
// ---------------------------------------------------------------------------

function sanitize(value: unknown): string {
  if (typeof value !== "string") return "";
  return value
    .trim()
    .replace(/<[^>]*>/g, "") // strip HTML tags
    .slice(0, 2000);          // cap length
}

// ---------------------------------------------------------------------------
// Validation helpers
// ---------------------------------------------------------------------------

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function isValidPhone(phone: string): boolean {
  // Allow digits, spaces, hyphens, parentheses, and leading +
  const phoneRegex = /^[+]?[\d\s\-().]{6,20}$/;
  return phoneRegex.test(phone);
}

function isValidDate(dateStr: string): boolean {
  const parsed = new Date(dateStr);
  return !isNaN(parsed.getTime()) && /^\d{4}-\d{2}-\d{2}$/.test(dateStr);
}

// ---------------------------------------------------------------------------
// Build the HTML email body
// ---------------------------------------------------------------------------

function buildEmailHtml(fields: {
  fullName: string;
  email: string;
  phone: string;
  eventName: string;
  location: string;
  eventDate: string;
  purposeType: string;
  expectedGuests: string;
  message: string;
}): string {
  const formattedDate = new Date(fields.eventDate).toLocaleDateString("en-NZ", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const row = (label: string, value: string) => `
    <tr>
      <td style="padding: 10px 16px; background: #FAE5E8; font-family: sans-serif; font-size: 12px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: #be707a; width: 180px; border-radius: 8px 0 0 8px; vertical-align: top;">
        ${label}
      </td>
      <td style="padding: 10px 16px; background: #ffffff; font-family: sans-serif; font-size: 14px; color: #2D2730; border-left: 2px solid #FAE5E8; vertical-align: top;">
        ${value}
      </td>
    </tr>
    <tr><td colspan="2" style="height: 6px;"></td></tr>
  `;

  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>New Event Booking Request</title>
      </head>
      <body style="margin: 0; padding: 0; background: #FCFBFA; font-family: sans-serif;">
        <div style="max-width: 620px; margin: 40px auto; background: #ffffff; border-radius: 24px; overflow: hidden; box-shadow: 0 8px 40px rgba(217,140,154,0.12);">
          
          <!-- Header -->
          <div style="background: linear-gradient(135deg, #D98C9A 0%, #c58a92 100%); padding: 32px 36px;">
            <p style="margin: 0 0 4px; color: rgba(255,255,255,0.8); font-size: 11px; font-weight: 700; letter-spacing: 0.35em; text-transform: uppercase;">
              ✦ EVENT BOOKING REQUEST ✦
            </p>
            <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 700; line-height: 1.3;">
              New Event Booking Request
            </h1>
            <p style="margin: 6px 0 0; color: rgba(255,255,255,0.85); font-size: 14px;">
              From: <strong>${fields.fullName}</strong>
            </p>
          </div>

          <!-- Body -->
          <div style="padding: 32px 36px;">
            <table style="width: 100%; border-collapse: separate; border-spacing: 0 2px;">
              <tbody>
                ${row("Full Name", fields.fullName)}
                ${row("Email", `<a href="mailto:${fields.email}" style="color: #d97a87; text-decoration: none;">${fields.email}</a>`)}
                ${row("Phone", fields.phone)}
                ${row("Event / Venue", fields.eventName)}
                ${row("Location", fields.location)}
                ${row("Event Date", formattedDate)}
                ${row("Purpose / Type", fields.purposeType)}
                ${row("Expected Guests", fields.expectedGuests)}
                ${row("Message", `<div style="white-space: pre-wrap; line-height: 1.6;">${fields.message}</div>`)}
              </tbody>
            </table>
          </div>

          <!-- Footer -->
          <div style="border-top: 1px solid #FAE5E8; padding: 20px 36px; background: #FCFBFA;">
            <p style="margin: 0; font-size: 12px; color: #918589; text-align: center; letter-spacing: 0.05em;">
              This email was sent from the booking form on the Riya Francis portfolio website.
            </p>
          </div>

        </div>
      </body>
    </html>
  `;
}

// ---------------------------------------------------------------------------
// Build the user-facing confirmation email
// ---------------------------------------------------------------------------

function buildConfirmationEmailHtml(fields: {
  fullName: string;
  eventName: string;
  eventDate: string;
  location: string;
  expectedGuests: string;
}): string {
  const formattedDate = new Date(fields.eventDate).toLocaleDateString("en-NZ", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const summaryRow = (label: string, value: string) => `
    <tr>
      <td style="padding: 9px 14px; font-family: sans-serif; font-size: 11px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: #be707a; width: 160px; vertical-align: top; white-space: nowrap;">
        ${label}
      </td>
      <td style="padding: 9px 14px; font-family: sans-serif; font-size: 14px; color: #2D2730; vertical-align: top;">
        ${value}
      </td>
    </tr>
    <tr><td colspan="2" style="height: 1px; background: #FAE5E8;"></td></tr>
  `;

  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Booking Request Received</title>
      </head>
      <body style="margin: 0; padding: 0; background: #FCFBFA; font-family: sans-serif;">
        <div style="max-width: 600px; margin: 40px auto; background: #ffffff; border-radius: 24px; overflow: hidden; box-shadow: 0 8px 40px rgba(217,140,154,0.12);">

          <!-- Header -->
          <div style="background: linear-gradient(135deg, #D98C9A 0%, #c58a92 100%); padding: 36px 36px 28px;">
            <p style="margin: 0 0 6px; color: rgba(255,255,255,0.8); font-size: 11px; font-weight: 700; letter-spacing: 0.35em; text-transform: uppercase;">
              ✨ BOOKING CONFIRMATION
            </p>
            <h1 style="margin: 0; color: #ffffff; font-size: 26px; font-weight: 700; line-height: 1.3;">
              Request Received!
            </h1>
          </div>

          <!-- Greeting -->
          <div style="padding: 32px 36px 0;">
            <p style="margin: 0 0 12px; font-family: sans-serif; font-size: 15px; color: #2D2730; line-height: 1.7;">
              Hi <strong>${fields.fullName}</strong>,
            </p>
            <p style="margin: 0 0 12px; font-family: sans-serif; font-size: 14px; color: #6D6670; line-height: 1.8;">
              Thank you for reaching out.
            </p>
            <p style="margin: 0 0 28px; font-family: sans-serif; font-size: 14px; color: #6D6670; line-height: 1.8;">
              We have successfully received your event booking request and appreciate your interest in working with us. Our team will review your submission and get back to you as soon as possible.
            </p>
          </div>

          <!-- Booking Summary Card -->
          <div style="margin: 0 36px 28px; border-radius: 16px; overflow: hidden; border: 1px solid #FAE5E8;">
            <div style="background: linear-gradient(135deg, #FAE5E8 0%, #F0E5F7 100%); padding: 12px 16px;">
              <p style="margin: 0; font-family: sans-serif; font-size: 11px; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; color: #be707a;">✦ Booking Summary</p>
            </div>
            <table style="width: 100%; border-collapse: collapse; background: #ffffff;">
              <tbody>
                ${summaryRow("Event / Venue", fields.eventName)}
                ${summaryRow("Event Date", formattedDate)}
                ${summaryRow("Location", fields.location)}
                ${summaryRow("Expected Guests", fields.expectedGuests)}
              </tbody>
            </table>
          </div>

          <!-- Reply note -->
          <div style="padding: 0 36px 32px;">
            <p style="margin: 0 0 28px; font-family: sans-serif; font-size: 14px; color: #6D6670; line-height: 1.8;">
              If you have any additional information to share, simply reply to this email.
            </p>

            <!-- Signature -->
            <div style="border-top: 1px solid #FAE5E8; padding-top: 24px;">
              <p style="margin: 0 0 2px; font-family: sans-serif; font-size: 13px; color: #6D6670;">Warm regards,</p>
              <p style="margin: 0 0 2px; font-family: Georgia, serif; font-size: 22px; color: #be707a; font-weight: 400;">Riya Francis</p>
              <p style="margin: 0; font-family: sans-serif; font-size: 11px; font-weight: 600; letter-spacing: 0.25em; text-transform: uppercase; color: #918589;">Anchor &bull; MC &bull; Event Host</p>
            </div>
          </div>

          <!-- Footer -->
          <div style="border-top: 1px solid #FAE5E8; padding: 16px 36px; background: #FCFBFA;">
            <p style="margin: 0; font-size: 11px; color: #918589; text-align: center; letter-spacing: 0.04em;">
              This confirmation was sent automatically. Please do not reply directly to this footer.
            </p>
          </div>

        </div>
      </body>
    </html>
  `;
}

// ---------------------------------------------------------------------------
// Route Handler
// ---------------------------------------------------------------------------

export async function POST(request: NextRequest) {
  // --- Rate limiting ---
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
    request.headers.get("x-real-ip") ??
    "unknown";

  const rateCheck = checkRateLimit(ip);
  if (!rateCheck.allowed) {
    return NextResponse.json(
      {
        success: false,
        error: `Too many requests. Please try again in ${rateCheck.retryAfter} seconds.`,
      },
      {
        status: 429,
        headers: { "Retry-After": String(rateCheck.retryAfter ?? 60) },
      }
    );
  }

  // --- Parse body ---
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid request body." },
      { status: 400 }
    );
  }

  // --- Sanitize all fields ---
  const fullName = sanitize(body.fullName);
  const email = sanitize(body.email);
  const phone = sanitize(body.phone);
  const eventName = sanitize(body.eventName);
  const location = sanitize(body.location);
  const eventDate = sanitize(body.eventDate);
  const purposeType = sanitize(body.purposeType);
  const expectedGuests = sanitize(body.expectedGuests);
  const message = sanitize(body.message);

  // --- Validate required fields ---
  const missing: string[] = [];
  if (!fullName) missing.push("Full Name");
  if (!email) missing.push("Email Address");
  if (!phone) missing.push("Phone Number");
  if (!eventName) missing.push("Event/Venue Name");
  if (!location) missing.push("Location");
  if (!eventDate) missing.push("Event Date");
  if (!purposeType) missing.push("Purpose/Event Type");
  if (!expectedGuests) missing.push("Expected Guests");
  if (!message) missing.push("Message");

  if (missing.length > 0) {
    return NextResponse.json(
      { success: false, error: `Missing required fields: ${missing.join(", ")}.` },
      { status: 400 }
    );
  }

  // --- Format-validate email and phone ---
  if (!isValidEmail(email)) {
    return NextResponse.json(
      { success: false, error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  if (!isValidPhone(phone)) {
    return NextResponse.json(
      { success: false, error: "Please enter a valid phone number." },
      { status: 400 }
    );
  }

  if (!isValidDate(eventDate)) {
    return NextResponse.json(
      { success: false, error: "Please enter a valid event date." },
      { status: 400 }
    );
  }

  // --- Send email via Resend ---
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[book-event] RESEND_API_KEY is not configured.");
    return NextResponse.json(
      { success: false, error: "Email service is not configured. Please contact us directly." },
      { status: 500 }
    );
  }

  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      from: "Riya Francis Portfolio <onboarding@resend.dev>",
      to: ["elvinmanuelcsjr6@gmail.com"],
      replyTo: email,
      subject: `New Event Booking Request - ${fullName}`,
      html: buildEmailHtml({
        fullName,
        email,
        phone,
        eventName,
        location,
        eventDate,
        purposeType,
        expectedGuests,
        message,
      }),
    });

    if (error) {
      console.error("[book-event] Resend error:", error);
      return NextResponse.json(
        { success: false, error: "Failed to send your request. Please try again." },
        { status: 500 }
      );
    }

    // --- Send confirmation email to the user (best-effort — never fails the submission) ---
    try {
      const { error: confirmError } = await resend.emails.send({
        from: "Riya Francis <onboarding@resend.dev>",
        to: [email],
        replyTo: "elvinmanuelcsjr6@gmail.com",
        subject: "✨ Booking Request Received",
        html: buildConfirmationEmailHtml({
          fullName,
          eventName,
          eventDate,
          location,
          expectedGuests,
        }),
      });
      if (confirmError) {
        console.error("[book-event] Confirmation email error:", confirmError);
      }
    } catch (confirmErr) {
      console.error("[book-event] Confirmation email unexpected error:", confirmErr);
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[book-event] Unexpected error:", err);
    return NextResponse.json(
      { success: false, error: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}
