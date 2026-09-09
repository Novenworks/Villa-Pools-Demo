import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { site } from "@/lib/site";

export function ConsultationForm({ tone = "light" }: { tone?: "light" | "dark" }) {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  const labelClass = tone === "dark" ? "text-foam/70" : undefined;
  const noteClass = tone === "dark" ? "text-foam/70" : "text-muted";

  if (sent) {
    return (
      <div
        className={
          tone === "dark"
            ? "rounded-xl border border-foam/15 bg-water-2 p-6 text-foam"
            : "rounded-xl border border-line bg-foam p-6"
        }
        role="status"
      >
        <p className="font-display text-2xl">This demo did not send a message.</p>
        <p className={`mt-3 text-sm leading-relaxed ${noteClass}`}>
          This is a speculative redesign concept. Nothing was delivered to Villa
          Pools. To reach the company, call{" "}
          <a className="underline underline-offset-4" href={`tel:${site.phoneTel}`}>
            {site.phoneDisplay}
          </a>{" "}
          or email{" "}
          <a className="underline underline-offset-4" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <p className={`text-sm ${noteClass}`}>
        This form is for the redesign demo only. It does not email Villa Pools.
        Use the phone or email below for a real inquiry.
      </p>
      <div className="grid gap-2">
        <Label htmlFor="name" className={labelClass}>
          Name
        </Label>
        <Input id="name" name="name" autoComplete="name" required />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="grid gap-2">
          <Label htmlFor="email" className={labelClass}>
            Email
          </Label>
          <Input id="email" name="email" type="email" autoComplete="email" required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="phone" className={labelClass}>
            Phone
          </Label>
          <Input id="phone" name="phone" type="tel" autoComplete="tel" />
        </div>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="message" className={labelClass}>
          Project notes
        </Label>
        <Textarea
          id="message"
          name="message"
          placeholder="New pool, remodel, spa, commercial — whatever you can share."
        />
      </div>
      <Button type="submit" size="lg" className="w-full sm:w-auto">
        Send demo inquiry
      </Button>
    </form>
  );
}
