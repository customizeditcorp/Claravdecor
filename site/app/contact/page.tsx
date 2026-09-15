import type { Metadata } from "next"
import { Phone, Mail, Instagram, Clock } from "lucide-react"

import { PageHero } from "@/components/page-hero"
import { ContactForm } from "@/components/contact-form"
import { JsonLd } from "@/components/json-ld"
import { pageMeta, business, cta, faqs } from "@/lib/site"
import { heroPhotos } from "@/lib/photos"
import { breadcrumbSchema, faqSchema } from "@/lib/schema"
import { FaqSection } from "@/components/faq"

const path = "/contact"

export const metadata: Metadata = {
  title: { absolute: pageMeta.contact.title },
  description: pageMeta.contact.description,
  alternates: { canonical: path },
  openGraph: { title: pageMeta.contact.title, description: pageMeta.contact.description, url: path },
}

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Contact", path },
]

const contactFaqs = [faqs.cost, faqs.deposit, faqs.shortNotice]

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <JsonLd data={faqSchema(contactFaqs)} />

      <PageHero photo={heroPhotos.contact} title={pageMeta.contact.h1} crumbs={crumbs} eyebrow="Free quote · no obligation" position="center 45%" />

      <section id="quote" className="section-y bg-background" aria-labelledby="quote-title">
        <div className="container-c3 grid gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-4">
            <h2 id="quote-title" className="!text-h3">The fastest ways to reach us</h2>
            <p className="mt-4 text-muted-foreground">{cta.responseTime} Text is usually quickest.</p>
            <ul className="mt-8 space-y-5">
              <li className="flex items-start gap-3 border-t border-border pt-4">
                <Phone className="mt-1 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                <div>
                  <a href={business.smsHref} className="font-semibold hover:text-primary">Text or call {business.phone}</a>
                  <p className="text-caption text-muted-foreground">English and Spanish</p>
                </div>
              </li>
              <li className="flex items-start gap-3 border-t border-border pt-4">
                <Instagram className="mt-1 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                <div>
                  <a href={business.instagram} className="font-semibold hover:text-primary" rel="noopener">Instagram DM {business.instagramHandle}</a>
                  <p className="text-caption text-muted-foreground">Send us the inspiration photo there</p>
                </div>
              </li>
              <li className="flex items-start gap-3 border-t border-border pt-4">
                <Mail className="mt-1 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                <div>
                  <a href={`mailto:${business.email}`} className="font-semibold hover:text-primary">{business.email}</a>
                </div>
              </li>
              <li className="flex items-start gap-3 border-t border-border pt-4">
                <Clock className="mt-1 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                <div>
                  <p className="font-semibold">{business.hours}</p>
                  <p className="text-caption text-muted-foreground">Service-area business based in {business.baseArea}. We come to you.</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="md:col-span-8">
            <ContactForm />
          </div>
        </div>
      </section>

      <FaqSection faqs={contactFaqs} title="Before you send it" />
    </>
  )
}
