/**
 * @type {import("next").NextConfig}
 **/
const nextConfig = {
  experimental: {
    appDir: true,
    swcMinify: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
    dirs: [ "src" ],
  },
};

export default nextConfig;