"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import logo from "@/assets/dt.webp";
import maps from "@/assets/maps.png";
import videos from "@/assets/videos.webp"; // Ensure correct path
import inventory from "@/assets/inventory.webp"; // Ensure correct path
import brochure from "@/assets/brochure.webp"; // Ensure correct path

export default function Info() {
  const [viewMode, setViewMode] = useState('card');
  const [isMobile, setIsMobile] = useState(false);
  
  // Check if the device is mobile on component mount and window resize
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Set initial value
    checkIsMobile();
    
    // Set appropriate default view based on device
    setViewMode(window.innerWidth < 768 ? 'list' : 'card');
    
    // Add event listener for window resize
    window.addEventListener('resize', checkIsMobile);
    
    // Clean up event listener
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);
  
  const items = [
    { 
      id: 1, 
      title: "Locations", 
      description: "Explore strategic areas in Dholera Smart City", 
      link: "/infopack/locations",
      image: maps
    },
    { 
      id: 2, 
      title: "Videos", 
      description: "Watch informative videos about development", 
      link: "/infopack/videos",
      image: videos
    },
    { 
      id: 3, 
      title: "Brochure", 
      description: "Download detailed project brochures", 
      link: "/infopack/Brochure",
      image: brochure
    },
    { 
      id: 4, 
      title: "Inventory", 
      description: "Browse available properties and plots", 
      link: "/infopack/Inventory",
      image: inventory
    }
  ];

  return (
    <div className="bg-gradient-to-b from-blue-50 to-gray-100 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-700 sm:text-5xl bg-clip-text">
            Explore <span className='text-[#d8b66d]'> Dholera </span> 
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Discover strategic investment opportunities in India's first planned smart city
          </p>
        </div>
        
        {/* View toggle */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <button
              type="button"
              className={`px-4 py-2 text-sm font-medium rounded-l-lg border ${
                viewMode === 'card' 
                  ? 'bg-[#d8b66d] text-white border-[#d8b66d]' 
                  : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-100'
              }`}
              onClick={() => setViewMode('card')}
              aria-label="Card view"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
              Card View
            </button>
            <button
              type="button"
              className={`px-4 py-2 text-sm font-medium rounded-r-lg border ${
                viewMode === 'list' 
                  ? 'bg-[#d8b66d] text-white border-[#d8b66d]' 
                  : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-100'
              }`}
              onClick={() => setViewMode('list')}
              aria-label="List view"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
              List View
            </button>
          </div>
        </div>

        {/* Card View */}
        {viewMode === 'card' && (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {items.map((item) => (
              <Link 
                href={item.link} 
                key={item.id}
                className="group"
              >
                <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 h-full transition-all duration-300 group-hover:shadow-xl group-hover:translate-y-1">
                  <div className="relative h-64 w-full overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className=" max-sm:w-full object-contain transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-4xl font-bold text-gray-900 group-hover:text-[#d8b66d] transition-colors duration-300">{item.title}</h3>
                    
                    <div className="mt-6 flex items-center justify-between">
                      <span className="inline-flex items-center text-sm font-medium text-blue-600 group-hover:text-blue-800 transition-colors duration-300">
                        View Details
                      </span>
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* List View */}
        {viewMode === 'list' && (
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="divide-y divide-gray-200">
              {items.map((item) => (
                <Link 
                  href={item.link} 
                  key={item.id}
                  className="group"
                >
                  <div className="flex items-center p-4 hover:bg-gray-50 transition-colors duration-200">
                    <div className="flex-shrink-0 relative w-16 h-16 rounded-md overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="ml-6 flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-medium text-gray-900 group-hover:text-[#d8b66d] transition-colors duration-300">{item.title}</h3>
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 text-gray-500 group-hover:bg-[#d8b66d] group-hover:text-white transition-all duration-300">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}