import React, { useState, useEffect, useRef } from "react";
import expressway from "@/assets/expressway2.webp";
import semiconductor from "@/assets/semiconductor2.webp";
import airport from "@/assets/airport.webp";
import mono from "@/assets/Dholera-Mono-Rail.webp";
import railways from "@/assets/Dholera-Railway-Junction.webp";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import BrochureForm from "../BrochureForm";
import bg from "@/assets/pexels2.jpg";

export default function Location() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const autoPlayRef = useRef(null);
  const slideInterval = 4000; // 4 seconds per slide
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const openContactForm = () => {
    // Set the form data based on the current slide

    setIsContactFormOpen(true);
  };

  const closeContactForm = () => {
    setIsContactFormOpen(false);
  };

  // Check if we're on mobile
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  // Auto-slide functionality
  useEffect(() => {
    if (isMobile && isPlaying) {
      autoPlayRef.current = setInterval(() => {
        setCurrentSlide((prev) =>
          prev === features.length - 1 ? 0 : prev + 1
        );
      }, slideInterval);
    } else if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isMobile, isPlaying]);

  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  const features = [
    {
      image: expressway,
      alt: "Dholera expressway",
      description: "Ahmedabad Dholera Expressway within 6km",
    },
    {
      image: airport,
      alt: "Dholera airport",
      description: "Dholera International Airport within 14km",
    },
    {
      image: mono,
      alt: "Dholera Mono Rail",
      description: "Ahmebadad Dholera Monorail within 8km",
    },
    {
      image: railways,
      alt: "semiconductor plant",
      description: "Dholera Railway Junction within 12km",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === features.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? features.length - 1 : prev - 1));
  };

  return (
    <div className=" relative w-full px-4 pb-4">
      <Image
        src={bg}
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 -z-10 opacity-30"
      />
      <section aria-labelledby="updates-heading" className="pt-8">
        <h2
          id="updates-heading"
          className="bg-[#d8b66e] text-gray-900 text-2xl md:text-3xl lg:text-4xl text-center p-3 md:p-5 font-semibold mx-auto rounded-md mb-8"
        >
          Location Advantage <br />{" "}
          <span className="text-center text-xl max-md:text-lg font-semibold">
            {" "}
            of our projects{" "}
          </span>
        </h2>
      </section>

      <section className="py-8">
        {isMobile ? (
          <div className="relative">
            <div className="overflow-hidden rounded-lg">
              <div className="relative h-72">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                      currentSlide === index ? "opacity-100" : "opacity-0"
                    }`}
                    style={{
                      pointerEvents: currentSlide === index ? "auto" : "none",
                    }}
                  >
                    <Image
                      src={feature.image}
                      alt={feature.alt}
                      className="w-full h-full object-cover rounded-t-lg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <p className="text-lg font-medium">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-between mt-4">
              <button
                onClick={prevSlide}
                className="bg-[#d8b66e] text-gray-900 p-2 rounded-full"
                aria-label="Previous slide"
              >
                <ChevronLeft size={24} />
              </button>

              <div className="flex space-x-2 items-center">
                {features.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full ${
                      currentSlide === index ? "bg-[#d8b66e]" : "bg-gray-400"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={nextSlide}
                  className="bg-[#d8b66e] text-gray-900 p-2 rounded-full"
                  aria-label="Next slide"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col">
                <Image
                  src={feature.image}
                  alt={feature.alt}
                  className="w-full h-48 md:h-64 object-cover rounded-t-lg"
                />
                <div className="px-4 py-3 bg-gray-900 hover:bg-[#d8b66e] text-[#d8b66e] hover:text-gray-900 transition-all rounded-b-lg">
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl font-light">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
      <section className="lg:max-w-2xl mb-4 lg:mx-auto text-lg md:text-xl bg-gray-800 text-[#d8b66e] p-4 space-y-4">
        <p>
          To know more about projects &amp; investment opportunity or had any
          doubt, please Book a free consultation call with our Dholera Expert
          Advisior.
        </p>
        <button
          onClick={openContactForm}
          className="bg-[#d8b66e] font-semibold text-gray-800 rounded-lg md:p-3 p-1"
        >
          Book Free Consultation
        </button>
      </section>
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
                title="Book free consultation"
                buttonName="Book Now"
                subTitle="Fill out the form to book Free Consultation with our Dholera Expert Advisor."
                onClose={closeContactForm}
                onSuccess={() => setIsFormSubmitted(true)}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
