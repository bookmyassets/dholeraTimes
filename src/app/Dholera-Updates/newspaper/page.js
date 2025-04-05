import { getUpdates } from "@/sanity/lib/api";
import BlogCard from "./NPCard";
import hero from "@/assets/news.webp";
import Image from "next/image";

export default async function BlogsPage() {
  const posts = await getUpdates();

  // Add error handling for post data
  const safePosts = posts.map((post) => ({
    ...post,
    author: post.author || "Dholera Times",
    mainImage: post.mainImage || null,
    slug: post.slug || { current: "#" },
  }));

  const trendingBlogs = safePosts.slice(0, 3);
  const regularBlogs = safePosts;

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}

      {/* Hero Section */}
      <div className="relative md:h-96 w-full h-[50vh] overflow-hidden">
        <Image
          src={hero}
          alt="Dholera Skyline"
          className="w-full h-[50vh]"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-6 py-10 ">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
              Dholera Smart City on News Paper Headlines
            </h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-8xl mx-auto px-4 py-8 md:py-12 ml-4 md:ml-12 mr-4 md:mr-12">
      <h2 className="text-4xl font-bold text-center mb-8 max-sm:text-left max-sm:text-3xl"> News Paper and Magazine Pages </h2>
        <div className="flex flex-col max-sm:flex-col-reverse lg:flex-row gap-6">
          {/* Trending Section - Left Sidebar */}
          

          {/* Blog Grid */}
          <div className="lg:w-3/4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 ">
              {regularBlogs.map((post) => (
                <BlogCard key={post._id} post={post} />

              ))}
            </div>
          </div>

          
        </div>
      </div>
    </div>
  );
}
