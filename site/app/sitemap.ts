import type { MetadataRoute } from "next"

import { business, services } from "@/lib/site"

export default function sitemap(): MetadataRoute.Sitemap {
  const base = business.url
  const now = new Date()

  const staticRoutes: { path: string; priority: number }[] = [
    { path: "", priority: 1 },
    { path: "/gallery", priority: 0.9 },
    { path: "/service-areas", priority: 0.7 },
    { path: "/reviews", priority: 0.7 },
    { path: "/about", priority: 0.6 },
    { path: "/contact", priority: 0.8 },
  ]

  return [
    ...staticRoutes.map((r) => ({ url: `${base}${r.path}`, lastModified: now, changeFrequency: "monthly" as const, priority: r.priority })),
    ...services.map((s) => ({ url: `${base}/${s.slug}`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.9 })),
  ]
}
