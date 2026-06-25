"use client";

import { useState, useId } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  User as UserIcon,
  Mail as MailIcon,
  Phone as PhoneIcon,
  MapPin as MapPinIcon,
  Calendar as CalendarIcon,
  Users as UsersIcon,
  Mic2 as Mic2Icon,
  MessageSquare as MessageSquareIcon,
  Building2 as Building2Icon,
  Send as SendIcon,
  Loader2 as Loader2Icon,
  CheckCircle2 as CheckCircle2Icon,
  XCircle as XCircleIcon,
} from "lucide-react";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  eventName: string;
  location: string;
  eventDate: string;
  purposeType: string;
  expectedGuests: string;
  message: string;
}

interface Toast {
  type: "success" | "error";
  message: string;
}

const EMPTY_FORM: FormData = {
  fullName: "",
  email: "",
  phone: "",
  eventName: "",
  location: "",
  eventDate: "",
  purposeType: "",
  expectedGuests: "",
  message: "",
};

// ---------------------------------------------------------------------------
// Shared input / label styles
// ---------------------------------------------------------------------------

const labelClass =
  "block font-sans text-[11px] font-semibold tracking-[0.1em] uppercase text-[#6D6670] mb-1.5";

const inputClass =
  "w-full rounded-[12px] border border-[#D98C9A]/20 bg-white/60 px-4 py-3 font-sans text-[14px] text-[#2D2730] placeholder-[#B0A8B0] " +
  "transition-all duration-200 ease-out outline-none " +
  "focus:border-[#D98C9A]/60 focus:ring-2 focus:ring-[#D98C9A]/10 focus:bg-white/80 " +
  "hover:border-[#D98C9A]/35 " +
  "disabled:opacity-60 disabled:cursor-not-allowed";

// ---------------------------------------------------------------------------
// Field wrapper (label + input)
// ---------------------------------------------------------------------------

