"use client";
import React, { useState } from "react";
import Image from "next/image";
import wc from "@/assets/residential/westwyn-county-dholera-residential-plots.webp";
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
    { icon: "📐", title: "Plot Size", value: "from 150 Sq.Yards" },
    { icon: "🏗️", title: "Project Type", value: "Residential Dholera Plots" },
    { icon: "💰", title: "Starting Price", value: "₹11,000/Sq.Yd" },
    { icon: "📍", title: "Location", value: "Dholera SIR" },
  ];

  return (
    <>
      <title>WestWyn County Dholera | Registry-Ready Smart City Plots</title>
      <meta
        name="description"
        content="Explore WestWyn County Dholera on Dholera Times - registry-ready plots in Gujarat’s Smart City designed for investors seeking secure Dholera investments."
      />
      <meta
        name="keywords"
        content="WestWyn County Dholera, Dholera plots, Dholera Smart City, Dholera investment, smart city Gujarat"
      />
      <link
        rel="canonical"
        href="https://www.dholeratimes.com/dholera-residential-plots/westwyn-county"
      />

      <div className="bg-gray-100">
        <div className="bg-[#151f28] text-white">
          <div className="max-w-7xl mx-auto px-4 py-4">
            {/* Image Container */}
            <div className="relative min-h-[250px] md:min-h-[min(600px,80vh)] ">
              {/* Background Image */}
              <Image
                src={wc}
                alt="WestWyn Estate in Dholera Gujarat"
                fill
                className="absolute object-cover aspect-[3/2]"
                priority
              />

              {/* Dark overlay for contrast */}
              <div className="absolute inset-0 bg-black/30" />

              {/* Bottom Overlay Box - Hidden on mobile, visible on desktop */}
              <div className="absolute bottom-0 left-0 right-0 p-4 hidden md:block">
                <div className="bg-white/95 backdrop-blur-md rounded-t-2xl shadow-2xl border border-white/30 max-w-6xl mx-auto w-full">
                  <div className="grid md:grid-cols-3 gap-6 p-6">
                    {/* Left Column - Categories & Price */}
                    <div>
                      <div className="flex items-center gap-2 flex-wrap mb-3">
                        <span className="px-3 py-1.5 text-white bg-green-500 rounded-full text-sm font-medium">
                          Ongoing
                        </span>
                      </div>
                      <div className="text-3xl font-bold text-[#151f28]">
                        ₹6,500
                        <span className="text-sm text-gray-600 ml-1">
                          /Sq.Yd
                        </span>
                      </div>
                    </div>

                    {/* Middle Column - Title & Description */}
                    <div>
                      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 leading-tight">
                        WestWyn Estate
                      </h1>
                      {/* <p className="text-gray-600 text-base leading-relaxed line-clamp-3">
                        {post.description}
                      </p> */}
                    </div>

                    {/* Right Column - Contact & Buttons */}
                    <div className="flex flex-col justify-between">
                      <div className="flex items-center gap-2 text-gray-700 text-base mb-4">
                        <a
                          href="tel:+919958993549"
                          className="flex-1 text-center bg-[#d3b36b] hover:bg-[#d3b15c] text-white px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 hover:shadow-lg transform hover:-translate-y-0.5"
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
                        <p>Immediate Possesion</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Only Section - Below Hero Image */}
            <div className="md:hidden mt-6">
              <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-white/30 w-full">
                <div className="grid gap-4 p-4">
                  {/* Categories & Price */}
                  <div>
                    <div className="flex items-center gap-2 flex-wrap mb-3">
                      <span className="px-3 py-1.5 text-white bg-green-500 rounded-full text-sm font-medium">
                        Ongoing
                      </span>
                    </div>
                    <div className="text-xl font-bold text-[#151f28]">
                      ₹6,500
                      <span className="text-sm text-gray-600 ml-1">/Sq.Yd</span>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h1 className="text-xl font-bold text-gray-900 mb-2 leading-tight">
                      WestWyn Estate
                    </h1>
                  </div>

                  {/* Contact & Buttons */}
                  <div className="flex flex-col justify-between">
                    <div className="flex items-center order-2 gap-2 text-gray-700 text-base py-2">
                      <a
                        href="tel:+919958993549"
                        className="flex-1 text-center bg-[#d3b36b] hover:bg-[#d3b15c] text-white px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 hover:shadow-lg transform hover:-translate-y-0.5"
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
                    <div className="text-[#151f28] order-1 text-lg font-semibold">
                      <p>Registry Ready Plot under ₹10 Lakh</p>
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
              title="Get the Complete Project Brief"
              buttonName="Download Brochure"
              onClose={() => closeBrochureForm()}
              link="https://cdn.sanity.io/files/c3e1h345/projects/4fe6c7629f7f8caf78eb2b65074a0a439726b608.pdf"
            />
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
