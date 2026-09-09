import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { ConsultationForm } from "@/components/consultation-form";
import { SiteShell } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import { homeGallery, media, projects } from "@/lib/media";
import { site } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Villa Pools — Custom Pools for Southern California",
      },
      { name: "description", content: site.description },
    ],
  }),
  component: Home,
});

function Home() {
  const construction = projects.find((p) => p.category === "construction");

  return (
    <SiteShell>
      <section className="relative flex min-h-[100svh] items-end overflow-hidden bg-water">
        <img
          src={media.hero.src}
          alt={media.hero.alt}
          className="absolute inset-0 size-full object-cover object-[50%_72%]"
        />
        <div className="absolute inset-0 bg-linear-to-t from-water via-water/60 to-water/40" />
        <div className="absolute inset-x-0 top-0 h-40 bg-linear-to-b from-water/75 to-transparent" />
        <div className="relative z-10 mx-auto w-full max-w-6xl px-4 pb-16 pt-32 sm:px-6 sm:pb-20">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-foam/75">
            Villa Park · Southern California
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-[2.6rem] leading-[1.08] text-foam sm:text-5xl md:text-6xl">
            {site.tagline}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-foam/85 sm:text-lg">
            {site.description}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button asChild size="lg" variant="light">
              <Link to="/contact">Request a Consultation</Link>
            </Button>
            <Button asChild size="lg" variant="outlineLight">
              <Link to="/work">View Our Work</Link>
            </Button>
            <a
              href={`tel:${site.phoneTel}`}
              className="inline-flex min-h-12 items-center text-sm font-medium text-foam"
            >
              Call {site.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-foam">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-8 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
          {[
            {
              k: `CSLB ${site.license.classification} #${site.license.number}`,
              v: `${site.license.status} · verified ${site.license.verifiedOn}`,
            },
            {
              k: `RLA #${site.rla.number}`,
              v: `Licensed landscape architect since ${site.rla.since}`,
            },
            {
              k: `${site.experienceYears} years`,
              v: "Industry experience in design and aquatic construction",
            },
            {
              k: "Southern California",
              v: site.counties.slice(0, 3).join(" · "),
            },
          ].map((item) => (
            <div key={item.k}>
              <p className="font-display text-xl text-water">{item.k}</p>
              <p className="mt-1 text-sm leading-relaxed text-muted">{item.v}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-lagoon">
              What we build
            </p>
            <h2 className="mt-3 font-display text-4xl text-ink md:text-5xl">
              Pools for homes, communities, and the spaces between.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-muted">
            Work is grouped the way a buyer decides: a backyard, a commercial
            facility, or a spa and water feature that has to feel finished.
          </p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {[
            {
              href: "/residential",
              title: "Residential pools",
              copy: "Geometric, freeform, and infinity-edge pools — with spas, fire, tile, and the engineering hillside lots actually require.",
              img: "/media/project-geometric-spa.webp",
              alt: "Geometric residential pool with raised spa",
            },
            {
              href: "/commercial",
              title: "Commercial construction",
              copy: "Community, hotel, gym, and swim-school pools — indoor and outdoor — with the documentation and inspections those jobs demand.",
              img: "/media/commercial-community.webp",
              alt: "Large community swimming pool",
            },
            {
              href: "/residential",
              title: "Spas, fountains & water features",
              copy: "Raised spas, sheer descents, waterfalls, and fire features that make the water the center of the yard.",
              img: "/media/project-fire-bowls-spa.webp",
              alt: "Spa with fire bowls and waterfalls",
            },
          ].map((card) => (
            <Link
              key={card.title}
              to={card.href}
              className="group overflow-hidden rounded-2xl bg-foam shadow-[0_1px_0_var(--color-line)]"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={card.img}
                  alt={card.alt}
                  className="size-full object-cover transition-transform duration-(--motion-slow) ease-(--ease-smooth-out) group-hover:scale-[1.03]"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {card.copy}
                </p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-lagoon">
                  Explore
                  <ArrowRight className="size-4" aria-hidden />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-water py-20 text-foam">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-foam/60">
                Completed work
              </p>
              <h2 className="mt-3 font-display text-4xl md:text-5xl">
                The backyard is the proof.
              </h2>
            </div>
            <Button asChild variant="outlineLight">
              <Link to="/work">Full gallery</Link>
            </Button>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
            {homeGallery.map((img, i) => (
              <figure
                key={img.src}
                className={
                  i === 0
                    ? "col-span-2 row-span-2 overflow-hidden rounded-xl"
                    : "overflow-hidden rounded-xl"
                }
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className={
                    i === 0
                      ? "aspect-square size-full object-cover md:aspect-auto md:min-h-[28rem]"
                      : "aspect-[4/3] size-full object-cover"
                  }
                />
              </figure>
            ))}
          </div>
          <p className="mt-4 text-xs text-foam/50">
            Photography published on villapoolsinc.com. Images show completed
            Villa Pools work as presented by the company.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <img
            src={media.lester.src}
            alt={media.lester.alt}
            className="w-full max-w-md rounded-2xl object-cover object-top"
          />
        </div>
        <div className="lg:col-span-7">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-lagoon">
            Why this shop
          </p>
          <h2 className="mt-3 font-display text-4xl text-ink md:text-5xl">
            Design license and a C-53 in the same hands.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted">
            Lester B. Townsend is CEO of Villa Pools and a licensed landscape
            architect (RLA #{site.rla.number}, since {site.rla.since}) as well
            as the qualifying individual on California swimming-pool contractor
            license {site.license.classification} #{site.license.number}. The
            first-party site traces that path through Atlas Pools, Arroyo Pools,
            and Villa Pools — more than {site.experienceYears} years in aquatic
            design and construction.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted">
            That combination matters on the jobs they describe: expansive soils,
            groundwater, hillside construction, and the finish details — fire
            pits, integrated spas, pebble and glass tile — that have to survive
            Southern California weather.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted">
            The company presents itself as family-owned and referral-based, with
            Kathy Mendoza handling office management and permit processing.
          </p>
          <Button asChild className="mt-8">
            <Link to="/about">Meet the team</Link>
          </Button>
        </div>
      </section>

      <section className="border-y border-line bg-foam py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-lagoon">
            How a project moves
          </p>
          <h2 className="mt-3 max-w-2xl font-display text-4xl md:text-5xl">
            From the first call to a finished body of water.
          </h2>
          <ol className="mt-12 grid gap-8 md:grid-cols-5">
            {[
              {
                n: "01",
                t: "Conversation",
                d: "Share the lot, the drawings if you have them, and what the backyard needs to do.",
              },
              {
                n: "02",
                t: "Design & engineering",
                d: "Plans, soils, and structure — including hillside and groundwater conditions when they apply.",
              },
              {
                n: "03",
                t: "Permits",
                d: "Agency submittals and inspections, coordinated from the Villa Park office.",
              },
              {
                n: "04",
                t: "Build",
                d: "Excavation through shotcrete, steel, plumbing, electrical, and equipment.",
              },
              {
                n: "05",
                t: "Finish",
                d: "Tile, plaster or pebble, water features, lighting, and startup.",
              },
            ].map((step) => (
              <li key={step.n}>
                <p className="font-display text-3xl text-lagoon">{step.n}</p>
                <h3 className="mt-2 font-display text-2xl">{step.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{step.d}</p>
              </li>
            ))}
          </ol>
          {construction ? (
            <img
              src={construction.src}
              alt={construction.alt}
              className="mt-12 h-56 w-full rounded-2xl object-cover md:h-72"
            />
          ) : null}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-lagoon">
              Residential finish work
            </p>
            <h2 className="mt-3 font-display text-4xl">What often sits around the water.</h2>
            <ul className="mt-6 columns-1 gap-x-8 text-sm leading-7 text-muted sm:columns-2">
              {[
                "Infinity-edge and vanishing-edge pools",
                "Geometric and freeform shapes",
                "Integrated spas and baja steps",
                "Beach entries",
                "Fire pits and fire bowls",
                "Custom waterfalls and deck jets",
                "Glass tile and pebble finishes",
                "Salt systems and sanitizers",
                "Color-changing lighting",
                "Pool covers and safety nets",
                "Smart equipment automation",
                "Energy-efficient equipment",
                "Remodel, replaster, retile",
                "Spa additions and shape changes",
              ].map((item) => (
                <li key={item} className="break-inside-avoid">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-lagoon">
              Commercial scopes
            </p>
            <h2 className="mt-3 font-display text-4xl">From plan set to inspector sign-off.</h2>
            <ul className="mt-6 columns-1 gap-x-8 text-sm leading-7 text-muted sm:columns-2">
              {[
                "Community pools and spas",
                "Hotel indoor and outdoor pools",
                "Gym and swim-school pools",
                "Fountains and water features",
                "Plan creation",
                "Structural engineering",
                "Permit submittals",
                "Excavation and shotcrete",
                "Structural steel",
                "Plumbing and electrical",
                "Tile, plaster, interior finish",
                "Automated chemical controllers",
                "Smart technology",
                "Remodels",
              ].map((item) => (
                <li key={item} className="break-inside-avoid">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-14">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
            Equipment we work with
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-8 grayscale">
            {media.brands.map((b) => (
              <img
                key={b.alt}
                src={b.src}
                alt={b.alt}
                className="h-8 w-auto object-contain sm:h-10"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper-2 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-lagoon">
            Service area
          </p>
          <h2 className="mt-3 max-w-2xl font-display text-4xl md:text-5xl">
            Based in Villa Park. Building across five Southern California
            counties.
          </h2>
          <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {site.counties.map((c) => (
              <li
                key={c}
                className="rounded-xl bg-foam px-4 py-5 text-sm font-medium"
              >
                {c}
              </li>
            ))}
          </ul>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted">
            {site.addressLines.join(" ")} · Office {site.phoneDisplay}
          </p>
        </div>
      </section>

      <section className="relative overflow-hidden bg-water py-24 text-foam">
        <img
          src={media.cta.src}
          alt=""
          className="absolute inset-0 size-full object-cover object-[50%_70%] opacity-45"
        />
        <div className="absolute inset-0 bg-water/70" />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-foam/70">
              Start the conversation
            </p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl">
              Bring the drawings. Or just the lot.
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-foam/80">
              Call the office, email Lester, or use the demo form. A real
              project starts on the phone — not inside this concept site.
            </p>
            <a
              href={`tel:${site.phoneTel}`}
              className="mt-6 inline-flex min-h-12 items-center font-display text-3xl text-foam"
            >
              {site.phoneDisplay}
            </a>
            <p className="mt-2 text-sm text-foam/75">{site.email}</p>
          </div>
          <ConsultationForm tone="dark" />
        </div>
      </section>
    </SiteShell>
  );
}
