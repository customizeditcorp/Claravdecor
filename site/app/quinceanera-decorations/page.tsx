import type { Metadata } from "next"
import Link from "next/link"

import { PageHero } from "@/components/page-hero"
import { ServiceIntro, ProcessSummary } from "@/components/service-sections"
import { HonestBlock } from "@/components/honest-block"
import { GalleryGrid } from "@/components/gallery-grid"
import { FaqSection } from "@/components/faq"
import { CtaBand } from "@/components/cta-band"
import { JsonLd } from "@/components/json-ld"
import { getService, cta } from "@/lib/site"
import { heroPhotos, photos } from "@/lib/photos"
import { serviceSchema, faqSchema, breadcrumbSchema } from "@/lib/schema"

const service = getService("quinceanera-decorations")!
const path = "/quinceanera-decorations"

export const metadata: Metadata = {
  title: { absolute: service.metaTitle },
  description: service.metaDescription,
  alternates: { canonical: path },
  openGraph: { title: service.metaTitle, description: service.metaDescription, url: path },
}

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Quinceañera Decorations", path },
]

// [TO CONFIRM] Real quinceañera photos — none exist yet. Showing birthday setups closest in tone (doc 11 §4).
const quinceStyle = photos.filter((p) => p.quinceStyle)

export default function QuinceaneraPage() {
  return (
    <>
      <JsonLd data={serviceSchema({ name: service.title, serviceType: service.serviceType, description: service.metaDescription, path })} />
      <JsonLd data={faqSchema(service.faqs)} />
      <JsonLd data={breadcrumbSchema(crumbs)} />

      <PageHero photo={heroPhotos.quinceanera} title={service.h1} crumbs={crumbs} eyebrow="Quinceañera" position="center 45%" />

      <ServiceIntro service={service} />

      {/* Two decision-makers (persona "Daniela"): she defines the style, mom approves the plan and the money. */}
      <section className="section-y bg-card" aria-labelledby="her-day-title">
        <div className="container-c3 grid gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <p className="eyebrow mb-3 text-muted-foreground">For her</p>
            <h2 id="her-day-title" className="!text-h3">Her theme, her colors — built exactly</h2>
            <p className="mt-5 text-muted-foreground">
              Bring the Pinterest board, the dress color, the number, the theme. We design the backdrop, the garland and the tables around it and match the palette exactly — double-stuffed when the shade doesn&apos;t exist off the shelf. Before anything is built, she sees the mockup and can adjust it.
            </p>
          </div>
          <div>
            <p className="eyebrow mb-3 text-muted-foreground">For mom</p>
            <h2 className="!text-h3">A plan you approve, a day you don&apos;t have to manage</h2>
            <p className="mt-5 text-muted-foreground">
              You get an itemized quote before you pay anything, a deposit that reserves the date exclusively, and a design to approve once it&apos;s booked. On the day, we install before the first guest arrives and take everything down on schedule — so you&apos;re a guest at your daughter&apos;s party, not the coordinator.
            </p>
            <Link href={cta.primary.href} className="btn btn-primary mt-8">{service.ctaLabel}</Link>
          </div>
        </div>
      </section>

      <ProcessSummary title="From her idea to the room she walks into" body="We start by reading the venue — indoor or outdoor, wall or free-standing, power for marquee numbers, how the light falls — so the structure holds and photographs well. Once the date is booked, we design it and send a mockup to approve before we build." />

      <HonestBlock />

      <FaqSection faqs={service.faqs} title="Questions families ask before booking a quinceañera" />

      <section className="section-y bg-card" aria-labelledby="quince-gallery-title">
        <div className="container-c3">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow mb-3 text-muted-foreground">Recent setups in a similar style</p>
              <h2 id="quince-gallery-title">Shimmer walls, garlands and milestone numbers</h2>
            </div>
            <Link href="/gallery" className="btn btn-outline">See all our work</Link>
          </div>
          <GalleryGrid photos={quinceStyle} columns={3} className="mt-10" />
        </div>
      </section>

      <CtaBand label={service.ctaLabel} />
    </>
  )
}
