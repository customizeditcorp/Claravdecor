import Link from "next/link"
import { Check } from "lucide-react"

import { cta, type Service } from "@/lib/site"
import { cn } from "@/lib/utils"

const accentClass = { sage: "border-t-4 border-theme-sage", blue: "border-t-4 border-theme-blue", blush: "border-t-4 border-theme-blush" }

/* Intro (result-first) + What's included. Theme accent = one 4px line per page, never text (brandboard §2). */
export function ServiceIntro({ service, secondaryHref = "/gallery", secondaryLabel = "See our work" }: { service: Service; secondaryHref?: string; secondaryLabel?: string }) {
  return (
    <section className="section-y bg-background" aria-labelledby="included-title">
      <div className="container-c3 grid gap-12 md:grid-cols-12 md:gap-16">
        <div className="md:col-span-6">
          <p className="lead">{service.intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={cta.primary.href} className="btn btn-primary">{service.ctaLabel}</Link>
            <Link href={secondaryHref} className="btn btn-outline">{secondaryLabel}</Link>
          </div>
        </div>
        <div className={cn("md:col-span-6", service.themeAccent && `${accentClass[service.themeAccent]} pt-6`)}>
          <h2 id="included-title" className="!text-h3">What&apos;s included</h2>
          <ul className="mt-6 space-y-4">
            {service.included.map((item) => (
              <li key={item} className="flex gap-3 border-t border-border pt-4">
                <Check className="mt-1 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

/* Three-line process summary linking to the full five steps on the home page. */
export function ProcessSummary({ title = "Designed around your space, approved before we build", body }: { title?: string; body?: string }) {
  return (
    <section className="section-y bg-card" aria-labelledby="process-summary-title">
      <div className="container-c3 grid gap-10 md:grid-cols-12 md:gap-16">
        <div className="md:col-span-5">
          <p className="eyebrow mb-3 text-muted-foreground">The process</p>
          <h2 id="process-summary-title">{title}</h2>
        </div>
        <div className="md:col-span-7">
          <p className="lead">
            {body ?? "Every full design starts with reading your actual space — indoor or outdoor, surface, power, weather — so the balloons, technique and anchoring are built to hold. Once your date is booked, we design it and send you a mockup before we build anything."}
          </p>
          <Link href="/#how-it-works" className="btn btn-outline mt-8">See our full process</Link>
        </div>
      </div>
    </section>
  )
}
