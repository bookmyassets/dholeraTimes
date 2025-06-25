/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['cdn.sanity.io'], // Allow Sanity images
    },
    async redirects(){
      return [
        {
  source: '/DholeraSIR/mega-industries',
  destination: '/Dholera-SIR/mega-industries',
  permanent: true,
},
{
  source: '/DholeraSIR/Mega-Industries-Presence',
  destination: '/Dholera-SIR/mega-industries',
  permanent: true,
},
{
  source: '/sitemap.xml',
  destination: '/sitemap',
  permanent: true,
},
{
  source: '/infopack/Inventory',
  destination: '/infopack/inventory',
  permanent: true,
},
{
  source: '/Dholera-Updates/latest-updates/delhi-mumbai-industrial-corridor-set-to-transform-india-with-usd-100-billion-investment',
  destination: '/Dholera-Updates/latest-news/delhi-mumbai-industrial-corridor-set-to-transform-india-with-usd-100-billion-investment',
  permanent: true,
},
{
  source: '/Dholera-Updates/latest-updates/gujarat-government-seeks-rs-40-783-crore-grant-from-centre-for-semiconductor-industry',
  destination: '/Dholera-Updates/latest-news/gujarat-government-seeks-rs-40-783-crore-grant-from-centre-for-semiconductor-industry',
  permanent: true,
},
{
  source: '/posts/paradise-2',
  destination: '/projects/paradise-2',
  permanent: true,
},
{
  source: '/DholeraSIR/About',
  destination: '/Dholera-SIR/dholera-sir',
  permanent: true,
},
{
  source: '/pages/Blogs',
  destination: '/Dholera-Updates/blogs',
  permanent: true,
},
{
  source: '/posts/maple',
  destination: '/projects/maple',
  permanent: true,
},
{
  source: '/Dholera-Updates/latest-updates/india-s-first-semiconductor-fab-construction-begins-in-dholera-gujarat',
  destination: '/Dholera-Updates/latest-news/india-s-first-semiconductor-fab-construction-begins-in-dholera-gujarat',
  permanent: true,
},
{
  source: '/posts/marina-bay',
  destination: '/projects/marina-bay',
  permanent: true,
},
{
  source: '/posts/orchid-township',
  destination: '/projects/orchid-township',
  permanent: true,
},
{
  source: '/pages/projects',
  destination: '/projects',
  permanent: true,
},
{
  source: '/posts/paradise-1',
  destination: '/projects/paradise-1',
  permanent: true,
},
{
  source: '/contact',
  destination: '/contact/inquiry',
  permanent: true,
},
{
  source: '/Blogs',
  destination: '/Dholera-Updates/blogs',
  permanent: true,
},
{
  source: '/posts/westwyn-county',
  destination: '/projects/westwyn-county',
  permanent: true,
},
{
  source: '/posts/dholera-plot-price',
  destination: '/Dholera-Updates/blogs/dholera-plot-price',
  permanent: true,
},
{
  source: '/posts/important-tips-for-buying-plots-in-dholera-smart-city',
  destination: '/Dholera-Updates/blogs/important-tips-for-buying-plots-in-dholera-smart-city',
  permanent: true,
},
{
  source: '/Dholera-Updates',
  destination: '/Dholera-Updates/blogs',
  permanent: true,
},
{
  source: '/career',
  destination: '/contact/career',
  permanent: true,
},
{
  source: '/DholeraSIR',
  destination: '/Dholera-SIR/dholera-sir',
  permanent: true,
},
{
  source: '/Dholera-SIR/Abcd-building',
  destination: '/Dholera-SIR/abcd-building',
  permanent: true,
},
{
  source: '/DholeraSIR/Dholera-International-Airport',
  destination: '/Dholera-SIR/dholera-international-airport',
  permanent: true,
}

      ]
    }
    
  };
  
export default nextConfig;
  