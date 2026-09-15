/** @type {import('next').NextConfig} */
const nextConfig = {
  // c3 guardrails: no output:'export', no images.unoptimized, no ignoreBuildErrors.
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [360, 480, 640, 768, 1024, 1280, 1536, 1920],
  },
}

export default nextConfig
