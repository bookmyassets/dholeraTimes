import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";

export default function BlogCard({ post }) {
  // Handle author object properly
  const authorName =
    typeof post.author === "object"
      ? post.author.name || "Unknown"
      : post.author;

  return (
    <div className="bg-white rounded-lg shadow-2xl overflow-hidden flex flex-col h-full transition-transform duration-300 hover:scale-105">
      {/* Image */}
      <div className="relative w-full h-48">
        {post.mainImage ? (
          <Image
            src={urlFor(post.mainImage).url()}
            alt={post.title}
            fill
            className="object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <span className="text-gray-400">No image available</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-grow ">
        {/* Title */}
        <h3 className="text-xl font-semibold mb-2 line-clamp-2 h-14">
          {post.title}
        </h3>

        <div className="space-y-4">
          {/* Author & Date */}
          <div className="text-sm text-gray-600  mt-8">
            <time className="text-gray-500">
              {new Date(post.publishedAt).toLocaleDateString("en-US", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </time>
          </div>

          {/* Excerpt */}
          {/* <p className="text-gray-700 line-clamp-3 mb-4 flex-grow">
          {post.description || "Read more about this topic..."}
          </p> */}

          {/* Read More Button - Fixed at bottom */}
          <div className="">
            <Link
              href={`/Dholera-Updates/latest-news/${post.slug.current}`}
              className="w-full px-4 py-2 transition-all font-semibold border-white rounded-xl hover:bg-[#d6b873] bg-[#151f28] hover:text-[#151f28] text-lg md:text-base text-[#d6b873] mt-auto"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
