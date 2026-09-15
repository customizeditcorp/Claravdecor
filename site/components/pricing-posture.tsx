import Link from "next/link"

import { pricing } from "@/lib/site"

/* Pricing posture — anchor on $250, no figure for full design (Addendum C4). */
export function PricingPosture() {
  return (
    <section id="pricing" className="section-y bg-background" aria-labelledby="pricing-title">
      <div className="container-c3 grid gap-10 md:grid-cols-12 md:gap-16">
        <div className="md:col-span-5">
          <p className="eyebrow mb-3 text-muted-foreground">Pricing</p>
          <h2 id="pricing-title">Start from {pricing.anchor}</h2>
        </div>
        <div className="md:col-span-7">
          <p className="lead">
            Our organic balloon garland — {pricing.garlandSpec} — is the easiest way to start. Full event design is quoted around your space and your vision. {pricing.quoteTerms}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/balloon-garlands" className="btn btn-secondary">See garland details</Link>
            <Link href="/full-event-design" className="btn btn-outline">Explore full event design</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
