import { createFileRoute } from "@tanstack/react-router";
import { ConsultationForm } from "@/components/consultation-form";
import { SiteShell } from "@/components/site-shell";
import { site } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Villa Pools" },
      {
        name: "description",
        content: `Call Villa Pools at ${site.phoneDisplay} or email ${site.email}. Villa Park, California.`,
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteShell>
      <div className="relative min-h-[48svh] overflow-hidden bg-water">
        <img
          src="/media/project-vanishing-dusk.webp"
          alt=""
          className="absolute inset-0 size-full object-cover object-[50%_70%] opacity-70"
        />
        <div className="absolute inset-0 bg-water/55" />
        <div className="relative mx-auto flex min-h-[48svh] max-w-6xl items-end px-4 pb-12 pt-32 text-foam sm:px-6">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-foam/70">
              Contact
            </p>
            <h1 className="mt-3 font-display text-4xl md:text-6xl">
              Request a consultation.
            </h1>
          </div>
        </div>
      </div>
      <section className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-3xl">Reach the office</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            These numbers and the email are published on villapoolsinc.com. Use
            them for a real inquiry. The form on this page is a demo and does
            not transmit to Villa Pools.
          </p>
          <dl className="mt-8 space-y-5 text-sm">
            <div>
              <dt className="text-xs font-medium uppercase tracking-[0.16em] text-muted">
                Office
              </dt>
              <dd className="mt-1">
                <a className="text-lg font-medium" href={`tel:${site.phoneTel}`}>
                  {site.phoneDisplay}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-[0.16em] text-muted">
                Cell
              </dt>
              <dd className="mt-1">
                <a className="text-lg font-medium" href={`tel:${site.cellTel}`}>
                  {site.cellDisplay}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-[0.16em] text-muted">
                Email
              </dt>
              <dd className="mt-1">
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-[0.16em] text-muted">
                Address
              </dt>
              <dd className="mt-1 leading-relaxed">
                {site.addressLines.map((l) => (
                  <span key={l} className="block">
                    {l}
                  </span>
                ))}
              </dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-[0.16em] text-muted">
                Licensing
              </dt>
              <dd className="mt-1 leading-relaxed">
                CSLB {site.license.classification} #{site.license.number} (
                {site.license.status.toLowerCase()})
                <br />
                {site.rla.label} #{site.rla.number}
              </dd>
            </div>
          </dl>
        </div>
        <div className="rounded-2xl bg-foam p-6 sm:p-8">
          <h2 className="font-display text-3xl">Demo form</h2>
          <div className="mt-6">
            <ConsultationForm />
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
