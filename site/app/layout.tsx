import type { Metadata } from "next"
import type React from "react"
import { Cormorant_Garamond, Montserrat } from "next/font/google"

import "./globals.css"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { JsonLd } from "@/components/json-ld"
import { localBusinessSchema } from "@/lib/schema"
import { business, pageMeta } from "@/lib/site"

/* Brandboard §3: exactly seven cuts, display=swap. */
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  variable: "--font-display",
  display: "swap",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL(business.url),
  title: {
    default: pageMeta.home.title,
    template: "%s | ClaravDecor",
  },
  description: pageMeta.home.description,
  applicationName: business.name,
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon-180.png",
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    type: "website",
    siteName: business.name,
    locale: "en_US",
    url: business.url,
    title: pageMeta.home.title,
    description: pageMeta.home.description,
    images: [{ url: "/og-image-1200x630.png", width: 1200, height: 630, alt: `${business.name} — ${business.descriptor}` }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageMeta.home.title,
    description: pageMeta.home.description,
    images: ["/og-image-1200x630.png"],
  },
  alternates: { canonical: "/" },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${montserrat.variable}`}>
      <body>
        <JsonLd data={localBusinessSchema()} />
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-card focus:px-4 focus:py-2">
          Skip to content
        </a>
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main id="main" className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
