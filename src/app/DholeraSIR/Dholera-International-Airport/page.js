"use client";

import Image from "next/image";
import React, { useState } from "react";
import hero from "@/assets/hero5.webp";

export default function Page() {
  const [activeTab, setActiveTab] = useState("KeyRole");

  const handleScroll = (id) => {
    setActiveTab(id);
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const buttonStyle = (id) =>
    `px-6 py-4 rounded-lg font-semibold transition-all duration-300 shadow ${
      activeTab === id
        ? "bg-[#d8b66d] text-white"
        : "bg-white text-gray-800 hover:bg-gray-100"
    }`;

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center text-center bg-black">
        <div className="absolute inset-0">
          <Image
            src={hero}
            alt="Dholera SIR Aerial View"
            className="w-full h-full object-cover opacity-60"
            priority
          />
        </div>
      </section>

      <div className="relative z-10 max-w-4xl mx-auto pt-6 px-6">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 ">
          Dholera International Airport
        </h1>
      </div>
      {/* Introduction Section */}

      {/* Navigation Tabs */}
      <div className="sticky top-0 z-20 bg-white shadow-md py-4">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center gap-4 overflow-x-auto pb-2 flex-wrap md:flex-nowrap">
            <button
              className={buttonStyle("KeyRole")}
              onClick={() => handleScroll("KeyRole")}
              aria-label="Key Role of Dholera Airport"
            >
              Key Role
            </button>
            <button
              className={buttonStyle("StrategicLocation")}
              onClick={() => handleScroll("StrategicLocation")}
              aria-label="Strategic Location"
            >
              Strategic Location
            </button>
            <button
              className={buttonStyle("RecentUpdates")}
              onClick={() => handleScroll("RecentUpdates")}
              aria-label="Recent Updates"
            >
              Recent Updates
            </button>
            <button
              className={buttonStyle("Timeline")}
              onClick={() => handleScroll("Timeline")}
              aria-label="Timeline of Dholera Airport"
            >
              Timeline
            </button>
          </div>
        </div>
      </div>
      <section className="py-12 bg-white">
        <div className="container max-w-5xl mx-auto px-4">
          <p className="text-center text-lg md:text-xl font-medium text-gray-700 ">
            Dholera International Airport is a new Indian airport being built in
            the Dholera Special Investment Region (DSIR) to ease access to
            India's first greenfield smart city, Dholera, and to reduce traffic
            load on the Ahmedabad Airport.
          </p>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16 leading-relaxed bg-gray-50">
        {/* Key Role Section */}
        <div id="KeyRole" className="container mx-auto px-4 mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center relative">
            <span className="relative after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:w-20 after:h-1 after:bg-[#d8b66d] after:-translate-x-1/2">
              Why Does Dholera Airport Play Such A Key Role?
            </span>
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 order-2 md:order-1">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-[#d8b66d] mr-2 text-xl">●</span>
                  <span className="text-gray-700">
                    Lessen traffic load on Sardar Vallabhbhai Patel
                    International Airport
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#d8b66d] mr-2 text-xl">●</span>
                  <span className="text-gray-700">
                    Boost connectivity to the DSIR across the globe
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#d8b66d] mr-2 text-xl">●</span>
                  <span className="text-gray-700">
                    Boost freight and cargo movement
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#d8b66d] mr-2 text-xl">●</span>
                  <span className="text-gray-700">
                    Support the industrial opportunities being created by the
                    Delhi-Mumbai Industrial Corridor (DMIC)
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#d8b66d] mr-2 text-xl">●</span>
                  <span className="text-gray-700">
                    Boost tourism to the Dholera region
                  </span>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2 order-1 md:order-2">
              <div className="rounded-lg overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300">
                <Image
                  src="/api/placeholder/600/400"
                  alt="Dholera Connectivity Map"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Strategic Location Section */}
        <div id="StrategicLocation" className="container mx-auto px-4 mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center relative">
            <span className="relative after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:w-20 after:h-1 after:bg-[#d8b66d] after:-translate-x-1/2">
              Strategic Location
            </span>
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 order-2 md:order-1">
              <ul className="space-y-4 mb-6">
                <li className="flex items-start">
                  <span className="text-[#d8b66d] mr-2 text-xl">●</span>
                  <span className="text-gray-700">
                    Connected to the Delhi-Mumbai Industrial Corridor (DMIC)
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#d8b66d] mr-2 text-xl">●</span>
                  <span className="text-gray-700">
                    Located just 80 kilometres from Ahmedabad city
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#d8b66d] mr-2 text-xl">●</span>
                  <span className="text-gray-700">
                    Situated 20km from Dholera Metro City
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#d8b66d] mr-2 text-xl">●</span>
                  <span className="text-gray-700">
                    Spread across 1,426 hectares, with 75 hectares dedicated to
                    commercial development
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#d8b66d] mr-2 text-xl">●</span>
                  <span className="text-gray-700">
                    Boost tourism to the Dholera region
                  </span>
                </li>
              </ul>
              <p className="text-gray-700 ">
                To enhance the connectivity further and make Dholera a
                well-connected region, a special expressway called the Central
                Spine Road is in the making. This will connect surrounding
                cities to Dholera through black-top roads and reduce travel
                time.
              </p>
            </div>
            <div className="md:w-1/2 order-1 md:order-2">
              <div className="rounded-lg overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300">
                <Image
                  src="/api/placeholder/600/400"
                  alt="Dholera Connectivity Map"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Recent Updates Section */}
        <div id="RecentUpdates" className="container mx-auto px-4 mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center relative">
            <span className="relative after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:w-20 after:h-1 after:bg-[#d8b66d] after:-translate-x-1/2">
              Recent Updates
            </span>
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 order-2 md:order-1">
              <ul className="space-y-4 mb-6">
                <li className="flex items-start">
                  <span className="text-[#d8b66d] mr-2 text-xl">●</span>
                  <span className="text-gray-700">
                    Cargo operations expected to start by mid-2025. This will
                    provide a major boost to global trade and make Dholera a
                    logistics powerhouse.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#d8b66d] mr-2 text-xl">●</span>
                  <span className="text-gray-700">
                    First runway: 3,200-metre long. The terminal is equipped
                    with modern facilities and advanced air traffic management
                    systems.
                  </span>
                </li>
              </ul>
              <p className="text-gray-700 ">
                To enhance the connectivity further and make Dholera a
                well-connected region, a special expressway called the Central
                Spine Road is in the making. This will connect surrounding
                cities to Dholera through black-top roads and reduce travel
                time.
              </p>
            </div>
            <div className="md:w-1/2 order-1 md:order-2">
              <div className="rounded-lg overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300">
                <Image
                  src="/api/placeholder/600/400"
                  alt="Dholera Connectivity Map"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Timeline Section (Placeholder) */}
        <div id="Timeline" className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center relative">
            <span className="relative after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:w-20 after:h-1 after:bg-[#d8b66d] after:-translate-x-1/2">
              A Recap Of The Airport's Journey So Far
            </span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative border-l-4 border-[#d8b66d] pl-8 pb-10">
              {/* 2010 */}
              <div className="mb-10 relative">
                <div className="absolute -left-12 w-8 h-8 bg-[#d8b66d] rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
                <h3 className="text-xl font-bold mb-2">2010</h3>
                <p className="text-gray-700">
                  The Airports Authority of India (AAI) conducted a feasibility
                  study and granted technical clearance
                </p>
              </div>

              {/* 2012 */}
              <div className="mb-10 relative">
                <div className="absolute -left-12 w-8 h-8 bg-[#d8b66d] rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
                <h3 className="text-xl font-bold mb-2">2012</h3>
                <p className="text-gray-700">
                  Dholera International Airport Company Ltd. (DIACL) was formed
                  by the Government of Gujarat
                </p>
              </div>

              {/* 2014 */}
              <div className="mb-10 relative">
                <div className="absolute -left-12 w-8 h-8 bg-[#d8b66d] rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
                <h3 className="text-xl font-bold mb-2">2014</h3>
                <p className="text-gray-700">
                  Site clearance received from the Central Government of India
                </p>
              </div>

              {/* 2015 */}
              <div className="mb-10 relative">
                <div className="absolute -left-12 w-8 h-8 bg-[#d8b66d] rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
                <h3 className="text-xl font-bold mb-2">2015</h3>
                <p className="text-gray-700">
                  Approval received from Environment Ministry
                </p>
              </div>

              {/* 2018 */}
              <div className="mb-10 relative">
                <div className="absolute -left-12 w-8 h-8 bg-[#d8b66d] rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
                <h3 className="text-xl font-bold mb-2">2018</h3>
                <p className="text-gray-700">
                  Airports Authority of India bought 51% in DIACL, Gujarat
                  Government kept 33%, Delhi Mumbai Industrial Corridor
                  Development Corporation Limited (DMICDC) had 16%
                </p>
              </div>

              {/* 2019 */}
              <div className="mb-10 relative">
                <div className="absolute -left-12 w-8 h-8 bg-[#d8b66d] rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
                <h3 className="text-xl font-bold mb-2">2019</h3>
                <p className="text-gray-700">
                  MoU for airport construction signed between AAI & Gujarat
                  Government
                </p>
              </div>

              {/* 2021 */}
              <div className="mb-10 relative">
                <div className="absolute -left-12 w-8 h-8 bg-[#d8b66d] rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
                <h3 className="text-xl font-bold mb-2">2021</h3>
                <p className="text-gray-700">
                  Phase 1 tender of ₹987 crore released; Civil works contract
                  given to Varaha Infrastructure
                </p>
              </div>

              {/* 2022 */}
              <div className="mb-10 relative">
                <div className="absolute -left-12 w-8 h-8 bg-[#d8b66d] rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
                <h3 className="text-xl font-bold mb-2">2022</h3>
                <p className="text-gray-700">
                  ₹1,305 crore sanctioned for development of Phase 1
                </p>
              </div>

              {/* 2024 */}
              <div className="mb-10 relative">
                <div className="absolute -left-12 w-8 h-8 bg-[#d8b66d] rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
                <h3 className="text-xl font-bold mb-2">2024</h3>
                <p className="text-gray-700">
                  ₹333 crore contract for passenger terminal, ATC tower & cargo
                  complex given to Yashnand Engineers & Contractors
                </p>
              </div>

             
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
