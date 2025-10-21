"use client";
import React, { useState } from "react";
import Image from "next/image";
import wc from "@/assets/residential/marina-bay.webp";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";
import BrochureDownload from "../../components/BrochureDownload";

const FeatureCard = ({ icon, title, value }) => (
  <div className="bg-white rounded-lg p-4 border border-gray-200 text-center">
    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
      {icon}
    </div>
    <h4 className="font-semibold text-gray-900 text-sm mb-1">{title}</h4>
    <p className="text-[#151f28] font-bold text-lg">{value}</p>
  </div>
);

export default function Hero() {
  const [brochureFormOpen, setIsBrochureFormOpen] = useState(false);

  const openBrochureForm = () => {
    setIsBrochureFormOpen(true);
  };

  const closeBrochureForm = () => {
    setIsBrochureFormOpen(false);
  };

  const projectFeatures = [
    { icon: "📐", title: "Plot Size", value: "177-300 Sq.Yards" },
    { icon: "💰", title: "Starting Price", value: "₹6,700/Sq.Yd" },
    { icon: "🏗️", title: "Project Type", value: "Residential Plots" },
    { icon: "📍", title: "Location", value: "Dholera SIR" },
  ];

  return (
    <>
      <title>Marina Bay Dholera | Premium Plots in Smart City Gujarat</title>
      <meta
        name="description"
        content="Marina Bay Dholera, featured in Dholera Times, offers premium smart city plots in Gujarat, providing exceptional connectivity and high investment value."
      />
      <meta
        name="keywords"
        content="Marina Bay Dholera, Dholera plots, smart city Gujarat, Dholera Smart City, Dholera investment"
      />

      <div className="bg-gray-100">
        <div className="bg-[#151f28] text-white">
          <div className="max-w-7xl mx-auto px-4 py-12">
            <nav className="flex items-center space-x-2 text-sm text-blue-200 mb-6">
              <Link href="/" className="hover:text-white">
                Home
              </Link>
              <span>/</span>
              <Link
                href="/dholera-residential-plots"
                className="hover:text-white"
              >
                Projects
              </Link>
              <span>/</span>
              <span className="text-white">Marina Bay</span>
            </nav>

            {/* Image Container */}
            <div className="relative min-h-[500px] md:min-h-[600px]">
              {/* Background Image */}
              <Image
                src={wc}
                alt="WestWyn County"
                fill
                className="absolute object-cover"
                priority
              />

              {/* Dark overlay for contrast */}
              <div className="absolute inset-0 bg-black/30" />

              {/* Bottom Overlay Box */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="bg-white/95 backdrop-blur-md rounded-t-2xl shadow-2xl border border-white/30 max-w-6xl mx-auto w-full">
                  <div className="grid md:grid-cols-3 gap-6 p-6">
                    {/* Left Column - Categories & Price */}
                    <div>
                      <div className="flex items-center gap-2 flex-wrap mb-3">
                        <span className="px-3 py-1.5 text-[#debe6b] bg-[#151f28] rounded-full text-sm font-medium">
                          Residential
                        </span>

                        <span className="px-3 py-1.5 bg-[#d3b36b] text-[#151f28] rounded-full text-sm font-medium">
                          🔥 Newly Launched
                        </span>
                      </div>
                      <div className="text-3xl font-bold text-[#151f28]">
                        ₹6,250
                        <span className="text-sm text-gray-600 ml-1">
                          /Sq.Yd
                        </span>
                      </div>
                    </div>

                    {/* Middle Column - Title & Description */}
                    <div>
                      <a href="/dholera-residential-plots/westwyn-estate">
                        <h1 className="text-2xl font-bold text-gray-900 mb-2 leading-tight">
                          <span className="text-base font-bold text-gray-900">
                            Explore Our Latest Project
                          </span>{" "}
                          <br /> WestWyn Estate
                        </h1>
                      </a>
                      {/* <p className="text-gray-600 text-base leading-relaxed line-clamp-3">
                        {post.description}
                        </p> */}
                    </div>

                    {/* Right Column - Contact & Buttons */}
                    <div className="flex flex-col justify-between">
                      <div className="flex items-center gap-2 text-gray-700 text-base mb-4">
                        <a
                          href="tel:+919958993549"
                          className="flex-1 text-center bg-[#debe6b] hover:bg-[#d3b15c] text-white px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 hover:shadow-lg transform hover:-translate-y-0.5"
                        >
                          📞 Site Visit
                        </a>
                        <button
                          onClick={openBrochureForm}
                          className="flex-1 bg-[#151f28] text-[#d3b15c] hover:bg-[#d3b15c] hover:text-[#151f28] px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 hover:shadow-lg transform hover:-translate-y-0.5"
                        >
                          📄 Brochure
                        </button>
                      </div>
                      <div className=" text-[#151f28] text-xl font-semibold">
                        <p>Registry Ready Plot under ₹10 Lakhs</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="bg-white border-b">
            <div className="max-w-7xl mx-auto px-4 py-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {projectFeatures.map((feature, index) => (
                  <FeatureCard key={index} {...feature} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {brochureFormOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[1000]">
            <BrochureDownload
              title="Get the Dholera Brochure"
              buttonName="Download Brochure"
              onClose={() => closeBrochureForm()}
              link="https://cdn.sanity.io/files/c3e1h345/projects/c9471499567c096befb9416aa99c7f0077900d11.pdf"
            />
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
