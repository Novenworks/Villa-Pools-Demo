import { Link } from "@tanstack/react-router";
import { media } from "@/lib/media";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-water text-foam">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-12">
        <div className="md:col-span-5">
          <img
            src={media.logoWhite.src}
            alt="Villa Pools"
            width={200}
            height={25}
            className="h-8 w-auto"
          />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-foam/75">
            Custom residential and commercial pools, spas, fountains, and water
            features. Designed and built from Villa Park across Southern
            California.
          </p>
        </div>
        <div className="md:col-span-3">
          <h2 className="font-sans text-xs font-medium uppercase tracking-[0.16em] text-foam/55">
            Visit
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-foam/85">
            {site.addressLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </p>
          <a
            href={`tel:${site.phoneTel}`}
            className="mt-3 inline-flex min-h-11 items-center text-sm font-medium"
          >
            {site.phoneDisplay}
          </a>
          <a
            href={`mailto:${site.email}`}
            className="block text-sm text-foam/85 hover:text-foam"
          >
            {site.email}
          </a>
        </div>
        <div className="md:col-span-2">
          <h2 className="font-sans text-xs font-medium uppercase tracking-[0.16em] text-foam/55">
            Explore
          </h2>
          <ul className="mt-3 space-y-2 text-sm">
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link to={item.href} className="hover:text-foam/70">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-2">
          <h2 className="font-sans text-xs font-medium uppercase tracking-[0.16em] text-foam/55">
            Licensing
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-foam/85">
            CSLB {site.license.classification} #{site.license.number}
            <br />
            {site.license.status}
            <br />
            RLA #{site.rla.number}
          </p>
          <a
            href={site.license.cslbUrl}
            className="mt-2 inline-block text-xs text-foam/60 underline-offset-4 hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            Verify on CSLB
          </a>
        </div>
      </div>
      <div className="border-t border-foam/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-6 text-xs leading-relaxed text-foam/50 sm:px-6 md:flex-row md:items-start md:justify-between">
          <p>
            © {new Date().getFullYear()} Villa Pools, Inc. Photography and
            marks remain property of their owners.
          </p>
          <p className="max-w-xl md:text-right">
            Independent speculative redesign concept by{" "}
            <a
              href="https://www.novenworks.com"
              className="underline-offset-4 hover:underline"
            >
              Novenworks
            </a>
            . Villa Pools, Inc. is not a Novenworks client and did not
            commission this site.
          </p>
        </div>
      </div>
    </footer>
  );
}
