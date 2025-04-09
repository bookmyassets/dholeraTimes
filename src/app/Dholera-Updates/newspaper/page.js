"use client"
import { useState } from "react";
import Image from "next/image";
import hero from "@/assets/news.webp";
import sample from "@/assets/sample.jpg";

export default function ImageGallery() {
  // Sample image data - replace with your actual images
  const images = [
    { id: 1, src: hero, alt: "Image 1" },
    { id: 2, src: sample, alt: "Image 2" },
    { id: 3, src: hero, alt: "Image 3" },
    { id: 4, src: hero, alt: "Image 4" },
    { id: 5, src: hero, alt: "Image 5" },
    { id: 6, src: hero, alt: "Image 6" },
    // Add more images as needed
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  const openPopup = (image) => {
    setSelectedImage(image);
  };

  const closePopup = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative md:h-96 w-full h-[50vh] overflow-hidden">
        <Image
          src={hero}
          alt="Dholera Skyline"
          className="w-full h-[50vh]"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-6 py-10">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
            News Paper Headlines 
            </h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-8xl mx-auto px-4 py-8 md:py-12 ml-4 md:ml-12 mr-4 md:mr-12">
        <h2 className="text-4xl font-bold text-center mb-8 max-sm:text-left max-sm:text-3xl">
        News Paper and Magazine Pages
        </h2>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {images.map((image) => (
            <div 
              key={image.id} 
              className="relative h-64 w-full overflow-hidden rounded-lg shadow-md cursor-pointer hover:shadow-xl transition-shadow duration-300"
              onClick={() => openPopup(image)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                className="object-cover w-full h-full"
                width={400}
                height={300}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Image Popup */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50" onClick={closePopup}>
          <div className="relative max-w-4xl max-h-[90vh] mx-4">
            <button 
              onClick={closePopup}
              className="absolute top-4 right-4 bg-white rounded-full w-8 h-8 flex items-center justify-center text-black font-bold z-10"
            >
              ×
            </button>
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-h-[90vh] w-auto object-contain"
              width={1200}
              height={800}
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  );
}