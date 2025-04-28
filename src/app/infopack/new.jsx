"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import logo from "@/assets/dt.webp";
import maps from "@/assets/locations.webp";
import videos from "@/assets/videos.webp";
import inventory from "@/assets/plot.webp";
import brochure from "@/assets/brouchure.webp";
import bg from "@/assets/bg-image.webp";
import { FaDownload, FaFacebookMessenger } from "react-icons/fa";
import { AnimatePresence } from "framer-motion";
import BrochureForm from "../components/BrochureForm";

export default function Info() {

    const [isBrochureFormOpen, setIsBrochureFormOpen] = useState(false);
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    
    const downloadBrochure = () => {
        // Replace with your actual brochure URL
        const brochureUrl = "https://shorturl.at/t7uyU";
        const link = document.createElement("a");
        link.href = brochureUrl;
        link.download = "Dholera-Smart-City-Brochure.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };

      const openBrochureForm = () => {
        setIsBrochureFormOpen(true);
      };
    
      const closeBrochureForm = () => {
        setIsBrochureFormOpen(false);
      };
    

  return (
    <div
      className="py-16 px-4 sm:px-6 lg:px-8 min-h-[70vh] overflow-auto relative"
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Semi-transparent overlay for better readability */}
      <div className="absolute inset-0 bg-white bg-opacity-50 z-0"></div>

      <div className="max-w-7xl mx-auto relative z-10 space-y-8">
        <div className="text-center space-y-8">
          <h2 className="font-bold text-2xl md:text-5xl text-gray-800 ">
            Secure Your Future in Dholera Smart City
          </h2>
          <p className="text-black md:font-semibold  md:text-xl">
            Verified Residential Plots • Immediate Registry • Trusted by 400+
            Investors{" "}
          </p>
        </div>
        <div className="flex justify-center">
          <button
            onClick={() => {
                if (isFormSubmitted) {
                  downloadBrochure();
                } else {
                  openBrochureForm();
                }
              }}
              className={`inline-flex items-center px-6 py-3 ${
                isFormSubmitted
                  ? "bg-gray-800 hover:bg-gray-900"
                  : "bg-[#d7b36c] hover:bg-[#c2a05e]"
              } text-white font-bold rounded-lg transition duration-300 transform hover:scale-105 font-poppins shadow-md animate-float`}
            
          >
            <FaDownload className="text-white" /> Download Dholera Times
            Brochure
          </button>
        </div>
        <div className="text-center text-2xl md:text-4xl font-semibold pt-8">
          <p>Explore Prime Locations and See Dholera Come Alive </p>
        </div>
        <div>
          <div className="grid grid-cols-3 font-semibold gap-4 pt-8 text-center md:text-2xl">
            <Link href="/infopack/locations" className="space-y-4">
              <Image src={maps} alt="maps" className="rounded-lg h-40 md:h-60 w-auto mx-auto object-cover" />
              <p>Locations</p>
            </Link>
            <Link href="/infopack/videos" className="space-y-4">
              <Image
                src={videos}
                alt="videos"
                className="rounded-lg h-40 md:h-60 w-auto mx-auto object-cover"
              />
              <p>Videos</p>
            </Link>
            <Link href="/infopack/inventory" className="space-y-4">
              <Image
                src={inventory}
                alt="inventory"
                className="rounded-lg h-40 md:h-60 w-auto mx-auto object-cover"
              />
              <p>Available Plots</p>
            </Link>
            
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isBrochureFormOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-[1000]">
            <BrochureForm
              title="Get Quote"
              buttonName="Download Now"
              onClose={closeBrochureForm}
              onSuccess={() => setIsFormSubmitted(true)}
            />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
