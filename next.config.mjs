/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // The env object is for exposing server environment variables to the client
  // Server-side environment variables from .env.local are automatically available
  // without needing to be listed here
  env: {
    // Only include environment variables here that you want to expose to the browser
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;