"use client";
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import sample1 from "@/assets/gallery/sir/BMAWebsitegallery7.webp";
import sample2 from "@/assets/gallery/sir/BMAWebsitegallery8.webp";
import sample3 from "@/assets/gallery/sir/dt-abcd.webp";
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
import Image from "next/image";

export default function DholeraCarousel() {
  const galleryImages = [
    { id: 1, src: sample1, alt: "ABCD Building", caption: "ABCD Building" },
    { id: 2, src: sample2, alt: "Ahmedabad Dholera Toll", caption: "Ahmedabad Dholera Toll" },
    { id: 3, src: sample3, alt: "ABCD Building Dholera", caption: "ABCD Building Dholera" },
    { id: 4, src: sample5, alt: "Activation Area Road Dholera", caption: "Activation Area Road Dholera" },
    { id: 5, src: sample6, alt: "River Front - Dholera Activation Area", caption: "River Front - Dholera Activation Area" },
    { id: 6, src: sample7, alt: "Dholera Airport", caption: "Dholera Airport" },
    { id: 7, src: sample8, alt: "Ahmedabad to Dholera", caption: "Ahmedabad to Dholera" },
    { id: 8, src: sample9, alt: "Renew Solar Power Private Limited", caption: "Renew Solar Power Private Limited" },
    { id: 9, src: sample10, alt: "Renew Solar Panel", caption: "Renew Solar Panel" },
    { id: 10, src: sample11, alt: "Largest Solar Power Plant in India", caption: "Largest Solar Power Plant in India" },
    { id: 11, src: sample12, alt: "Ahmedabad Dholera Expressway Route Map", caption: "Ahmedabad Dholera Expressway Route Map" },
    { id: 12, src: sample13, alt: "Tata Semiconductor Plant", caption: "Tata Semiconductor Plant" },
    { id: 13, src: sample14, alt: "Tata Semiconductor Hub", caption: "Tata Semiconductor Hub" },
    { id: 14, src: sample15, alt: "Ahmedabad Dholera Bhavanagar Expressway Toll", caption: "Ahmedabad Dholera Bhavanagar Expressway Toll" },
    { id: 15, src: sample16, alt: "Sewage Treatment Plant in Dholera SIR", caption: "Sewage Treatment Plant in Dholera SIR" },
    { id: 16, src: sample17, alt: "Water Treatment Plant in Dholera", caption: "Water Treatment Plant in Dholera" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPlaying, galleryImages.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="flex items-center justify-center w-full p-2 md:p-4 py-4 md:py-8">
      {/* Carousel Section */}
      <div className="max-w-6xl w-full mx-auto">
        <div className="relative rounded-2xl w-full max-w-4xl mx-auto aspect-video overflow-hidden shadow-2xl bg-[#151f28]">
          {/* Main Image Display */}
          <div className="relative w-full h-full bg-black flex items-center justify-center">
            <Image
              src={galleryImages[currentIndex].src}
              alt={galleryImages[currentIndex].alt}
              fill
              className="object-contain"
              priority
            />
            {/* Image Number Overlay */}
            <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm font-bold">
              {currentIndex + 1} / {galleryImages.length}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full p-3 hover:scale-110 transition-all z-10 bg-[#d3b36b]"
          >
            <ChevronLeft size={24} className="text-[#151f28]" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full p-3 hover:scale-110 transition-all z-10 bg-[#d3b36b]"
          >
            <ChevronRight size={24} className="text-[#151f28]" />
          </button>

          {/* Play/Pause Button */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="absolute bottom-4 left-4 rounded-full p-3 hover:scale-110 transition-all bg-[#d3b36b]"
          >
            {isPlaying ? (
              <Pause size={20} className="text-[#151f28]" />
            ) : (
              <Play size={20} className="text-[#151f28]" />
            )}
          </button>

          {/* Progress Indicator */}
          <div className="absolute bottom-4 right-4 px-4 py-2 rounded-full text-sm font-semibold bg-[#d3b36b] text-[#151f28]">
            {currentIndex + 1} / {galleryImages.length}
          </div>
        </div>

        {/* Image Info */}
        <div className="mt-6 p-4 text-center">
          <h3 className="text-2xl font-bold mb-2 text-[#d3b36b]">
            {galleryImages[currentIndex].alt}
          </h3>
          <p className="text-lg text-gray-300">
            {galleryImages[currentIndex].caption}
          </p>
        </div>

        {/* Thumbnail Navigation */}
        <div className="mt-8 overflow-x-auto">
          <div className="flex gap-3 pb-4 justify-center">
            {galleryImages.map((image, index) => (
              <button
                key={image.id}
                onClick={() => goToSlide(index)}
                className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                  index === currentIndex 
                    ? "border-yellow-500 scale-110" 
                    : "border-gray-600 opacity-70 hover:opacity-100"
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={80}
                  height={80}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}