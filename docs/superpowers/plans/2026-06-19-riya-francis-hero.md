# Riya Francis Hero Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a premium desktop-only editorial hero section for Riya Francis in a fresh Next.js app, using the supplied stage photograph as the dominant visual asset.

**Architecture:** Create a small App Router Next.js project with a single landing page, split into focused hero units: navigation, copy, visual composition, and scroll prompt. Use Tailwind CSS v4 for layout and tokens, shadcn-style UI primitives for the nav button and badge, and Motion for restrained entrance and ambient animation.

**Tech Stack:** Next.js 15, TypeScript, Tailwind CSS v4, shadcn/ui-style primitives, lucide-react, Motion for React, Vitest, React Testing Library

---

## File Structure

### Root and config files

- Create: `package.json`
- Create: `.gitignore`
- Create: `tsconfig.json`
- Create: `next-env.d.ts`
- Create: `next.config.ts`
- Create: `postcss.config.mjs`
- Create: `eslint.config.mjs`
- Create: `vitest.config.mts`

### App shell

- Create: `src/app/layout.tsx`
- Create: `src/app/page.tsx`
- Create: `src/app/globals.css`
- Create: `src/test/setup.ts`

### Shared UI primitives

- Create: `src/lib/utils.ts`
- Create: `src/components/ui/button.tsx`
- Create: `src/components/ui/badge.tsx`

### Hero components

- Create: `src/components/hero/site-nav.tsx`
- Create: `src/components/hero/hero-copy.tsx`
- Create: `src/components/hero/scroll-prompt.tsx`
- Create: `src/components/hero/hero-visual.tsx`
- Create: `src/components/hero/hero-section.tsx`

### Tests

- Create: `src/components/hero/__tests__/hero-copy.test.tsx`
- Create: `src/components/hero/__tests__/hero-visual.test.tsx`
- Create: `src/components/hero/__tests__/hero-section.test.tsx`

### Static assets

- Create: `public/images/riya-hero-original.png`
- Create: `public/images/riya-hero-cutout.png`
- Create: `public/florals/editorial-floral.svg`

## Assumptions

- The workspace is currently empty except for planning docs, so this plan bootstraps the app from scratch instead of modifying an existing site.
- The hero is desktop-first and desktop-only for this turn. Responsive refinement is out of scope except for avoiding obviously broken markup.
- The hero image must ultimately be a transparent-background cutout PNG. The original rectangular photo can be archived in `public/images/riya-hero-original.png`, but the shipped hero should use `public/images/riya-hero-cutout.png`.

### Task 1: Bootstrap The App And Toolchain

**Files:**
- Create: `.gitignore`
- Create: `package.json`
- Create: `tsconfig.json`
- Create: `next-env.d.ts`
- Create: `next.config.ts`
- Create: `postcss.config.mjs`
- Create: `eslint.config.mjs`
- Create: `vitest.config.mts`
- Create: `src/app/layout.tsx`
- Create: `src/app/page.tsx`
- Create: `src/app/globals.css`
- Create: `src/test/setup.ts`

- [ ] **Step 1: Initialize git and write the bootstrap files**

Run:

```powershell
git init
```

Create `.gitignore`:

```gitignore
node_modules
.next
coverage
dist
.DS_Store
*.log
```

Create `package.json`:

```json
{
  "name": "riya-francis-portfolio",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint . --max-warnings=0",
    "test": "vitest run",
    "test:watch": "vitest"
  },
  "dependencies": {
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "lucide-react": "^0.525.0",
    "motion": "^12.23.0",
    "next": "^15.3.4",
    "react": "^19.1.0",
    "react-dom": "^19.1.0",
    "tailwind-merge": "^3.3.1"
  },
  "devDependencies": {
    "@eslint/eslintrc": "^3.1.0",
    "@tailwindcss/postcss": "^4.1.10",
    "@testing-library/dom": "^10.4.0",
    "@testing-library/jest-dom": "^6.6.3",
    "@testing-library/react": "^16.0.1",
    "@types/node": "^22.15.30",
    "@types/react": "^19.1.8",
    "@types/react-dom": "^19.1.6",
    "@vitejs/plugin-react": "^4.4.1",
    "eslint": "^9.29.0",
    "eslint-config-next": "^15.3.4",
    "jsdom": "^26.1.0",
    "postcss": "^8.5.6",
    "tailwindcss": "^4.1.10",
    "typescript": "^5.8.3",
    "vite-tsconfig-paths": "^5.1.4",
    "vitest": "^3.2.4"
  }
}
```

