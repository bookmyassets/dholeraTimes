import { PortableText } from "@portabletext/react";
import { urlFor } from "@/sanity/lib/image";
import { getPostBySlug } from "@/sanity/lib/api";
import { Calendar, Clock, User } from "lucide-react";
import CostSheet from "@/app/components/costSheet";

export default async function Post({ params }) {
  const post = await getPostBySlug(params.slug);

  // Calculate read time (rough estimate)
  const wordCount = JSON.stringify(post.body).split(" ").length;
  const readTime = Math.ceil(wordCount / 200); // Assuming 200 words per minute
  const isProject = post.categories?.some(
    (category) => category.title.toLowerCase() === "project"
  );

  const components = {
    types: {
      image: ({ value }) => {
        if (!value?.asset?._ref) {
          return null;
        }
        return (
          <figure className="my-8">
            <img
              alt={value.alt || " "}
              src={urlFor(value).width(800).url()}
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
      link: ({ children, value }) => {
        return (
          <a
            href={value.href}
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 underline decoration-blue-300 hover:decoration-blue-600 transition-colors"
          >
            {children}
          </a>
        );
      },
    },
    block: {
      h2: ({ children }) => (
        <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-800">
          {children}
        </h2>
      ),
      h3: ({ children }) => (
        <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">
          {children}
        </h3>
      ),
      normal: ({ children }) => (
        <p className="mb-6 text-gray-700 leading-relaxed">{children}</p>
      ),
      blockquote: ({ children }) => (
        <blockquote className="border-l-4 border-blue-500 pl-4 my-6 italic text-gray-700">
          {children}
        </blockquote>
      ),
    },
  };

  return (
    <>
      <main className="min-h-screen bg-gray-50 py-12">
        <article className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
          {post.mainImage && (
            <div className="relative h-[400px] w-full">
              <img
                src={urlFor(post.mainImage).width(1200).height(800).url()}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          <div className="px-8 py-10">
            {/* Categories */}
            {post.categories && post.categories.length > 0 && (
              <div className="flex gap-2 mb-6">
                {post.categories.map((category) => (
                  <span
                    key={category.title}
                    className="px-3 py-1 bg-blue-50 text-blue-600 text-sm rounded-full"
                  >
                    {category.title}
                  </span>
                ))}
              </div>
            )}

            {/* Title */}
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              {post.title}
            </h1>

            {/* Meta information */}
            <div className="flex flex-wrap items-center gap-6 mb-10 text-gray-600">
              {post.author && (
                <div className="flex items-center gap-2">
                  <User size={20} />
                  <div className="flex items-center gap-2">
                    {post.author.image && (
                      <img
                        src={urlFor(post.author.image)
                          .width(32)
                          .height(32)
                          .url()}
                        alt={post.author.name}
                        className="w-8 h-8 rounded-full"
                      />
                    )}
                    <span>{post.author.name}</span>
                  </div>
                </div>
              )}
              <div className="flex items-center gap-2">
                <Calendar size={20} />
                <time>
                  {new Date(post.publishedAt).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </time>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={20} />
                <span>{readTime} min read</span>
              </div>
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              <PortableText value={post.body} components={components} />
            </div>
          </div>
        </article>
      </main>
      <div>{isProject && <CostSheet />}</div>
    </>
  );
}
