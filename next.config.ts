import type { NextConfig } from "next";
import bundleAnalyzer from "@next/bundle-analyzer";

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig: NextConfig = {
  compress: true,
  poweredByHeader: false,

  // Tree-shake react-icons and framer-motion – eliminates the 3.7 MB unused-JS problem
  experimental: {
    optimizePackageImports: ["react-icons", "react-icons/fa6", "framer-motion"],
  },

  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000,
  },

  async headers() {
    return [
      // ── Security headers for every route ───────────────────────────────
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-DNS-Prefetch-Control", value: "on" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), payment=()",
          },
          { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "Content-Security-Policy",
            value:
              "default-src 'self'; " +
              "base-uri 'self'; " +
              "object-src 'none'; " +
              "frame-ancestors 'none'; " +
              "script-src 'self' 'unsafe-inline'; " +
              "style-src 'self' 'unsafe-inline'; " +
              "font-src 'self' data:; " +
              "img-src 'self' data: blob: https:; " +
              "connect-src 'self' https://api.emailjs.com; " +
              "form-action 'self'; " +
              "upgrade-insecure-requests;",
          },
        ],
      },

      // ── Long-lived cache for ALL static images (fixes the 511 KiB warning) ──
      {
        source: "/:path*.:ext(svg|jpg|jpeg|png|gif|ico|webp|avif|pdf|woff|woff2|ttf|otf)",
        locale: false,
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },

      // ── Long-lived cache for static JS/CSS chunks ───────────────────────
      {
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default withBundleAnalyzer(nextConfig);
