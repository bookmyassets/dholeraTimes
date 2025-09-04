import Link from "next/link";
import { getPosts } from "@/sanity/lib/api";
import { urlFor } from "@/sanity/lib/image";
import "./project.css";
import Image from "next/image";
import { PortableText } from "next-sanity";
import LeadForm from "./LeadForm";
import hero from "@/assets/residential-hero.webp";

export default async function Projects() {
  const posts = await getPosts();

  function checkIfSoldOut(post) {
    if (!post.categories) return false;

    if (Array.isArray(post.categories)) {
      return post.categories.some(
        (category) =>
          category.title && category.title.toLowerCase() === "sold out"
      );
    } else {
      return (
        post.categories.title &&
        post.categories.title.toLowerCase() === "sold out"
      );
    }
  }

  // Separate sold out and available projects
  const availableProjects = posts.filter((post) => !checkIfSoldOut(post));
  const soldOutProjects = posts.filter((post) => checkIfSoldOut(post));

  return (
    <div className="min-h-screen">
      <link
        rel="canonical"
        href="https://www.dholeratimes.com/dholera-residential-plots"
      />
      <meta name="robots" content="index, dofollow" />

      {/* Hero Section with Image and Text */}
      <div className="relative h-[50vh] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={hero} // Replace with your hero image
            alt="Hero Background"
            fill
            className="object-cover "
            priority
          />
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <div className="inline-block mb-6">
              <span
                className="px-6 py-3 rounded-full text-sm font-medium border-2"
                style={{
                  backgroundColor: "rgba(211, 179, 107, 0.2)",
                  color: "#d3b36b",
                  borderColor: "rgba(211, 179, 107, 0.3)",
                }}
              >
                Premium Investment Opportunities
              </span>
            </div>
            <h1
              className="text-4xl font-bold mb-8"
              style={{ color: "#fbfbfb" }}
            >
              Our <span style={{ color: "#d3b36b" }}>Projects</span>
            </h1>
            <p
              className=" max-w-4xl mx-auto leading-relaxed mb-12"
              style={{ color: "rgba(251, 251, 251, 0.8)" }}
            >
              Discover exclusive investment opportunities with proven returns.
              Join sophisticated investors in premium real estate ventures.
            </p>
          </div>
        </div>
      </div>

      {/* Available Projects Section */}
      {availableProjects.length > 0 && (
        <div className="py-8">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-8">
              <h2
                className="text-[28px] font-bold"
                style={{ color: "#151f28" }}
              >
                High-Growth Opportunities in{" "}
                <span style={{ color: "#d3b36b" }}>Dholera</span>
              </h2>
              <p
                className="max-w-2xl mx-auto"
                style={{ color: "rgba(21, 31, 40, 0.7)" }}
              >
                Secure a future-ready asset in India’s first smart city
              </p>
            </div>

            {availableProjects.length === 1 ? (
              // Single Project Display - Project Left, Form Right
              <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                  {/* Project Details - Left Side */}
                  <div className="order-2 lg:order-1">
                    <Link
                      href={
                        availableProjects[0].slug?.current
                          ? `/dholera-residential-plots/${availableProjects[0].slug.current}`
                          : "#"
                      }
                    >
                      <div
                        className="rounded-3xl shadow-2xl overflow-hidden border-2 cursor-pointer"
                        style={{
                          backgroundColor: "#fbfbfb",
                          borderColor: "rgba(211, 179, 107, 0.2)",
                        }}
                      >
                        {/* Image Section */}
                        <div className="relative">
                          {availableProjects[0].mainImage && (
                            <div className="relative h-[300px]">
                              <Image
                                src={
                                  urlFor(availableProjects[0].mainImage)
                                    .width(600)
                                    .height(400)
                                    .url() || "/placeholder.svg"
                                }
                                alt={availableProjects[0].title}
                                fill
                                className="object-cover"
                              />

                              {/* Categories */}
                              <div className="absolute top-6 left-6 flex flex-wrap gap-3 z-20">
                                {availableProjects[0].categories &&
                                Array.isArray(
                                  availableProjects[0].categories
                                ) ? (
                                  availableProjects[0].categories
                                    .filter(
                                      (category) =>
                                        category.title !== "Sub-Project" &&
                                        category.title.toLowerCase() !==
                                          "sold out"
                                    )
                                    .slice(0, 2)
                                    .map((category, index) => (
                                      <span
                                        key={index}
                                        className="px-4 py-2 text-sm font-semibold rounded-full shadow-lg backdrop-blur-sm border-2"
                                        style={{
                                          backgroundColor:
                                            "rgba(211, 179, 107, 0.9)",
                                          color: "#151f28",
                                          borderColor:
                                            "rgba(211, 179, 107, 0.5)",
                                        }}
                                      >
                                        {category.title}
                                      </span>
                                    ))
                                ) : availableProjects[0].categories &&
                                  availableProjects[0].categories.title !==
                                    "Sub-Project" &&
                                  availableProjects[0].categories.title.toLowerCase() !==
                                    "sold out" ? (
                                  <span
                                    className="px-4 py-2 text-sm font-semibold rounded-full shadow-lg backdrop-blur-sm border-2"
                                    style={{
                                      backgroundColor:
                                        "rgba(211, 179, 107, 0.9)",
                                      color: "#151f28",
                                      borderColor: "rgba(211, 179, 107, 0.5)",
                                    }}
                                  >
                                    {availableProjects[0].categories.title}
                                  </span>
                                ) : (
                                  <span
                                    className="px-4 py-2 text-sm font-semibold rounded-full shadow-lg backdrop-blur-sm border-2"
                                    style={{
                                      backgroundColor:
                                        "rgba(211, 179, 107, 0.9)",
                                      color: "#151f28",
                                      borderColor: "rgba(211, 179, 107, 0.5)",
                                    }}
                                  >
                                    Available
                                  </span>
                                )}
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Content Section */}
                        <div className="p-8">
                          <div className="space-y-6">
                            <h3
                              className="text-2xl lg:text-3xl font-bold"
                              style={{ color: "#151f28" }}
                            >
                              {availableProjects[0].title}
                            </h3>

                            {availableProjects[0].description && (
                              <p
                                className="text-lg leading-relaxed"
                                style={{ color: "rgba(21, 31, 40, 0.8)" }}
                              >
                                {availableProjects[0].description}
                              </p>
                            )}

                            <div className="prose prose-slate max-w-none">
                              <div
                                className="line-clamp-4"
                                style={{ color: "rgba(21, 31, 40, 0.7)" }}
                              >
                                <PortableText
                                  value={availableProjects[0].body}
                                />
                              </div>
                            </div>

                            <div className="pt-4">
                              <div
                                className="inline-flex items-center px-8 py-4 font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                                style={{
                                  backgroundColor: "#d3b36b",
                                  color: "#151f28",
                                }}
                              >
                                <span>View Full Details</span>
                                <svg
                                  className="w-5 h-5 ml-2"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                  />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>

                  {/* Lead Form - Right Side */}
                  <div className="order-1 lg:order-2 lg:sticky lg:top-8">
                    <div
                      className="rounded-3xl p-6 shadow-2xl border-2"
                      style={{
                        backgroundColor: "#151f28",
                        borderColor: "rgba(211, 179, 107, 0.3)",
                      }}
                    >
                      <div className="text-center mb-4">
                        <h3
                          className="text-2xl lg:text-3xl font-bold mb-4"
                          style={{ color: "#fbfbfb" }}
                        >
                          Know Today's{" "}
                          <span style={{ color: "#d3b36b" }}>Best Offer</span>
                        </h3>
                        <p
                          className="text-lg"
                          style={{ color: "rgba(251, 251, 251, 0.8)" }}
                        >
                          Get detailed information and secure your investment
                          opportunity
                        </p>
                      </div>
                      <div className="max-w-2xl mx-auto">
                        <LeadForm buttonName="Claim My Offer" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              // Multiple Projects Slider
              <div className="relative">
                <div className="overflow-x-auto scrollbar-hide">
                  <div
                    className="flex space-x-8 pb-4"
                    style={{ width: "max-content" }}
                  >
                    {availableProjects.map((post, index) => (
                      <div key={post._id} className="flex-shrink-0 w-96">
                        <div
                          className="rounded-3xl shadow-xl overflow-hidden border-2 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
                          style={{
                            backgroundColor: "#fbfbfb",
                            borderColor: "rgba(211, 179, 107, 0.2)",
                          }}
                        >
                          {/* Image */}
                          <div className="relative h-64">
                            {post.mainImage && (
                              <Image
                                src={
                                  urlFor(post.mainImage)
                                    .width(400)
                                    .height(300)
                                    .url() || "/placeholder.svg"
                                }
                                alt={post.title}
                                fill
                                className="object-cover"
                              />
                            )}

                            {/* Categories */}
                            <div className="absolute top-4 left-4 flex flex-wrap gap-2 z-20">
                              {post.categories &&
                              Array.isArray(post.categories) ? (
                                post.categories
                                  .filter(
                                    (category) =>
                                      category.title !== "Sub-Project" &&
                                      category.title.toLowerCase() !==
                                        "sold out"
                                  )
                                  .slice(0, 2)
                                  .map((category, catIndex) => (
                                    <span
                                      key={catIndex}
                                      className="px-3 py-1 text-xs font-semibold rounded-full backdrop-blur-sm border"
                                      style={{
                                        backgroundColor:
                                          "rgba(211, 179, 107, 0.9)",
                                        color: "#151f28",
                                        borderColor: "rgba(211, 179, 107, 0.5)",
                                      }}
                                    >
                                      {category.title}
                                    </span>
                                  ))
                              ) : post.categories &&
                                post.categories.title !== "Sub-Project" &&
                                post.categories.title.toLowerCase() !==
                                  "sold out" ? (
                                <span
                                  className="px-3 py-1 text-xs font-semibold rounded-full backdrop-blur-sm border"
                                  style={{
                                    backgroundColor: "rgba(211, 179, 107, 0.9)",
                                    color: "#151f28",
                                    borderColor: "rgba(211, 179, 107, 0.5)",
                                  }}
                                >
                                  {post.categories.title}
                                </span>
                              ) : (
                                <span
                                  className="px-3 py-1 text-xs font-semibold rounded-full backdrop-blur-sm border"
                                  style={{
                                    backgroundColor: "rgba(211, 179, 107, 0.9)",
                                    color: "#151f28",
                                    borderColor: "rgba(211, 179, 107, 0.5)",
                                  }}
                                >
                                  Available
                                </span>
                              )}
                            </div>
                          </div>

                          {/* Content */}
                          <div className="p-6">
                            <h3
                              className="text-xl font-bold mb-3 line-clamp-2"
                              style={{ color: "#151f28" }}
                            >
                              {post.title}
                            </h3>

                            {post.description && (
                              <p
                                className="text-sm leading-relaxed mb-4 line-clamp-3"
                                style={{ color: "rgba(21, 31, 40, 0.8)" }}
                              >
                                {post.description}
                              </p>
                            )}

                            <Link
                              href={
                                post.slug?.current
                                  ? `/dholera-residential-plots/${post.slug.current}`
                                  : "#"
                              }
                              className="inline-flex items-center px-6 py-3 font-semibold rounded-xl shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-sm"
                              style={{
                                backgroundColor: "#d3b36b",
                                color: "#151f28",
                              }}
                            >
                              <span>Learn More</span>
                              <svg
                                className="w-4 h-4 ml-2"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                                />
                              </svg>
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Lead Form for Multiple Projects */}
                <div className="mt-16 max-w-4xl mx-auto">
                  <div
                    className="rounded-3xl p-8 lg:p-12 shadow-2xl border-2"
                    style={{
                      backgroundColor: "#151f28",
                      borderColor: "rgba(211, 179, 107, 0.3)",
                    }}
                  >
                    <div className="text-center mb-8">
                      <h3
                        className="text-3xl font-bold mb-4"
                        style={{ color: "#fbfbfb" }}
                      >
                        Know Today's{" "}
                        <span style={{ color: "#d3b36b" }}>Best Offer</span>
                      </h3>
                      <p
                        className="text-lg"
                        style={{ color: "rgba(251, 251, 251, 0.8)" }}
                      >
                        Connect with our investment team for personalized
                        guidance
                      </p>
                    </div>
                    <LeadForm buttonName="Claim My Offer" />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Sold Out Projects Grid */}
      {soldOutProjects.length > 0 && (
        <div
          className="py-20"
          style={{ backgroundColor: "rgba(21, 31, 40, 0.05)" }}
        >
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2
                className="text-[28px] font-bold mb-6"
                style={{ color: "#151f28" }}
              >
                Sold Out <span style={{ color: "#d3b36b" }}>Projects</span>
              </h2>
              <p
                className="text-xl max-w-2xl mx-auto"
                style={{ color: "rgba(21, 31, 40, 0.7)" }}
              >
                Our successful investment projects with proven returns
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
  {soldOutProjects.map((post) => (
    <div key={post._id} className="group">
      <Link
        href={
          post.slug?.current
            ? `/dholera-residential-plots/${post.slug.current}`
            : "#"
        }
        className="block"
      >
        <div
          className="rounded-2xl shadow-xl overflow-hidden border-2 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] relative cursor-pointer"
          style={{
            backgroundColor: "#fbfbfb",
            borderColor: "rgba(211, 179, 107, 0.2)",
          }}
        >
          {/* Sold Out Overlay */}
          <div className="absolute inset-0 bg-black/40 z-10"></div>

          {/* Image */}
          <div className="relative h-64">
            {post.mainImage && (
              <Image
                src={
                  urlFor(post.mainImage)
                    .width(400)
                    .height(300)
                    .url() || "/placeholder.svg"
                }
                alt={post.title}
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
            )}

            {/* Sold Out Badge */}
            <div className="absolute top-4 right-4 z-20">
              <span
                className="px-4 py-2 text-sm font-bold rounded-full shadow-lg backdrop-blur-sm border-2"
                style={{
                  backgroundColor: "rgba(220, 38, 38, 0.9)",
                  color: "#fbfbfb",
                  borderColor: "rgba(220, 38, 38, 0.5)",
                }}
              >
                SOLD OUT
              </span>
            </div>

            {/* Other Categories */}
            <div className="absolute top-4 left-4 flex flex-wrap gap-2 z-20">
              {post.categories && Array.isArray(post.categories)
                ? post.categories
                    .filter(
                      (category) =>
                        category.title !== "Sub-Project" &&
                        category.title.toLowerCase() !== "sold out"
                    )
                    .slice(0, 1)
                    .map((category, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-xs font-semibold rounded-full backdrop-blur-sm border opacity-90"
                        style={{
                          backgroundColor: "rgba(211, 179, 107, 0.8)",
                          color: "#151f28",
                          borderColor: "rgba(211, 179, 107, 0.5)",
                        }}
                      >
                        {category.title}
                      </span>
                    ))
                : post.categories &&
                  post.categories.title !== "Sub-Project" &&
                  post.categories.title.toLowerCase() !==
                    "sold out" && (
                    <span
                      className="px-3 py-1 text-xs font-semibold rounded-full backdrop-blur-sm border opacity-90"
                      style={{
                        backgroundColor: "rgba(211, 179, 107, 0.8)",
                        color: "#151f28",
                        borderColor: "rgba(211, 179, 107, 0.5)",
                      }}
                    >
                      {post.categories.title}
                    </span>
                  )}
            </div>
          </div>

          {/* Content */}
          <div className="p-6 relative z-20">
            <h3
              className="text-xl font-bold mb-3 line-clamp-2"
              style={{ color: "#151f28" }}
            >
              {post.title}
            </h3>

            {post.description && (
              <p
                className="text-sm leading-relaxed mb-4 line-clamp-3"
                style={{ color: "rgba(21, 31, 40, 0.8)" }}
              >
                {post.description}
              </p>
            )}

            <div
              className="inline-flex items-center px-6 py-2 font-medium rounded-lg border-2 hover:shadow-md transition-all duration-300 text-sm opacity-75 hover:opacity-100"
              style={{
                borderColor: "#d3b36b",
                color: "#d3b36b",
                backgroundColor: "transparent",
              }}
            >
              <span>View Project</span>
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </div>
          </div>
        </div>
      </Link>
    </div>
  ))}
</div>
          </div>
        </div>
      )}

      {/* No Projects Available */}
      {availableProjects.length === 0 && soldOutProjects.length === 0 && (
        <div className="py-20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div
              className="w-32 h-32 mx-auto mb-8 rounded-full flex items-center justify-center"
              style={{ backgroundColor: "rgba(211, 179, 107, 0.1)" }}
            >
              <svg
                className="w-16 h-16"
                fill="none"
                stroke="#d3b36b"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
              </svg>
            </div>
            <h3
              className="text-3xl font-bold mb-4"
              style={{ color: "#151f28" }}
            >
              New Projects <span style={{ color: "#d3b36b" }}>Coming Soon</span>
            </h3>
            <p className="text-xl" style={{ color: "rgba(21, 31, 40, 0.7)" }}>
              We're preparing exciting new investment opportunities. Stay tuned
              for updates.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
