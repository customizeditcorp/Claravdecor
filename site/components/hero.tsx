import Link from "next/link"
import Image from "next/image"

import { cta } from "@/lib/site"
import { heroPhotos, photoSrc } from "@/lib/photos"

/*
  Home hero — Risk/Trust archetype (design config §3): finished setup photo, Espresso scrim ≥45%,
  ivory text, 70vh mobile / 80vh desktop. Vertical source cropped with object-position center 35%.
  No video, no slider.
*/
export function Hero() {
  const photo = heroPhotos.home
  return (
    <section className="relative flex min-h-[70vh] items-end md:min-h-[80vh]" aria-labelledby="hero-title">
      <Image
        src={photoSrc(photo)}
        alt={photo.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
        style={{ objectPosition: "center 35%" }}
      />
      <div className="hero-scrim-gradient absolute inset-0" aria-hidden="true" />
      <div className="container-c3 relative pb-16 pt-32 md:pb-24 md:pt-40">
        <div className="max-w-3xl text-secondary-foreground">
          <h1 id="hero-title" className="text-secondary-foreground">
            Your celebration, set up and ready. You just walk in and enjoy it.
          </h1>
          <p className="lead mt-6 max-w-2xl text-secondary-muted">
            Book your date, see your design, approve it — and on the day of your event, it&apos;s already done.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={cta.primary.href} className="btn btn-primary">{cta.primary.label}</Link>
            <Link href={cta.secondary.href} className="btn btn-outline-on-dark">{cta.secondary.label}</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
