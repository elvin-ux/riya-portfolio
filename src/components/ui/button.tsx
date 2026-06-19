import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-full whitespace-nowrap text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d97a87]/40 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        rose: "bg-[#d97a87] px-6 py-3 text-white shadow-[0_16px_40px_rgba(217,122,135,0.28)] hover:bg-[#ca6e7b] hover:shadow-[0_20px_48px_rgba(217,122,135,0.34)]",
      },
    },
    defaultVariants: {
      variant: "rose",
    },
  },
);

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

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
