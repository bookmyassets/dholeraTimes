import { getNews, getUpdates } from "@/sanity/lib/api";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import SidebarWithForm from "./Sidebar";

const formatDate = (dateString) => {
  if (!dateString) return "";

  const date = new Date(dateString);
  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  return date.toLocaleDateString("en-US", options);
};

export default async function New() {
  let posts = [];
  try {
    const postsData = await getNews();
    posts = Array.isArray(postsData) ? postsData : [];
    console.log("Posts data fetched:", posts.length);
  } catch (error) {
    console.error("Error fetching project info:", error);
  }

  const safePosts = posts.map((post) => ({
    ...post,
    mainImage: post.mainImage || null,
    slug: post.slug?.current
      ? { current: post.slug.current }
      : { current: "#" },
  }));

  // Get the 3 most recently published posts for popular articles
  const popularArticles = [...safePosts]
    .sort(
      (a, b) =>
        new Date(b.publishedAt || b._createdAt) -
        new Date(a.publishedAt || a._createdAt)
    )
    .slice(0, 3);

  return (
    <>
      <title>Dholera Latest News & Project Updates | Smart City Progress</title>
      <meta
        name="description"
        content=" Discover the latest on Dholera SIR! Get real-time updates on airport, metro, expressways, and industrial projects to help you make smart investment choices."
      />
      <div className="min-h-screen relative overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 pt-12 pb-16">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content - Blog Posts (comes first on mobile) */}
            <div className="lg:w-2/3 space-y-8 order-1 lg:order-2">
              <div>
                <h1 className="text-4xl font-bold text-[#d3b36b] mb-2">
                  Dholera SIR Latest Updates
                </h1>
                <p className="text-[#151f28] mb-8">
                  Stay updated with the latest insights about Dholera Special
                  Investment Region, infrastructure developments, and smart city
                  investment opportunities.
                </p>
              </div>

              {safePosts.length > 0 ? (
                <div className="space-y-8">
                  {/* Featured Blog Post */}
                  <article className="bg-white rounded-xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-[#d3b36b]/20 hover:scale-[1.02]">
                    <Link
                      href={`/dholera-updates/latest-news/${safePosts[0].slug.current}`}
                    >
                      <div className="h-48 bg-gray-200 flex items-center justify-center overflow-hidden">
                        {safePosts[0].mainImage ? (
                          <Image
                            src={urlFor(safePosts[0].mainImage)
                              .width(800)
                              .height(400)
                              .url()}
                            alt={safePosts[0].title || "Dholera SIR Blog Post"}
                            width={800}
                            height={400}
                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-[#d3b36b]/20 to-[#151f28]/20 flex items-center justify-center">
                            <div className="text-6xl">📰</div>
                          </div>
                        )}
                      </div>
                      <div className="p-6 bg-[#151f28] text-white hover:text-[#d3b36b] transition-colors duration-300">
                        <h2 className="text-xl font-bold mb-3 cursor-pointer">
                          {safePosts[0].title ||
                            "Latest Dholera SIR Investment Updates"}
                        </h2>

                        <p className="mb-4 text-gray-300">
                          {safePosts[0].description ||
                            "Discover the latest developments and investment opportunities in India's first planned smart city - Dholera Special Investment Region."}
                        </p>
                        <div className="flex items-center justify-between">
                          <p className="text-sm text-gray-400">
                            {formatDate(
                              safePosts[0].publishedAt ||
                                safePosts[0]._createdAt
                            )}
                          </p>

                          <button className="font-medium hover:underline text-[#d3b36b]">
                            Read More →
                          </button>
                        </div>
                      </div>
                    </Link>
                  </article>

                  {/* Smaller Blog Posts Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {safePosts.slice(1).map((post, index) => (
                      <article
                        key={post._id}
                        className="bg-[#151f28] border border-[#d3b36b]/20 rounded-xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-[#d3b36b]/20 hover:scale-[1.03] hover:border-[#d3b36b]/40"
                      >
                        <Link
                          href={`/dholera-updates/latest-news/${post.slug.current}`}
                        >
                          <div className="h-32 bg-gray-200 flex items-center justify-center overflow-hidden">
                            {post.mainImage ? (
                              <Image
                                src={urlFor(post.mainImage)
                                  .width(800)
                                  .height(400)
                                  .url()}
                                alt={post.title || "Dholera SIR Blog Post"}
                                width={800}
                                height={400}
                                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                              />
                            ) : (
                              <div className="w-full h-full bg-gradient-to-br from-[#d3b36b]/20 to-[#151f28]/20 flex items-center justify-center">
                                <div className="text-6xl">📰</div>
                              </div>
                            )}
                          </div>
                          <div className="p-4 text-white hover:text-[#d3b36b] transition-colors duration-300">
                            <h3 className="text-lg font-semibold mb-2 cursor-pointer line-clamp-2">
                              {post.title ||
                                `Dholera Investment Guide ${index + 2}`}
                            </h3>
                          <div className="flex items-center justify-between">
                            <p className="text-sm text-gray-400">
                              {formatDate(post.publishedAt || post._createdAt)}
                            </p>
                            <button className="font-medium hover:underline text-[#d3b36b]">
                            Read More →
                          </button>
                            
                          </div>

                          </div>
                        </Link>
                      </article>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="bg-white rounded-xl shadow-sm p-8 text-center transition-all duration-300 hover:shadow-lg hover:shadow-[#d3b36b]/20 hover:scale-[1.01]">
                  <div className="h-48 bg-gradient-to-br from-[#d3b36b]/20 to-[#151f28]/20 rounded-lg mb-6 flex items-center justify-center">
                    <div className="text-6xl">🏙️</div>
                  </div>
                  <h2 className="text-xl font-bold text-[#151f28] mb-3">
                    Dholera SIR Investment Updates Coming Soon
                  </h2>
                  <p className="text-gray-600 mb-4">
                    We're preparing comprehensive guides about investment
                    opportunities in Dholera Special Investment Region. Stay
                    tuned for expert insights on India's first smart city.
                  </p>
                  <p className="text-sm text-gray-500">
                    Content will be available soon
                  </p>
                </div>
              )}
            </div>

            {/* Sidebar (comes second on mobile) */}
            <div className="lg:w-1/3 order-2 lg:order-1">
              <SidebarWithForm
                popularArticles={popularArticles}
                className="lg:sticky lg:top-24 space-y-6"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}