/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // The Clients page became /work during the rebrand — keep old links alive.
  async redirects() {
    return [{ source: "/clients", destination: "/work", permanent: true }];
  },
};

export default nextConfig;
