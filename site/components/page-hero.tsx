import Image from "next/image"

import { Breadcrumbs, type Crumb } from "@/components/breadcrumbs"
import { photoSrc, type Photo } from "@/lib/photos"

/* Inner-page hero: same treatment as home, shorter. H1 lives here (one per page). */
export function PageHero({ photo, title, crumbs, eyebrow, position = "center 35%" }: { photo: Photo; title: string; crumbs: Crumb[]; eyebrow?: string; position?: string }) {
  return (
    <section className="relative flex min-h-[46vh] items-end md:min-h-[52vh]">
      <Image src={photoSrc(photo)} alt={photo.alt} fill priority sizes="100vw" className="object-cover" style={{ objectPosition: position }} />
      <div className="hero-scrim-gradient absolute inset-0" aria-hidden="true" />
      <div className="container-c3 relative pb-12 pt-28 md:pb-16">
        <div className="max-w-3xl">
          <Breadcrumbs items={crumbs} onDark />
          {eyebrow && <p className="eyebrow mt-5 text-accent">{eyebrow}</p>}
          <h1 className="mt-3 text-secondary-foreground">{title}</h1>
        </div>
      </div>
    </section>
  )
}
