import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-4 py-2 text-[0.74rem] font-semibold tracking-[0.12em]",
  {
    variants: {
      variant: {
        editorial:
          "border-white/70 bg-white/70 text-[#7b6368] shadow-[0_14px_38px_rgba(141,104,110,0.12)] backdrop-blur-md",
      },
    },
    defaultVariants: {
      variant: "editorial",
    },
  },
);

type BadgeProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof badgeVariants>;

export function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}
