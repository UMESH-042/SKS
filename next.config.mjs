/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['placeholder.svg'],
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '**',
        },
      ],
    },
    eslint: {
      // Warning: This allows production builds to successfully complete even if
      // your project has ESLint errors.
      ignoreDuringBuilds: true,
    },
  };
  
  export default nextConfig;
  