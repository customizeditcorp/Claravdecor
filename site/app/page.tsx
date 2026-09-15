import type { Metadata } from "next"

import { Hero } from "@/components/hero"
import { TrustBar } from "@/components/trust-bar"
import { ProcessSteps } from "@/components/process-steps"
import { HonestBlock } from "@/components/honest-block"
import { PortfolioCards } from "@/components/portfolio-cards"
import { ReviewsSection } from "@/components/reviews-section"
import { PricingPosture } from "@/components/pricing-posture"
import { CtaBand } from "@/components/cta-band"
import { pageMeta } from "@/lib/site"

export const metadata: Metadata = {
  title: { absolute: pageMeta.home.title },
  description: pageMeta.home.description,
  alternates: { canonical: "/" },
  openGraph: { title: pageMeta.home.title, description: pageMeta.home.description, url: "/" },
}

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
      <ProcessSteps />
      <HonestBlock />
      <PortfolioCards />
      <ReviewsSection />
      <PricingPosture />
      <CtaBand />
    </>
  )
}
