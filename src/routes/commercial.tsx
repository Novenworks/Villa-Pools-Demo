import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import { commercialProjects } from "@/lib/media";
import { site } from "@/lib/site";

export const Route = createFileRoute("/commercial")({
  head: () => ({
    meta: [
      { title: "Commercial Pools — Villa Pools" },
      {
        name: "description",
        content:
          "Commercial pool construction for communities, hotels, gyms, and swim schools in Southern California.",
      },
    ],
  }),
  component: CommercialPage,
});

function CommercialPage() {
  return (
    <SiteShell>
      <section className="relative min-h-[70svh] overflow-hidden bg-water">
        <img
          src="/media/commercial-community.webp"
          alt="Large community swimming pool"
          className="absolute inset-0 size-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-linear-to-t from-water via-water/55 to-water/20" />
        <div className="relative z-10 mx-auto flex min-h-[70svh] max-w-6xl items-end px-4 pb-14 pt-32 sm:px-6">
          <div className="max-w-2xl text-foam">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-foam/70">
              Commercial
            </p>
            <h1 className="mt-3 font-display text-4xl md:text-6xl">
              Community, hotel, and facility pools that have to last.
            </h1>
            <p className="mt-4 text-base leading-relaxed text-foam/85">
              Villa Pools lists commercial work across indoor and outdoor
              community pools, corporate facilities, gyms, swim schools, hotels,
              spas, fountains, and water features — with permit, inspection, and
              contractor coordination on the same ticket.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              t: "Community construction",
              d: "Pools, spas, fountains, and water features for developments of different sizes.",
            },
            {
              t: "Business & recreation",
              d: "Indoor and outdoor pools for gyms, swim schools, and similar operators.",
            },
            {
              t: "Hospitality",
              d: "Hotel indoor and outdoor pools, spas, and fountains.",
            },
          ].map((b) => (
            <article key={b.t} className="rounded-2xl bg-foam p-6">
              <h2 className="font-display text-2xl">{b.t}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">{b.d}</p>
            </article>
          ))}
        </div>
        <h2 className="mt-16 font-display text-3xl">Scope from start to finish</h2>
        <ul className="mt-6 grid gap-2 text-sm text-muted sm:grid-cols-2 lg:grid-cols-3">
          {[
            "Plan creation",
            "Structural engineering",
            "Permit submittals and approvals",
            "Excavation",
            "Structural steel",
            "Plumbing and electrical",
            "Shotcrete",
            "Masonry and tile",
            "Interior finish and plaster",
            "Equipment",
            "Automated chemical controllers",
            "Smart technology",
            "Inspector relations",
            "Contractor management",
            "Remodels",
          ].map((item) => (
            <li key={item} className="rounded-lg bg-paper-2 px-4 py-3">
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {commercialProjects.map((img) => (
            <img
              key={img.src}
              src={img.src}
              alt={img.alt}
              className="h-64 w-full rounded-xl object-cover"
            />
          ))}
        </div>
        <div className="mt-12 flex flex-wrap gap-3">
          <Button asChild>
            <Link to="/contact">Request a Consultation</Link>
          </Button>
          <Button asChild variant="outline">
            <a href={`tel:${site.phoneTel}`}>{site.phoneDisplay}</a>
          </Button>
        </div>
      </section>
    </SiteShell>
  );
}
