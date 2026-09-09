import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { media } from "@/lib/media";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isHome = pathname === "/";
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const overHero = isHome && !scrolled && !open;
  const light = overHero;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-(--motion-fast) ease-(--ease-smooth-out)",
        light
          ? "bg-transparent text-foam [text-shadow:0_1px_8px_rgb(11_42_51_/_0.45)]"
          : "bg-paper/95 text-ink shadow-[0_1px_0_var(--color-line)] backdrop-blur-md",
      )}
    >
      <div className="mx-auto flex h-[4.5rem] max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link to="/" className="flex shrink-0 items-center" aria-label="Villa Pools home">
          <img
            src={light ? media.logoWhite.src : media.logo.src}
            alt=""
            width={180}
            height={22}
            className="h-7 w-auto sm:h-8"
          />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={cn(
                "text-[0.8125rem] font-medium tracking-[0.04em] transition-opacity hover:opacity-70",
                pathname === item.href ? "opacity-100" : "opacity-80",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${site.phoneTel}`}
            className="inline-flex min-h-11 items-center gap-2 text-sm font-medium"
          >
            <Phone className="size-4" aria-hidden />
            {site.phoneDisplay}
          </a>
          <Button asChild size="sm" variant={light ? "light" : "default"}>
            <Link to="/contact">Request a Consultation</Link>
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-full lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-line bg-paper text-ink lg:hidden"
        >
          <nav className="mx-auto flex max-w-6xl flex-col px-4 py-4" aria-label="Mobile">
            {site.nav.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="flex min-h-12 items-center border-b border-line text-base font-medium"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={`tel:${site.phoneTel}`}
              className="flex min-h-12 items-center gap-2 text-base font-medium"
            >
              <Phone className="size-4" aria-hidden />
              {site.phoneDisplay}
            </a>
            <Button asChild className="mt-3 w-full">
              <Link to="/contact">Request a Consultation</Link>
            </Button>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
