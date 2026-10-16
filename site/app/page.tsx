import type { Metadata } from "next"

import { pageMetadata } from "@/lib/seo"

import { Hero } from "@/components/hero"
import { TrustBar } from "@/components/trust-bar"
import { Definition } from "@/components/definition"
import { ProcessSteps } from "@/components/process-steps"
import { HonestBlock } from "@/components/honest-block"
import { PortfolioCards } from "@/components/portfolio-cards"
import { ReviewsSection } from "@/components/reviews-section"
import { PricingPosture } from "@/components/pricing-posture"
import { CtaBand } from "@/components/cta-band"
import { pageMeta } from "@/lib/site"

export const metadata: Metadata = pageMetadata({ title: pageMeta.home.title, description: pageMeta.home.description, path: "/" })

/*
  Home — section order from the Risk/Trust lever (Addendum C0, doc 11 §2):
  1 Hero · 2 How it works · 3 What we handle / don't · 4 Portfolio by event type ·
  5 Reviews with attribution · 6 From $250 · 7 CTA
*/
export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Definition>
        ClaravDecor is an event decor studio in North Dallas that designs balloon garlands, backdrops and full event setups for birthdays, baby showers, quinceañeras, school and corporate events. You see your design as a mockup before the event, it&apos;s installed before your first guest, and takedown is included. Garlands start at $250; full designs are quoted around your space.
      </Definition>
      <ProcessSteps />
      <HonestBlock />
      <PortfolioCards />
      <ReviewsSection />
      <PricingPosture />
      <CtaBand />
    </>
  )
}
