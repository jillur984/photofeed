/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        pathname: '/**', // This allows any path from images.pexels.com
      },
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc',
        pathname: '/**', 
      }
    ],
  },
};

export default nextConfig;
