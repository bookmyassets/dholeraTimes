import { getNews } from "@/sanity/lib/api";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { urlFor } from "@/sanity/lib/image";

// Related Blog Card Component
const RelatedBlogCard = ({ blog }) => {
  return (
    <Link href={`/Dholera-Updates/blogs/${blog.slug.current}`}>
      <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-all duration-300 h-full">
        <div className="relative md:h-48 overflow-hidden">
          {blog.mainImage ? (
            <Image
              src={urlFor(blog.mainImage).width(400).height(250).url()}
              alt={blog.title}
              width={400}
              height={250}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-r from-gray-100 to-gray-200 flex items-center justify-center">
              <span className="text-gray-400">No image</span>
            </div>
          )}
        </div>
        <div className="p-5">
          <div className="text-sm text-gray-500 mb-2">
            {new Date(blog.publishedAt || blog._createdAt).toLocaleDateString(
              "en-US",
              {
                day: "numeric",
                month: "short",
                year: "numeric",
              }
            )}
          </div>
          <h3 className="md:font-bold text-lg mb-2 text-gray-900 line-clamp-2">
            {blog.title}
          </h3>
          <p className="text-gray-700 mb-4 line-clamp-3">{blog.description}</p>
          <div className="flex items-center justify-between mt-auto">
            <span className="hover:text-[#C69C21] text-[#FDB913] p-1 rounded-xl font-semibold bg-gray-800 inline-flex items-center">
              Read more
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default async function LatestUpdates() {
  const getUpdates = await getNews();

  const safePosts = getUpdates.map((post) => ({
    ...post,
    author: post.author || "Dholera Times",
    mainImage: post.mainImage || null,
    slug: post.slug || { current: "#" },
  }));

  const trendingBlogs = safePosts
    .sort(
      (a, b) =>
        new Date(b.publishedAt || b._createdAt) -
        new Date(a.publishedAt || a._createdAt)
    )
    .slice(0, 2);

  return (
    <div>
      <div className="grid grid-cols-2 gap-6">
        {trendingBlogs.length > 0
          ? trendingBlogs.map((blog) => (
              <RelatedBlogCard key={blog._id} blog={blog} />
            ))
          : Array(3)
              .fill(0)
              .map((_, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200"
                >
                  <div className="h-48 bg-gradient-to-r from-gray-100 to-gray-200"></div>
                  <div className="p-6">
                    <div className="h-4 bg-gray-200 rounded w-1/4 mb-3"></div>
                    <div className="h-6 bg-gray-200 rounded w-3/4 mb-3"></div>
                    <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                  </div>
                </div>
              ))}
      </div>
    </div>
  );
}
