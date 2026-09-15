import type { Metadata } from "next"
import Link from "next/link"

import { PageHero } from "@/components/page-hero"
import { ServiceIntro, ProcessSummary } from "@/components/service-sections"
import { GalleryGrid } from "@/components/gallery-grid"
import { FaqSection } from "@/components/faq"
import { CtaBand } from "@/components/cta-band"
import { JsonLd } from "@/components/json-ld"
import { getService, cta } from "@/lib/site"
import { byCategory, heroPhotos } from "@/lib/photos"
import { serviceSchema, faqSchema, breadcrumbSchema } from "@/lib/schema"

const service = getService("birthday-and-baby-shower-decor")!
const path = "/birthday-and-baby-shower-decor"

export const metadata: Metadata = {
  title: { absolute: service.metaTitle },
  description: service.metaDescription,
  alternates: { canonical: path },
  openGraph: { title: service.metaTitle, description: service.metaDescription, url: path },
}

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Birthday & Baby Shower Decor", path },
]

const birthdayPhotos = byCategory("birthday")
const showerPhotos = [...byCategory("baby-shower").filter((p) => !p.secondary), ...byCategory("gender-reveal"), ...byCategory("baby-shower").filter((p) => p.secondary)]
const bouquetPhotos = byCategory("bouquets")

export default function BirthdayBabyShowerPage() {
  return (
    <>
      <JsonLd data={serviceSchema({ name: service.title, serviceType: service.serviceType, description: service.metaDescription, path })} />
      <JsonLd data={faqSchema(service.faqs)} />
      <JsonLd data={breadcrumbSchema(crumbs)} />

      <PageHero photo={heroPhotos.birthdayBabyShower} title={service.h1} crumbs={crumbs} eyebrow="Family celebrations" position="center 40%" />

      <ServiceIntro service={service} />

      {/* Birthday parties — the biggest gallery category. Answers: looks cheap / colors don't match / deflates before guests arrive. */}
      <section id="birthdays" className="section-y bg-card" aria-labelledby="birthday-title">
        <div className="container-c3">
          <div className="grid gap-10 md:grid-cols-12 md:gap-16">
            <div className="md:col-span-5">
              <p className="eyebrow mb-3 text-muted-foreground">Birthdays</p>
              <h2 id="birthday-title">Birthday parties</h2>
            </div>
            <div className="md:col-span-7">
              <p className="lead">
                A themed backdrop, a balloon arch, or a full balloon wall — sized to your venue and your colors, built for kids&apos; parties and adult milestones alike. Our biggest gallery category — see real setups below.
              </p>
              <p className="mt-4 text-muted-foreground">
                Colors are matched to your theme, not approximated. Sizes are chosen for the space, so the setup reads as designed, not bought. And everything is installed before the first guest, so it&apos;s full and fresh when the photos happen.
              </p>
            </div>
          </div>
          <GalleryGrid photos={birthdayPhotos} columns={4} className="mt-12" />
        </div>
      </section>

      {/* Baby showers & gender reveals — answers: falls on a child / looks wrinkled or crooked in photos. */}
      <section id="baby-showers" className="section-y bg-background" aria-labelledby="shower-title">
        <div className="container-c3">
          <div className="grid gap-10 md:grid-cols-12 md:gap-16">
            <div className="md:col-span-5">
              <p className="eyebrow mb-3 text-muted-foreground">Baby showers &amp; gender reveals</p>
              <h2 id="shower-title">Baby showers &amp; gender reveals</h2>
            </div>
            <div className="md:col-span-7">
              <p className="lead">
                Arches, backdrops and balloon columns designed around the reveal moment or the shower theme — sage, blush, blue or your own palette — installed and gone before you have to think about it.
              </p>
              <p className="mt-4 text-muted-foreground">
                Structures are anchored for the surface they stand on — grass, patio, tile or carpet — and checked before we leave, so nothing leans, nothing shifts, and the arch looks straight in every photo.
              </p>
              <Link href={cta.primary.href} className="btn btn-primary mt-8">{service.ctaLabel}</Link>
            </div>
          </div>
          <GalleryGrid photos={showerPhotos} columns={4} className="mt-12" />
        </div>
      </section>

      <ProcessSummary />

      <FaqSection faqs={service.faqs} title="Questions parents ask before booking" />

      {/* Bouquets — small add-on, links to the garland entry point. */}
      <section className="section-y bg-card" aria-labelledby="bouquets-title">
        <div className="container-c3">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow mb-3 text-muted-foreground">Bouquets &amp; small setups</p>
              <h2 id="bouquets-title">When you need one piece, not the whole room</h2>
            </div>
            <Link href="/balloon-garlands" className="btn btn-outline">Balloon garlands from $250</Link>
          </div>
          <GalleryGrid photos={bouquetPhotos} columns={3} className="mt-10" />
        </div>
      </section>

      <CtaBand label={service.ctaLabel} />
    </>
  )
}
