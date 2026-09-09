import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import { residentialProjects } from "@/lib/media";
import { site } from "@/lib/site";

export const Route = createFileRoute("/residential")({
  head: () => ({
    meta: [
      { title: "Residential Pools — Villa Pools" },
      {
        name: "description",
        content:
          "Custom residential pools, spas, and remodels across Southern California from Villa Pools.",
      },
    ],
  }),
  component: ResidentialPage,
});

function ResidentialPage() {
  return (
    <SiteShell>
      <section className="relative min-h-[70svh] overflow-hidden bg-water">
        <img
          src="/media/project-architectural-dusk.webp"
          alt="Architectural dusk view of a custom residential pool"
          className="absolute inset-0 size-full object-cover object-[50%_60%]"
        />
        <div className="absolute inset-0 bg-linear-to-t from-water via-water/50 to-water/25" />
        <div className="relative z-10 mx-auto flex min-h-[70svh] max-w-6xl items-end px-4 pb-14 pt-32 sm:px-6">
          <div className="max-w-2xl text-foam">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-foam/70">
              Residential
            </p>
            <h1 className="mt-3 font-display text-4xl md:text-6xl">
              Custom pools that have to live in a real Southern California yard.
            </h1>
            <p className="mt-4 text-base leading-relaxed text-foam/85">
              Villa Pools builds from architects’ drawings and from a homeowner’s
              brief — geometric, freeform, infinity-edge, remodel, or a spa that
              has to feel like the room the family actually uses.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              t: "New custom pools",
              d: "Geometric and freeform shells, vanishing edges, integrated spas, and the soils and hillside engineering those lots require.",
            },
            {
              t: "Renovation & remodel",
              d: "Replaster, retile, reshape, add a spa, update lighting, or bring equipment to current automation.",
            },
            {
              t: "Finish & features",
              d: "Fire, waterfalls, deck jets, baja steps, beach entries, pebble and glass tile, salt systems, and covers.",
            },
          ].map((b) => (
            <article key={b.t} className="rounded-2xl bg-foam p-6">
              <h2 className="font-display text-2xl">{b.t}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">{b.d}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="spas" className="scroll-mt-24 bg-paper-2 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="font-display text-4xl">Spas, fountains, and water features</h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
            Raised spas with spillways, sheer descents, rock waterfalls, and fire
            bowls appear throughout the company’s published photography. They
            are treated as part of the pool, not an afterthought.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {residentialProjects.slice(0, 9).map((img) => (
              <img
                key={img.src}
                src={img.src}
                alt={img.alt}
                className="h-56 w-full rounded-xl object-cover"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-16 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p className="max-w-xl font-display text-3xl">
          Ready to talk through a backyard.
        </p>
        <div className="flex flex-wrap gap-3">
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
