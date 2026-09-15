import { business, areasServedAll, type Faq } from "@/lib/site"

export const businessId = `${business.url}/#business`

/**
 * Site-wide LocalBusiness + ProfessionalService (doc 11 §9).
 * SAB with hidden address: no `address` field, ever.
 * aggregateRating is real and public on the GBP (5.0 / 7) — update only when it changes.
 */
export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": businessId,
    name: business.name,
    url: business.url,
    telephone: business.phoneE164,
    email: business.email,
    image: `${business.url}/og-image-1200x630.png`,
    logo: `${business.url}/brand/clarav-lockup-horizontal-taupe.svg`,
    foundingDate: String(business.since),
    founder: { "@type": "Person", name: business.owner },
    sameAs: [business.instagram],
    areaServed: areasServedAll.map((name) => ({ "@type": "City", name })),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "08:00",
        closes: "20:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: business.googleReviews.ratingValue,
      reviewCount: business.googleReviews.reviewCount,
    },
  }
}

export function serviceSchema(opts: { name: string; serviceType: string; description: string; path: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    serviceType: opts.serviceType,
    description: opts.description,
    url: `${business.url}${opts.path}`,
    provider: { "@id": businessId },
    areaServed: areasServedAll.map((name) => ({ "@type": "City", name })),
  }
}

export function faqSchema(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  }
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${business.url}${item.path}`,
    })),
  }
}
