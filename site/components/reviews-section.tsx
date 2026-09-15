import Link from "next/link"

import { business, homeReviews, type Review } from "@/lib/site"
import { Reveal } from "@/components/reveal"

/* Quotes with attribution, on --muted, no cards, no stars animation, no rating markup here. */
export function ReviewQuote({ review, className = "" }: { review: Review; className?: string }) {
  return (
    <figure className={`border-t border-border pt-6 ${className}`}>
      <blockquote lang={review.lang} className="font-display text-[1.375rem] leading-snug text-foreground">
        &ldquo;{review.excerpt}&rdquo;
      </blockquote>
      <figcaption className="mt-4 text-caption text-muted-foreground">
        <span className="font-semibold text-foreground">{review.name}</span>
        {review.context && <span> · {review.context}</span>}
        <span> · Google review</span>
      </figcaption>
    </figure>
  )
}

export function ReviewsSection() {
  return (
    <section id="reviews" className="section-y bg-muted" aria-labelledby="reviews-title">
      <div className="container-c3">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow mb-3 text-muted-foreground">Reviews</p>
            <h2 id="reviews-title">What families and partners say</h2>
          </div>
          <p className="text-caption text-muted-foreground">
            {business.googleReviews.ratingValue} average · {business.googleReviews.reviewCount} Google reviews
          </p>
        </div>
        <div className="mt-10 grid gap-8 md:grid-cols-3 md:gap-10">
          {homeReviews.map((r, i) => (
            <Reveal key={r.name} delay={i * 80}>
              <ReviewQuote review={r} />
            </Reveal>
          ))}
        </div>
        <Link href="/reviews" className="btn btn-outline mt-10">Read all reviews</Link>
      </div>
    </section>
  )
}
