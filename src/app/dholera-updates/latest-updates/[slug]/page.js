import { PortableText } from "@portabletext/react";
import { urlFor } from "@/sanity/lib/image";
import {
  getblogs,
  getNews,
  getPostBySlug,
  getPosts,
  getProjects,
} from "@/sanity/lib/api";
import Link from "next/link";
import Image from "next/image";

import SchemaMarkup from "../SchemaMarkup";
import LeadFormSlug from "./LeadForm";

// Trending Blog Item Component
const TrendingBlogItem = ({ post }) => {
  return (
    <Link href={`/dholera-updates/latest-updates/${post.slug.current}`}>
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

const Projects = ({ post }) => {
  // Check if post exists and has required properties
  if (!post || !post.slug?.current) return null;

  // Check if category is "sold out" (case insensitive)
  if (post.category && post.category.toLowerCase().trim() === "sold out") {
    return null;
  }

  return (
    <Link href={`/projects/${post.slug.current}`}>
      <div className="flex gap-4 items-center bg-white hover:bg-gray-50 p-4 rounded-lg border border-gray-100 transition-all hover:shadow-md">
        {post.mainImage && (
          <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
            <Image
              src={urlFor(post.mainImage).width(80).height(80).url()}
              alt={post.title || "Project image"}
              width={80}
              height={80}
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <div>
          <h4 className="font-semibold text-gray-900 line-clamp-2">
            {post.title || "Untitled Project"}
          </h4>
          <p className="text-sm text-gray-500 line-clamp-1 mt-1">
            {post.description || ""}
          </p>
        </div>
      </div>
    </Link>
  );
};

// Related Blog Card Component
const RelatedBlogCard = ({ blog }) => {
  return (
    <div className="bg-white rounded-lg shadow-2xl overflow-hidden flex flex-col h-full transition-transform duration-300 hover:scale-105">
      <Link href={`/dholera-updates/blogs/${blog.slug.current}`}>
        <div className="relative w-full h-64">
          {blog.mainImage ? (
            <Image
              src={urlFor(blog.mainImage).url()}
              alt={blog.title}
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
        <div className="flex flex-col flex-grow">
          <div className="w-full px-4 py-2 transition-all font-semibold border-white  hover:bg-[#d6b873] bg-[#151f28] hover:text-[#151f28] text-lg md:text-base text-[#d6b873] mt-auto space-y-3">
            {/* Title */}
            <h3 className="text-xl font-semibold line-clamp-2 h-14">
              {blog.title}
            </h3>

            {/* Meta info */}
            <div className="text-sm text-gray-400">
              <time>
                {new Date(blog.publishedAt).toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </time>
            </div>

            {/* CTA */}
            <div className="underline underline-offset-4 text-lg">
              Read More
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default async function BlogDetail({ params }) {
  const { slug } = await params;
  const site = "dholera-times";

  if (!slug) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse">Loading...</div>
      </div>
    );
  }

  try {
    const [post, trendingBlogs, relatedBlogs, getPro] = await Promise.all([
      getPostBySlug(slug, site),
      getNews(4), // Get top 4 trending news
      getblogs(slug, 3), // Get 3 related blogs based on categories or tags
      getProjects(slug),
    ]);

    if (!post) {
      return (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-2">Blog post not found</h1>
            <Link
              href="/dholera-updates/latest-updates"
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
          if (!value?.asset) return null;

          // Use the asset URL directly if urlFor is not working
          const imageUrl = value.asset.url || urlFor(value).width(1200).url();

          const imageNode = (
            <img
              src={imageUrl}
              alt={value.alt || ""}
              className="w-full rounded-lg my-6"
              loading="lazy"
            />
          );

          return (
            <figure className="my-6">
              {value.url ? (
                <a
                  href={value.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:opacity-90 transition-opacity cursor-pointer"
                >
                  {imageNode}
                </a>
              ) : (
                imageNode
              )}
              {value.caption && (
                <figcaption className="text-center text-sm text-gray-500 mt-2">
                  {value.caption}
                </figcaption>
              )}
            </figure>
          );
        },

        table: ({ value }) => {
          if (!value?.rows || !Array.isArray(value.rows)) {
            return null;
          }

          return (
            <div className="overflow-x-auto my-12 bg-white rounded-2xl shadow-lg border border-gray-100">
              <table className="min-w-full">
                <tbody>
                  {value.rows.map((row, i) => {
                    if (!row?.cells || !Array.isArray(row.cells)) {
                      return null;
                    }

                    return (
                      <tr
                        key={i}
                        className={`hover:bg-gray-50 transition-colors duration-200 ${
                          i === 0
                            ? "bg-gradient-to-r from-[#d3b66b]/10 to-[#b69b5e]/10 font-semibold"
                            : i % 2 === 0
                              ? "bg-gray-50/50"
                              : "bg-white"
                        }`}
                      >
                        {row.cells.map((cell, j) => (
                          <td
                            key={j}
                            className="px-6 py-4 text-gray-700 border-b border-gray-100 last:border-r-0"
                          >
                            {cell || ""}
                          </td>
                        ))}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          );
        },

        code: ({ value }) => (
          <div className="my-8 bg-gradient-to-br from-gray-900 to-black rounded-2xl p-1 shadow-2xl">
            <pre className="bg-gray-900 text-gray-100 p-6 rounded-xl overflow-x-auto">
              <code className="font-mono text-sm leading-relaxed">
                {value.code}
              </code>
            </pre>
          </div>
        ),
      },

      marks: {
        link: ({ children, value }) => (
          <Link
            href={value.href}
            rel="noopener noreferrer"
            className="text-[#d3b36b] hover:text-[#b69b5e] underline decoration-[#b69b5e]/30 hover:decoration-[#b69b5e] decoration-2 underline-offset-4 transition-all duration-300 hover:bg-[#b69b5e]/5 px-1 py-0.5 rounded"
          >
            {children}
          </Link>
        ),
        strong: ({ children }) => (
          <strong className="font-bold text-gray-900  px-1 py-0.5 rounded">
            {children}
          </strong>
        ),
        em: ({ children }) => (
          <em className="italic text-[#151f28] bg-gray-50 px-1 py-0.5 rounded">
            {children}
          </em>
        ),
        code: ({ children }) => (
          <code className="font-mono bg-gradient-to-r from-gray-100 to-gray-200 px-2 py-1 rounded-md text-sm text-[#151f28] border border-gray-300">
            {children}
          </code>
        ),
        button: ({ children, value }) => {
          const getButtonClasses = () => {
            switch (value.style) {
              case "secondary":
                return "bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-[#151f28] shadow-lg hover:shadow-xl";
              case "outline":
                return "bg-transparent border-2 border-[#d3b66b] text-[#d3b66b] hover:bg-[#d3b66b] hover:text-white shadow-md hover:shadow-lg";
              default:
                return "bg-gradient-to-r from-[#d3b66b] to-[#b69b5e] hover:from-[#b69b5e] hover:to-[#d3b66b] shadow-lg hover:shadow-xl";
            }
          };

          return (
            <Link
              href={value.href}
              className={`inline-block px-8 py-3 rounded-xl text-white font-semibold transition-all duration-300 transform hover:scale-105 ${getButtonClasses()}`}
            >
              {value.text || children}
            </Link>
          );
        },
      },

      block: {
        h1: ({ children }) => (
          <h1 className="text-5xl font-black mt-8 mb-10 text-gray-800 relative border-l-4 border-[#b69b5e] pl-6 bg-gradient-to-r from-[#b69b5e]/5 to-transparent py-4">
            <span className="absolute -left-1 top-0 w-1 h-full bg-gradient-to-b from-[#d3b66b] to-[#9e8750] rounded-full"></span>
            {children}
          </h1>
        ),
        h2: ({ children }) => (
          <h2 className="text-4xl font-bold mt-16 mb-8 text-gray-800 relative border-l-4 border-[#b69b5e] pl-6 bg-gradient-to-r from-[#b69b5e]/5 to-transparent py-3">
            <span className="absolute -left-1 top-0 w-1 h-full bg-gradient-to-b from-[#d3b66b] to-[#b69b5e] rounded-full"></span>
            {children}
          </h2>
        ),
        h3: ({ children }) => (
          <h3 className="text-3xl font-bold mt-12 mb-6 text-gray-800 relative border-l-4 border-[#b69b5e] pl-6 bg-gradient-to-r from-[#b69b5e]/5 to-transparent py-2">
            <span className="absolute -left-1 top-0 w-1 h-full bg-gradient-to-b from-[#d3b66b] to-[#b69b5e] rounded-full"></span>
            {children}
          </h3>
        ),
        h4: ({ children }) => (
          <h4 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 relative border-l-4 border-[#b69b5e] pl-6 bg-gradient-to-r from-[#b69b5e]/5 to-transparent py-2">
            <span className="absolute -left-1 top-0 w-1 h-full bg-gradient-to-b from-[#d3b66b] to-[#b69b5e] rounded-full"></span>
            {children}
          </h4>
        ),
        h5: ({ children }) => (
          <h5 className="text-xl font-semibold mt-8 mb-3 text-gray-800 relative border-l-4 border-[#b69b5e] pl-6 bg-gradient-to-r from-[#b69b5e]/5 to-transparent py-2">
            <span className="absolute -left-1 top-0 w-1 h-full bg-gradient-to-b from-[#d3b66b] to-[#b69b5e] rounded-full"></span>
            {children}
          </h5>
        ),
        h6: ({ children }) => (
          <h6 className="text-lg font-semibold mt-6 mb-2 text-gray-800 relative border-l-4 border-[#b69b5e] pl-6 bg-gradient-to-r from-[#b69b5e]/5 to-transparent py-1">
            <span className="absolute -left-1 top-0 w-1 h-full bg-gradient-to-b from-[#d3b66b] to-[#b69b5e] rounded-full"></span>
            {children}
          </h6>
        ),
        normal: ({ children }) => (
          <p className="mb-8 text-gray-700 leading-loose text-lg font-light tracking-wide">
            {children}
          </p>
        ),
        blockquote: ({ children }) => (
          <blockquote className="relative my-12 p-8 bg-gradient-to-br from-[#d3b66b]/5 to-[#b69b5e]/10 rounded-2xl shadow-lg border border-[#d3b66b]/20">
            <div className="absolute top-4 left-6 text-6xl text-[#d3b66b]/30 font-serif">
              "
            </div>
            <div className="pl-8 italic text-gray-700 text-xl leading-relaxed font-medium">
              {children}
            </div>
          </blockquote>
        ),
        centerAlign: ({ children }) => (
          <p className="mb-8 text-gray-700 leading-loose text-lg text-center bg-gray-50 py-6 rounded-xl">
            {children}
          </p>
        ),
      },

      list: {
        bullet: ({ children }) => (
          <ul className="space-y-4 mb-10 pl-0">{children}</ul>
        ),
        number: ({ children }) => (
          <ol className="space-y-4 mb-10 pl-0 counter-reset-list">
            {children}
          </ol>
        ),
      },

      listItem: {
        bullet: ({ children }) => (
          <li className="text-lg leading-relaxed text-gray-700 flex items-start gap-4 bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
            <div className="w-2 h-2 rounded-full mt-3 flex-shrink-0"></div>
            <div>{children}</div>
          </li>
        ),
        number: ({ children }) => (
          <li className="text-lg leading-relaxed text-gray-700 flex items-start gap-4 bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 relative counter-increment-list">
            <div className="w-8 h-8  rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
              <span className="counter-content"></span>
            </div>
            <div>{children}</div>
          </li>
        ),
      },
    };

    // Format date for display
    const formattedDate = new Date(
      post.publishedAt || post._createdAt
    ).toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

    const canonicalUrl = `https://www.dholeratimes.com/dholera-updates/latest-updates/${post.slug.current}`;

    return (
      <>
        <div className="bg-white min-h-screen">
          {/* Sticky Nav Placeholder */}
        <title>{post.title}</title>
        <meta name="title" content={post.title} />
        <meta name="description" content={post.metaDescription} />
          <meta name="keywords" content={post.keywords} />
          <meta name="publisher" content="Dholera Times" />
          <link rel="canonical" href={canonicalUrl} />
          <meta name="robots" content="index, dofollow" />
          <SchemaMarkup post={post} relatedBlog={relatedBlogs} />
          <div className="bg-white shadow-sm sticky top-0 z-30" />

          {/* Main content */}
          <main className="max-w-7xl mx-auto px-4 py-8">
            <div className="flex flex-col lg:flex-row gap-10">
              {/* Article */}
              <article className="lg:w-2/3">
                {/* Header with breadcrumbs */}
                <div className="mb-4">
                  <nav className="flex" aria-label="Breadcrumb">
                    <ol className="inline-flex items-center space-x-1 md:space-x-3">
                      <li className="inline-flex items-center">
                        <Link
                          href="/"
                          className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700"
                        >
                          Home
                        </Link>
                      </li>
                      <li>
                        <div className="flex items-center">
                          <svg
                            className="w-3 h-3 text-gray-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                          <Link
                            href="/dholera-updates/latest-updates"
                            className="ml-1 text-sm font-medium text-gray-500 hover:text-gray-700 md:ml-2"
                          >
                            News
                          </Link>
                        </div>
                      </li>
                      <li aria-current="page">
                        <div className="flex items-center">
                          <svg
                            className="w-3 h-3 text-gray-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                          <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 line-clamp-1">
                            {post.title}
                          </span>
                        </div>
                      </li>
                    </ol>
                  </nav>
                </div>

                {/* Categories */}
                <div className="mb-8">
                  {post.categories && post.categories.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.categories.map((category) => (
                        <span
                          key={category._id || category.title}
                          className="px-3 py-1 bg-blue-50 text-blue-600 text-sm rounded-full"
                        >
                          Latest News
                        </span>
                      ))}
                    </div>
                  )}

                  <h1 className="text-4xl font-bold text-gray-900 mb-4">
                    {post.title}
                  </h1>

                  {/* Publication date */}
                  <div className="flex items-center gap-4 text-gray-500 text-sm mb-6">
                    <div className="flex items-center">
                      <svg
                        className="w-4 h-4 mr-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        ></path>
                      </svg>
                      <time className="text-gray-500">{formattedDate}</time>
                    </div>

                    {post.readingTime && (
                      <div className="flex items-center">
                        <svg
                          className="w-4 h-4 mr-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>
                        <span>{post.readingTime} min read</span>
                      </div>
                    )}
                  </div>
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
                <div className="bg-white rounded-xl shadow-2xl text-black leading-5 shadow-t-2xl p-8 border border-gray-200">
                  <div className="text-xl max-w-none">
                    <PortableText value={post.body} components={components} />
                  </div>

                  {/* Tags */}
                  {post.tags && post.tags.length > 0 && (
                    <div className="mt-12 pt-6 border-t border-gray-200">
                      <h4 className="font-semibold text-gray-900 mb-3">
                        Related Topics:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                          <Link
                            key={tag}
                            href={`/dholera-updates/latest-updates/tag/${tag}`}
                            className="px-3 py-1 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm rounded-full transition"
                          >
                            #{tag}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </article>

              {/* Sidebar */}
              <aside className="lg:w-1/3">
                <div className="sticky space-y-4 top-24">
                  <div className=" pt-4 max-w-xl mx-auto">
                    <LeadFormSlug
                      title="Secure Plots in Dholera's Prime Location under ₹10 Lakhs"
                      buttonName="Know More"
                    />
                  </div>
                  {/* Trending posts */}
                  <div className="bg-[#151f28] rounded-xl shadow-2xl shadow-gray-500 p-6 border border-gray-700">
                    <h3 className="text-xl font-bold mb-4 text-white">
                      Latest Blogs
                    </h3>
                    <div className="">
                      {trendingBlogs && trendingBlogs.length > 0 ? (
                        trendingBlogs
                          .filter((post) => post.slug.current !== slug) // Filter out the current blog
                          .map((post) => (
                            <div key={post._id} className="mb-3">
                              <TrendingBlogItem post={post} />
                            </div>
                          ))
                      ) : (
                        <p className="text-gray-400">
                          No trending articles found.
                        </p>
                      )}
                    </div>
                    <div className="flex items-center justify-center mt-6">
                      <Link href="/dholera-updates/blogs">
                        <button className="text-center rounded-xl text-white font-semibold bg-[#d7b56d] hover:bg-[#c6a45d] p-3 transition-colors">
                          Explore More
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </main>

          {/* Related blog posts - Properly fetched from API */}
          <section className="bg-gray-50 py-12 mt-4">
            <div className="max-w-7xl mx-auto px-4">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900">
                  You might also like
                </h2>
                <Link
                  href="/dholera-updates/blogs"
                  className="rounded-xl text-[#151f28] max-sm:text-center font-semibold bg-[#d7b56d] p-1 hover:bg-[#c6a45d] "
                >
                  View all
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedBlogs && relatedBlogs.length > 0
                  ? relatedBlogs.map((blog) => (
                      <RelatedBlogCard key={blog._id} blog={blog} />
                    ))
                  : // Fallback content if no related blogs are found
                    Array(3)
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
          </section>
        </div>
      </>
    );
  } catch (error) {
    console.error("Error loading blog post:", slug, error);
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2">Error loading blog post</h1>
          <p className="text-gray-600">Please try again later</p>
          <Link
            href="/dholera-updates/latest-updates"
            className="mt-4 inline-block text-[#d7b56d] hover:text-[#c6a45d]"
          >
            ← Back to News
          </Link>
        </div>
      </div>
    );
  }
}
