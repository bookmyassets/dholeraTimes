import Link from "next/link";
import { getblogs, getPosts } from "@/sanity/lib/api";
import { urlFor } from "@/sanity/lib/image";
import "../projects/project.css";
import Image from "next/image";
import { CalendarDays, MessageSquare, User } from "lucide-react";
import { PortableText } from "next-sanity";

export default async function Home() {
  const posts = await getPosts();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="relative bg-[#151f28] text-white">
        <div className="absolute inset-0 opacity-20 bg-[url('/placeholder.svg?height=500&width=1920')] bg-cover bg-center"></div>
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Our <span className="text-[#0e48fe]">Projects</span>
          </h1>
          <p className="text-lg text-center max-w-2xl mx-auto text-gray-200">
            Discover the latest market insights, expert strategies, and
            investment opportunities to grow your wealth.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-4 py-12 ">
        {/* Featured Posts */}
        {posts.length > 0 &&
          posts.map((post) => (
            <div key={post._id} className="mb-12 ">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
                <div className="md:flex">
                  <div className="md:w-1/2 ">
                    {post.mainImage && (
                      <div className="relative h-64 md:h-full ">
                        <Image
                          src={
                            urlFor(post.mainImage)
                              .width(800)
                              .height(600)
                              .url() || "/placeholder.svg"
                          }
                          alt={post.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-70"></div>
                        {post.categories?.map((category) => (
                          <span
                            key={category.title}
                            className={`px-4 py-2 text-white text-sm font-bold rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 
      ${category.title === "Sold Out" ? "bg-red-600" : "bg-gradient-to-r from-blue-500 to-purple-600"}`}
                          >
                            {category.title}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="md:w-1/2 bg-gray-300 text-[#151f28] p-6 md:p-8 flex flex-col justify-center">
                    <Link
                      href={
                        post.slug?.current ? `/posts/${post.slug.current}` : "#"
                      }
                    >
                      <h2 className="text-2xl font-bold hover:text-[#0e48fe] transition mb-3">
                        {post.title}
                        <span className="bg-blue-500 rounded-lg ml-3 text-sm text-black  font-thin w-10 h-10">
                          {" "}
                          Details Here{" "}
                        </span>
                      </h2>

                      <p className="text-gray-600 mb-4">{post.description}</p>
                      <div className=" line-clamp-2 overflow-hidden">
                        <PortableText value={post.body} />
                      </div>

                      {/* <div className="flex items-center mt-auto">
                      <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                      <User className="h-5 w-5" />
                      </div>
                      <div className="ml-3">
                      <h3 className="text-sm font-semibold">
                      {post.author.name}
                      </h3>
                      <p className="text-xs">
                      {post.author.followers || 0} followers
                      </p>
                      </div>
                      </div> */}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
