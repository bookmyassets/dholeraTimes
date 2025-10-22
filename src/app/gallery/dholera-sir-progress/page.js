"use client";
import React, { useState } from "react";
import Image from "next/image";
import hero from "@/assets/news.webp";
import sample1 from "@/assets/gallery/sir/BMAWebsitegallery7.webp";
import sample2 from "@/assets/gallery/sir/BMAWebsitegallery8.webp";
import sample3 from "@/assets/gallery/sir/dt-abcd.webp";
// sample4 removed (duplicate)
import sample5 from "@/assets/gallery/sir/dt-acti.webp";
import sample6 from "@/assets/gallery/sir/dt-activation.webp";
import sample7 from "@/assets/gallery/sir/dt-airport.webp";
import sample8 from "@/assets/gallery/sir/dt-experess.webp";
import sample9 from "@/assets/gallery/sir/dt-renew.webp";
import sample10 from "@/assets/gallery/sir/dt-renew2.webp";
import sample11 from "@/assets/gallery/sir/dt-solar.webp";
import sample12 from "@/assets/gallery/sir/dt-sprr.webp";
import sample13 from "@/assets/gallery/sir/dt-tata1.webp";
import sample14 from "@/assets/gallery/sir/dt-tata.webp";
import sample15 from "@/assets/gallery/sir/dt-toll.webp";
import sample16 from "@/assets/gallery/sir/dt-torrent.webp";
import sample17 from "@/assets/gallery/sir/dt-wtp.webp";

export default function DholeraProgressPage() {
  const galleryImages = [
    {
      id: 1,
      src: sample1,
      alt: "ABCD Building",
      caption: "ABCD Building",
    },
    {
      id: 2,
      src: sample2,
      alt: "Ahmedabad Dholera Toll",
      caption: "Ahmedabad Dholera Toll",
    },
    {
      id: 3,
      src: sample3,
      alt: "ABCD Building Dholera",
      caption: "ABCD Building Dholera",
    },
    {
      id: 4,
      src: sample5,
      alt: "Activation Area Road Dholera",
      caption: "Activation Area Road Dholera",
    },
    {
      id: 5,
      src: sample6,
      alt: "River Front - Dholera Activation Area ",
      caption: "River Front - Dholera Activation Area ",
    },
    {
      id: 6,
      src: sample7,
      alt: "Dholera Airport",
      caption: "Dholera Airport",
    },
    {
      id: 7,
      src: sample8,
      alt: "Ahmedabad to Dholera",
      caption: "Ahmedabad to Dholera",
    },
    {
      id: 8,
      src: sample9,
      alt: "Renew Solar Power Private Limited",
      caption: "Renew Solar Power Private Limited",
    },
    {
      id: 9,
      src: sample10,
      alt: "Renew Solar Panel",
      caption: "Renew Solar Panel",
    },
    {
      id: 10,
      src: sample11,
      alt: "Largest Solar Power Plant in India",
      caption: "Largest Solar Power Plant in India",
    },
    {
      id: 11,
      src: sample12,
      alt: "Ahmedabad Dholera Expressway Route Map",
      caption: "Ahmedabad Dholera Expressway Route Map",
    },
    {
      id: 12,
      src: sample13,
      alt: "Tata Semiconductor Plant",
      caption: "Tata Semiconductor Plant",
    },
    {
      id: 13,
      src: sample14,
      alt: "Tata Semiconductor Hub",
      caption: "Tata Semiconductor Hub",
    },
    {
      id: 14,
      src: sample15,
      alt: "Ahmedabad Dholera Bhavanagar Expressway Toll",
      caption: "Ahmedabad Dholera Bhavanagar Expressway Toll",
    },
    {
      id: 15,
      src: sample16,
      alt: "Sewage Treatment Plant in Dholera SIR",
      caption: "Sewage Treatment Plant in Dholera SIR",
    },
    {
      id: 16,
      src: sample17,
      alt: "Water Treatment Plant in Dholera",
      caption: "Water Treatment Plant in Dholera",
    },
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  const openPopup = (image) => {
    setSelectedImage(image);
  };

  const closePopup = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-200">
      <title>Dholera Smart City Gallery | Dholera Times</title>
      <meta
        name="description"
        content="Explore the Dholera Smart City gallery by Dholera Times featuring project visuals, site progress, and development updates in Dholera SIR"
      />
      <meta
        name="keywords"
        content="Dholera Smart City, Dholera SIR, Dholera Gujarat, Smart City Dholera, Dholera Project, Dholera Investment"
      />
      <link
        rel="canonical"
        href="https://www.dholeratimes.com/gallery/dholera-sir-progress"
      />
      <meta name="robots" content="index, dofollow" />

      {/* Hero Section */}
      <div className="relative h-[50vh] overflow-hidden">
        <Image
          src={hero}
          alt="Dholera SIR Progress"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 flex items-center justify-center">
          <div className="text-center px-6 py-10 max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
              Dholera SIR Progress in Every Frame
            </h1>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
            Explore Dholera Growth through Images
          </h2>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-xl transition-all duration-300 shadow-2xl h-80 cursor-pointer"
              onClick={() => openPopup(image)}
            >
              <Image src={image.src} alt={image.alt} fill className="object-cover" />
            </div>
          ))}
        </div>
      </div>

      {/* Image Popup */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={closePopup}
        >
          <div className="relative max-w-4xl max-h-[90vh] mx-4">
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 bg-white rounded-full w-8 h-8 flex items-center justify-center text-black font-bold z-10"
            >
              ×
            </button>
            <div className="relative w-full h-full">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                width={1200}
                height={800}
                className="max-h-[90vh] w-auto object-contain"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
            <div className="bg-white p-4 text-center"> <h3 className="text-lg font-bold">{selectedImage.alt}</h3> <p className="text-gray-600">{selectedImage.caption}</p> </div>
          </div>
        </div>
      )}
    </div>
  );
}
