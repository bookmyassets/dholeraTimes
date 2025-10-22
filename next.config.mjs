/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.sanity.io"], // Allow Sanity images
  },
  async redirects() {
    return [
      {
        source: '/projects/:slug*',
        destination: '/dholera-residential-plots/:slug*', 
        permanent: true
      },
      {
        source: "/DholeraSIR/mega-industries",
        destination: "/dholera-sir/mega-industries",
        permanent: true,
      },
      {
        source: "/DholeraSIR/Mega-Industries-Presence",
        destination: "/dholera-sir/mega-industries",
        permanent: true,
      },

      {
        source: "/posts/paradise-2",
        destination: "/projects/paradise-2",
        permanent: true,
      },
      {
        source: "/DholeraSIR/About",
        destination: "/dholera-sir/dholera-sir",
        permanent: true,
      },
      {
        source: "/pages/Blogs",
        destination: "/dholera-updates/blogs",
        permanent: true,
      },
      {
        source: "/posts/maple",
        destination: "/projects/maple",
        permanent: true,
      },
      {
        source: "/posts/marina-bay",
        destination: "/projects/marina-bay",
        permanent: true,
      },
      {
        source: "/posts/orchid-township",
        destination: "/projects/orchid-township",
        permanent: true,
      },
      {
        source: "/pages/projects",
        destination: "/projects",
        permanent: true,
      },
      {
        source: "/posts/paradise-1",
        destination: "/projects/paradise-1",
        permanent: true,
      },
      {
        source: "/contact",
        destination: "/contact/inquiry",
        permanent: true,
      },
      {
        source: "/Blogs",
        destination: "/Dholera-Updates/blogs",
        permanent: true,
      },
      {
        source: "/posts/westwyn-county",
        destination: "/projects/westwyn-county",
        permanent: true,
      },
      {
        source: "/posts/dholera-plot-price",
        destination: "/dholera-updates/blogs/dholera-plot-price",
        permanent: true,
      },
      {
        source: "/posts/important-tips-for-buying-plots-in-dholera-smart-city",
        destination:
          "/dholera-updates/blogs/important-tips-for-buying-plots-in-dholera-smart-city",
        permanent: true,
      },
      {
        source: "/Dholera-Updates",
        destination: "/dholera-updates/blogs",
        permanent: true,
      },
      {
        source: "/career",
        destination: "/contact/career",
        permanent: true,
      },
      {
        source: "/DholeraSIR",
        destination: "/dholera-sir/dholera-sir",
        permanent: true,
      },
      {
        source: "/DholeraSIR/Dholera-International-Airport",
        destination: "/dholera-sir/dholera-international-airport",
        permanent: true,
      },
      {
        source: "/posts/paradise-dt",
        destination: "/projects/paradise-2",
        permanent: true,
      },
      {
        source: "/Blogs",
        destination: "/dholera-updates/blogs",
        permanent: true,
      },
      {
        source: "/Dholera",
        destination: "/dholera-sir",
        permanent: true,
      },
      {
        source: "/gallery/siteprogress",
        destination: "/gallery/site-progress",
        permanent: true,
      },
      {
        source: "/pages/sitemap",
        destination: "/sitemap.xml",
        permanent: true,
      },
      {
        source: "/pages/dholeraSIR",
        destination: "/dholera-sir/dholera-sir",
        permanent: true,
      },
      {
        source: "/pages/about",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/pages/contact",
        destination: "/contact/inquiry",
        permanent: true,
      },
      {
        source: "/DholeraSIR/Dholera-Expressway-Six-Lane",
        destination: "/dholera-sir/ahmedabad-dholera-expressway",
        permanent: true,
      },
      {
        source: "/DholeraSIR/Dholera-International-Airport",
        destination: "/dholera-sir/international-airport-dholera",
        permanent: true,
      },
      {
        source:
          "/projects/abcd-building",
        destination:
          "/dholera-sir/abcd-building",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;