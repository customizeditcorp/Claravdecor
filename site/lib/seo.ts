import type { Metadata } from "next"

import { business } from "@/lib/site"

/**
 * Per-page metadata with a complete Open Graph + Twitter block.
 * Next replaces (not merges) a page-level `openGraph`, so every page must carry
 * images, type and siteName itself — otherwise shared links lose the preview image.
 */
export function pageMetadata({ title, description, path }: { title: string; description: string; path: string }): Metadata {
  const url = path === "/" ? business.url : `${business.url}${path}`
  const image = { url: "/og-image-1200x630.png", width: 1200, height: 630, alt: `${business.name} — ${business.descriptor}` }
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    openGraph: { type: "website", siteName: business.name, locale: "en_US", url, title, description, images: [image] },
    twitter: { card: "summary_large_image", title, description, images: [image.url] },
  }
}
