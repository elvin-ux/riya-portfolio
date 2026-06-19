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

export const metadata: Metadata = {
  title: "Riya Francis",
  description:
    "Premium portfolio hero for event host, anchor, and MC Riya Francis.",
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
