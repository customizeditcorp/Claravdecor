import Link from "next/link"
import { Phone, Instagram } from "lucide-react"

import { business, cta } from "@/lib/site"

/* CTA band — on --muted (the dark surface belongs to the trust block). One primary, one outline. */
export function CtaBand({ title = "Tell us about your event and get your free quote", label = cta.primary.label }: { title?: string; label?: string }) {
  return (
    <section className="section-y bg-muted" aria-labelledby="cta-title">
      <div className="container-c3">
        <div className="max-w-3xl">
          <h2 id="cta-title">{title}</h2>
          <p className="lead mt-4 text-muted-foreground">{cta.responseTime}</p>
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Link href={cta.primary.href} className="btn btn-primary">{label}</Link>
          <a href={business.smsHref} className="btn btn-outline">
            <Phone className="h-4 w-4" aria-hidden="true" />
            Text or call {business.phone}
          </a>
          <a href={business.instagram} className="btn btn-outline" rel="noopener">
            <Instagram className="h-4 w-4" aria-hidden="true" />
            Message us on Instagram
          </a>
        </div>
      </div>
    </section>
  )
}
