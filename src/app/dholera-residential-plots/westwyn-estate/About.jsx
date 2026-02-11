"use client";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import westwyn from "@/assets/residential/westwyn-estate-dholera-plots-under-10-lakh.webp";

import {
  FaWhatsapp,
  FaMapMarkerAlt,
  FaRoad,
  FaPlane,
  FaIndustry,
  FaClock,
} from "react-icons/fa";
import { TbBuildingFactory } from "react-icons/tb";

const WestWynAboutSection = () => {
  const [counters, setCounters] = useState({
    plotSize: 0,
    price: 0,
    amenities: 0,
  });

  // Animation for counters
  useEffect(() => {
    const animateCounters = () => {
      const targets = { plotSize: 170, price: 10, amenities: 5 };
      const duration = 2000;
      const steps = 60;
      const stepTime = duration / steps;

      let current = { plotSize: 0, price: 0, amenities: 0 };

      const timer = setInterval(() => {
        current.plotSize = Math.min(
          current.plotSize + targets.plotSize / steps,
          targets.plotSize,
        );
        current.price = Math.min(
          current.price + targets.price / steps,
          targets.price,
        );
        current.amenities = Math.min(
          current.amenities + targets.amenities / steps,
          targets.amenities,
        );

        setCounters({
          plotSize: Math.floor(current.plotSize),
          price: Math.floor(current.price),
          amenities: Math.floor(current.amenities),
        });

        if (
          current.plotSize >= targets.plotSize &&
          current.price >= targets.price &&
          current.amenities >= targets.amenities
        ) {
          clearInterval(timer);
        }
      }, stepTime);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animateCounters();
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    const counterSection = document.getElementById("counters-section");
    if (counterSection) {
      observer.observe(counterSection);
    }

    return () => observer.disconnect();
  }, []);

  const locationFeatures = [
    {
      icon: FaRoad,
      text: "0 km proximity to Dholera SIR",
      highlight: "First project on Vadhela-Navda Highway",
    },
    {
      icon: FaClock,
      text: "5 Minutes from Expressway",
      highlight: "Excellent connectivity",
    },
    {
      icon: FaMapMarkerAlt,
      text: "15 minutes from Activation Area",
      highlight: "Prime strategic location",
    },
    {
      icon: FaIndustry,
      text: "25 minutes from Tata Semiconductor Fab",
      highlight: "Industrial corridor advantage",
    },
    {
      icon: FaPlane,
      text: "30 minutes from International Airport",
      highlight: "International connectivity",
    },
    {
      icon: TbBuildingFactory,
      text: "5 min from hebatpur industrial zone",
      highlight: "Industrial Area",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Enhanced background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23deae3c' fill-opacity='0.3'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "80px 80px",
          }}
        ></div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#d3b36b]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#d3b36b]/10 rounded-full blur-3xl"></div>

      <div className="text-center">
        <h2 className="text-2xl md:text-3xl pt-4 font-bold text-gray-900 mb-4">
          WestWyn Estate –{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d3b36b] to-[#c9992a]">
            Dholera SIR's Newest Landmark
          </span>
        </h2> 
      </div>
      <div className="relative md:flex items-center justify-center md:space-x-20 max-w-7xl mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="text-center mb-16 ">
          <p className="text-base md:text-lg text-gray-600 text-left max-w-4xl mx-auto leading-relaxed">
            Introducing WestWyn Estate – the newest landmark in Dholera SIR,
            offering plots designed for long-term value and growth. Trusted by
            investors and inspired by the strong response to our earlier
            project, this new launch continues our vision of excellence, growth,
            and reliability at a prime location.
          </p>
          <div className="py-4">
            <Image src={westwyn} alt="westwyn" className="rounded-xl" />
          </div>
        </div>

        <div className="max-w-7xl mx-auto items-stretch">
          {/* Left Content - Enhanced */}
          <div className="space-y-8 h-full">
            <div className="bg-white/80 backdrop-blur-sm p-4 md:p-8 rounded-3xl shadow-xl border border-gray-100/50 h-full transform hover:shadow-2xl transition-all duration-300">
              <div className="mb-6">
                <div className="text-center">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                    Strategic Location Advantage
                  </h3>
                  <p className="text-[#d3b36b] font-medium text-sm md:text-base">
                    Vadhela-Navda Highway
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 md:gap-4">
                {locationFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="relative flex flex-col items-center text-center p-3 md:p-4 rounded-xl bg-white/80 backdrop-blur-sm border border-gray-100/50 hover:border-[#d3b36b]/30 hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#f8f5e6] to-[#fefcf0] rounded-lg flex items-center justify-center mb-2 md:mb-3 group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="w-5 h-5 md:w-6 md:h-6 text-[#d3b36b]" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-xs md:text-sm leading-tight mb-1 md:mb-2">
                        {feature.text}
                      </p>
                      <p className="text-[10px] md:text-xs text-gray-600 leading-relaxed">
                        {feature.highlight}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 pb-8">
        <p className="text-sm md:text-lg text-gray-700 mb-6 md:mb-8 leading-relaxed border-l-4 border-[#d3b36b] pl-3 md:pl-4 italic">
          "Every plot is designed as a secure, future-ready investment that
          grows with Dholera's transformation."
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a href="https://wa.me/919958993549" className="flex-1">
            <button className="w-full bg-white border-2 border-[#d3b36b] text-[#d3b36b] px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold hover:bg-[#f8f5e6] transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3 shadow-lg text-sm md:text-base">
              <FaWhatsapp className="w-5 h-5" />
              Book Site Visit
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default WestWynAboutSection;
