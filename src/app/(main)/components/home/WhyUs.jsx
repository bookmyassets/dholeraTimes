"use client";
import React, { useState, useEffect, useRef } from "react";
import nanoc from "@/assets/naNoc.webp";
import airport from "@/assets/dholera_international_airport.webp";
import hidden from "@/assets/hiddenCharges.webp";
import govtApprovedProject from "@/assets/govt-approved-project.webp";
import salesDeed from "@/assets/immediate-sale-deed.webp";
import afterSales from "@/assets/Resale.webp" 
import Image from "next/image";
import bg from "@/assets/pexels2.jpg";

export default function WhyUs() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const autoplayRef = useRef(null);

  // Features data
  const features = [
    {
      image: nanoc,
      alt: "NA/NOC Plots",
      title: "NA/NOC Plots",
      delay: "0s"
    },
    {
      image: airport,
      alt: "Residential Plots",
      title: "Prime and Strategic Location",
      delay: "1s"
    },
    {
      image: hidden,
      alt: "No Hidden Charges",
      title: "Transparent Pricing",
      delay: "2s"
    },
    {
      image: govtApprovedProject,
      alt: "govt-approved-project",
      title: "Govt Approved Projects",
      delay: "2s"
    },
    {
      image: salesDeed,
      alt: "Sales Deed",
      title: "Immediate Sales Deed",
      delay: "3s"
    },
    {
      image: afterSales,
      alt: "After Sales Support",
      title: "Re-Sales Support",
      delay: "3s"
    }
  ];

  // Check if it's mobile view
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  // Autoplay for mobile slider
  useEffect(() => {
    if (isMobile) {
      autoplayRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev === features.length - 1 ? 0 : prev + 1));
      }, 3000);
    }
    
    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [isMobile, features.length]);

  // Handle manual navigation
  const goToSlide = (index) => {
    setCurrentSlide(index);
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
      autoplayRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev === features.length - 1 ? 0 : prev + 1));
      }, 3000);
    }
  };

  // Handle swipe for mobile
  useEffect(() => {
    if (!isMobile || !sliderRef.current) return;

    let startX;
    let isSwiping = false;

    const handleTouchStart = (e) => {
      startX = e.touches[0].clientX;
      isSwiping = true;
    };

    const handleTouchMove = (e) => {
      if (!isSwiping) return;
      const currentX = e.touches[0].clientX;
      const diff = startX - currentX;

      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          // Swipe left - next slide
          setCurrentSlide((prev) => (prev === features.length - 1 ? 0 : prev + 1));
        } else {
          // Swipe right - previous slide
          setCurrentSlide((prev) => (prev === 0 ? features.length - 1 : prev - 1));
        }
        isSwiping = false;
      }
    };

    const handleTouchEnd = () => {
      isSwiping = false;
    };

    const slider = sliderRef.current;
    slider.addEventListener('touchstart', handleTouchStart);
    slider.addEventListener('touchmove', handleTouchMove);
    slider.addEventListener('touchend', handleTouchEnd);

    return () => {
      slider.removeEventListener('touchstart', handleTouchStart);
      slider.removeEventListener('touchmove', handleTouchMove);
      slider.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isMobile, features.length]);

  return (
    <>
      <div className="relative">
        <Image
      src={bg}
      alt="Background Image"
      layout="fill"
      objectFit="cover"
      className="absolute inset-0 -z-10 opacity-30"
    />
        <section
          id="why-us"
          className="max-w-7xl mx-auto pb-8 max-sm:px-4"
        >
          <h1 className="text-center mb-4 text-2xl md:text-5xl font-bold">
            Why choose DHOLERA TIMES?
          </h1>
          <div className="flex flex-col items-center gap-12 mb-8">
            {/* Desktop Grid View */}
            <div className={`w-full ${isMobile ? 'hidden' : 'block'}`}>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8 stagger-children animate-on-scroll">
                {features.map((feature, index) => (
                  <div 
                    key={index}
                    className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center animate-float"
                    style={{ animationDelay: feature.delay }}
                  >
                    <div className="h-52 md:h-80 mb-4 mx-auto flex items-center justify-center">
                      <Image
                        src={feature.image}
                        alt={feature.alt}
                        className="h-full w-auto object-contain"
                      />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
                      {feature.title}
                    </h3>
                    <div className="w-12 h-1 bg-[#d7b36c] mx-auto"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Slider View */}
            <div className={`w-full ${isMobile ? 'block' : 'hidden'}`}>
              <div 
                ref={sliderRef}
                className="relative overflow-hidden"
                style={{ touchAction: 'pan-y' }}
              >
                <div 
                  className="flex transition-transform duration-300 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {features.map((feature, index) => (
                    <div 
                      key={index}
                      className="w-full flex-shrink-0 px-2"
                    >
                      <div className="bg-white rounded-lg p-6 shadow-lg text-center h-full">
                        <div className="h-48 mb-4 mx-auto flex items-center justify-center">
                          <Image
                            src={feature.image}
                            alt={feature.alt}
                            className="h-full w-auto object-contain"
                          />
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-3">
                          {feature.title}
                        </h3>
                        <div className="w-12 h-1 bg-[#d7b36c] mx-auto"></div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Slider Navigation Dots */}
                <div className="flex justify-center mt-4">
                  {features.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-3 h-3 mx-1 rounded-full ${
                        currentSlide === index ? 'bg-[#d7b36c]' : 'bg-gray-300'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    ></button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}