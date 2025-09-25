"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const ProjectAmenities = () => {
  const [showAll, setShowAll] = useState(false);

  const amenities = [
    {
      icon: "🚧",
      title: "Project Boundary",
      description: "Clearly defined project boundaries with proper demarcation"
    },
    {
      icon: "🏰",
      title: "Entrance Gate",
      description: "Grand entrance with secure access control"
    },
    {
      icon: "🛣️",
      title: "Internal RCC Roads",
      description: "High-quality reinforced cement concrete roads"
    },
    {
      icon: "🧱",
      title: "Boundary Wall",
      description: "Complete perimeter boundary wall for security"
    },
    {
      icon: "🏠",
      title: "Security Cabin",
      description: "24/7 security personnel and monitoring station"
    },
    {
      icon: "🏢",
      title: "Club House",
      description: "Community club house for residents"
    },
    {
      icon: "🌳",
      title: "Open Plot with Garden",
      description: "Landscaped gardens and open green spaces"
    },
    {
      icon: "📍",
      title: "Demarcation",
      description: "Clear plot demarcation and numbering"
    },
    {
      icon: "⚡",
      title: "Power & Water Supply",
      description: "Reliable electricity and water infrastructure"
    },
    {
      icon: "🪑",
      title: "Visitor Waiting Room",
      description: "Comfortable waiting area for visitors"
    },
    {
      icon: "🌲",
      title: "Tree Plantation",
      description: "Extensive green cover with native trees"
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
            Project <span className="text-[#debe6b]">Essentials</span>
          </h2>
          <div className="w-20 h-1 bg-[#debe6b] mx-auto mb-6"></div>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-[#151f28] leading-relaxed">
            WestWyn County offers comprehensive amenities designed for modern living and secure investment
          </p>
        </div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {visibleAmenities.map((amenity, index) => (
            <div
              key={index}
              className="group relative bg-[#1e2a36] rounded-xl p-6 border border-[#2a3a4a] hover:border-[#debe6b] hover:rounded-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {amenity.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#debe6b] transition-colors duration-300">
                {amenity.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed">
                {amenity.description}
              </p>
              
              {/* Hover effect accent */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#debe6b] group-hover:w-full transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* Show More/Less Button */}
        {amenities.length > initialItems && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-3 bg-[#debe6b] hover:bg-[#d4b15f] text-[#151f28] font-medium rounded-lg transition-colors duration-300 flex items-center gap-2"
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