function Field({
  id,
  label,
  icon: Icon,
  children,
}: {
  id: string;
  label: string;
  icon: React.ElementType;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className={labelClass}>
        <span className="inline-flex items-center gap-1.5">
          <Icon size={10} className="text-[#D98C9A]" strokeWidth={2.5} />
          {label}
        </span>
      </label>
      {children}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Toast notification
// ---------------------------------------------------------------------------

function ToastNotification({
  toast,
  onDismiss,
}: {
  toast: Toast;
  onDismiss: () => void;
}) {
  const isSuccess = toast.type === "success";
  return (
    <motion.div
      initial={{ opacity: 0, x: 60, scale: 0.95 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      exit={{ opacity: 0, x: 60, scale: 0.95 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-4 md:top-[88px] right-4 md:right-6 z-[9999] flex items-start gap-3 max-w-[360px] w-[calc(100vw-2rem)] md:w-[360px] rounded-[16px] px-4 py-3.5 shadow-[0_20px_60px_rgba(0,0,0,0.12)] border ${
        isSuccess
          ? "bg-white border-[#D98C9A]/20 text-[#2D2730]"
          : "bg-white border-red-200 text-[#2D2730]"
      }`}
    >
      <span className="shrink-0 mt-0.5">
        {isSuccess ? (
          <CheckCircle2Icon size={18} className="text-[#D98C9A]" />
        ) : (
          <XCircleIcon size={18} className="text-red-400" />
        )}
      </span>
      <div className="flex-1 min-w-0">
        <p className="font-sans font-semibold text-[13px] leading-tight">
          {isSuccess ? "Request Sent!" : "Submission Failed"}
        </p>
        <p className="font-sans text-[12px] text-[#6D6670] mt-0.5 leading-snug">
          {toast.message}
        </p>
      </div>
      <button
        onClick={onDismiss}
        aria-label="Dismiss notification"
        className="shrink-0 flex items-center justify-center w-5 h-5 rounded-full hover:bg-[#D98C9A]/10 text-[#918589] hover:text-[#D98C9A] transition-colors duration-200 mt-0.5 cursor-pointer"
      >
        <span className="text-[12px] leading-none">✕</span>
      </button>
    </motion.div>
  );
}

// ---------------------------------------------------------------------------
// Main Form Component
// ---------------------------------------------------------------------------

export function EventBookingForm() {
  const uid = useId();
  const id = (name: string) => `${uid}-${name}`;

  const [formData, setFormData] = useState<FormData>(EMPTY_FORM);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<Toast | null>(null);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function dismissToast() {
    setToast(null);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (isSubmitting) return;

    // Simple client-side required check
    const emptyFields = (Object.keys(formData) as (keyof FormData)[]).filter(
      (key) => !formData[key].trim()
    );
    if (emptyFields.length > 0) {
      setToast({ type: "error", message: "Please fill in all required fields." });
      return;
    }

    setIsSubmitting(true);
    setToast(null);

    try {
      const response = await fetch("/api/book-event", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setToast({
          type: "success",
          message: "Your booking inquiry has been sent! Riya will get back to you soon.",
        });
        setFormData(EMPTY_FORM);
      } else {
        setToast({
          type: "error",
          message: data.error ?? "Something went wrong. Please try again.",
        });
      }
    } catch {
      setToast({
        type: "error",
        message: "Network error. Please check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
      // Auto-dismiss toast after 7 seconds
      setTimeout(() => setToast(null), 7000);
    }
  }

  // Minimum bookable date = today
  const today = new Date().toISOString().split("T")[0];

  return (
    <>
      {/* Toast Portal */}
      <AnimatePresence>
        {toast && (
          <ToastNotification toast={toast} onDismiss={dismissToast} />
        )}
      </AnimatePresence>

      {/* Form Card */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="w-full max-w-[860px] mx-auto mb-10"
      >
        {/* Section eyebrow */}
        <div className="flex flex-col items-center mb-6">
          <span className="block font-sans text-[12px] font-semibold tracking-[0.35em] uppercase text-[#D98C9A] mb-3 text-center">
            ✦ EVENT BOOKING ✦
          </span>
          <h3
            className="font-[family-name:var(--font-serif)] font-semibold text-[#2D2730] text-center leading-tight mb-2"
            style={{ fontSize: "clamp(1.4rem, 2.5vw, 1.9rem)" }}
          >
            Book Riya for Your Event
          </h3>
          <p className="font-sans text-[13px] sm:text-[14px] text-[#6D6670] text-center max-w-[540px] leading-relaxed">
            Fill in the details below and Riya will personally get back to you to discuss your event.
          </p>
        </div>

        {/* Glassmorphism card */}
        <div
          className="relative rounded-[28px] border border-white/55 p-6 sm:p-8 shadow-[0_20px_60px_rgba(217,140,154,0.07),0_4px_20px_rgba(0,0,0,0.03)]"
          style={{
            background:
              "linear-gradient(145deg, rgba(255,255,255,0.72) 0%, rgba(253,248,249,0.65) 50%, rgba(247,246,251,0.60) 100%)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
          }}
        >
          {/* Subtle inner glow accents */}
          <div
            aria-hidden="true"
            className="absolute top-[-30px] right-[-20px] w-[200px] h-[200px] rounded-full pointer-events-none z-0"
            style={{
              background:
                "radial-gradient(circle, rgba(250,229,232,0.18) 0%, transparent 70%)",
            }}
          />
          <div
            aria-hidden="true"
            className="absolute bottom-[-20px] left-[-15px] w-[150px] h-[150px] rounded-full pointer-events-none z-0"
            style={{
              background:
                "radial-gradient(circle, rgba(228,238,252,0.15) 0%, transparent 70%)",
            }}
          />

          <form
            onSubmit={handleSubmit}
            noValidate
            className="relative z-10"
            aria-label="Event booking form"
          >
            {/* ── Two-column grid on sm+, single column on mobile ── */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">

              {/* Full Name */}
              <Field id={id("fullName")} label="Full Name" icon={UserIcon}>
                <input
                  id={id("fullName")}
                  name="fullName"
                  type="text"
                  autoComplete="name"
                  placeholder="Your full name"
                  required
                  disabled={isSubmitting}
                  value={formData.fullName}
                  onChange={handleChange}
                  className={inputClass}
                />
              </Field>

              {/* Email Address */}
              <Field id={id("email")} label="Email Address" icon={MailIcon}>
                <input
                  id={id("email")}
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  required
                  disabled={isSubmitting}
                  value={formData.email}
                  onChange={handleChange}
                  className={inputClass}
                />
              </Field>

              {/* Phone Number */}
              <Field id={id("phone")} label="Phone Number" icon={PhoneIcon}>
                <input
                  id={id("phone")}
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder="+64 22 000 0000"
                  required
                  disabled={isSubmitting}
                  value={formData.phone}
                  onChange={handleChange}
                  className={inputClass}
                />
              </Field>

              {/* Event / Venue Name */}
              <Field id={id("eventName")} label="Event / Venue Name" icon={Building2Icon}>
                <input
                  id={id("eventName")}
                  name="eventName"
                  type="text"
                  placeholder="e.g. The Grand Hall, SkyCity"
                  required
                  disabled={isSubmitting}
                  value={formData.eventName}
                  onChange={handleChange}
                  className={inputClass}
                />
              </Field>

              {/* Location */}
              <Field id={id("location")} label="Location" icon={MapPinIcon}>
                <input
                  id={id("location")}
                  name="location"
                  type="text"
                  autoComplete="address-level2"
                  placeholder="City, Country"
                  required
                  disabled={isSubmitting}
                  value={formData.location}
                  onChange={handleChange}
                  className={inputClass}
                />
              </Field>

              {/* Event Date — native calendar picker */}
              <Field id={id("eventDate")} label="Event Date" icon={CalendarIcon}>
                <input
                  id={id("eventDate")}
                  name="eventDate"
                  type="date"
                  required
                  disabled={isSubmitting}
                  min={today}
                  value={formData.eventDate}
                  onChange={handleChange}
                  className={`${inputClass} cursor-pointer`}
                  style={{
                    colorScheme: "light",
                  }}
                />
              </Field>

              {/* Purpose / Event Type */}
              <Field id={id("purposeType")} label="Purpose / Event Type" icon={Mic2Icon}>
                <select
                  id={id("purposeType")}
                  name="purposeType"
                  required
                  disabled={isSubmitting}
                  value={formData.purposeType}
                  onChange={handleChange}
                  className={`${inputClass} cursor-pointer appearance-none`}
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23D98C9A' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right 14px center",
                    paddingRight: "40px",
                  }}
                >
                  <option value="" disabled>
                    Select event type
                  </option>
                  <option value="Corporate Event">Corporate Event</option>
                  <option value="Wedding">Wedding</option>
                  <option value="Cultural Festival">Cultural Festival</option>
                  <option value="Award Function">Award Function</option>
                  <option value="Birthday Party">Birthday Party</option>
                  <option value="Music Event / Concert">Music Event / Concert</option>
                  <option value="Sports Tournament">Sports Tournament</option>
                  <option value="Community Event">Community Event</option>
                  <option value="Conference / Seminar">Conference / Seminar</option>
                  <option value="Product Launch">Product Launch</option>
                  <option value="Gala Dinner">Gala Dinner</option>
                  <option value="Other">Other</option>
                </select>
              </Field>

              {/* Expected Guests */}
              <Field id={id("expectedGuests")} label="Expected Guests" icon={UsersIcon}>
                <select
                  id={id("expectedGuests")}
                  name="expectedGuests"
                  required
                  disabled={isSubmitting}
                  value={formData.expectedGuests}
                  onChange={handleChange}
                  className={`${inputClass} cursor-pointer appearance-none`}
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23D98C9A' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right 14px center",
                    paddingRight: "40px",
                  }}
                >
                  <option value="" disabled>
                    Select guest count
                  </option>
                  <option value="Under 50">Under 50</option>
                  <option value="50 – 100">50 – 100</option>
                  <option value="100 – 250">100 – 250</option>
                  <option value="250 – 500">250 – 500</option>
                  <option value="500 – 1,000">500 – 1,000</option>
                  <option value="1,000+">1,000+</option>
                </select>
              </Field>

              {/* Message — full width */}
              <div className="sm:col-span-2">
                <Field id={id("message")} label="Message / Additional Requirements" icon={MessageSquareIcon}>
                  <textarea
                    id={id("message")}
                    name="message"
                    rows={4}
                    placeholder="Tell Riya more about your event — theme, schedule, special requirements, or anything else you'd like her to know…"
                    required
                    disabled={isSubmitting}
                    value={formData.message}
                    onChange={handleChange}
                    className={`${inputClass} resize-none leading-relaxed`}
                  />
                </Field>
              </div>
            </div>

            {/* Submit button */}
            <div className="mt-6 flex justify-center sm:justify-end">
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={isSubmitting ? {} : { scale: 1.02 }}
                whileTap={isSubmitting ? {} : { scale: 0.98 }}
                className="inline-flex items-center gap-2.5 rounded-full bg-[#d97a87] px-8 py-3.5 font-sans font-semibold text-[14px] text-white shadow-[0_16px_40px_rgba(217,122,135,0.28)] hover:bg-[#ca6e7b] hover:shadow-[0_20px_48px_rgba(217,122,135,0.34)] disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d97a87]/40 cursor-pointer"
                aria-label={isSubmitting ? "Sending booking request…" : "Send booking request"}
              >
                {isSubmitting ? (
                  <>
                    <Loader2Icon
                      size={15}
                      className="animate-spin"
                      aria-hidden="true"
                    />
                    <span>Sending…</span>
                  </>
                ) : (
                  <>
                    <SendIcon size={14} aria-hidden="true" />
                    <span>Send Booking Request</span>
                  </>
                )}
              </motion.button>
            </div>

            {/* Privacy note */}
            <p className="mt-4 text-center font-sans text-[11px] text-[#918589]/80 tracking-wide">
              Your information is kept private and will only be used to respond to your booking inquiry.
            </p>
          </form>
        </div>
      </motion.div>
    </>
  );
}
