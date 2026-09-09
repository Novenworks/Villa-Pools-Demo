import * as React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-11 w-full rounded-lg border border-line bg-foam px-3.5 text-sm text-ink shadow-none transition-colors placeholder:text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lagoon/60 disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        ref={ref}
        suppressHydrationWarning
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
