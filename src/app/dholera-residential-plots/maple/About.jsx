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
  FaCity,
  FaShieldAlt,
  FaChartLine,
  FaHome,
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



  const investmentBenefits = [
    {
      icon: FaRoad,
      title: "Connectivity Advantage",
      description: "Inside Dholera SIR, with seamless links to expressway, airport, and Dholera Metro City"
    },
    {
      icon: FaChartLine,
      title: "High Returns",
      description: "Entry at early stage of Dholera Smart City promises long-term appreciation"
    },
    {
      icon: FaShieldAlt,
      title: "Secure Purchase",
      description: "All plots NA/NOC approved, registry-ready with clear titles"
    },
    {
      icon: FaHome,
      title: "Township Lifestyle",
      description: "Wide internal roads, electrification, drainage, water supply, landscaped areas"
    },
    {
      icon: FaIndustry,
      title: "Investor Friendly",
      description: "Flexible plot sizes and affordable installment options"
    }
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
            About Maple Township
          </h2>

          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Located in Village Gamph, Tehsil Dholera, District Ahmedabad, Maple Township 
            sits right inside the expanding Dholera Smart City (Dholera SIR). With direct 
            access to the Ahmedabad-Dholera Expressway and proximity to the planned Dholera 
            International Airport, this project combines location advantages with lifestyle 
            infrastructure, making it an ideal choice for investors and homeowners alike 
            in India's first greenfield smart city.
          </p>
        </div>

        <div className="max-w-7xl mx-auto gap-12 items-stretch">
          {/* Left Content - Enhanced */}
          <div className="space-y-8 h-full">
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-gray-100/50 h-full transform hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-[#debe6b] to-[#c9992a] rounded-xl flex items-center justify-center shadow-lg">
                  <FaMapMarkerAlt className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl text-center font-bold text-gray-900">
                    Prime Location in Dholera SIR
                  </h3>
                  <p className="text-[#debe6b] text-center font-medium">
                    Village Gamph, Dholera, Ahmedabad District
                  </p>
                </div>
              </div>


              <p className="text-gray-700 mb-8 leading-relaxed text-lg border-l-4 border-[#debe6b] pl-4 italic">
                "Maple Township combines strategic location with modern infrastructure, 
                offering a secure investment in India's first greenfield smart city."
              </p>

              {/* Investment Benefits Section */}
              <div className="mt-12">
                <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
                  Why Invest in Maple Township?
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {investmentBenefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-xl border border-gray-200 hover:border-[#debe6b]/50 hover:shadow-lg transition-all duration-300 group"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#debe6b] to-[#c9992a] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                          <benefit.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 mb-2">
                            {benefit.title}
                          </h4>
                          <p className="text-sm text-gray-600 leading-relaxed">
                            {benefit.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-8">
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
                title="Get the Maple Brochure"
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