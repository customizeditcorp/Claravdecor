import Link from "next/link"
import Image from "next/image"

import { byFile, photoSrc } from "@/lib/photos"

/*
  Home "Portfolio by event type" — ServiceGrid treatment: --card, --border, --shadow-card, radius,
  4:5 image on top, optional 3px theme accent line (one accent per page max → used per card, not as fill).
*/
const cards = [
  { label: "Birthday", photo: byFile("birthday-balloon-decor-superhero-dessert-table-02.jpg"), href: "/gallery#birthday", page: "/birthday-and-baby-shower-decor" },
  { label: "Baby Shower & Gender Reveal", photo: byFile("baby-shower-balloon-decor-arch-backdrop-blue-tan-bear-01.jpg"), href: "/gallery#baby-shower-gender-reveal", page: "/birthday-and-baby-shower-decor" },
  { label: "Quinceañera", photo: byFile("birthday-balloon-decor-shimmer-wall-pink-garland-13-01.jpg"), href: "/gallery#quinceanera-style", page: "/quinceanera-decorations" },
  { label: "Graduation", photo: byFile("graduation-balloon-decor-garage-arch-red-black-01.jpg"), href: "/gallery#graduation", page: "/full-event-design#schools-corporate" },
  { label: "Corporate & School", photo: byFile("corporate-balloon-decor-office-star-bouquets-blue-01.jpg"), href: "/gallery#corporate-school", page: "/full-event-design#schools-corporate" },
]

export function PortfolioCards() {
  return (
    <section id="portfolio" className="section-y bg-card" aria-labelledby="portfolio-title">
      <div className="container-c3">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow mb-3 text-muted-foreground">Portfolio by event type</p>
            <h2 id="portfolio-title">See it before it&apos;s your turn</h2>
          </div>
          <Link href="/gallery" className="btn btn-outline">See all our work</Link>
        </div>
        <ul className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {cards.map((c) => (
            <li key={c.label} className="overflow-hidden rounded-lg border border-border bg-card shadow-card">
              <Link href={c.href} className="block">
                <div className="gallery-tile">
                  <Image src={photoSrc(c.photo)} alt={c.photo.alt} fill sizes="(min-width: 1024px) 20vw, (min-width: 768px) 33vw, 50vw" className="object-cover" />
                </div>
              </Link>
              <div className="p-4">
                <h3 className="!text-h4 !font-sans !font-semibold">
                  <Link href={c.href} className="hover:text-primary">{c.label}</Link>
                </h3>
                <Link href={c.page} className="mt-1 inline-block text-caption text-muted-foreground underline-offset-4 hover:text-primary hover:underline">
                  Service details
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
