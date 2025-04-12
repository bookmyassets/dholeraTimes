import React from "react";
import hero from "@/assets/news.webp";
import project1 from "@/assets/siteprogress/Project site view 1.webp";
import project2 from "@/assets/siteprogress/Project site view 2.webp";
import project3 from "@/assets/siteprogress/Project Site view 3.webp";
import project4 from "@/assets/siteprogress/Project Site view 4.webp";
import project5 from "@/assets/siteprogress/Project site view 5.webp";
import Image from "next/image";

export default function DholeraProgressPage() {
  const galleryImages = [
    { id: 1, src: project1, alt: "Dholera Infrastructure Development" },
    { id: 2, src: project2, alt: "Dholera Smart City Project" },
    { id: 3, src: project3, alt: "Dholera Industrial Zone" },
    { id: 4, src: project4, alt: "Dholera Transportation Network" },
    { id: 5, src: project5, alt: "Dholera Residential Area" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Hero Section with Overlay */}
      <div className="relative h-[50vh] overflow-hidden">
        <Image
          src={hero}
          alt="Dholera Skyline"
          className="w-full h-full object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center px-6 py-10 max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
              Dholera SIR Progress in Every Frame
            </h1>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Explore Dholera Growth through Images
          </h2>
        </div>

        {/* Gallery Grid with Hover Effects */}
        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className=" group relative overflow-hidden rounded-xl transition-all duration-300 shadow-2xl h-80"
            >
              <Image
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                priority={image.id <= 3}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0  transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-white text-xl font-bold mb-2">
                  {image.alt}
                </h3>
                <p className="text-white/80 text-sm">{image.caption}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        {/*  <div className="mt-16 text-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-full transition-colors duration-300 shadow-md hover:shadow-lg">
            View Full Gallery
          </button>
        </div> */}
      </div>
    </div>
  );
}
