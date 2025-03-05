import React from "react";
import rrt from "@/assets/rrt.webp"
import expressway from "@/assets/expressway.webp"
import dia from "@/assets/DIA.webp"
import dholera from "@/assets/dhoelra.png"
import Image from "next/image";

const DholeraInvestmentGuide = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-blue-800 text-white">
        <div className="absolute inset-0 opacity-20 bg-[url('/api/placeholder/1200/400')] bg-cover bg-center"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl mb-6">
            Why Invest in{" "}
            <span className="text-yellow-400">Dholera Smart City</span>
          </h1>
          <p className="max-w-3xl text-xl">
            India's first Greenfield Smart City, designed for a smarter, greener
            future with cutting-edge technology and sustainable living.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="p-8 md:p-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                The Future of Urban Development
              </h2>
              <p className="text-gray-700 mb-6">
                With industrial zones, IT parks, and business centers on the
                rise, Dholera is set to become a hotspot for jobs and startups.
                It offers affordable property compared to developed cities,
                making it a great opportunity for investors and businesses.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-blue-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-700">
                    920 sq.km. of planned development area
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-blue-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-700">
                    Strategic location near the Gulf of Khambhat
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-blue-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-700">
                    Expected to generate over 8 lakh jobs
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-blue-50 p-8 md:p-10 flex flex-col justify-center">
              <div className="bg-white rounded-xl shadow-md p-6 relative">
                <div className="absolute top-0 right-0 -mt-4 -mr-4 bg-blue-600 text-white rounded-full px-4 py-1 text-sm font-semibold">
                  Key Project
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  PM Narendra Modi's Dream Project
                </h3>
                <p className="text-gray-600">
                  Dholera SIR is Prime Minister Modi's dream project with the
                  potential to redefine India's urban and industrial landscape.
                  He has taken a personal interest in the planning, investment,
                  and technological integration of this project.
                </p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="text-sm text-gray-500">
                    "Smart city Dholera is a key part of the government's 'Make
                    in India' initiative"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Connectivity Section */}
      <section className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            Unparalleled Connectivity
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Strategic connections at every level make Dholera a transportation
            hub of the future
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="h-48 bg-gray-200 relative">
              <Image
                src={rrt}
                alt="Metro Train"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <h3 className="absolute bottom-0 left-0 text-white text-xl font-bold p-4">
                Intracity Connectivity
              </h3>
            </div>
            <div className="p-6">
              <h4 className="font-semibold text-gray-900 mb-2">
                Dholera Metro Train
              </h4>
              <p className="text-gray-600">
                Dholera SIR project is well-connected both internally and
                externally. The region is planned to include all modern
                transport facilities like black-top roads, metro rails, smart
                buses, and more. The high-speed metro rail lines planned
                throughout the region are expected to fast-track the city’s
                daily commute.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="h-48 bg-gray-200 relative">
              <Image
                src={expressway}
                alt="Central Spine Road"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <h3 className="absolute bottom-0 left-0 text-white text-xl font-bold p-4">
                Intercity Connectivity
              </h3>
            </div>
            <div className="p-6">
              <h4 className="font-semibold text-gray-900 mb-2">
                Central Spine Road
              </h4>
              <p className="text-gray-600">
                A special 109 km long expressway is expected to be completed in
                the next three months, connecting Dholera and Ahmedabad. This
                4-lane expressway will reduce travel time to just 40-45 minutes.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="h-48 bg-gray-200 relative">
              <Image
                src={dia}
                alt="International Airport"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <h3 className="absolute bottom-0 left-0 text-white text-xl font-bold p-4">
                Global Connectivity
              </h3>
            </div>
            <div className="p-6">
              <h4 className="font-semibold text-gray-900 mb-2">
                Dholera International Airport
              </h4>
              <p className="text-gray-600">
                Spread across 1426 hectares, the international airport is
                expected to be operational by December 2026. It will handle both
                passenger and freight operations, connecting Dholera to the
                world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="bg-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Key Features That Make Dholera a Prime Investment
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-yellow-400 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Special Economic Zone</h3>
              <p className="text-blue-100">
                Dholera has been declared as a Special Economic Zone (SEZ),
                offering companies special benefits including tax breaks,
                fast-track approval processes, and cheaper land leases.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-yellow-400 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">5000MW Solar Park</h3>
              <p className="text-blue-100">
                India's largest solar project by TATA is being constructed in
                Dholera, changing how energy production will look in this region
                and providing sustainable power for the city and beyond.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-yellow-400 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
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
              </div>
              <h3 className="text-xl font-bold mb-3">Strategic Location</h3>
              <p className="text-blue-100">
                Located near the Gulf of Khambhat, Dholera has easy port access
                and is strategically positioned to become one of the largest
                trading and manufacturing hubs in the world.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-yellow-400 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Smart Infrastructure</h3>
              <p className="text-blue-100">
                Advanced infrastructure including AI-driven traffic management,
                CCTV surveillance, SCADA sensors, and underground utilities for
                a seamless urban experience.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-yellow-400 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">3X Investment Growth</h3>
              <p className="text-blue-100">
                From November 2022 to March 2024 alone, land rates in Dholera
                saw a 3X jump. Returns are expected to skyrocket in the next
                three years as development progresses.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-yellow-400 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">
                World-class Civic Amenities
              </h3>
              <p className="text-blue-100">
                Features include central cooling systems, city-wide WiFi,
                IoT-enabled infrastructure, administrative apps, and underground
                resource lines, inspired by Singapore and Dubai.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Global Competition */}
      <section className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="bg-gray-50 rounded-2xl shadow-md p-8 md:p-10">
          <div className="md:flex items-center gap-10">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <Image
                src={dholera}
                alt="Global Competition"
                className="w-96 h-64 object-cover rounded-xl"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Competing on a Global Scale
              </h2>
              <p className="text-gray-700 mb-4">
                From ancient times, right from the Harappan civilization, this
                region has been known for its rich trade history. Now with a
                well-planned greenfield approach, Dholera is positioned to:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-green-500 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Become a precedent for other smart cities across India
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-green-500 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Compete with Dubai and China's manufacturing hubs
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-green-500 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Draw global corporations and international investment
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-green-500 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Showcase India's capabilities in creating world-class
                  infrastructure
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Call to Action */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Begin Your Investment Journey in Dholera
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
            A city needs three crucial factors to make strides in development –
            employment generation, high connectivity, and future planning.
            Dholera excels in all three, making it the prime investment
            opportunity in India today.
          </p>
          <div className="inline-flex rounded-md shadow">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-gray-50 md:text-lg"
            >
              Explore Investment Options
            </a>
          </div>
          <p className="mt-6 text-sm text-blue-200">
            Contact Dholera Times - the most trusted real estate partner for
            investment opportunities in Dholera Smart City
          </p>
        </div>
      </section>

      {/* Footer */}
      
    </div>
  );
};

export default DholeraInvestmentGuide;
