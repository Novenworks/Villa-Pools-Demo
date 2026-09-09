import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import { media } from "@/lib/media";
import { site } from "@/lib/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Villa Pools" },
      {
        name: "description",
        content:
          "Villa Pools is a family-owned aquatic contractor in Villa Park, California, led by Lester B. Townsend.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteShell>
      <div className="relative overflow-hidden bg-water px-4 pb-16 pt-32 text-foam sm:px-6">
        <img
          src="/media/project-wide-geometric.webp"
          alt=""
          className="absolute inset-0 size-full object-cover object-[50%_70%] opacity-35"
        />
        <div className="absolute inset-0 bg-water/70" />
        <div className="relative mx-auto max-w-6xl">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-foam/60">
            About
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl md:text-6xl">
            Family-owned aquatic construction, run from Villa Park.
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-foam/80">
            Villa Pools, Inc. presents itself as a referral-based builder of
            residential and commercial pools, spas, and water features. The
            corporation was formed in 2015; the industry experience behind it
            is longer, and is documented on the company’s own about page.
          </p>
        </div>
      </div>

      <section className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2">
        <div>
          <img
            src={media.lester.src}
            alt={media.lester.alt}
            className="w-full rounded-2xl object-cover object-top"
          />
          <h2 className="mt-6 font-display text-3xl">Lester B. Townsend</h2>
          <p className="text-sm text-muted">CEO · Qualifying individual, CSLB #{site.license.number}</p>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            Licensed landscape architect and swimming-pool contractor with more
            than {site.experienceYears} years in the design and construction of
            swimming pools and water features, as stated on the first-party
            site.
          </p>
          <h3 className="mt-6 font-sans text-xs font-medium uppercase tracking-[0.16em] text-lagoon">
            Degrees & licenses (first-party)
          </h3>
          <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted">
            <li>B.S., Landscape Architecture — Cal Poly San Luis Obispo, 1976</li>
            <li>Licensed Landscape Architect #{site.rla.number} since {site.rla.since}</li>
            <li>
              California Community College Limited Teaching Credential in
              Ornamental Horticulture, 1980
            </li>
            <li>
              CSLB {site.license.classification} #{site.license.number} —{" "}
              {site.license.status.toLowerCase()} as of {site.license.verifiedOn}
            </li>
          </ul>
          <h3 className="mt-6 font-sans text-xs font-medium uppercase tracking-[0.16em] text-lagoon">
            Path (first-party)
          </h3>
          <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted">
            <li>CEO, Villa Pools Inc. — 2015 to present</li>
            <li>CEO, Arroyo Pools Inc. — 1998–2015</li>
            <li>Partner and RMO, Atlas Pools Inc. — 1983–1998</li>
            <li>
              Townsend and Townsend Landscape Architects, Santa Barbara and
              Orange, CA — 1980–1985
            </li>
          </ul>
        </div>
        <div>
          <img
            src={media.kathy.src}
            alt={media.kathy.alt}
            className="w-full rounded-2xl object-cover object-top"
          />
          <h2 className="mt-6 font-display text-3xl">Kathy Mendoza</h2>
          <p className="text-sm text-muted">Office Manager</p>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            The company site describes Kathy as having more than 12 years of
            industry experience, with a focus on government agencies, project
            requirements, and health and safety rules that affect permit
            processing.
          </p>
          <div className="mt-10 rounded-2xl bg-foam p-6">
            <h3 className="font-display text-2xl">How they describe the shop</h3>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted">
              <li>Family owned and operated.</li>
              <li>Referral-based — they put customer satisfaction at the center of that model.</li>
              <li>
                Transparent construction: no hidden fees or surprise bills, in
                their own wording.
              </li>
              <li>
                Licensed California C-53 contractor; they also state they are
                insured. License status is verified on CSLB. Insurance details
                are not published here.
              </li>
            </ul>
            <img
              src={media.cpsa.src}
              alt={media.cpsa.alt}
              className="mt-6 h-10 w-auto"
            />
          </div>
        </div>
      </section>

      <section className="bg-paper-2 px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-3xl">Service area</h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
            Orange, Riverside, San Bernardino, southern Los Angeles, and
            northern San Diego counties — from {site.addressLines[0]},{" "}
            {site.addressLines[1]}.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild>
              <Link to="/contact">Request a Consultation</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/work">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
