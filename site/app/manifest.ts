import type { MetadataRoute } from "next"

import { business } from "@/lib/site"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${business.name} — ${business.descriptor}`,
    short_name: business.name,
    start_url: "/",
    display: "browser",
    background_color: "#F7F3EE",
    theme_color: "#B69572",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  }
}
