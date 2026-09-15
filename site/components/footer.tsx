import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, Clock, MapPin, Instagram } from "lucide-react"

import { business, cta, nav, areas } from "@/lib/site"

/* Footer — --secondary surface, lockup ivory, canonical NAP in plain text (07-NAP §1). No address: SAB. */
export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container-c3 py-12 md:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="mb-5 inline-block" aria-label={`${business.name} — home`}>
              <Image
                src="/brand/clarav-lockup-horizontal-ivory.svg"
                alt={`${business.name} ${business.descriptor}`}
                width={180}
                height={60}
                className="h-14 w-auto"
              />
            </Link>
            <p className="text-caption leading-relaxed text-secondary-muted">
              Custom event decor and balloon design for North Dallas. Your design as a mockup before the event, installed before your first guest, takedown included.
            </p>
            <a
              href={business.instagram}
              className="mt-4 inline-flex items-center gap-2 text-caption text-secondary-muted hover:text-accent"
              rel="noopener"
            >
              <Instagram className="h-4 w-4 text-accent" aria-hidden="true" />
              {business.instagramHandle}
            </a>
          </div>

          <div>
            <h2 className="eyebrow mb-4 !font-sans !text-eyebrow text-accent">Services</h2>
            <ul className="space-y-2">
              {nav.services.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="text-caption text-secondary-muted hover:text-accent">{s.label}</Link>
                </li>
              ))}
            </ul>
            <h2 className="eyebrow mb-4 mt-8 !font-sans !text-eyebrow text-accent">Company</h2>
            <ul className="space-y-2">
              {nav.main.map((m) => (
                <li key={m.href}>
                  <Link href={m.href} className="text-caption text-secondary-muted hover:text-accent">{m.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="eyebrow mb-4 !font-sans !text-eyebrow text-accent">Where we work</h2>
            <p className="mb-2 text-caption text-secondary-foreground">{areas.coreNote}</p>
            <p className="text-caption text-secondary-muted">{areas.core.join(" · ")}</p>
            <p className="mb-2 mt-4 text-caption text-secondary-foreground">{areas.extendedNote}</p>
            <p className="text-caption text-secondary-muted">{areas.extended.join(" · ")}</p>
            <Link href="/service-areas" className="mt-4 inline-block text-caption text-accent underline-offset-4 hover:underline">
              All service areas
            </Link>
          </div>

          <div>
            <h2 className="eyebrow mb-4 !font-sans !text-eyebrow text-accent">Contact</h2>
            <address className="space-y-3 not-italic">
              <p className="text-caption font-semibold text-secondary-foreground">{business.name} · {business.descriptor}</p>
              <p className="flex items-start gap-2.5 text-caption text-secondary-muted">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                <span>Service-area business based in {business.baseArea}. By appointment — we come to you.</span>
              </p>
              <p className="flex items-center gap-2.5 text-caption text-secondary-muted">
                <Phone className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                <a href={business.phoneHref} className="hover:text-accent">{business.phone}</a>
              </p>
              <p className="flex items-center gap-2.5 text-caption text-secondary-muted">
                <Mail className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                <a href={`mailto:${business.email}`} className="hover:text-accent">{business.email}</a>
              </p>
              <p className="flex items-center gap-2.5 text-caption text-secondary-muted">
                <Clock className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                <span>{business.hours}</span>
              </p>
            </address>
            <Link href={cta.primary.href} className="btn btn-on-dark mt-6 !min-h-[44px] !px-5 !py-2.5">
              {cta.primary.label}
            </Link>
          </div>
        </div>

        <div className="mt-10 border-t border-secondary-foreground/15 pt-6 text-center text-caption text-secondary-muted">
          <p>&copy; {year} {business.name}. All rights reserved. Serving North Dallas since {business.since}.</p>
        </div>
      </div>
    </footer>
  )
}
