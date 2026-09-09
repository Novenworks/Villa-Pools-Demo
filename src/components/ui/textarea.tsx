import * as React from "react";
import { cn } from "@/lib/utils";

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-32 w-full rounded-lg border border-line bg-foam px-3.5 py-3 text-sm text-ink transition-colors placeholder:text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lagoon/60 disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      ref={ref}
      suppressHydrationWarning
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
