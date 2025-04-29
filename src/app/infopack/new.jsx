"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import maps from "@/assets/locations.webp";
import videos from "@/assets/videos.webp";
import inventory from "@/assets/plot.webp";
import bg from "@/assets/bg-image.webp";
import { FaDownload } from "react-icons/fa";

export default function Info() {

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
            href="https://shorturl.at/q7Yh3"
              className="bg-gray-800 text-[#e6b751] font-semibold flex gap-4 items-center p-4 rounded-md md:text-xl"
          >
            <FaDownload className="text-[#e6b751]" /> Download Dholera Times
            Brochure
          </button>
        </div>
       
        <div>
          <div className="grid grid-cols-3 font-semibold gap-4 pt-8 text-center md:text-2xl">
            <Link href="/infopack/locations" className="space-y-4">
              <Image src={maps} alt="maps" className="shadow-2xl rounded-lg h-40 md:h-60 w-auto mx-auto object-cover" />
              <p>Locations</p>
            </Link>
            <Link href="/infopack/videos" className="space-y-4">
              <Image
                src={videos}
                alt="videos"
                className="shadow-2xl rounded-lg h-40 md:h-60 w-auto mx-auto object-cover"
              />
              <p>Videos</p>
            </Link>
            <Link href="/infopack/inventory"  className="space-y-4">
              <Image
                src={inventory}
                alt="inventory"
                className="shadow-2xl rounded-lg h-40 md:h-60 w-auto mx-auto object-cover"
              />
              <p>Available Plots</p>
            </Link>
            
          </div>
        </div>
      </div>
    </div>
  );
}
