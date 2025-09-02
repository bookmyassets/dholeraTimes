import Image from "next/image";
import React from "react";
import Link from "next/link";
import hero from "@/assets/hero5.webp";
import residential from "@/assets/bulkLand/residential-bulk-land-cover.webp"
import industrial from "@/assets/bulkLand/industrial-bulk-land-cover.webp"
import hac from "@/assets/bulkLand/high-access-corridor-bulk-land-cover.webp"
import cityCenter from "@/assets/bulkLand/city-centre-bulk-land-cover.webp"
import knowledge from "@/assets/bulkLand/knowledge-it-bulk-land-cover.webp"
import recreation from "@/assets/bulkLand/recreation-sports-bulk-land-cover.webp"
import BulkLand from "../components/BulkLandForm";

export default function page() {
  const bulkLandCategories = [
    {
      id: 1,
      title: "Residential Bulk Land",
      image: residential,
      href: "/bulk-land/residential",
      description: "Perfect for residential townships and housing projects"
    },
    {
      id: 2,
      title: "Industrial Bulk Land",
      image: industrial,
      href: "/bulk-land/industrial",
      description: "Ideal for manufacturing and industrial developments"
    },
    {
      id: 3,
      title: "High Access Corridor",
      image: hac,
      href: "/bulk-land/high-access-corridor",
      description: "Prime locations with excellent connectivity"
    },
    {
      id: 4,
      title: "City Centre",
      image: cityCenter,
      href: "/bulk-land/city-centre",
      description: "Central business district opportunities"
    },
    {
      id: 5,
      title: "Knowledge & IT",
      image: knowledge,
      href: "/bulk-land/knowledge-it",
      description: "Tech parks and knowledge-based industries"
    },
    {
      id: 6,
      title: "Recreation & Sports",
      image: recreation,
      href: "/bulk-land/recreation-sports",
      description: "Entertainment and sports facility development"
    }
  ];

  return (
    <>
      <div className="relative md:h-96 w-full h-[30vh] overflow-hidden">
        <Image
          src={hero}
          alt="Dholera Skyline"
          className="object-cover w-full h-[50vh]"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-6 py-10">
            <h1 className="text-4xl font-bold text-white mb-2">
              Bulk Land
            </h1>
          </div>
        </div>
      </div>
      
      <div>
        <p className="text-center max-w-4xl mx-auto my-8 px-4 leading-relaxed">
          Looking to invest in bulk land in Dholera Smart City? With
          AUDA-approved, legally clear plots and large parcels ideal for
          residential townships, housing projects, and commercial hubs, Dholera
          offers unmatched growth potential. As India's first greenfield smart
          city, Dholera SIR is emerging as the top destination for bulk land
          investment with high ROI, modern infrastructure, and government-backed
          development.
        </p>
      </div>

      {/* 3-Column Grid Section */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bulkLandCategories.map((category) => (
            <Link 
              key={category.id} 
              href={category.href}
              className="group block bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white text-xl font-bold mb-2 group-hover:text-[#d3b36b] transition-colors">
                    {category.title}
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <div className="mt-4 flex items-center text-blue-600 group-hover:text-blue-800 transition-colors">
                  <span className="text-sm font-medium">Learn More</span>
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <BulkLand title="Bulk Land Parcels Starting from Rs. 1.75 Cr."/>
    </>
  );
}