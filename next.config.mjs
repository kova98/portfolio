/** @type {import('next').NextConfig} */
const nextConfig = {
  // TODO: remove and fix errors when i get the time
  typescript: {
    ignoreBuildErrors: true,
  },
  async rewrites() {
    return [
      {
        source: "/ingest/static/:path*",
        destination: "https://eu-assets.i.posthog.com/static/:path*",
      },
      {
        source: "/ingest/:path*",
        destination: "https://eu.i.posthog.com/:path*",
      },
      {
        source: "/ingest/decide",
        destination: "https://eu.i.posthog.com/decide",
      },
      {
        source: '/i',
        destination: 'https://api.barelytics.io/i',
      },
    ];
  },
  // This is required to support PostHog trailing slash API requests
  skipTrailingSlashRedirect: true,
}

export default nextConfig;
