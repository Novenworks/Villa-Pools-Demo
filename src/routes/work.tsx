import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/media";
import { site } from "@/lib/site";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work — Villa Pools" },
      {
        name: "description",
        content:
          "Completed residential and commercial pool work from Villa Pools, as published on the company website.",
      },
    ],
  }),
  component: WorkPage,
});

function WorkPage() {
  return (
    <SiteShell>
      <div className="bg-water px-4 pb-16 pt-32 text-foam sm:px-6">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-foam/60">
            Gallery
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl md:text-6xl">
            Completed water, photographed on the company site.
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-foam/75">
            Every image here was published by Villa Pools. Nothing is stock, and
            nothing is invented as a named project.
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {projects.map((img) => (
            <figure key={img.src} className="mb-4 break-inside-avoid">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full rounded-xl object-cover"
              />
              <figcaption className="mt-2 text-xs leading-relaxed text-muted">
                {img.alt}
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-12 flex flex-wrap gap-3">
          <Button asChild>
            <Link to="/contact">Request a Consultation</Link>
          </Button>
          <Button asChild variant="outline">
            <a href={`tel:${site.phoneTel}`}>Call {site.phoneDisplay}</a>
          </Button>
        </div>
      </div>
    </SiteShell>
  );
}
