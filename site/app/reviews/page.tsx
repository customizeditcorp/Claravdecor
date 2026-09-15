import type { Metadata } from "next"

import { PageHero } from "@/components/page-hero"
import { ReviewQuote } from "@/components/reviews-section"
import { CtaBand } from "@/components/cta-band"
import { JsonLd } from "@/components/json-ld"
import { pageMeta, reviews, business } from "@/lib/site"
import { heroPhotos } from "@/lib/photos"
import { breadcrumbSchema } from "@/lib/schema"

const path = "/reviews"

export const metadata: Metadata = {
  title: { absolute: pageMeta.reviews.title },
  description: pageMeta.reviews.description,
  alternates: { canonical: path },
  openGraph: { title: pageMeta.reviews.title, description: pageMeta.reviews.description, url: path },
}

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Reviews", path },
]

/*
  7 real Google reviews, quoted as text with the reviewer's name as it appears on Google.
  No per-review `Review` schema until a verified export with dates exists (doc 11 §9).
  AggregateRating (5.0 / 7) lives in the site-wide LocalBusiness schema.
  "Leave us a review" link: [TO CONFIRM] Place ID — omitted until we have it.
*/
export default function ReviewsPage() {
  const withText = reviews.filter((r) => r.excerpt)
  const pending = reviews.filter((r) => !r.excerpt)

  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />

      <PageHero photo={heroPhotos.reviews} title={pageMeta.reviews.h1} crumbs={crumbs} eyebrow={`${business.googleReviews.ratingValue} average · ${business.googleReviews.reviewCount} Google reviews`} position="center 30%" />

      <section className="section-y bg-background" aria-labelledby="reviews-list-title">
        <div className="container-c3">
          <h2 id="reviews-list-title" className="sr-only">All reviews</h2>
          <p className="lead max-w-3xl text-muted-foreground">
            Every review below is public on our Google Business Profile and quoted in the language it was written in. Three of the seven come from clients who book us again and again — a school, an academy, and a mom who calls every birthday.
          </p>
          <div className="mt-12 grid gap-10 md:grid-cols-2 md:gap-x-16">
            {withText.map((r) => (
              <ReviewQuote key={r.name} review={r} />
            ))}
            {pending.map((r) => (
              <figure key={r.name} className="border-t border-border pt-6">
                <p className="text-muted-foreground">{r.context} — 5-star Google review.</p>
                <p className="pending-note mt-2 text-caption text-accent" data-pending="review-export">[Full review text pending verified export]</p>
                <figcaption className="mt-4 text-caption text-muted-foreground">
                  <span className="font-semibold text-foreground">{r.name}</span> · Google review
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="pending-note mt-12 text-caption text-muted-foreground" data-pending="review-dates">
            Review dates and full text will be added from the verified Google export.
          </p>
        </div>
      </section>

      <CtaBand title="Ready to plan yours? Tell us about your event" />
    </>
  )
}