- [ ] **Step 2: Install dependencies**

Run:

```powershell
npm install
```

Expected:

- `package-lock.json` is created
- `node_modules` exists
- No `npm ERR!` output

- [ ] **Step 3: Write the root config and app shell files**

Create `tsconfig.json`:

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": false,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

Create `next-env.d.ts`:

```ts
/// <reference types="next" />
/// <reference types="next/image-types/global" />

// This file is automatically generated by Next.js.
```

Create `next.config.ts`:

```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
};

export default nextConfig;
```

Create `postcss.config.mjs`:

```js
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
```

Create `eslint.config.mjs`:

```js
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [...compat.extends("next/core-web-vitals", "next/typescript")];
```

Create `vitest.config.mts`:

```ts
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./src/test/setup.ts"],
  },
});
```

Create `src/test/setup.ts`:

```ts
import "@testing-library/jest-dom/vitest";
```

Create `src/app/layout.tsx`:

```tsx
import type { Metadata } from "next";
import { Allura, Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});

const allura = Allura({
  subsets: ["latin"],
  variable: "--font-signature",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Riya Francis",
  description: "Premium portfolio hero for event host, anchor, and MC Riya Francis.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} ${playfair.variable} ${allura.variable} bg-[var(--background)] font-[family-name:var(--font-sans)] text-[var(--foreground)] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
```

Create `src/app/globals.css`:

```css
@import "tailwindcss";

:root {
  --background: #fff9f8;
  --foreground: #1e1e1e;
}

html {
  scroll-behavior: smooth;
}

body {
  min-height: 100vh;
}
```

Create `src/app/page.tsx`:

```tsx
export default function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[var(--background)]">
      <h1 className="font-[family-name:var(--font-serif)] text-4xl text-[var(--foreground)]">
        Riya Francis
      </h1>
    </main>
  );
}
```

- [ ] **Step 4: Run the bootstrap verification**

Run:

```powershell
npm run lint
npx vitest run --passWithNoTests
```

Expected:

- `npm run lint` completes with no errors
- `npx vitest run --passWithNoTests` reports `No test files found` without crashing

- [ ] **Step 5: Commit**

Run:

```powershell
git add .gitignore package.json package-lock.json tsconfig.json next-env.d.ts next.config.ts postcss.config.mjs eslint.config.mjs vitest.config.mts src
git commit -m "chore: bootstrap next hero workspace"
```

### Task 2: Prepare The Hero Assets

**Files:**
- Create: `public/images/riya-hero-original.png`
- Create: `public/images/riya-hero-cutout.png`
- Create: `public/florals/editorial-floral.svg`

- [ ] **Step 1: Copy the supplied source image into the app**

Run:

```powershell
New-Item -ItemType Directory -Force public\images
Copy-Item 'C:\Users\elvin\AppData\Local\Temp\codex-clipboard-2fcf363c-496f-4cee-9433-eb478b8b1140.png' 'public\images\riya-hero-original.png'
```

Expected:

- `public/images/riya-hero-original.png` exists

- [ ] **Step 2: Create the transparent hero cutout asset**

Use the image editing tool on `public/images/riya-hero-original.png` with this exact prompt:

```text
Remove the background from this stage photograph of Riya Francis while preserving her full teal outfit, microphone, smile, handwritten note cards, watch, and natural hair edges. Keep generous transparent padding around the silhouette and export as a clean transparent PNG for a premium editorial website hero.
```

Save the result as:

```text
public/images/riya-hero-cutout.png
```

Acceptance criteria:

- Transparent background around the silhouette
- Microphone visible
- Smile visible
- Nearly full-body silhouette preserved
- No harsh clipping around the hair or sleeves

- [ ] **Step 3: Add the decorative floral line art**

Run:

```powershell
New-Item -ItemType Directory -Force public\florals
```

