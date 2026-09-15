import type { Metadata } from "next"
import Link from "next/link"

import { PageHero } from "@/components/page-hero"
import { ServiceIntro } from "@/components/service-sections"
import { GalleryGrid } from "@/components/gallery-grid"
import { FaqSection } from "@/components/faq"
import { CtaBand } from "@/components/cta-band"
import { JsonLd } from "@/components/json-ld"
import { getService, pricing, cta } from "@/lib/site"
import { byCategory, byFile, heroPhotos } from "@/lib/photos"
import { serviceSchema, faqSchema, breadcrumbSchema } from "@/lib/schema"

const service = getService("balloon-garlands")!
const path = "/balloon-garlands"

export const metadata: Metadata = {
  title: { absolute: service.metaTitle },
  description: service.metaDescription,
  alternates: { canonical: path },
  openGraph: { title: service.metaTitle, description: service.metaDescription, url: path },
}

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Balloon Garlands", path },
]

// Garland-forward photos: the garland is the subject, plus bouquets & seasonal columns.
const garlandPhotos = [
  byFile("birthday-balloon-decor-pink-cream-gold-garland-pampas-01.jpg"),
  byFile("birthday-balloon-decor-shimmer-wall-pink-garland-13-02.jpg"),
  byFile("birthday-balloon-decor-gamer-backdrop-blue-green-02.jpg"),
  byFile("birthday-balloon-decor-first-birthday-daisy-backdrop-pink-mint-01.jpg"),
  ...byCategory("seasonal"),
  ...byCategory("bouquets"),
]

export default function BalloonGarlandsPage() {
  return (
    <>
      <JsonLd data={serviceSchema({ name: service.title, serviceType: service.serviceType, description: service.metaDescription, path })} />
      <JsonLd data={faqSchema(service.faqs)} />
      <JsonLd data={breadcrumbSchema(crumbs)} />

      <PageHero photo={heroPhotos.balloonGarlands} title={service.h1} crumbs={crumbs} eyebrow="The easiest place to start" position="center 40%" />

      <ServiceIntro service={service} />

      {/* What $250 gets you — the public anchor, always "a starting point", never "full decor" (Addendum C4). */}
      <section className="section-y bg-card" aria-labelledby="anchor-title">
        <div className="container-c3 grid gap-10 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-5">
            <p className="eyebrow mb-3 text-muted-foreground">Pricing</p>
            <h2 id="anchor-title">What {pricing.anchor} gets you</h2>
          </div>
          <div className="md:col-span-7">
            <p className="lead">
              An organic balloon garland — {pricing.garlandSpec} — built in your colors and anchored for the wall, arch, table or entryway it&apos;s going on. That&apos;s a starting point, not full event decor: longer garlands, more colors, a backdrop or a stand are quoted on top, and every quote is itemized so you see exactly what changes the price.
            </p>
            <p className="mt-4 text-muted-foreground">{pricing.quoteTerms}</p>
            <Link href={cta.primary.href} className="btn btn-primary mt-8">{service.ctaLabel}</Link>
          </div>
        </div>
      </section>

      {/* How a garland is built for its site — Craft/Method support, no method name until Clara confirms it. */}
      <section className="section-y bg-background" aria-labelledby="built-title">
        <div className="container-c3 grid gap-10 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-5">
            <p className="eyebrow mb-3 text-muted-foreground">Built to hold</p>
            <h2 id="built-title">A garland that stays where we put it</h2>
          </div>
          <div className="md:col-span-7 space-y-5">
            <p className="lead">
              Before we build, we ask where the garland is going — indoor or outdoor, what surface it attaches to, how much sun and wind it will see. That decides the balloon sizes, the technique and how it&apos;s anchored, so it looks the same when your guests arrive as when we left.
            </p>
            <p className="text-muted-foreground">
              Colors are matched to your palette. When the exact shade doesn&apos;t exist off the shelf, we double-stuff — one balloon inside another — to get it right. We install before your first guest and take everything down on schedule.
            </p>
          </div>
        </div>
      </section>

      {/* Funnel: garland → full event design (Brief §2, two-step ladder). */}
      <section className="section-y bg-muted" aria-labelledby="upgrade-title">
        <div className="container-c3 grid gap-10 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-5">
            <p className="eyebrow mb-3 text-muted-foreground">When you want the whole room</p>
            <h2 id="upgrade-title">From one garland to a finished space</h2>
          </div>
          <div className="md:col-span-7">
            <p className="lead">
              A garland is the piece most people start with. When you want the backdrop, the pedestals, the signage and the tables designed as one concept — with a mockup to approve before the event — that&apos;s full event design.
            </p>
            <Link href="/full-event-design" className="btn btn-outline mt-8">Explore full event design</Link>
          </div>
        </div>
      </section>

      <FaqSection faqs={service.faqs} title="Questions people ask about garlands" />

      <section className="section-y bg-card" aria-labelledby="garland-gallery-title">
        <div className="container-c3">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow mb-3 text-muted-foreground">Garlands, bouquets &amp; columns</p>
              <h2 id="garland-gallery-title">Recent setups</h2>
            </div>
            <Link href="/gallery" className="btn btn-outline">See all our work</Link>
          </div>
          <GalleryGrid photos={garlandPhotos} columns={4} className="mt-10" />
        </div>
      </section>

      <CtaBand label={service.ctaLabel} />
    </>
  )
}
