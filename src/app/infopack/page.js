"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import logo from "@/assets/dt.webp";
import maps from "@/assets/maps.png";
import videos from "@/assets/videos.webp";
import inventory from "@/assets/inventory.webp";
import brochure from "@/assets/brochure.webp";

export default function Info() {
  const [viewMode, setViewMode] = useState("card");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();
    setViewMode(window.innerWidth < 768 ? "list" : "card");
    
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  const items = [
    {
      id: 1,
      title: "Locations",
      description: "Know more about nearby landmarks and our project's location on Google Maps",
      link: "/infopack/locations",
      image: maps,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      id: 2,
      title: "Videos",
      description: "Watch expert insights on why investing in Dholera is a smart financial decision",
      link: "/infopack/videos",
      image: videos,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      id: 3,
      title: "Project Brochure",
      description: "Learn all about our Dholera residential plots by accessing our comprehensive project brochure",
      link: "/infopack/Brochure",
      image: brochure,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      id: 4,
      title: "Available Plots",
      description: "Check available residential plots in Dholera and book yours before they're sold out!",
      link: "/infopack/Inventory",
      image: inventory,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
  ];

  return (
    <div className="bg-gradient-to-b from-blue-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header with decorative elements */}
        <div className="text-center mb-16 relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 w-24 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
          <h1 className="mt-6 text-4xl font-extrabold text-gray-800 sm:text-5xl tracking-tight">
            Explore <span className="text-[#d8b66d] relative inline-block">
              Dholera
              <span className="absolute bottom-0 left-0 w-full h-1 bg-[#d8b66d]"></span>
            </span>
          </h1>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Discover strategic investment opportunities in India's first planned smart city and be part of the future.
          </p>
          
          {/* View toggle for non-mobile devices */}
          <div className="flex justify-center mt-10 max-sm:hidden">
            <div className="inline-flex rounded-md shadow-sm p-1 bg-white border border-gray-200" role="group">
              <button
                type="button"
                className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-300 ${
                  viewMode === "card"
                    ? "bg-[#d8b66d] text-white shadow-md"
                    : "bg-white text-gray-700 hover:bg-gray-50"
                }`}
                onClick={() => setViewMode("card")}
                aria-label="Card view"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 inline mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
                Card View
              </button>
              <button
                type="button"
                className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-300 ${
                  viewMode === "list"
                    ? "bg-[#d8b66d] text-white shadow-md"
                    : "bg-white text-gray-700 hover:bg-gray-50"
                }`}
                onClick={() => setViewMode("list")}
                aria-label="List view"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 inline mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                List View
              </button>
            </div>
          </div>
        </div>

        {/* Card View */}
        {viewMode === "card" && (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
            {items.map((item) => (
              <Link href={item.link} key={item.id} className="group">
                <div className="bg-white rounded-xl overflow-hidden shadow-2xl border border-gray-100 h-full transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-1">
                  <div className="relative h-64 w-full overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                     */}
                  </div>

                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 mr-3">
                        {item.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 group-hover:text-[#d8b66d] transition-colors duration-300">
                        {item.title}
                      </h3>
                    </div>

                    <div className="mt-6 flex items-center justify-between">
                      <span className="inline-flex items-center text-sm font-medium text-blue-600 group-hover:text-blue-800 transition-colors duration-300">
                        View Details
                      </span>
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>

                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 transform rotate-45 translate-x-6 -translate-y-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* List View */}
        {viewMode === "list" && (
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            {items.map((item, index) => (
              <div
                key={item.id}
                className={`border-b border-gray-200 last:border-b-0 ${index % 2 === 0 ? 'bg-gray-50/50' : 'bg-white'}`}
              >
                <Link href={item.link} className="group">
                  <div className="flex items-center p-6 hover:bg-blue-50/50 transition-colors duration-300">
                    <div className="flex-shrink-0 mr-6">
                      <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 transition-all duration-300 group-hover:bg-amber-200">
                        {item.icon}
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-3xl font-bold text-gray-900 group-hover:text-[#d8b66d] transition-colors duration-300">
                        {item.title}
                      </h3>
                    </div>
                    
                    <div className="ml-4">
                      <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-gray-500 group-hover:bg-[#d8b66d] group-hover:text-white transition-all duration-300">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}