Create `public/florals/editorial-floral.svg`:

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 300" fill="none">
  <g stroke="#C58A92" stroke-opacity="0.22" stroke-linecap="round" stroke-linejoin="round">
    <path d="M110 255C130 213 160 184 202 162C240 142 280 136 320 142" stroke-width="1.2"/>
    <path d="M328 142C342 118 365 100 398 90C430 80 458 83 484 96" stroke-width="1.2"/>
    <path d="M206 161C196 132 198 108 214 88C228 70 248 58 274 52" stroke-width="1"/>
    <path d="M274 52C278 78 270 100 250 118C236 130 218 138 196 142" stroke-width="1"/>
    <path d="M396 90C388 68 391 48 405 34C417 22 433 16 454 16" stroke-width="1"/>
    <path d="M454 16C458 36 452 54 438 68C428 78 414 86 398 90" stroke-width="1"/>
    <path d="M150 228C146 212 150 198 162 186C173 175 188 170 206 171" stroke-width="1"/>
    <path d="M248 219C244 203 248 189 260 177C271 166 286 161 304 162" stroke-width="1"/>
    <path d="M350 213C346 197 350 183 362 171C373 160 388 155 406 156" stroke-width="1"/>
  </g>
</svg>
```

- [ ] **Step 4: Verify the asset set**

Run:

```powershell
Get-ChildItem public\images
Get-ChildItem public\florals
```

Expected:

- `riya-hero-original.png` exists
- `riya-hero-cutout.png` exists
- `editorial-floral.svg` exists

- [ ] **Step 5: Commit**

Run:

```powershell
git add public
git commit -m "chore: add hero image and editorial assets"
```

### Task 3: Implement The Navigation And Copy With TDD

**Files:**
- Create: `src/lib/utils.ts`
- Create: `src/components/ui/button.tsx`
- Create: `src/components/hero/site-nav.tsx`
- Create: `src/components/hero/hero-copy.tsx`
- Create: `src/components/hero/__tests__/hero-copy.test.tsx`

- [ ] **Step 1: Write the failing test for the approved copy hierarchy**

Create `src/components/hero/__tests__/hero-copy.test.tsx`:

```tsx
import { render, screen } from "@testing-library/react";
import type { AnchorHTMLAttributes } from "react";
import { vi } from "vitest";
import { HeroCopy } from "../hero-copy";
import { SiteNav } from "../site-nav";

