import type { Metadata } from "next"
import Link from "next/link"

import { PageHero } from "@/components/page-hero"
import { FaqSection } from "@/components/faq"
import { CtaBand } from "@/components/cta-band"
import { JsonLd } from "@/components/json-ld"
import { pageMeta, areas, business, faqs, cta } from "@/lib/site"
import { heroPhotos } from "@/lib/photos"
import { breadcrumbSchema, faqSchema } from "@/lib/schema"

const path = "/service-areas"

export const metadata: Metadata = {
  title: { absolute: pageMeta.serviceAreas.title },
  description: pageMeta.serviceAreas.description,
  alternates: { canonical: path },
  openGraph: { title: pageMeta.serviceAreas.title, description: pageMeta.serviceAreas.description, url: path },
}

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Service Areas", path },
]

const areaFaqs = [faqs.distance, faqs.shortNotice, faqs.weather]

/*
  ONE service-areas page. No /areas/[city] — there are no city-attributable photos or reviews yet
  (anti-doorway guardrail). Lists are the provisional core/extended tiers from Anexo NAP §3.
  Grapevine / Southlake / Highland Park / University Park: [TO CONFIRM] — not listed until Clara decides.
*/
export default function ServiceAreasPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <JsonLd data={faqSchema(areaFaqs)} />

      <PageHero photo={heroPhotos.serviceAreas} title={pageMeta.serviceAreas.h1} crumbs={crumbs} eyebrow="Service areas" position="center 45%" />

      <section className="section-y bg-background" aria-labelledby="areas-intro-title">
        <div className="container-c3 grid gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-6">
            <h2 id="areas-intro-title" className="sr-only">Where we work</h2>
            <p className="lead">
              Based in the {business.baseZip} area, we serve families and organizations across North Dallas. We come to your venue, your office or your home — there&apos;s no showroom to visit.
            </p>
            <p className="mt-5 text-muted-foreground">
              Don&apos;t see your city? Ask — we may still be able to help. Distance is always spelled out in your quote before you pay anything.
            </p>
            <Link href={cta.primary.href} className="btn btn-primary mt-8">{cta.primary.label}</Link>
          </div>
          <div className="md:col-span-6 grid gap-10 sm:grid-cols-2">
            <div>
              <h3 className="subtitle">Core area</h3>
              <p className="mt-1 text-caption text-muted-foreground">No travel fee</p>
              <ul className="mt-4 space-y-2">
                {areas.core.map((c) => (
                  <li key={c} className="border-t border-border pt-2">{c}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="subtitle">Extended area</h3>
              <p className="mt-1 text-caption text-muted-foreground">Distance fee applies, shown in your quote</p>
              <ul className="mt-4 space-y-2">
                {areas.extended.map((c) => (
                  <li key={c} className="border-t border-border pt-2">{c}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-y bg-card" aria-labelledby="same-process-title">
        <div className="container-c3 grid gap-10 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-5">
            <p className="eyebrow mb-3 text-muted-foreground">Same process everywhere</p>
            <h2 id="same-process-title">Every venue gets read before it gets designed</h2>
          </div>
          <div className="md:col-span-7">
            <p className="lead">
              Whether it&apos;s a backyard in Plano, a community hall in Richardson or an office lobby in Addison, we ask the same questions first: indoor or outdoor, what surface, what power, what weather. Then we design for that space, show you the mockup, and install before your first guest.
            </p>
            <Link href="/#how-it-works" className="btn btn-outline mt-8">See our full process</Link>
          </div>
        </div>
      </section>

      <FaqSection faqs={areaFaqs} title="Questions about distance and timing" />

      <CtaBand />
    </>
  )
}
