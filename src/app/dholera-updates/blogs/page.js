import { getblogs } from "@/sanity/lib/api";
import BlogCard from "./BlogCard";
import TrendingBlogItem from "./TrendingBlog";
import hero from "@/assets/blog-hero.webp";
import heroM from "@/assets/blog-m-v.webp";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import LeadForm from "../../dholera-sir/LeadForm";
import Link from "next/link";

export default async function BlogsPage() {
  const posts = await getblogs();

  // Add error handling for post data
  const safePosts = posts.map((post) => ({
    ...post,
    author: post.author || "Dholera Times",
    mainImage: post.mainImage || null,
    slug: post.slug || { current: "#" },
  }));

  const trendingBlogs = safePosts.slice(0, 2);
  const regularBlogs = safePosts;

  return (
    <div className="min-h-screen bg-white">
      <link
        rel="canonical"
        href="https://www.dholeratimes.com/dholera-updates/blogs"
      />
      <meta name="robots" content="index, dofollow" />

      {/* Hero Section */}
      <div className="relative md:h-96 w-full h-[50vh] overflow-hidden">
        <Image
          src={hero}
          alt="Dholera Skyline"
          className="object-cover w-full h-[50vh] max-sm:hidden"
          priority
        />
        <Image
          src={heroM}
          alt="Dholera Skyline"
          className="object-cover w-full h-[50vh] md:hidden"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-6 py-10">
            <h1 className="text-2xl md:text-4xl font-bold text-white mb-2">
              Dholera Smart City Blogs
            </h1>
            <p className="text-white mb-6">
              Keep up with the latest developments in Dholera SIR
            </p>
            <div className="flex justify-center">
              {" "}
              {/* Added this wrapper div */}
              <Link href="https://wa.me/+919958993549">
              <button className="bg-[#b69b5e] hover:bg-[#d3b36b] text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200 shadow-md flex items-center space-x-2">
                <FaWhatsapp className="text-lg font-semibold" />
                <span>Invest Today</span>
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-8xl mx-auto px-4 py-8 md:py-12 ml-4 md:ml-12 mr-4 md:mr-12">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 max-sm:text-left max-sm:text-3xl">
          {" "}
          Explore Dholera SIR Growth and Updates
        </h2>
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Trending Section - Left Sidebar */}

          {/* Blog Grid */}
          <div className="lg:w-3/4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 ">
              {regularBlogs.map((post) => (
                <BlogCard key={post._id} post={post} />
              ))}
            </div>
          </div>

          <div className="lg:w-1/4 sticky top-6">
           <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-[#d7b56d]  mb-8">
                      <LeadForm title="Secure your investment in Dholera Smart City in just under ₹10 lakh" buttonName="Know More" />
                    </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#d7b56d] ">
              <h2 className="text-2xl text-red-500 font-bold mb-6">
                Recent Posts
              </h2>
              <div className="space-y-6">
                {trendingBlogs.map((post) => (
                  <TrendingBlogItem key={post._id} post={post} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