vi.mock("next/link", () => ({
  default: ({
    children,
    href,
    ...props
  }: AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

describe("HeroCopy", () => {
  it("renders the approved editorial copy hierarchy without hero CTA buttons", () => {
    render(<HeroCopy />);

    expect(screen.getByText("Hello, I'm")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 1, name: "Riya Francis" }),
    ).toBeInTheDocument();
    expect(
      screen.getByText("You plan the celebration. I'll take care of the stage."),
    ).toBeInTheDocument();
    expect(screen.getByText(/ANCHOR.*MC.*EVENT HOST/)).toBeInTheDocument();
    expect(
      screen.queryByRole("button", { name: /book an event/i }),
    ).not.toBeInTheDocument();
  });
});

describe("SiteNav", () => {
  it("renders the signature brand, nav links, and booking button", () => {
    render(<SiteNav />);

    expect(screen.getByText("Riya Francis")).toBeInTheDocument();
    expect(screen.getByText(/ANCHOR.*MC.*EVENT HOST/)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Home" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "About" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Events" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Gallery" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Testimonials" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Contact" })).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /book an event/i }),
    ).toBeInTheDocument();
  });
});
```

- [ ] **Step 2: Run the test to verify it fails**

Run:

```powershell
npx vitest run src/components/hero/__tests__/hero-copy.test.tsx
```

Expected:

- FAIL with a module resolution error for `../hero-copy` and `../site-nav`

- [ ] **Step 3: Write the minimal implementation to satisfy the tests**

Create `src/lib/utils.ts`:

```ts
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

Create `src/components/ui/button.tsx`:

```tsx
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d97a87]/40 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        rose: "bg-[#d97a87] px-6 py-3 text-white shadow-[0_18px_50px_rgba(217,122,135,0.24)] hover:bg-[#cc6e7b]",
      },
    },
    defaultVariants: {
      variant: "rose",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant }), className)}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";

export { Button, buttonVariants };
```

Create `src/components/hero/site-nav.tsx`:

```tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#events", label: "Events" },
  { href: "#gallery", label: "Gallery" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

export function SiteNav() {
  return (
    <header className="relative z-30">
      <div className="mx-auto flex max-w-[1400px] items-start justify-between gap-8 px-8 pt-8">
        <div className="min-w-[220px]">
          <p className="font-[family-name:var(--font-signature)] text-[2.3rem] leading-none text-[#b46a75]">
            Riya Francis
          </p>
          <p className="mt-2 text-[0.68rem] font-semibold uppercase tracking-[0.42em] text-[#6e6164]">
            ANCHOR {"\u2022"} MC {"\u2022"} EVENT HOST
          </p>
        </div>

        <nav className="flex flex-1 items-center justify-center gap-8 pt-3 text-[0.95rem] text-[#332f30]">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition-colors hover:text-[#d97a87]">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="min-w-[220px] text-right">
          <Button className="mt-1">Book An Event</Button>
        </div>
      </div>
    </header>
  );
}
```

Create `src/components/hero/hero-copy.tsx`:

```tsx
"use client";

import { motion } from "motion/react";

export function HeroCopy() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="max-w-[530px]"
    >
      <p className="text-[1.05rem] font-medium text-[#c58a92]">Hello, I'm</p>

      <h1 className="mt-5 font-[family-name:var(--font-serif)] text-[72px] leading-[0.95] font-semibold tracking-[-0.04em] text-[#1d1d1d]">
        Riya Francis
      </h1>

      <p className="mt-8 font-[family-name:var(--font-serif)] text-[2rem] leading-[1.24] text-[#1e1e1e]">
        You plan the celebration. I'll take care of the stage.
      </p>

      <p className="mt-8 text-[0.78rem] font-semibold uppercase tracking-[0.4em] text-[#62585a]">
        ANCHOR {"\u2022"} MC {"\u2022"} EVENT HOST
      </p>
    </motion.div>
  );
}
```

- [ ] **Step 4: Run the test to verify it passes**

Run:

```powershell
npx vitest run src/components/hero/__tests__/hero-copy.test.tsx
```

Expected:

- PASS

- [ ] **Step 5: Commit**

Run:

```powershell
git add src/lib/utils.ts src/components/ui/button.tsx src/components/hero/site-nav.tsx src/components/hero/hero-copy.tsx src/components/hero/__tests__/hero-copy.test.tsx
git commit -m "feat: add hero navigation and copy"
```

### Task 4: Implement The Visual Composition And Background System With TDD

**Files:**
- Create: `src/components/ui/badge.tsx`
- Create: `src/components/hero/scroll-prompt.tsx`
- Create: `src/components/hero/hero-visual.tsx`
- Create: `src/components/hero/__tests__/hero-visual.test.tsx`
- Modify: `src/app/globals.css`

- [ ] **Step 1: Write the failing test for the visual area**

Create `src/components/hero/__tests__/hero-visual.test.tsx`:

```tsx
import { render, screen } from "@testing-library/react";
import type { ImgHTMLAttributes } from "react";
import { vi } from "vitest";
import { HeroVisual } from "../hero-visual";

vi.mock("next/image", () => ({
  default: (props: ImgHTMLAttributes<HTMLImageElement>) => <img {...props} />,
}));

describe("HeroVisual", () => {
  it("renders the portrait, hosted-events badge, and editorial scroll prompt", () => {
    render(<HeroVisual />);

    expect(
      screen.getByAltText("Riya Francis holding a microphone on stage"),
    ).toBeInTheDocument();
    expect(screen.getByText("200+ Events Hosted")).toBeInTheDocument();
    expect(screen.getByText("Discover Her Journey")).toBeInTheDocument();
  });
});
```

- [ ] **Step 2: Run the test to verify it fails**

Run:

```powershell
npx vitest run src/components/hero/__tests__/hero-visual.test.tsx
```

Expected:

- FAIL with a module resolution error for `../hero-visual`

- [ ] **Step 3: Implement the visual components and final background styles**

Create `src/components/ui/badge.tsx`:

```tsx
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-4 py-2 text-[0.74rem] font-medium tracking-[0.16em]",
  {
    variants: {
      variant: {
        editorial:
          "border-white/60 bg-white/70 text-[#5d5053] shadow-[0_14px_40px_rgba(121,93,97,0.12)] backdrop-blur-md",
      },
    },
    defaultVariants: {
      variant: "editorial",
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}
```

Create `src/components/hero/scroll-prompt.tsx`:

```tsx
"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface ScrollPromptProps {
  className?: string;
}

export function ScrollPrompt({ className }: ScrollPromptProps) {
  return (
    <div className={cn("flex flex-col items-start gap-4", className)}>
      <span className="text-[0.72rem] font-semibold uppercase tracking-[0.36em] text-[#7b6d71]">
        Discover Her Journey
      </span>

      <motion.span
        aria-hidden="true"
        className="block h-16 w-px origin-top bg-[linear-gradient(180deg,rgba(197,138,146,0.2)_0%,rgba(197,138,146,0.95)_100%)]"
        animate={{ scaleY: [0.78, 1, 0.78], opacity: [0.55, 1, 0.55] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
```

Create `src/components/hero/hero-visual.tsx`:

```tsx
"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { ScrollPrompt } from "./scroll-prompt";

export function HeroVisual() {
  return (
    <div className="relative flex h-[85vh] w-full items-end justify-center">
      <motion.div
        aria-hidden="true"
        className="absolute bottom-[13%] right-[8%] h-[560px] w-[540px] rounded-[44%_56%_58%_42%/46%_42%_58%_54%] bg-[#f7e4e5]"
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 0.82, scale: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />

      <motion.div
        aria-hidden="true"
        className="absolute bottom-[18%] right-[14%] h-[440px] w-[440px] rounded-full bg-[rgba(255,210,215,0.3)] blur-[120px]"
        animate={{ x: [0, 12, 0], y: [0, -10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[2%] right-[8%] h-[240px] w-[420px] bg-[url('/florals/editorial-floral.svg')] bg-contain bg-no-repeat opacity-[0.07]"
      />

      <motion.div
        className="absolute left-[8%] top-[12%] z-20"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Badge>200+ Events Hosted</Badge>
      </motion.div>

      <motion.div
        className="relative z-10 h-full w-full max-w-[720px]"
        initial={{ opacity: 0, y: 34 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      >
        <Image
          src="/images/riya-hero-cutout.png"
          alt="Riya Francis holding a microphone on stage"
          fill
          priority
          className="object-contain object-bottom drop-shadow-[0_30px_65px_rgba(120,89,94,0.18)]"
        />
      </motion.div>

      <ScrollPrompt className="absolute bottom-0 left-0 z-20" />
    </div>
  );
}
```

Replace `src/app/globals.css` with:

```css
@import "tailwindcss";

:root {
  --background: #fff9f8;
  --foreground: #1e1e1e;
  --rose-primary: #d97a87;
  --rose-secondary: #c58a92;
  --blush-soft: #f7e4e5;
}

html {
  scroll-behavior: smooth;
}

body {
  min-height: 100vh;
  background:
    radial-gradient(circle at top left, rgba(255, 255, 255, 0.9), transparent 32%),
    linear-gradient(135deg, #fff9f8 0%, #fef4f3 100%);
  color: var(--foreground);
}

.editorial-hero-bg {
  position: relative;
  overflow: hidden;
}

.editorial-hero-bg::before {
  content: "";
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 18% 22%, rgba(250, 218, 223, 0.26), transparent 28%),
    radial-gradient(circle at 82% 18%, rgba(255, 227, 229, 0.22), transparent 24%),
    radial-gradient(circle at 62% 70%, rgba(255, 244, 246, 0.32), transparent 26%);
  opacity: 0.65;
  pointer-events: none;
}

.editorial-hero-bg::after {
  content: "";
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 16% 38%, rgba(197, 138, 146, 0.06), transparent 16%),
    radial-gradient(circle at 78% 26%, rgba(197, 138, 146, 0.05), transparent 18%),
    radial-gradient(circle at 62% 84%, rgba(197, 138, 146, 0.04), transparent 14%);
  mix-blend-mode: multiply;
  pointer-events: none;
}
```

- [ ] **Step 4: Run the test to verify it passes**

Run:

```powershell
npx vitest run src/components/hero/__tests__/hero-visual.test.tsx
```

Expected:

- PASS

- [ ] **Step 5: Commit**

Run:

```powershell
git add src/components/ui/badge.tsx src/components/hero/scroll-prompt.tsx src/components/hero/hero-visual.tsx src/components/hero/__tests__/hero-visual.test.tsx src/app/globals.css
git commit -m "feat: add editorial hero visual composition"
```

### Task 5: Assemble The Full Hero Section And Page With TDD

**Files:**
- Create: `src/components/hero/hero-section.tsx`
- Create: `src/components/hero/__tests__/hero-section.test.tsx`
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Write the failing integration test**

Create `src/components/hero/__tests__/hero-section.test.tsx`:

```tsx
import { render, screen } from "@testing-library/react";
import type { AnchorHTMLAttributes, ImgHTMLAttributes } from "react";
import { vi } from "vitest";
import HomePage from "@/app/page";

vi.mock("next/image", () => ({
  default: (props: ImgHTMLAttributes<HTMLImageElement>) => <img {...props} />,
}));

vi.mock("next/link", () => ({
  default: ({
    children,
    href,
    ...props
  }: AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

describe("HomePage hero", () => {
  it("renders the complete approved desktop hero", () => {
    render(<HomePage />);

    expect(
      screen.getByRole("heading", { level: 1, name: "Riya Francis" }),
    ).toBeInTheDocument();
    expect(screen.getByText("Discover Her Journey")).toBeInTheDocument();
    expect(screen.getByText("200+ Events Hosted")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /book an event/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByText("You plan the celebration. I'll take care of the stage."),
    ).toBeInTheDocument();
  });
});
```

- [ ] **Step 2: Run the test to verify it fails**

Run:

```powershell
npx vitest run src/components/hero/__tests__/hero-section.test.tsx
```

Expected:

- FAIL because `HomePage` still renders the starter page instead of the hero

- [ ] **Step 3: Implement the hero section and wire it into the page**

Create `src/components/hero/hero-section.tsx`:

```tsx
import { HeroCopy } from "./hero-copy";
import { HeroVisual } from "./hero-visual";
import { SiteNav } from "./site-nav";

export function HeroSection() {
  return (
    <section
      id="home"
      className="editorial-hero-bg relative isolate min-h-screen overflow-hidden"
    >
      <SiteNav />

      <div className="mx-auto flex min-h-screen max-w-[1400px] flex-col px-8 pb-10 pt-2">
        <div className="grid flex-1 grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] gap-8">
          <div className="flex items-start pt-24">
            <HeroCopy />
          </div>

          <div className="flex items-end justify-end pb-6">
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
```

Replace `src/app/page.tsx` with:

```tsx
import { HeroSection } from "@/components/hero/hero-section";

export default function HomePage() {
  return <HeroSection />;
}
```

- [ ] **Step 4: Run the integration test to verify it passes**

Run:

```powershell
npx vitest run src/components/hero/__tests__/hero-section.test.tsx
```

Expected:

- PASS

- [ ] **Step 5: Run the full verification suite**

Run:

```powershell
npx vitest run
npm run lint
npm run build
```

Expected:

- All Vitest files pass
- ESLint passes
- Next.js production build succeeds

- [ ] **Step 6: Commit**

Run:

```powershell
git add src/components/hero/hero-section.tsx src/components/hero/__tests__/hero-section.test.tsx src/app/page.tsx
git commit -m "feat: assemble premium desktop hero"
```

### Task 6: Run Desktop Visual QA Against The Spec

**Files:**
- Verify only unless fixes are needed: `src/components/hero/hero-section.tsx`
- Verify only unless fixes are needed: `src/components/hero/hero-visual.tsx`
- Verify only unless fixes are needed: `src/components/hero/hero-copy.tsx`
- Verify only unless fixes are needed: `src/app/globals.css`

- [ ] **Step 1: Start the local dev server**

Run:

```powershell
npm run dev
```

Expected:

- Next starts successfully
- Local app is available at `http://localhost:3000`

- [ ] **Step 2: Open the page in the in-app browser and compare it to the approved spec**

Manual QA checklist:

- The left text block sits slightly higher than center
- The right image block sits slightly lower than center
- The image reads larger than the text column
- The microphone, smile, and nearly full-body silhouette are visible
- The photo does not look boxed into a rectangle
- The background feels blush, airy, and editorial rather than app-like
- The scroll prompt reads `Discover Her Journey`
- The only button in the hero is the nav-level `Book An Event`

- [ ] **Step 3: If the QA checklist passes cleanly, re-run final verification**

Run:

```powershell
npx vitest run
npm run lint
npm run build
```

Expected:

- Final verification stays green after visual QA

- [ ] **Step 4: Commit only if you made QA-driven code adjustments**

Run:

```powershell
git status --short
```

If there are hero polish changes to commit:

```powershell
git add src/components/hero src/app/globals.css
git commit -m "style: polish editorial hero layout"
```
