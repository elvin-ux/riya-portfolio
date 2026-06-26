import type { Metadata } from "next";
import { Allura, Cormorant_Garamond, Manrope, Playfair_Display } from "next/font/google";

import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-cormorant",
});

const allura = Allura({
  subsets: ["latin"],
  variable: "--font-signature",
  weight: "400",
});

const siteUrl = "https://riyafrancis.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: "Riya Francis | Event Host, MC & Radio Jockey",
  description:
    "Professional event host, MC, radio jockey, and UGC creator based in New Zealand. View Riya Francis' portfolio, experience, and book for your next event.",

  keywords: [
    "Riya Francis",
    "event host New Zealand",
    "MC New Zealand",
    "radio jockey NZ",
    "anchor NZ",
    "event host Auckland",
    "UGC creator New Zealand",
    "Indian event host NZ",
    "emcee Auckland",
    "corporate event host NZ",
  ],

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: siteUrl,
  },

  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png", type: "image/png" },
    ],
    shortcut: "/favicon.png",
  },

  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Riya Francis",
    title: "Riya Francis | Event Host, MC & Radio Jockey",
    description:
      "Professional event host, MC, radio jockey, and UGC creator based in New Zealand. View Riya Francis' portfolio, experience, and book for your next event.",
    images: [
      {
        url: "/og-image-v2.jpg",
        width: 1200,
        height: 630,
        alt: "Riya Francis – Event Host, MC & Radio Jockey based in New Zealand",
        type: "image/png",
      },
    ],
    locale: "en_NZ",
  },

  twitter: {
    card: "summary_large_image",
    site: "@riyafrancis",
    creator: "@riyafrancis",
    title: "Riya Francis | Event Host, MC & Radio Jockey",
    description:
      "Professional event host, MC, radio jockey, and UGC creator based in New Zealand. View Riya Francis' portfolio, experience, and book for your next event.",
    images: ["/og-image-v2.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} ${playfair.variable} ${allura.variable} ${cormorant.variable} bg-[var(--background)] font-[family-name:var(--font-sans)] text-[var(--foreground)] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
