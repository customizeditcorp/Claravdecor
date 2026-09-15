import type { Metadata } from "next"
import Link from "next/link"
import { PageHero } from "@/components/page-hero"
import { HonestBlock } from "@/components/honest-block"
import { ServiceIntro, ProcessSummary } from "@/components/service-sections"
import { GalleryGrid } from "@/components/gallery-grid"
import { FaqSection } from "@/components/faq"
import { CtaBand } from "@/components/cta-band"
import { JsonLd } from "@/components/json-ld"
import { getService, reviews, cta } from "@/lib/site"
import { byCategory, heroPhotos, photos } from "@/lib/photos"
import { serviceSchema, faqSchema, breadcrumbSchema } from "@/lib/schema"

const service = getService("full-event-design")!
const path = "/full-event-design"

export const metadata: Metadata = {
  title: { absolute: service.metaTitle },
  description: service.metaDescription,
  alternates: { canonical: path },
  openGraph: { title: service.metaTitle, description: service.metaDescription, url: path },
}

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Full Event Design", path },
]

// Institutional proof: SMARTpro Academy + gaby castaneda (schools), JOMMY MARTINEZ (corporate).
const institutional = [reviews[2], reviews[1]]

// Representative embed: one strong photo per category, none of the ≤1000px sources.
const representative = [
  "birthday-balloon-decor-shimmer-wall-pink-garland-13-01.jpg",
  "baby-shower-balloon-decor-arch-backdrop-blue-tan-bear-01.jpg",
  "birthday-balloon-decor-superhero-dessert-table-02.jpg",
  "baby-shower-balloon-decor-baby-in-bloom-backdrop-pink-purple-01.jpg",
  "birthday-balloon-decor-first-birthday-daisy-backdrop-pink-mint-01.jpg",
  "birthday-balloon-decor-gamer-backdrop-blue-green-01.jpg",
  "seasonal-balloon-decor-spring-tulip-column-pastel-01.jpg",
  "graduation-balloon-decor-garage-arch-red-black-01.jpg",
].map((f) => photos.find((p) => p.file === f)!)

export default function FullEventDesignPage() {
  return (
    <>
      <JsonLd data={serviceSchema({ name: service.title, serviceType: service.serviceType, description: service.metaDescription, path })} />
      <JsonLd data={faqSchema(service.faqs)} />
      <JsonLd data={breadcrumbSchema(crumbs)} />

      <PageHero photo={heroPhotos.fullEventDesign} title={service.h1} crumbs={crumbs} eyebrow="Our anchor service" position="center 30%" />

      <ServiceIntro service={service} />
      <ProcessSummary />

      {/* Why us — same trust block as home, same copy */}
      <HonestBlock />

      {/* Schools, graduations & corporate — folded section (was its own page in sitemap v1). Soft lane: no insurance/COI copy, generic CTA. */}
      <section id="schools-corporate" className="section-y bg-background" aria-labelledby="schools-title">
        <div className="container-c3">
          <div className="grid gap-10 md:grid-cols-12 md:gap-16">
            <div className="md:col-span-5">
              <p className="eyebrow mb-3 text-muted-foreground">Also for</p>
              <h2 id="schools-title">Schools, graduations &amp; corporate events</h2>
            </div>
            <div className="md:col-span-7">
              <p className="lead">
                From office parties to campus events and graduation celebrations, we design around your brand colors or school theme and install before doors open — the same process, the same mockup approval, built for a workplace or campus instead of a living room. We&apos;ve worked with schools and offices on a recurring basis.
              </p>
              <div className="mt-8 grid gap-8 sm:grid-cols-2">
                {institutional.map((r) => (
                  <figure key={r.name} className="border-t border-border pt-5">
                    <blockquote lang={r.lang} className="font-display text-[1.25rem] leading-snug">&ldquo;{r.excerpt}&rdquo;</blockquote>
                    <figcaption className="mt-3 text-caption text-muted-foreground">
                      <span className="font-semibold text-foreground">{r.name}</span> · Google review
                    </figcaption>
                  </figure>
                ))}
              </div>
              <Link href={cta.primary.href} className="btn btn-primary mt-8">{cta.primary.label}</Link>
            </div>
          </div>
          <GalleryGrid photos={[...byCategory("corporate"), ...byCategory("graduation")]} columns={4} className="mt-12" />
        </div>
      </section>

      <FaqSection faqs={service.faqs} title="Questions people ask before booking a full design" />

      {/* Gallery embed — representative setups across event types */}
      <section className="section-y bg-card" aria-labelledby="gallery-embed-title">
        <div className="container-c3">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow mb-3 text-muted-foreground">Recent setups</p>
              <h2 id="gallery-embed-title">Built for the room they were in</h2>
            </div>
            <Link href="/gallery" className="btn btn-outline">See all our work</Link>
          </div>
          <GalleryGrid photos={representative} columns={4} className="mt-10" />
        </div>
      </section>

      <CtaBand label={service.ctaLabel} />
    </>
  )
}
