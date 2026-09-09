import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium tracking-wide transition-colors duration-(--motion-fast) ease-(--ease-smooth-out) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lagoon/70 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 min-h-11 px-5",
  {
    variants: {
      variant: {
        default: "bg-lagoon text-lagoon-fg hover:bg-lagoon/90",
        light:
          "bg-foam text-water hover:bg-paper",
        outline:
          "border border-line bg-transparent text-ink hover:bg-paper-2",
        ghost:
          "bg-transparent text-foam hover:bg-foam/10",
        ghostDark:
          "bg-transparent text-ink hover:bg-ink/5",
        outlineLight:
          "border border-foam/50 bg-transparent text-foam hover:bg-foam/10",
      },
      size: {
        default: "h-11 px-5",
        lg: "h-12 px-7 text-[0.9375rem]",
        sm: "h-10 px-4 text-xs",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
