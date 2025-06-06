import { PortableText } from "@portabletext/react";
import { urlFor } from "@/sanity/lib/image";
import { getblogs, getNews, getPostBySlug, getProjectInfo, getProjects, getUpdates } from "@/sanity/lib/api";
import Link from "next/link";
import Image from "next/image";


export async function generateMetadata({ params }) {
 
  const { slug } = params; 
  
  const post = await getPostBySlug(slug); 

  return {
    title: post.title,  
    description: post.metaDescription,
    
  };
}

const TrendingBlogItem = ({ post }) => {
  return (
    <Link href={`/Dholera-SIR/${post.slug.current}`}>
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

  if (!post || !post.slug?.current) return null;

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

const RelatedBlogCard = ({ blog }) => {
  return (
    <Link href={`/Dholera-Updates/blogs/${blog.slug.current}`}>
      <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-all duration-300 h-full">
        <div className="relative h-48 overflow-hidden">
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
          {blog.categories && blog.categories.length > 0 && (
            <div className="absolute top-2 left-2">
              <span className="px-3 py-1 bg-blue-50 text-blue-600 text-sm rounded-full bg-opacity-90">
                News Headlines
              </span>
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
          <h3 className="font-bold text-lg mb-2 text-gray-900 line-clamp-2">
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
    const [post, trendingBlogs, getPro] = await Promise.all([
      getPostBySlug(slug),
      getProjectInfo(), 
      getProjects(slug)
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
      if (!value?.asset) return null;
      
      // Use the asset URL directly if urlFor is not working
      const imageUrl = value.asset.url || urlFor(value).width(1200).url();
      
      const imageNode = (
        <img
          src={imageUrl}
          alt={value.alt || ''}
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
    }
  },

  marks: {
    link: ({ children, value }) => {
      return (
        <Link
          href={value.href}
          rel="noopener noreferrer"
          className="text-[#C69C21] hover:text-[#FDB913] underline decoration-[#FDB913]/30 hover:decoration-[#FDB913] transition-colors"
        >
          {children}
        </Link>
      );
    },
    strong: ({ children }) => (
      <strong className="font-semibold text-gray-900">{children}</strong>
    ),
    em: ({ children }) => (
      <em className="italic text-gray-800">{children}</em>
    ),
    underline: ({ children }) => (
      <u className="underline decoration-gray-400">{children}</u>
    ),
    code: ({ children }) => (
      <code className="font-mono bg-gray-100 px-1.5 py-0.5 rounded text-sm text-gray-800">
        {children}
      </code>
    ),
    "strike-through": ({ children }) => (
      <del className="line-through text-gray-500">{children}</del>
    ),
    textColor: ({ children, value }) => (
      <span style={{ color: value?.color || "inherit" }}>{children}</span>
    ),
    textBackground: ({ children, value }) => (
      <span style={{ backgroundColor: value?.color || "transparent" }}>
        {children}
      </span>
    ),
    button: ({ children, value }) => {
      const getButtonClasses = () => {
        switch (value.style) {
          case "secondary":
            return "bg-gray-600 hover:bg-gray-700";
          case "outline":
            return "bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-50";
          default:
            return "bg-blue-600 hover:bg-blue-700";
        }
      };

      return (
        <Link
          href={value.href}
          className={`inline-block px-6 py-2 rounded-lg text-white font-medium transition-colors ${getButtonClasses()}`}
        >
          {value.text || children}
        </Link>
      );
    },
  },

  block: {
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold mt-20 mb-8 text-gray-900 border-b border-gray-200 pb-3">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-bold mt-16 mb-6 text-gray-800 border-b border-gray-200 pb-2">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-semibold mt-10 mb-4 text-gray-800">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-xl font-semibold mt-8 mb-3 text-gray-800">
        {children}
      </h4>
    ),
    h5: ({ children }) => (
      <h5 className="text-lg font-semibold mt-6 mb-2 text-gray-800">
        {children}
      </h5>
    ),
    h6: ({ children }) => (
      <h6 className="text-base font-semibold mt-4 mb-2 text-gray-800">
        {children}
      </h6>
    ),
    normal: ({ children }) => (
      <p className="mb-6 text-gray-700 leading-relaxed text-lg">
        {children}
      </p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-yellow-500 pl-6 my-8 italic text-gray-700 py-2 bg-gray-50 rounded-r-lg shadow-sm">
        {children}
      </blockquote>
    ),
    leftAlign: ({ children }) => (
      <p className="mb-6 text-gray-700 leading-relaxed text-lg text-left">
        {children}
      </p>
    ),
    centerAlign: ({ children }) => (
      <p className="mb-6 text-gray-700 leading-relaxed text-lg text-center">
        {children}
      </p>
    ),
    rightAlign: ({ children }) => (
      <p className="mb-6 text-gray-700 leading-relaxed text-lg text-right">
        {children}
      </p>
    ),
    justify: ({ children }) => (
      <p className="mb-6 text-gray-700 leading-relaxed text-lg text-justify">
        {children}
      </p>
    ),
    small: ({ children }) => (
      <p className="mb-6 text-gray-700 leading-relaxed text-base">
        {children}
      </p>
    ),
    medium: ({ children }) => (
      <p className="mb-6 text-gray-700 leading-relaxed text-lg">
        {children}
      </p>
    ),
    large: ({ children }) => (
      <p className="mb-6 text-gray-700 leading-relaxed text-xl">
        {children}
      </p>
    ),
    xlarge: ({ children }) => (
      <p className="mb-6 text-gray-700 leading-relaxed text-2xl">
        {children}
      </p>
    ),
  },

  list: {
    bullet: ({ children }) => (
      <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal pl-6 mb-6 space-y-2 text-gray-700">
        {children}
      </ol>
    ),
  },

  listItem: {
    bullet: ({ children }) => (
      <li className="text-lg leading-relaxed">{children}</li>
    ),
    number: ({ children }) => (
      <li className="text-lg leading-relaxed">{children}</li>
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

    return (
      <div className="bg-white min-h-screen">
        {/* Sticky Nav Placeholder */}
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
                          href="/DholeraSIR"
                          className="ml-1 text-sm font-medium text-gray-500 hover:text-gray-700 md:ml-2"
                        >
                          DholeraSIR
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
                        Blogs
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
                          href={`/Dholera-Updates/blogs/tag/${tag}`}
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
                
              <div className="bg-[#151f28] rounded-xl shadow-md p-6 border border-gray-700">
                  <h3 className="text-xl font-bold mb-4 text-blue-300">
                    Our Projects
                  </h3>
                  <div className="">
                    {getPro && getPro.length > 0 ? (
                      getPro.map((post) => (
                        <div key={post._id} className="mb-3">
                          <Projects post={post} />
                        </div>
                      ))
                    ) : (
                      <p className="text-gray-400">
                        No trending articles found.
                      </p>
                    )}
                  </div>
                  <div className="flex items-center justify-center mt-6">
                    <Link href="/projects">
                      <button className="text-center rounded-xl text-white font-semibold bg-[#d7b56d] hover:bg-[#c6a45d] p-3 transition-colors">
                        Explore Projects
                      </button>
                    </Link>
                  </div>
                </div>
                {/* Trending posts */}
                <div className="bg-[#151f28] rounded-xl shadow-2xl shadow-gray-500 p-6 border border-gray-700">
                  <h3 className="text-xl font-bold mb-4 text-blue-300">
                    Explore Dholera SIR
                  </h3>
                  <div className="">
                    {trendingBlogs && trendingBlogs.length > 0 ? (
                      trendingBlogs.map((post) => (
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
                </div>
              </div>
            </aside>
          </div>
        </main>
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
            href="/Dholera-Updates/blogs"
            className="mt-4 inline-block text-[#C69C21] hover:text-[#FDB913]"
          >
            ← Back to News
          </Link>
        </div>
      </div>
    );
  }
}
