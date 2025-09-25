"use client";
import { AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from "react";

import {
  FaWhatsapp,
  FaMapMarkerAlt,
  FaRoad,
  FaPlane,
  FaIndustry,
  FaClock,
} from "react-icons/fa";

const WestWynAboutSection = () => {
  const [counters, setCounters] = useState({
    plotSize: 0,
    price: 0,
    amenities: 0,
  });

  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const [isBrochureFormOpen, setIsBrochureFormOpen] = useState(false);
  const [formTitle, setFormTitle] = useState("");
  const [formHeadline, setFormHeadline] = useState("");
  const [buttonName, setButtonName] = useState("");
  const [formType, setFormType] = useState("");

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
          targets.plotSize
        );
        current.price = Math.min(
          current.price + targets.price / steps,
          targets.price
        );
        current.amenities = Math.min(
          current.amenities + targets.amenities / steps,
          targets.amenities
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
      { threshold: 0.3 }
    );

    const counterSection = document.getElementById("counters-section");
    if (counterSection) {
      observer.observe(counterSection);
    }

    return () => observer.disconnect();
  }, []);

  const handleAfterSubmit = () => {
    console.log("Form submitted successfully, type:", formType);

    if (formType === "brochure") {
      try {
        console.log("Initiating brochure download");

        setTimeout(() => {
          const link = document.createElement("a");
          link.href = "https://shorturl.at/Dv00M";
          link.target = "_blank";
          link.download = "brochure.pdf";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          console.log("Download link clicked");
        }, 300);
      } catch (error) {
        console.error("Error downloading brochure:", error);
        window.open("https://shorturl.at/Dv00M", "_blank");
      }
    }
  };

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
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#debe6b]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#debe6b]/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            WestWyn County –{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#debe6b] to-[#c9992a]">
              Dholera SIR's Newest Landmark
            </span>
          </h2>

          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Introducing WestWyn County – the newest landmark in Dholera SIR,
            offering plots designed for long-term value and growth.. Trusted by
            investors and inspired by the strong response to our earlier
            project, this new launch continues our vision of excellence, growth,
            and reliability at a prime location.
          </p>
        </div>

        <div className="max-w-7xl mx-auto gap-12 items-stretch">
          {/* Left Content - Enhanced */}
          <div className="space-y-8 h-full">
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-gray-100/50 h-full transform hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-[#debe6b] to-[#c9992a] rounded-xl flex items-center justify-center shadow-lg">
                  <svg
                    className="w-7 h-7 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl text-center font-bold text-gray-900">
                    Strategic Location Advantage
                  </h3>
                  <p className="text-[#debe6b] text-center font-medium">
                    Vadhela-Navda Highway
                  </p>
                </div>
              </div>

              <div className="mb-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {locationFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="relative flex flex-col items-center text-center p-6 rounded-xl bg-white/80 backdrop-blur-sm border border-gray-100/50 hover:border-[#debe6b]/30 hover:shadow-lg transition-all duration-300 group"
                  >
                    
                    <div className="w-12 h-12 bg-gradient-to-br from-[#f8f5e6] to-[#fefcf0] rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="w-6 h-6 text-[#debe6b]" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-sm leading-tight mb-2">
                        {feature.text}
                      </p>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        {feature.highlight}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-gray-700 mb-8 leading-relaxed text-lg border-l-4 border-[#debe6b] pl-4 italic">
                "Every plot is designed as a secure, future-ready investment
                that grows with Dholera's transformation."
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://wa.me/919958993549" className="flex-1">
                  <button className="w-full bg-white border-2 border-[#debe6b] text-[#debe6b] px-8 py-4 rounded-xl font-semibold hover:bg-[#f8f5e6] transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3 shadow-lg">
                    <FaWhatsapp className="w-5 h-5" />
                    Book Site Visit
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*       <AnimatePresence>
        {isBrochureFormOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[1000] p-4">
            <div className="w-full max-w-md">
              <BrochureDownload
                onClose={closeBrochureForm}
                title="Get the WestWyn County Brochure"
                headline="Premium plots at 0 km from Dholera SIR with 5x ROI potential"
                buttonName="Download Brochure"
                onAfterSubmit={handleAfterSubmit}
              />
            </div>
          </div>
        )}
      </AnimatePresence> */}
    </div>
  );
};

export default WestWynAboutSection;
