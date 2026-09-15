import type { Metadata } from "next"
import Link from "next/link"

import { PageHero } from "@/components/page-hero"
import { GalleryGrid } from "@/components/gallery-grid"
import { CtaBand } from "@/components/cta-band"
import { JsonLd } from "@/components/json-ld"
import { pageMeta } from "@/lib/site"
import { galleryGroups, heroPhotos, photos } from "@/lib/photos"
import { breadcrumbSchema } from "@/lib/schema"

const path = "/gallery"

export const metadata: Metadata = {
  title: { absolute: pageMeta.gallery.title },
  description: pageMeta.gallery.description,
  alternates: { canonical: path },
  openGraph: { title: pageMeta.gallery.title, description: pageMeta.gallery.description, url: path },
}

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Gallery", path },
]

/*
  Gallery — the central axis of the portfolio-first pattern. Filters are plain anchor links
  (server-rendered); every photo is in the initial HTML with its alt. Each group links to its
  service page to sustain the gallery ↔ service cross-link (doc 11 §7).
*/
export default function GalleryPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />

      <PageHero photo={heroPhotos.gallery} title={pageMeta.gallery.h1} crumbs={crumbs} eyebrow={`${photos.length} real setups · North Dallas`} position="center 30%" />

      <nav aria-label="Filter by event type" className="sticky top-[72px] z-40 border-b border-border bg-background/95 backdrop-blur-sm">
        <div className="container-c3 flex gap-1 overflow-x-auto py-3">
          {galleryGroups.map((g) => (
            <a key={g.id} href={`#${g.id}`} className="whitespace-nowrap rounded-md px-3 py-2 text-caption font-medium hover:bg-muted">
              {g.label} <span className="text-muted-foreground">({g.photos.length})</span>
            </a>
          ))}
        </div>
      </nav>

      {galleryGroups.map((g, i) => (
        <section key={g.id} id={g.id} className={`section-y ${i % 2 ? "bg-card" : "bg-background"}`} aria-labelledby={`${g.id}-title`}>
          <div className="container-c3">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <h2 id={`${g.id}-title`}>{g.label}</h2>
              {g.href && (
                <Link href={g.href} className="btn btn-outline">{g.hrefLabel}</Link>
              )}
            </div>
            {g.id === "quinceanera-style" && (
              <p className="mt-3 text-caption text-muted-foreground">Recent setups closest in style to a quinceañera — shimmer walls, garlands and milestone numbers.</p>
            )}
            <GalleryGrid photos={g.photos} columns={4} className="mt-8" priorityCount={i === 0 ? 4 : 0} />
          </div>
        </section>
      ))}

      <CtaBand title="Like what you see? Tell us about your event" />
    </>
  )
}
