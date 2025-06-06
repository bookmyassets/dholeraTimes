import { PortableText } from "@portabletext/react";
import { getPostBySlug } from "@/sanity/lib/api";
import CostSheet from "@/app/(main)/components/costSheet";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

export async function generateMetadata({ params }) {
  // Ensure the slug is properly resolved before using it
  const { slug } = params; // params is already available, but use destructuring
  
  // Fetch the post using the slug
  const post = await getPostBySlug(slug); 

  return {
    title: post.title,  // Use the fetched post's title for dynamic title
    description: post.metaDescription, // Same for description
    
  };
}

export default async function Post({ params }) {
  const {slug} = await params;
  const post = await getPostBySlug(slug);

  // Calculate read time (rough estimate)
  const wordCount = JSON.stringify(post.body).split(" ").length;
  const readTime = Math.ceil(wordCount / 200); // Assuming 200 words per minute
  const isProject = post.categories?.some(
    (category) => category.title.toLowerCase() === "project"
  );

  const isSold = post.categories?.some(
    (category) => category.title === "Sold Out"
  );

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

  return (
    <>
      <main className="min-h-screen bg-gray-50 py-12">
        <article className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
          {post.mainImage && (
            <div className="relative w-full h-auto aspect-[/2] overflow-hidden">
              <Image
                src={urlFor(post.mainImage).width(1700).url()}
                alt={post.title}
                width={1700}
                height={1200}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          <div className="px-8 py-10">
            {/* Categories */}
            {post.categories && post.categories.length > 0 && (
              <div className="flex gap-2 mb-6 justify-end items-center">
                {/* Categories */}
                {post.categories.map((category) => (
                  <span
                    key={category.title}
                    className="px-3 py-1 bg-blue-50 text-blue-600 text-sm rounded-full"
                  >
                    {category.title}
                  </span>
                ))}

                {/* "22 Projects Left" Badge */}
                { isProject && !isSold && (
                <span className="px-3 py-1 bg-red-50 text-red-600 text-sm font-semibold rounded-full">
                  22 Plots Left
                </span>
                )}
              </div>
            )}

            {/* Title */}
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              {post.title}
            </h1>

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              <PortableText value={post.body} components={components} />
            </div>
          </div>
        </article>
      </main>
      <div className="pt-5 pb-5">{isProject && <CostSheet />}</div>
    </>
  );
}