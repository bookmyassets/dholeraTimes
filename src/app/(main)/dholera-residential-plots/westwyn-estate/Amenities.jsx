"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const ProjectAmenities = () => {
  const [showAll, setShowAll] = useState(false);

  const amenities = [
    {
      icon: "🚧",
      title: "Project Boundary",
      description: "Clearly defined project boundaries with proper demarcation",
      color: "from-gray-500 to-gray-700"
    },
    {
      icon: "🏰",
      title: "Gated Community",
      description: "Grand entrance with secure access control",
      color: "from-indigo-500 to-purple-600"
    },
    {
      icon: "🛣️",
      title: "Internal Roads",
      description: "High-quality reinforced cement concrete roads",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: "📹",
      title: "24/7 Security & CCTV Surveillance",
      description: "Complete perimeter security with surveillance",
      color: "from-red-500 to-red-700"
    },
    {
      icon: "🧒",
      title: "Kids Play Area",
      description: "Safe and fun play area for children",
      color: "from-purple-400 to-pink-400"
    },
    {
      icon: "📱",
      title: "App-Based Society Management",
      description: "Modern app-based community management system",
      color: "from-teal-500 to-teal-700"
    },
    {
      icon: "⚡",
      title: "Power & Water Supply",
      description: "Reliable electricity and water infrastructure",
      color: "from-yellow-600 to-yellow-800"
    },
    {
      icon: "🧘",
      title: "Yoga Deck",
      description: "Peaceful space for yoga and meditation",
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: "🏃",
      title: "Jogging Track",
      description: "Dedicated track for walking and jogging",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: "👵",
      title: "Senior Citizen Zone",
      description: "Comfortable area for senior residents",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: "🔌",
      title: "EV Charging Station",
      description: "Electric vehicle charging facilities",
      color: "from-green-600 to-green-800"
    }
  ];

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const initialItems = isMobile ? 6 : 8;
  
  const visibleAmenities = showAll ? amenities : amenities.slice(0, initialItems);

  return (
    <div className="bg-gray-100 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#151f28]">
            Project <span className="text-[#d3b36b]">Essentials</span>
          </h2>
          <div className="w-20 h-1 bg-[#d3b36b] mx-auto mb-6"></div>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-[#151f28] leading-relaxed">
            WestWyn Estate offers comprehensive amenities designed for modern living and secure investment
          </p>
        </div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {visibleAmenities.map((amenity, index) => (
            <div
              key={index}
              className="group relative bg-[#1e2a36] rounded-xl p-6 border border-[#2a3a4a] hover:border-[#d3b36b] hover:rounded-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon with gradient background */}
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4 bg-gradient-to-r ${amenity.color} group-hover:scale-110 transition-transform duration-300`}>
                <div className="text-2xl">
                  {amenity.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#d3b36b] transition-colors duration-300">
                {amenity.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed">
                {amenity.description}
              </p>
              
              {/* Hover effect accent */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#d3b36b] group-hover:w-full transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* Show More/Less Button */}
        {amenities.length > initialItems && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-3 bg-[#b69b5e] hover:bg-[#d3b36b] text-[#151f28] font-medium rounded-lg transition-colors duration-300 flex items-center gap-2"
            >
              {showAll ? (
                <>
                  <span>Show Less</span>
                  <ChevronUp className="w-4 h-4" />
                </>
              ) : (
                <>
                  <span>View All Amenities</span>
                  <ChevronDown className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

export default ProjectAmenities;