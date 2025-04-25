"use client";
import React, { useEffect, useState } from "react";
import abcd from "@/assets/ABCD-Building-3.webp";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "../components/ContactForm";
import banner from "@/assets/dtLanding.webp";
import bannerMobile from "@/assets/dtLandingmobile.webp";
import TestimonialPagination from "../components/Testimonials";
import FAQSection from "./Faq";
import PopupForm from "../components/PopupForm";
import { AnimatePresence } from "framer-motion";
import semiconductor from "@/assets/tata_semiconductor_plant.webp";
import rail from "@/assets/mono_rail_connectivity.webp";
import airport from "@/assets/dholera_international_airport.webp";
import whyDholera from "@/assets/why_invest_in_dholera.webp";
import whyDholeraMobile from "@/assets/why_invest_in_dholera_mobile.webp";
import nanoc from "@/assets/naNoc.webp";
import residential from "@/assets/residentialPlot.webp";
import hidden from "@/assets/hiddenCharges.webp";

const colors = [
  { bg: "#ffffff", text: "#d7b36c" },
  { bg: "#f0e6d2", text: "#c2a05e" },
  { bg: "#e6d7b3", text: "#a58a4e" },
  { bg: "#d7b36c", text: "#ffffff" },
];

export default function New() {
  const [currentColorIndex, setCurrentColorIndex] = useState(0);
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const [projectCount, setProjectCount] = useState(0);
  const [customerCount, setCustomerCount] = useState(0);
  const [nriCount, setNriCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentColorIndex((prev) => (prev + 1) % colors.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const animateValue = (setter, end, duration) => {
      let start = 0;
      const incrementTime = 20;
      const totalIncrements = (duration * 1000) / incrementTime;
      const increment = end / totalIncrements;

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setter(end);
          clearInterval(timer);
        } else {
          setter(Math.ceil(start));
        }
      }, incrementTime);
    };

    animateValue(setProjectCount, 7, 1);
    animateValue(setCustomerCount, 500, 2);
    animateValue(setNriCount, 300, 2);
  }, []);

  const currentColor = colors[currentColorIndex];

  const openContactForm = () => {
    setIsContactFormOpen(true);
  };

  const closeContactForm = () => {
    setIsContactFormOpen(false);
  };

  return (
    <>
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap");

        body {
          font-family: "Poppins", sans-serif;
        }
      `}</style>

      {/* Hero Section with Enhanced Design */}
      <section className="relative h-[60vh] sm:h-[50vh] w-full overflow-hidden">
        <Image
          src={abcd}
          alt="Dholera Skyline"
          className="absolute top-0 left-0 w-full h-full object-cover z-0 brightness-[0.85]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent z-[1]"></div>
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row justify-center items-center h-full px-4 sm:px-8">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <div className="bg-[#d7b36c] text-white text-sm font-bold py-1 px-3 rounded-full inline-block mb-4 animate-pulse">
              LIMITED PLOTS AVAILABLE
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-4 font-poppins leading-tight">
              Invest in India's First Smart City
            </h1>
            <h2 className="text-xl md:text-2xl text-white/90 mb-6 font-poppins font-light">
              Secure premium plots in Dholera SIR before prices surge -
              projected 5x growth by 2030
            </h2>
          </div>
          <div className="md:w-1/2 w-full max-w-md">
            <div>
              <ContactForm
                title="ENQUIRE NOW"
                buttonName="GET A FREE CONSULTATION"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Invest Section with Improved Layout */}
      <section className="px-4 py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight font-poppins tracking-tight mb-4">
              WHY INVEST IN{" "}
              <span className="text-[#d7b36c] relative inline-block">
                DHOLERA SMART CITY
               
              </span>
            </h2>
            <div className="w-24 h-1 bg-[#d7b36c] mx-auto mt-4"></div>
          </div>

          {/* Image and Features Section */}
            {/*             <div className="w-full md:w-3/4 lg:w-2/3 rounded-xl overflow-hidden shadow-xl">
              <div className="relative">
                <Image
                  src={whyDholera}
                  alt="Dholera Smart City Development"
                  className="w-full h-full object-cover hidden md:block"
                  priority
                />
                <Image
                  src={whyDholeraMobile}
                  alt="Dholera Smart City Development"
                  className="w-full h-full block md:hidden"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
            </div> */}
          

          {/* Infrastructure Cards with Enhanced Design */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {/* Tata Semiconductor Card */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-56 overflow-hidden">
                <Image
                  src={semiconductor}
                  alt="Tata Semiconductor Plant"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-[#d7b36c] p-2 rounded-full">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="ml-3 text-2xl md:text-3xl font-bold text-gray-800">
                    Tata Semiconductor
                  </h3>
                </div>
              </div>
            </div>

            {/* Monorail Card */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-56 overflow-hidden">
                <Image
                  src={rail}
                  alt="Monorail Project"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-[#d7b36c] p-2 rounded-full">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                      />
                    </svg>
                  </div>
                  <h3 className="ml-3 text-2xl md:text-3xl font-bold text-gray-800">
                    Monorail Project
                  </h3>
                </div>
              </div>
            </div>

            {/* Dholera Airport Card */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-56 overflow-hidden">
                <Image
                  src={airport}
                  alt="Dholera International Airport"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-[#d7b36c] p-2 rounded-full">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                      />
                    </svg>
                  </div>
                  <h3 className="ml-3 text-2xl md:text-3xl font-bold text-gray-800">
                    International Airport
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment and CTA Sections with Improved Design */}
      <section className="px-4 py-16 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Investment Returns Section */}
          <div className="bg-gradient-to-r from-gray-100 to-gray-200 rounded-xl shadow-lg p-8 mb-16">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 font-poppins mb-4">
                  Investment Returns
                </h3>
                <div className="w-20 h-1 bg-[#d7b36c] mb-6"></div>
                <p className="text-lg md:text-xl text-gray-700 font-poppins mb-6">
                  Be a part of Dholera's growth story! With the region set to
                  become a hub for industries like aviation, electronics, and
                  renewable energy, your investment in Emerald City promises not
                  just a home but a future full of possibilities.
                </p>
                <div className="flex flex-col md:text-xl sm:flex-row gap-4">
                  <Link
                    href="https://shorturl.at/tncCM"
                    className="inline-flex items-center px-6 py-3 bg-[#d7b36c] hover:bg-[#c2a05e] text-white font-bold rounded-lg transition duration-300 transform hover:scale-105 font-poppins shadow-md"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
                      />
                    </svg>
                    Download Brochure
                  </Link>
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="bg-white rounded-lg p-8 shadow-md">
                  <div className="flex justify-between items-center mb-4">
                    <div className="text-2xl font-semibold text-gray-800">
                      ROI Projection
                    </div>
                    <div className="text-[#d7b36c] font-bold text-3xl">5x</div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
                    <div
                      className="bg-[#d7b36c] h-3 rounded-full transition-all duration-1000"
                      style={{ width: "80%" }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-sm text-gray-600 mb-8">
                    <span>Current Value</span>
                    <span>Projected by 2030</span>
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
                      <div className="text-sm text-gray-600 mb-1">
                        Starting From
                      </div>
                      <div className="text-xl font-bold text-gray-800">
                        ₹6,700/sq.ft
                      </div>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
                      <div className="text-sm text-gray-600 mb-1">
                        Investment Period
                      </div>
                      <div className="text-xl font-bold text-gray-800">
                        5-7 Years
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
      </section>
      <section className="max-w-7xl mx-auto pb-12">
  <h1 className="text-center text-6xl font-bold ">
    Why DHOLERA TIMES?
  </h1>
  <div className="flex flex-col items-center gap-12 mb-16">
            {/* Image Section */}

            {/* Features Grid */}
            <div className="w-full">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Feature 1 */}
                <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center">
                  <div className="h-52 md:h-80 mb-4 mx-auto flex items-center justify-center">
                    <Image
                      src={nanoc}
                      alt="NA/NOC Plots"
                      className="h-full w-auto object-contain"
                    />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
                    NA/NOC Plots
                  </h3>
                  <div className="w-12 h-1 bg-[#d7b36c] mx-auto"></div>
                </div>

                {/* Feature 2 */}
                <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center">
                  <div className="h-52 md:h-80 mb-4 mx-auto flex items-center justify-center">
                    <Image
                      src={residential}
                      alt="Residential Plots"
                      className="h-full w-auto object-contain"
                    />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
                    Residential Plots
                  </h3>
                  <div className="w-12 h-1 bg-[#d7b36c] mx-auto"></div>
                </div>

                {/* Feature 3 */}
                <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center">
                <div className="h-52 md:h-80 mb-4 mx-auto flex items-center justify-center">
                    <Image
                      src={hidden}
                      alt="No Hidden Charges"
                      className="h-full w-auto object-contain"
                    />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
                    Transparent Pricing
                  </h3>
                  <div className="w-12 h-1 bg-[#d7b36c] mx-auto"></div>
                </div>
              </div>
            </div>
          </div>

</section>
      <section className="bg-[#151f28] shadow-xl text-center text-[#d3b469]">
        

      <div className="py-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-8">Our Achievements</h2>
          <div className="flex flex-wrap justify-center gap-10">
            <div className="text-center">
              <h3 className="text-5xl font-bold text-[#d3b469]">
                {projectCount}+
              </h3>
              <p className="text-xl mt-2">Projects</p>
            </div>
            <div className="text-center">
              <h3 className="text-5xl font-bold text-[#d3b469]">
                {customerCount}+
              </h3>
              <p className="text-xl mt-2">Happy Customers</p>
            </div>
            <div className="text-center">
              <h3 className="text-5xl font-bold text-[#d3b469]">
                {nriCount}+
              </h3>
              <p className="text-xl mt-2">NRI</p>
            </div>
          </div>
        </div>
      </section>



      <section className="bg-[#151f28] shadow-xl p-10 mb-16 text-center text-[#d3b469]">
        

        <h3 className="text-3xl md:text-4xl font-bold font-poppins mb-3">
          Are You Interested To Invest In Future?
        </h3>
        <p className="text-xl font-light mb-8 max-w-3xl mx-auto">
          We have something very special for you.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <button
            onClick={openContactForm}
            className="bg-[#d3b469] text-xl md:text-2xl hover:bg-[#c0a355] text-[#151f28] font-bold py-4 px-8 rounded-lg transition-all transform hover:scale-105 shadow-lg"
          >
            Get Free Consultation
          </button>
          <Link
            href="tel:+919958993549"
            className="inline-block text-xl md:text-2xl px-8 py-4 bg-transparent border-2 border-white hover:bg-white hover:text-[#151f28] text-white font-bold rounded-lg transition duration-300 transform hover:scale-105 font-poppins shadow-lg"
          >
            Call Now
          </Link>
        </div>
      </section>

      <section>
        {/* Responsive Banner */}
        <div className="w-full relative mt-12">
          <div className="hidden sm:block relative">
            <Image
              src={banner}
              alt="Dholera Times Banner"
              className="w-full h-auto rounded-lg shadow-md"
              width={1200}
              height={400}
            />
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
              <Link
                href="tel:+919958993549"
                className="inline-block px-8 py-4 text-3xl font-bold rounded-lg transition duration-300 transform hover:scale-105 font-poppins shadow-xl"
                style={{
                  backgroundColor: currentColor.bg,
                  color: currentColor.text,
                }}
              >
                CALL NOW
              </Link>
            </div>
          </div>
          <div className="sm:hidden relative">
            <Image
              src={bannerMobile}
              alt="Dholera Times Banner"
              className="w-full h-auto rounded-lg shadow-md"
              width={600}
              height={800}
            />
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
              <Link
                href="tel:+919958993549"
                className="inline-block px-6 py-3 text-xl font-bold rounded-lg transition duration-300 transform hover:scale-105 font-poppins shadow-xl"
                style={{
                  backgroundColor: currentColor.bg,
                  color: currentColor.text,
                }}
              >
                CALL NOW
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials and FAQ */}
      <TestimonialPagination />
      <FAQSection />

      {/* Contact Form Popup */}
      <AnimatePresence>
        {isContactFormOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-[1000]">
            <PopupForm
              title="Book A Free Consultation Today"
              buttonName="Get A Call Back"
              onClose={closeContactForm}
            />
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
