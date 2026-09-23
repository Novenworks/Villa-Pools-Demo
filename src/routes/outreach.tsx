import { createFileRoute } from "@tanstack/react-router";
import { site } from "@/lib/site";

export const Route = createFileRoute("/outreach")({
  head: () => ({
    meta: [
      { title: "Outreach — Villa Pools demo (operator only)" },
      { name: "robots", content: "noindex, nofollow, noarchive" },
    ],
  }),
  component: OutreachPage,
});

const captures = [
  {
    file: "before-original-desktop.png",
    label: "BEFORE — original live site, desktop",
  },
  { file: "after-desktop.png", label: "AFTER — demo desktop" },
  { file: "after-mobile.png", label: "AFTER — demo mobile" },
  { file: "after-scroll.gif", label: "AFTER — scrolling GIF" },
  { file: "after-scroll.mp4", label: "AFTER — scrolling MP4" },
] as const;

function OutreachPage() {
  return (
    <div className="min-h-screen bg-zinc-950 px-4 py-12 text-zinc-100 sm:px-8">
      <article className="mx-auto max-w-3xl">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-500">
          Operator only · noindex · not in prospect nav
        </p>
        <h1 className="mt-3 font-sans text-3xl font-semibold">
          Villa Pools, Inc. — speculative redesign brief
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-zinc-400">
          Independent Novenworks concept. The prospect is not a client. Do not
          imply a hiring relationship.
        </p>

        <section className="mt-10 space-y-2 text-sm leading-relaxed">
          <h2 className="text-lg font-semibold">Business snapshot</h2>
          <p>
            <strong>Villa Pools, Inc.</strong> — custom residential and
            commercial pools, spas, fountains, and water features. Villa Park,
            California. Family-owned, referral-based presentation. CEO Lester B.
            Townsend (landscape architect + C-53 qualifying individual). Office
            manager Kathy Mendoza.
          </p>
          <ul className="list-disc space-y-1 pl-5 text-zinc-300">
            <li>
              Original site:{" "}
              <a className="underline" href={site.originalUrl}>
                {site.originalUrl}
              </a>
            </li>
            <li>Phone: {site.phoneDisplay} · Cell: {site.cellDisplay}</li>
            <li>Email: {site.email}</li>
            <li>{site.addressLines.join(", ")}</li>
            <li>
              CSLB {site.license.classification} #{site.license.number} —{" "}
              {site.license.status} (checked {site.license.verifiedOn}; issued{" "}
              {site.license.issued}, expires {site.license.expires}).{" "}
              <a className="underline" href={site.license.cslbUrl}>
                CSLB record
              </a>
            </li>
            <li>
              RLA #{site.rla.number} — first-party: licensed landscape architect
              since {site.rla.since}
            </li>
            <li>
              GitHub:{" "}
              <a
                className="underline"
                href="https://github.com/Novenworks/Villa-Pools-Demo"
              >
                Novenworks/Villa-Pools-Demo
              </a>
            </li>
            <li>
              Deployed URL:{" "}
              <a className="underline" href="https://villa-pools-demo.vercel.app">
                https://villa-pools-demo.vercel.app
              </a>
            </li>
          </ul>
        </section>

        <section className="mt-10 space-y-2 text-sm leading-relaxed">
          <h2 className="text-lg font-semibold">Agency sanity check</h2>
          <p>
            Qualifying pass found no agency credit. Recheck of live source
            (September 8, 2026): footer contains only company name, licenses,
            phone, email, and © 2021. Stack is a Canvas (SemiColonWeb) HTML
            theme on Django (csrftoken cookie, /static/ paths, nginx). No
            “site by,” Webflow/Squarespace chrome, or designer mark.{" "}
            <strong>Do not claim an agency relationship, and do not claim
            “they have no designer.”</strong> The truthful line is: no agency
            credit is visible on the live site.
          </p>
        </section>

        <section className="mt-10 space-y-2 text-sm leading-relaxed">
          <h2 className="text-lg font-semibold">
            Original-site observations (real)
          </h2>
          <ol className="list-decimal space-y-2 pl-5">
            <li>
              Copyright still reads “Copyrights © 2021” on a live 2026 site.
            </li>
            <li>
              Conspicuous copy errors on high-visibility surfaces: “Commerical,”
              “botique,” “construction managment,” “Unparralled,” “Unparraled,”
              “individals,” “clientle,” “transpart,” “integrety,” “employe,”
              “deliverying,” “seemlesely,” “Remodles,” “prexisting,” “Masonary,”
              “Submitals,” “constructon,” “choosen,” “bringes.”
            </li>
            <li>
              Strong first-party photography exists (about gallery, residential
              dusk shots, commercial community pool) but the homepage hero is a
              muted banner with empty headline text, and project images are
              under-used as small cards.
            </li>
            <li>
              Trust is thin: license numbers sit only in the footer; the 38+
              years claim is a counter without naming that it is Lester’s
              industry path (Atlas → Arroyo → Villa), which is the more
              credible story.
            </li>
            <li>
              Contact exists (phone, cell, email, address, a form) but the
              homepage conversion path is a late “Want to Talk?” block. Mobile
              navigation is the stock Canvas hamburger; manufacturer logos
              dominate a full row.
            </li>
          </ol>
        </section>

        <section className="mt-10 space-y-2 text-sm leading-relaxed">
          <h2 className="text-lg font-semibold">Redesign improvements</h2>
          <ol className="list-decimal space-y-2 pl-5">
            <li>
              <strong>Visual credibility:</strong> full-bleed first-party dusk
              and water photography as the primary surface, not cropped cards.
            </li>
            <li>
              <strong>Trust:</strong> CSLB C-53 #1004609 (verified current) and
              RLA #1879 sit in a proof strip with a CSLB link, not only the
              footer.
            </li>
            <li>
              <strong>Differentiation:</strong> the dual-license story (landscape
              architect + swimming-pool contractor) and the Atlas/Arroyo/Villa
              path are explicit.
            </li>
            <li>
              <strong>Service discovery:</strong> residential / commercial /
              spas grouped as buyer decisions, with remodel and hillside
              engineering called out instead of a rotating keyword headline.
            </li>
            <li>
              <strong>Conversion & mobile:</strong> persistent phone +
              consultation CTA, 44px targets, honest demo form, and a gallery
              route so work is findable.
            </li>
          </ol>
        </section>

        <section className="mt-10 space-y-2 text-sm leading-relaxed">
          <h2 className="text-lg font-semibold">Talking points</h2>
          <ol className="list-decimal space-y-2 pl-5">
            <li>
              The photography on the current site is already the strongest
              asset. The concept site just lets it carry the first impression.
            </li>
            <li>
              The copy errors and 2021 copyright are easy, factual observations
              — they are not an attack on the builder or a past designer.
            </li>
            <li>
              Lester’s dual license is unusual and currently almost invisible
              above the fold. Making that readable is the strategic point of
              the redesign, not a visual refresh for its own sake.
            </li>
          </ol>
        </section>

        <section className="mt-10 space-y-2 text-sm leading-relaxed">
          <h2 className="text-lg font-semibold">Personalization hooks</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Address Lester directly; the public email is lbt@villapoolsinc.com.
            </li>
            <li>
              Mention Cal Poly SLO / RLA 1879 / C-53 as a pair — it is his
              biography, not generic “years in business” copy.
            </li>
            <li>
              If a conversation opens, Kathy Mendoza is the named office manager
              on permit work; do not invent other staff.
            </li>
          </ul>
        </section>

        <section className="mt-10 space-y-2 text-sm leading-relaxed">
          <h2 className="text-lg font-semibold">What not to say</h2>
          <ul className="list-disc space-y-2 pl-5 text-zinc-300">
            <li>Do not say the website “sucks,” or insult a designer or agency.</li>
            <li>
              Do not claim Novenworks was hired, is “their web team,” or that
              this is the official site.
            </li>
            <li>
              Do not claim ownership of Villa Pools photography or the wordmark.
            </li>
            <li>
              Do not fabricate ROI, lead lift, SEO rankings, traffic, or
              conversion percentages.
            </li>
            <li>
              Do not say the company is 38 years old. The corporation and C-53
              date to 2015; 38+ is industry experience on the first-party about
              page.
            </li>
            <li>
              Do not invent review totals, star ratings, warranties, pricing,
              timelines, crew size, or named commercial clients.
            </li>
            <li>
              Do not advertise workers’-comp status. CSLB lists a WC exemption
              (no employees certified as of the check date); the marketing site
              does not discuss that filing.
            </li>
            <li>
              Do not promise the demo form collects leads. It does not.
            </li>
          </ul>
        </section>

        <section className="mt-10 space-y-4 text-sm leading-relaxed">
          <h2 className="text-lg font-semibold">Outreach copy</h2>
          <h3 className="font-semibold">Subject lines</h3><ol className="list-decimal space-y-1 pl-5"><li>Lester, I made something for Villa Pools,</li><li>Had an idea for Villa Pools,</li><li>Tried something with the Villa Pools, site</li></ol><h3 className="mt-4 font-semibold">Cold email</h3><pre className="whitespace-pre-wrap rounded-lg bg-zinc-900 p-4 text-[13px] leading-relaxed text-zinc-200">{`Hi Lester,

I came across Villa Pools, Inc. and ended up spending some time looking through the site.

The real work is already the strongest part of the story.

I had an idea for how I'd present it, so I built a version instead of sending you a bunch of suggestions.

https://villa-pools-demo.vercel.app

Thought you might be curious to see it.

If you like the direction, I can show you what I changed.

Vincent
Novenworks`}</pre><h3 className="font-semibold">Follow-up</h3><pre className="whitespace-pre-wrap rounded-lg bg-zinc-900 p-4 text-[13px] leading-relaxed text-zinc-200">{`Hi Lester,

Just bumping this once in case it got buried. I put together that Villa Pools, concept and wanted to make sure you saw it.

https://villa-pools-demo.vercel.app

All good if it's not something you're looking at right now.

Vincent`}</pre></section>

        <section className="mt-10 space-y-4 text-sm">
          <h2 className="text-lg font-semibold">Capture package</h2>
          <p className="text-zinc-400">
            Files live at /outreach/… on this host. Direct links:
          </p>
          <div className="grid gap-6">
            {captures.map((c) => (
              <figure key={c.file} className="rounded-lg border border-zinc-800 p-3">
                <figcaption className="mb-2 text-xs uppercase tracking-wide text-zinc-500">
                  {c.label}
                </figcaption>
                {c.file.endsWith(".mp4") ? (
                  <video
                    src={`/outreach/${c.file}`}
                    controls
                    className="w-full rounded bg-zinc-900"
                  />
                ) : (
                  <img
                    src={`/outreach/${c.file}`}
                    alt={c.label}
                    className="w-full rounded bg-zinc-900"
                  />
                )}
                <a
                  className="mt-2 inline-block text-xs underline"
                  href={`/outreach/${c.file}`}
                >
                  /outreach/{c.file}
                </a>
              </figure>
            ))}
          </div>
        </section>
      </article>
    </div>
  );
}
