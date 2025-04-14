/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['cdn.sanity.io'], // Allow Sanity images
    },
    async redirects() {
      return [
        {
          source: '/INFOPACK',
          destination: '/infopack',
          permanent: true,
        },
        {
          source: '/Infopack',
          destination: '/infopack',
          permanent: true,
        },
        {
          source: '/INFOpack',
          destination: '/infopack',
          permanent: true,
        },
      ];
    },
  };
  
export default nextConfig;
  