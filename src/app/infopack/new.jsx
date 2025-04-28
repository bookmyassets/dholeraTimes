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

export default function Info() {
  const [viewMode, setViewMode] = useState("card");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();
    setViewMode(window.innerWidth < 768 ? "list" : "card");

    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  const items = [
    {
      id: 1,
      title: "Locations",
      description:
        "Know more about nearby landmarks and our project's location on Google Maps",
      link: "/infopack/locations",
      image: maps,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
    },
    {
      id: 2,
      title: "Videos",
      description:
        "Watch expert insights on why investing in Dholera is a smart financial decision",
      link: "/infopack/videos",
      image: videos,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      id: 3,
      title: "Project Brochure",
      description:
        "Learn all about our Dholera residential plots by accessing our comprehensive project brochure",
      link: "/infopack/Brochure",
      image: brochure,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
    },
    {
      id: 4,
      title: "Available Plots",
      description:
        "Check available residential plots in Dholera and book yours before they're sold out!",
      link: "/infopack/Inventory",
      image: inventory,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      ),
    },
  ];

  return (
    <div
      className="py-16 px-4 sm:px-6 lg:px-8 min-h-[87vh] overflow-auto relative"
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
          <h2 className="font-bold text-2xl md:text-5xl text-[#152d4f] ">
            Secure Your Future in Dholera Smart City
          </h2>
          <p className="text-black md:font-semibold  md:text-xl">
            Verified Residential Plots • Immediate Registry • Trusted by 400+
            Investors{" "}
          </p>
        </div>
        <div className="flex justify-center">
          <button className="bg-[#152d4f] text-white flex gap-4 items-center p-4 rounded-md md:text-xl">
            <FaDownload className="text-white" /> Download Dholera Times
            Brochure
          </button>
        </div>
        <div className="text-center text-2xl md:text-4xl font-semibold pt-8">
          <p>Explore Prime Locations and See Dholera Come Alive </p>
        </div>
        <div>
          <div className="grid grid-cols-2 font-semibold gap-4 pt-8 text-center md:text-2xl">
            <div className="space-y-4">
              <Image src={maps} alt="maps" className="rounded-lg md:h-60 w-auto mx-auto object-cover" />
              <p>Locations</p>
            </div>
            <div className="space-y-4">
              <Image
                src={videos}
                alt="videos"
                className="rounded-lg md:h-60 w-auto mx-auto object-cover"
              />
              <p>Videos</p>
            </div>
            <div className="space-y-4">
              <Image
                src={inventory}
                alt="inventory"
                className="rounded-lg md:h-60 w-auto mx-auto object-cover"
              />
              <p>Available Plots</p>
            </div>
            <div className="space-y-4">
              <Image
                src={brochure}
                alt="brochure"
                className="rounded-lg md:h-60 w-auto mx-auto object-cover"
              />
              <p>Dholera Times Brochure</p>
            </div>
          </div>

          <div className="pt-8 text-2xl md:text-3xl  text-center">
            <p className="font-semibold">
              Need Help Choosing a Plot? Let's Chat on Whatsapp
            </p>
            <div className="flex justify-center pt-8">
              <button className="bg-green-500 text-white flex gap-4 items-center p-4 rounded-md md:text-xl">
                <FaFacebookMessenger className="text-white" /> Talk to Advisor
                Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
