import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"

import { PageHero } from "@/components/page-hero"
import { HonestBlock } from "@/components/honest-block"
import { CtaBand } from "@/components/cta-band"
import { JsonLd } from "@/components/json-ld"
import { pageMeta, business, cta, trustFacts } from "@/lib/site"
import { heroPhotos, byFile, photoSrc } from "@/lib/photos"
import { breadcrumbSchema } from "@/lib/schema"

const path = "/about"

export const metadata: Metadata = {
  title: { absolute: pageMeta.about.title },
  description: pageMeta.about.description,
  alternates: { canonical: path },
  openGraph: { title: pageMeta.about.title, description: pageMeta.about.description, url: path },
}

const crumbs = [
  { name: "Home", path: "/" },
  { name: "About", path },
]

const detail = byFile("balloon-bouquets-birthday-bear-close-up-01.jpg")

/*
  About — copy from doc 11 §7. "since 2019" (business) and "10 years of experience" (Clara) are
  never combined into "10 years in business". No insurance mention. Method name not published
  until Clara confirms it. Photos of Clara at work: [TO CONFIRM] — none exist; using a detail shot.
*/
export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />

      <PageHero photo={heroPhotos.about} title={pageMeta.about.h1} crumbs={crumbs} eyebrow="Clara Vento · Event Decor" position="center 40%" />

      <section className="section-y bg-background" aria-labelledby="about-intro-title">
        <div className="container-c3 grid gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-7">
            <h2 id="about-intro-title" className="sr-only">Who we are</h2>
            <p className="lead">
              {business.owner} has been designing event decor in North Dallas since {business.since}, with {business.ownerExperience} shaping spaces for the moments that matter. Every design starts with your space and your vision — not a catalog — and every setup is installed before your first guest and cleared away when it&apos;s over.
            </p>
            <p className="mt-6 text-muted-foreground">
              ClaravDecor is a small studio on purpose. Clara reads your venue herself, designs the mockup you approve, and is the person installing on the day. That&apos;s why the reviews keep saying the same three things — professional, on time, and exactly what we imagined.
            </p>
            <p className="mt-4 text-muted-foreground">
              We work in English and Spanish, and most of our clients are families — birthdays, baby showers, gender reveals, quinceañeras — alongside a few schools and offices who book us year after year.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href={cta.primary.href} className="btn btn-primary">{cta.primary.label}</Link>
              <Link href="/gallery" className="btn btn-outline">See our work</Link>
            </div>
          </div>
          <div className="md:col-span-5">
            <div className="gallery-tile">
              <Image src={photoSrc(detail)} alt={detail.alt} fill sizes="(min-width: 768px) 40vw, 100vw" className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-y bg-card" aria-labelledby="how-we-work-title">
        <div className="container-c3 grid gap-10 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-5">
            <p className="eyebrow mb-3 text-muted-foreground">How we work</p>
            <h2 id="how-we-work-title">Designed for the space it&apos;s going in</h2>
          </div>
          <div className="md:col-span-7">
            <p className="lead">
              Before a single balloon is inflated, we look at where it&apos;s going: indoor or outdoor, what the structure will anchor to, whether there&apos;s power for lit numbers, how much sun and wind the spot gets. That decides sizes, technique and materials — so the setup holds through the event and photographs the way it looked when we left.
            </p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {trustFacts.map((f) => (
                <li key={f} className="border-t border-border pt-3 text-caption font-medium">{f}</li>
              ))}
            </ul>
            <Link href="/#how-it-works" className="btn btn-outline mt-8">See the five steps</Link>
          </div>
        </div>
      </section>

      <HonestBlock />

      <CtaBand />
    </>
  )
}
