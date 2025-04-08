import { PortableText } from "@portabletext/react";
import { urlFor } from "@/sanity/lib/image";
import { getNews, getPostBySlug } from "@/sanity/lib/api";
import Link from "next/link";
import Image from "next/image";

// Trending Blog Item Component
const TrendingBlogItem = ({ post }) => {
  return (
    <Link href={`/Dholera-Updates/latest-news/${post.slug.current}`}>
      <div className="flex gap-4 items-center bg-white hover:bg-gray-50 p-4 rounded-lg border border-gray-100 transition-all hover:shadow-md">
        {post.mainImage && (
          <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
            <Image
              src={urlFor(post.mainImage).width(80).height(80).url()}
              alt={post.title}
              width={80}
              height={80}
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <div>
          <h4 className="font-semibold text-gray-900 line-clamp-2">
            {post.title}
          </h4>
          <p className="text-sm text-gray-500 line-clamp-1 mt-1">
            {post.description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default async function BlogDetail({ params }) {
  const { slug } = await params;

  if (!slug) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse">Loading...</div>
      </div>
    );
  }

  try {
    const [post, trendingBlogs] = await Promise.all([
      getPostBySlug(slug),
      getNews(4), // Get top 4 trending blogs
    ]);

    if (!post) {
      return (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-2">Blog post not found</h1>
            <Link
              href="/Dholera-Updates/latest-news"
              className="mt-4 inline-block text-[#C69C21] hover:text-[#FDB913]"
            >
              ← Back to News
            </Link>
          </div>
        </div>
      );
    }

    const components = {
      types: {
        image: ({ value }) => {
          if (!value?.asset?._ref) return null;
          return (
            <figure className="my-8">
              <img
                loading="lazy"
                alt={value.alt || ""}
                src={urlFor(value).width(1200).url()}
                width={1200}
                height={800}
                className="w-full rounded-xl shadow-lg"
              />
              {value.caption && (
                <figcaption className="mt-2 text-center text-sm text-gray-500">
                  {value.caption}
                </figcaption>
              )}
            </figure>
          );
        },
      },
      marks: {
        link: ({ children, value }) => (
          <a
            href={value.href}
            rel="noopener noreferrer"
            className="text-[#C69C21] hover:text-[#FDB913] underline decoration-[#FDB913]/30 hover:decoration-[#FDB913] transition-colors"
          >
            {children}
          </a>
        ),
      },
      block: {
        h2: ({ children }) => (
          <h2 className="text-3xl font-bold mt-12 mb-6 text-black">
            {children}
          </h2>
        ),
        h3: ({ children }) => (
          <h3 className="text-2xl font-semibold mt-8 mb-4 text-black">
            {children}
          </h3>
        ),
        normal: ({ children }) => (
          <p className="mb-6 text-gray-700 leading-relaxed">{children}</p>
        ),
        blockquote: ({ children }) => (
          <blockquote className="border-l-4 border-[#FDB913] pl-4 my-6 italic text-gray-700">
            {children}
          </blockquote>
        ),
      },
    };

    return (
      <div className="bg-white min-h-screen">
        {/* Sticky Nav Placeholder */}
        <div className="bg-white shadow-sm sticky top-0 z-30 h-16" />

        {/* Main content */}
        <main className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Article */}
            <article className="lg:w-2/3">
              {/* Header */}
              <div className="mb-8">
                {post.categories && post.categories.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.categories.map((category) => (
                      <span
                        key={category._id || category.title}
                        className="px-3 py-1 bg-blue-50 text-blue-600 text-sm rounded-full"
                      >
                        News Headlines
                      </span>
                    ))}
                  </div>
                )}

                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                  {post.title}
                </h1>
              </div>

              {/* Featured Image */}
              {post.mainImage && (
                <div className="mb-10 overflow-hidden rounded-xl shadow-lg">
                  <Image
                    src={urlFor(post.mainImage).width(1200).height(675).url()}
                    alt={post.title}
                    width={1200}
                    height={675}
                    className="w-full h-auto"
                    priority
                  />
                </div>
              )}

              {/* Content */}
              <div className="bg-white rounded-xl shadow-md p-8 border border-gray-200">
                <div className="prose prose-lg max-w-none">
                  <div className="text-sm text-gray-600  mt-8">
                    <time className="text-gray-500">
                      {new Date(post.publishedAt).toLocaleDateString("en-US", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </time>
                  </div>
                  <PortableText value={post.body} components={components} />
                </div>

                {/* Tags */}
                {post.tags && post.tags.length > 0 && (
                  <div className="mt-12 pt-6 border-t border-gray-200">
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <Link
                          key={tag}
                          href={`/blog/tag/${tag}`}
                          className="px-3 py-1 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm rounded-full transition"
                        >
                          #{tag}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Author bio */}
            </article>

            {/* Sidebar */}
            <aside className="lg:w-1/3">
              {/* Share buttons */}
              <div className="sticky top-24">
                {/* Trending posts */}
                <div className="bg-[#151f28] rounded-xl mt-40 shadow-md p-6 border border-gray-200">
                  <h3 className="text-xl font-bold mb-4 text-[#d7b56d]">
                    Dholera Breaking News
                  </h3>
                  <div className="space-y-6 text-[#d7b56d]">
                    {trendingBlogs && trendingBlogs.length > 0 ? (
                      trendingBlogs.map((post) => (
                        <TrendingBlogItem key={post._id} post={post} />
                      ))
                    ) : (
                      <p className="text-gray-500">
                        No trending articles found.
                      </p>
                    )}
                  </div>
                  <div className="flex items-center ">
                    <button className="mt-5 text-center rounded-xl text-white font-semibold bg-[#d7b56d] p-4">
                      Book A Free Consultation Dholera
                    </button>
                  </div>
                </div>
              </div>
            </aside>
          </div>

          {/* Related posts */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6 text-black">
              You might also like
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* This would be populated with related posts based on category/tags */}
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow"
                >
                  <div className="h-48 bg-gray-200"></div>
                  <div className="p-6">
                    <h3 className="font-bold text-lg mb-2 text-gray-900">
                      {post.title}
                    </h3>
                    <p className="text-gray-700 mb-4 line-clamp-2">
                      {post.description}
                    </p>
                    <Link
                      href="#"
                      className="text-[#C69C21] hover:text-[#FDB913] font-medium"
                    >
                      Read more →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>

        {/* Comment section could be added here */}
      </div>
    );
  } catch (error) {
    console.error("Error loading blog post:", slug, error);
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2">Error loading blog post</h1>
          <p className="text-gray-600">Please try again later</p>
          <Link
            href="/blog"
            className="mt-4 inline-block text-[#C69C21] hover:text-[#FDB913]"
          >
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }
}
