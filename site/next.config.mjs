/** @type {import('next').NextConfig} */
const nextConfig = {
  // c3 guardrails: no output:'export', no images.unoptimized, no ignoreBuildErrors.
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [360, 480, 640, 768, 1024, 1280, 1536, 1920],
  },
  async headers() {
    return [
      {
        // Never let the *.vercel.app alias/deployment URLs get indexed as the real site.
        // The canonical host is claravdecor.com (lib/site.ts); this header only fires on Vercel hosts.
        source: "/:path*",
        has: [{ type: "host", value: "(.*\\.)?vercel\\.app" }],
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
    ]
  },
}

export default nextConfig
