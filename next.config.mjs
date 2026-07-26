/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Static HTML export — GitHub Pages serves plain files, no Node server.
  // `next build` now emits the whole site into ./out.
  output: "export",

  // Pages has no image optimizer, so next/image must serve the files as-is.
  images: { unoptimized: true },

  // Emit /work/index.html instead of /work.html, so clean URLs resolve on Pages.
  trailingSlash: true,

  // NOTE: redirects() and rewrites() do nothing in a static export (there is no
  // server to run them), so the old /clients → /work redirect was removed. If
  // that path needs to keep working, add a static app/clients/page.js stub.
};

export default nextConfig;
