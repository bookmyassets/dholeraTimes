import { PortableText } from "@portabletext/react";
import {
  getPostBySlug,
  getblogs,
  getProjectInfo,
  getProjects,
  getProjectsForSidebar,
} from "@/sanity/lib/api";
import CostSheet from "@/app/(main)/components/costSheet";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import CommonForm from "../../components/FormSection";
import LeadForm from "../LeadForm";
import React from "react";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const site = "dholera-times";
  const post = await getPostBySlug(slug, site);

  return {
    title: post.title,
    description: post.metaDescription,
  };
}

const ProjectCard = ({ post }) => {
  if (!post || !post.slug?.current) return null;

  return (
    <Link href={`/dholera-residential-plots/${post.slug.current}`}>
      <div className="group bg-white hover:bg-gray-50 p-4 rounded-xl border border-gray-200 transition-all duration-300 hover:shadow-lg hover:border-blue-300">
        {post.mainImage && (
          <div className="w-full h-32 rounded-lg overflow-hidden mb-3 bg-gray-100">
            <Image
              src={urlFor(post.mainImage).width(300).height(200).url()}
              alt={post.title || "Project image"}
              width={300}
              height={200}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}
        <div>
          <h4 className="font-semibold text-gray-900 line-clamp-2 mb-1 text-base">
            {post.title || "Untitled Project"}
          </h4>
          <p className="text-xs text-gray-600 line-clamp-2 mb-2">
            {post.description || ""}
          </p>
          <div className="flex items-center text-[#151f28] text-xs font-medium">
            <span>View Details</span>
            <svg
              className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
};



export default async function Post({ params }) {
  const { slug } = await params;
  const site = "dholera-times";

  if (!slug) {
    return <div>Loading...</div>;
  }

  try {
    const [post, projectsForSidebar, projectInfo] = await Promise.all([
      getPostBySlug(slug, site),
      getProjectsForSidebar(slug),
      getProjectInfo(),
    ]);

    if (!post) {
      return <div>Project not found</div>;
    }

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
          return (
            <div className="my-6">
              <img
                src={urlFor(value).width(800).url()}
                alt={value.alt || ""}
                className="w-full rounded-lg shadow-md"
              />
            </div>
          );
        },
      },
      block: {
        h1: ({ children }) => (
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{children}</h1>
        ),
        h2: ({ children }) => (
          <h2 className="text-2xl font-bold text-gray-800 mb-3">{children}</h2>
        ),
        normal: ({ children }) => (
          <p className="text-gray-700 mb-4 leading-relaxed">{children}</p>
        ),
      },
    };

    // Mock project features (replace with actual data from your CMS)
    const projectFeatures = [
      { icon: "📐", title: "Plot Size", value: "177-300 Sq.Yards" },
      { icon: "💰", title: "Starting Price", value: "₹6,250/Sq.Yd" },
      { icon: "🏗️", title: "Project Type", value: "Residential Plots" },
      { icon: "📍", title: "Location", value: "Dholera SIR" },
    ];

    return (
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section with Project Header */}
       

        {/* Quick Features Bar */}
        

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-sm border p-6 mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Project Overview
                </h2>
                <div className="prose max-w-none">
                  <PortableText value={post.body} components={components} />
                </div>
              </div>

              {/* Project Highlights */}
              <div className="bg-white rounded-xl shadow-sm border p-6 mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Project Highlights
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "✅ DMIC Investment Region",
                    "✅ Smart City Infrastructure",
                    "✅ Affordable Pricing",
                    "✅ Clear Title & Documentation",
                    "✅ Near International Airport",
                    "✅ High ROI Potential",
                    "✅ Government Approved",
                    "✅ Easy Payment Plans",
                  ].map((highlight, index) => (
                    <div
                      key={index}
                      className="flex items-center text-gray-700"
                    >
                      {highlight}
                    </div>
                  ))}
                </div>
              </div>

              {/* Location Map Section */}
             {/*  <div className="bg-white rounded-xl shadow-sm border p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Location & Connectivity
                </h2>
                <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center">
                  <div className="text-center text-gray-600">
                    <div className="text-4xl mb-2">🗺️</div>
                    <p>Interactive Location Map</p>
                    <p className="text-sm">
                      (Would show actual map integration)
                    </p>
                  </div>
                </div>
                <div className="mt-4 grid md:grid-cols-2 gap-4 text-sm text-gray-700">
                  <div>
                    <h4 className="font-semibold mb-2">Key Distances:</h4>
                    <ul className="space-y-1">
                      <li>• 10km from Dholera International Airport</li>
                      <li>• 5km from DMIC Corridor</li>
                      <li>• 15km from Proposed Metro Station</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Infrastructure:</h4>
                    <ul className="space-y-1">
                      <li>• Wide Roads & Underground Wiring</li>
                      <li>• Water Supply & Sewage Systems</li>
                      <li>• Parks & Green Spaces</li>
                    </ul>
                  </div>
                </div>
              </div> */}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Contact Form */}
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl shadow-lg p-6 text-white">
                <div className="text-center mb-4">
                  <h3 className="font-bold text-lg mb-2">
                    Get Instant Callback
                  </h3>
                  <p className="text-blue-200 text-sm">
                    Limited Plots Available
                  </p>
                </div>
                <LeadForm
                  title={post.title}
                  buttonName="📞 Get Best Price Now"
                />
              </div>

              {/* Project Brochure */}
              <div className="bg-white rounded-xl shadow-sm border p-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">📄</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Project Brochure
                  </h4>
                  <p className="text-gray-600 text-sm mb-3">
                    Download detailed project information
                  </p>
                  <button className="w-full bg-[#151f28] hover:bg-blue-700 text-white py-2 rounded-lg font-medium transition-colors">
                    Download PDF Brochure
                  </button>
                </div>
              </div>

              {/* Related Projects */}
              <div className="bg-white rounded-xl shadow-sm border p-6">
                <h3 className="font-bold text-gray-900 mb-4 text-lg">
                  Similar Projects
                </h3>
                <div className="space-y-4">
                  {projectsForSidebar?.slice(0, 3).map((project) => (
                    <ProjectCard key={project._id} post={project} />
                  ))}
                </div>
              </div>

              {/* Quick Contact */}
              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-xl">📞</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Need Immediate Help?
                  </h4>
                  <p className="text-gray-600 text-sm mb-3">
                    Call our project expert
                  </p>
                  <a
                    href="tel:+919876543210"
                    className="block bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-medium transition-colors"
                  >
                    +91 98765 43210
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Cost Sheet Section */}
       {/*  {isProject && (
          <div className="bg-gray-100 py-12">
            <div className="max-w-7xl mx-auto px-4">
              <CostSheet />
            </div>
          </div>
        )} */}

        {/* Bottom CTA */}
        {/* <div className="bg-blue-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Invest in Dholera?
            </h2>
            <p className="text-blue-200 text-lg mb-6">
              Book your site visit today and get exclusive offers
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                📅 Schedule Site Visit
              </button>
              <button className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
                💰 Get Price List
              </button>
            </div>
          </div>
        </div> */}
      </div>
    );
  } catch (error) {
    console.error("Error loading project:", error);
    return <div>Error loading project</div>;
  }
}
