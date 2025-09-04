"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

/* image import */
import hero1 from "@/assets/dt-home-banner.webp";
import hero2 from "@/assets/dt-westwyn-county-home-banner.webp";
import hero3 from "@/assets/DT-banner3.webp";
import heroM1 from "@/assets/DTbanner1_mobile.webp";
import heroM2 from "@/assets/DTbanner2_mobile.webp";
import heroM3 from "@/assets/DTbanner3_mobile.webp";
import BrochureForm from "../BrochureForm";

export default function HOME2() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    subTitle: "",
    buttonText: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const openContactForm = () => {
    // Set the form data based on the current slide
    setFormData({
      title: slides[currentSlide].formHead,
      subTitle: slides[currentSlide].subTitle,
      buttonText: slides[currentSlide].buttonText,
    });
    setIsContactFormOpen(true);
  };

  const closeContactForm = () => {
    setIsContactFormOpen(false);
  };

  // Array of slides with both images and text
  const slides = [
    {
      desktop: hero1,
      tablet: hero1,
      mobile: heroM1,
    },
    {
      desktop: hero2,
      tablet: hero2,
      mobile: heroM2,
    },
    {
      desktop: hero3,
      tablet: hero3,
      mobile: heroM3,
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Auto-advance the slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Carousel */}
      <div className="relative w-full overflow-hidden">
        {/* Desktop Slides container - visible only on large screens */}
        <div
          className="hidden lg:flex w-full transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={`desktop-${index}`}
              className="w-full flex-shrink-0 relative"
            >
              <div className="relative w-full h-[76vh]">
                <Image
                  src={slide.desktop}
                  alt={`hero slide ${index + 1}`}
                  fill
                  priority={index === 0}
                  className=" object-cover"
                  sizes="100vw"
                />

                {/* Text overlay with animation - only visible for the current slide */}
                
              </div>
            </div>
          ))}
        </div>

        <div
          className="hidden md:flex lg:hidden w-full transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={`tablet-${index}`}
              className="w-full flex-shrink-0 relative"
            >
              <div className="relative w-full h-[60vh]">
                <Image
                  src={slide.desktop} 
                  alt={`hero slide ${index + 1}`}
                  fill
                  priority={index === 0}
                  className="object-cover"
                  sizes="100vw"
                />

                {currentSlide === index && (
                  <motion.div
                    className="absolute bottom-20 left-10 right-0 flex"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.7 }}
                  >
                    <button
                      onClick={openContactForm}
                      className="bg-[#151f28] text-white py-3 px-6 rounded-2xl uppercase text-xl font-semibold tracking-wider transform transition-all duration-500 hover:scale-105 hover:bg-opacity-60"
                    >
                      {slide.text}
                    </button>
                  </motion.div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div
          className="flex md:hidden w-full transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={`mobile-${index}`}
              className="w-full flex-shrink-0 relative"
            >
              <div className="relative w-full h-[80vh]">
                <Image
                  src={slide.mobile}
                  alt={`hero slide ${index + 1}`}
                  fill
                  priority={index === 0}
                  className="object-cover"
                  sizes="100vw"
                />

                {currentSlide === index && (
                  <motion.div
                    className="absolute bottom-4 left-0 right-0 flex justify-center items-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.7 }}
                  >
                    <button
                      onClick={openContactForm}
                      className="bg-[#151f28] bg-opacity-80 text-white py-3 px-6 rounded-lg uppercase text-lg font-semibold tracking-wider transform transition-all duration-500 hover:scale-105"
                    >
                      {slide.text}
                    </button>
                  </motion.div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Navigation arrows */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 -translate-y-1/2 p-2 rounded-full bg-white bg-opacity-50 hover:bg-opacity-75 transition-all z-10"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} className="text-[#151f28]" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 -translate-y-1/2 p-2 rounded-full bg-white bg-opacity-50 hover:bg-opacity-75 transition-all z-10"
          aria-label="Next slide"
        >
          <ChevronRight size={24} className="text-[#151f28]" />
        </button>

        {/* Indicator dots */}
        {/* <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-3 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentSlide === index ? "bg-white" : "bg-white bg-opacity-50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div> */}
      </div>

      <AnimatePresence>
        {isContactFormOpen && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-[1000]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              <BrochureForm
                title={formData.title}
                subTitle={formData.subTitle}
                buttonName={formData.buttonText}
                onClose={closeContactForm}
                onSuccess={() => setIsFormSubmitted(true)}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
