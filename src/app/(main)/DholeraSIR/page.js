import React from "react";
import hero from "@/assets/dholeraSIR.webp";
import Image from "next/image";
import { getProjectInfo } from "@/sanity/lib/api";

export default async function About() {
  const slug = await getProjectInfo();

  return (
    <div className="bg-white">
      {/* Hero Section - Enhanced with overlay gradient and better typography */}
      <section className="relative h-[70vh] flex items-center justify-center text-center">
        <div className="absolute inset-0">
          <Image
            src={hero}
            alt="Dholera SIR Aerial View"
            className="w-full h-full object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/10"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-white px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold drop-shadow-lg mb-6 tracking-tight">
            Dholera SIR
          </h1>
          <p className="text-xl md:text-2xl font-light leading-relaxed max-w-3xl mx-auto">
            India's First Greenfield Smart City along the Delhi-Mumbai
            Industrial Corridor
          </p>
          <div className="mt-8">
            <a
              href="#about"
              className="inline-block px-8 py-3 bg-white text-black font-medium rounded-full hover:bg-gray-100 transition duration-300 transform hover:scale-105"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* About Section - Redesigned with better spacing and card layout */}
      <section
        id="about"
        className="py-24 bg-gradient-to-br from-gray-50 to-gray-200"
      >
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              About Dholera SIR
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-102 transition duration-500 group">
              <Image
                src={hero}
                alt="Dholera SIR Overview"
                className="w-full h-auto group-hover:scale-105 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-70"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <span className="text-sm font-medium bg-blue-600 px-3 py-1 rounded-full">
                  Smart City
                </span>
                <h3 className="text-xl font-bold mt-2">Future of Urban Planning</h3>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-orange-400">
                <p className="text-lg leading-relaxed text-gray-700">
                  Dholera Special Investment Region (SIR) is India's first
                  greenfield smart city and the government's most significant
                  undertaking today. Located in Gujarat along the Delhi-Mumbai
                  Industrial Corridor (DMIC), this smart city is expected to
                  compete with the world's biggest industrial hubs once complete.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-blue-600">
                <p className="text-lg leading-relaxed text-gray-700">
                  Considered an investment paradise by many realtors today, the
                  Dholera SIR project is expected to yield 15-20% returns
                  annually. This high ROI is driven by its government-backed
                  development, rapid infrastructure growth, and emerging
                  semiconductor industry.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-green-600">
                <p className="text-lg leading-relaxed text-gray-700">
                  A Special Purpose Entity (SPE) has been formed between the
                  Central Government and Gujarat State Government to drive this
                  project. Spread across 920 sq.km., the Dholera infrastructure
                  will be self-sustaining and the city a high-tech metropolis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Info Section - Enhanced with better card design */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              EXPLORE DHOLERA SIR
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
            <p className="text-gray-600 text-lg mt-6">
              Discover what makes Dholera SIR one of India's most ambitious infrastructure projects
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {slug && slug.length > 0 ? (
              slug.map((item) => (
                <div
                  key={item._id}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300 border border-gray-100"
                >
                  <div className="bg-blue-600 h-2"></div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-gray-800">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center p-8">
                <p className="text-gray-500">Project information is currently being updated.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}