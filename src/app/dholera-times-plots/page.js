"use client";
import React from "react";
import abcd from "@/assets/ABCD-Building-3.webp";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "../components/ContactForm";
import banner from "@/assets/dtLanding.webp";
import bannerMobile from "@/assets/dtLandingmobile.webp";
import TestimonialPagination from "../components/Testimonials";
import FAQSection from "../components/Faq";

export default function New() {
  return (
    <>
      {/* Add font import to layout.js or add this to your global CSS */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');
        
        body {
          font-family: 'Poppins', sans-serif;
        }
      `}</style>

      <section className="relative h-[50vh] max-sm:h-screen w-full overflow-hidden">
        <Image
          src={abcd}
          alt="Dholera Skyline"
          className="absolute top-0 left-0 w-full h-[50vh] max-sm:h-screen object-cover z-0"
          priority
        />
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row justify-center items-center h-full">
          <div className="md:w-1/2 mb-8 md:mb-0 px-4">
            <div className="bg-[#d7b36c] text-white text-sm font-bold py-1 px-3 rounded-full inline-block mb-4">
              LIMITED PLOTS AVAILABLE
            </div>
            <h1 className="text-4xl md:text-5xl text-white font-bold mb-4 font-poppins">
              Invest in India's First Smart City
            </h1>
            <h2 className="text-xl md:text-2xl text-white mb-6 font-poppins font-light">
              Secure premium plots in Dholera SIR before prices surge -
              projected 5x growth by 2030
            </h2>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/infopack/videos"
                className="bg-transparent border-2 border-white text-white font-bold py-3 px-6 rounded shadow-lg hover:bg-white hover:text-[#151f28] transition cursor-pointer"
              >
                Watch Project Video
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 px-4">
            <ContactForm
              title="Reserve Your Plot Today"
              buttonName="GET PLOT DETAILS NOW"
            />
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight font-poppins tracking-tight">
            WHY INVEST IN{" "}
            <span className="text-[#d7b36c] relative">
              DHOLERA TIMES
            </span>'s
            <span className="block mt-2">RESIDENTIAL PLOTS</span>
          </h2>
        </div>
        
        {/* Infrastructure Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Tata Semiconductor Card */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="bg-[#d7b36c] p-2 rounded-full">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <h3 className="ml-3 text-xl font-bold text-gray-800">Tata Semiconductor</h3>
              </div>
              <p className="text-gray-600">
                Tata Group's $10 billion semiconductor plant coming to Dholera, creating massive employment and boosting local real estate.
              </p>
            </div>
          </div>

          {/* Monorail Card */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="bg-[#d7b36c] p-2 rounded-full">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path>
                  </svg>
                </div>
                <h3 className="ml-3 text-xl font-bold text-gray-800">Monorail Project</h3>
              </div>
              <p className="text-gray-600">
                Proposed 22 km monorail connecting Dholera to Ahmedabad, drastically improving connectivity and accessibility.
              </p>
            </div>
          </div>

          {/* Dholera Airport Card */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="bg-[#d7b36c] p-2 rounded-full">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                  </svg>
                </div>
                <h3 className="ml-3 text-xl font-bold text-gray-800">International Airport</h3>
              </div>
              <p className="text-gray-600">
                Dholera International Airport (Phase 1) operational by 2025-26, boosting business and tourism in the region.
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12 max-w-4xl mx-auto">
          <ul className="space-y-8">
            <li className="flex items-start">
              <div className="flex-shrink-0 pt-1">
                <svg className="w-6 h-6 text-[#d7b36c]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-2xl font-semibold text-gray-800 font-poppins">With Dholera Times you get NA/NOC Plots</p>
                <p className="mt-1 text-lg font-medium text-gray-600 font-poppins">All plots are fully compliant with regulations</p>
              </div>
            </li>
            
            <li className="flex items-start">
              <div className="flex-shrink-0 pt-1">
                <svg className="w-6 h-6 text-[#d7b36c]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-2xl font-semibold text-gray-800 font-poppins">AUDA registered plots</p>
                <p className="mt-1 text-lg font-medium text-gray-600 font-poppins">Legal assurance and government approval</p>
              </div>
            </li>
            
            <li className="flex items-start">
              <div className="flex-shrink-0 pt-1">
                <svg className="w-6 h-6 text-[#d7b36c]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-2xl font-semibold text-gray-800 font-poppins">No Hidden Charges</p>
                <p className="mt-1 text-lg font-medium text-gray-600 font-poppins">Complete transparency in pricing</p>
              </div>
            </li>
          </ul>
        </div>

        {/* Investment Returns Section */}
        <div className="bg-gradient-to-r from-gray-100 to-gray-200 rounded-xl shadow-lg p-8 mb-12 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h3 className="text-3xl font-bold text-gray-800 font-poppins mb-4">Investment Returns</h3>
              <p className="text-lg text-gray-700 font-poppins mb-6">
                Be a part of Dholera's growth story! With the region set to become a hub for industries like aviation, electronics, and renewable energy, your investment in Emerald City promises not just a home but a future full of possibilities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/brochure"
                  className="inline-flex items-center px-6 py-3 bg-[#d7b36c] hover:bg-[#c2a05e] text-white font-bold rounded-lg transition duration-300 transform hover:scale-105 font-poppins"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                  </svg>
                  Download Brochure
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex justify-between items-center mb-4">
                  <div className="text-lg font-semibold text-gray-800">ROI Projection</div>
                  <div className="text-[#d7b36c] font-bold text-xl">5x</div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                  <div className="bg-[#d7b36c] h-2.5 rounded-full" style={{ width: '80%' }}></div>
                </div>
                <div className="flex justify-between text-sm text-gray-600 mb-6">
                  <span>Current Value</span>
                  <span>Projected by 2030</span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-100 p-3 rounded">
                    <div className="text-sm text-gray-600">Starting From</div>
                    <div className="text-lg font-bold text-gray-800">₹5,999/sq.ft</div>
                  </div>
                  <div className="bg-gray-100 p-3 rounded">
                    <div className="text-sm text-gray-600">Investment Period</div>
                    <div className="text-lg font-bold text-gray-800">5-7 Years</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="bg-[#151f28] rounded-xl shadow-lg p-8 mb-12 max-w-4xl mx-auto text-center text-white">
          <h3 className="text-3xl font-bold font-poppins mb-2">Are You Interested To Invest In Future?</h3>
          <p className="text-xl font-light mb-8">We have something very special for you.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/contact"
              className="inline-block px-8 py-4 bg-[#d7b36c] hover:bg-[#c2a05e] text-white font-bold rounded-lg transition duration-300 transform hover:scale-105 font-poppins text-lg"
            >
              Fill Inquiry Form
            </Link>
            <Link 
              href="tel:+919876543210"
              className="inline-block px-8 py-4 bg-transparent border-2 border-white hover:bg-white hover:text-[#151f28] text-white font-bold rounded-lg transition duration-300 transform hover:scale-105 font-poppins text-lg"
            >
              Call Now
            </Link>
          </div>
        </div>

        <div className="text-center mb-16">
          <Link 
            href="/plots"
            className="inline-block px-8 py-4 bg-[#d7b36c] hover:bg-[#c2a05e] text-white font-bold rounded-lg transition duration-300 transform hover:scale-105 font-poppins text-lg"
          >
            Explore Available Plots
          </Link>
        </div>
        
        {/* Responsive Banner */}
        <div className="w-full relative mt-8">
          <div className="hidden sm:block">
            <Image
              src={banner}
              alt="Dholera Times Banner"
              className="w-full h-auto rounded-lg shadow-md"
              width={1200}
              height={400}
            />
            <div className="absolute bottom-8 right-8">
              <Link 
                href="/book-now"
                className="inline-block px-6 py-3 bg-[#d7b36c] hover:bg-[#c2a05e] text-white font-bold rounded-lg transition duration-300 transform hover:scale-105 font-poppins"
              >
                Book Now
              </Link>
            </div>
          </div>
          <div className="sm:hidden">
            <Image
              src={bannerMobile}
              alt="Dholera Times Banner"
              className="w-full h-auto rounded-lg shadow-md"
              width={600}
              height={800}
            />
            <div className="absolute bottom-4 right-4">
              <Link 
                href="/book-now"
                className="inline-block px-4 py-2 bg-[#d7b36c] hover:bg-[#c2a05e] text-white font-bold rounded-lg transition duration-300 transform hover:scale-105 font-poppins text-sm"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </section>
      <TestimonialPagination/>
      <FAQSection/>
    </>
  );
}