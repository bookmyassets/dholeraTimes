import React from "react";
import dholeraSite from "@/assets/dholera-smart-city-home-image.webp";
import Image from "next/image";

export default function Dholera() {
  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col-reverse md:flex-row-reverse items-center gap-12">
          {/* Left side - Image */}
          <div className="md:w-1/2 w-full">
            <div className="relative">
              <Image
                src={dholeraSite}
                alt="Modern sustainable house with solar panels"
                className="w-full h-[400px] object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="md:w-1/2 w-full">
            {/* Small label */}
            {/*  <div className="inline-block mb-4">
              <span className="bg-gray-100 text-gray-800 text-sm font-medium px-3 py-1 rounded-full">
                About Dholera Times
              </span>
            </div> */}

            {/* Main heading */}
            <h2 className="text-[28px] font-bold text-gray-800 mb-6 leading-tight">
              Dholera Smart City
            </h2>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed mb-8">
              Dholera Smart City is India’s first planned Greenfield city,
              developed under the Delhi-Mumbai Industrial Corridor (DMIC).
              Spanning 922.5 sq. km, Dholera SIR is designed to become a global
              Industrial and Manufacturing hub with plug and play
              infrastructure, renewable energy, and global connectivity.
              <br />
              Located just 109 km from Ahmedabad, it is connected via the
              Ahmedabad Dholera Expressway and the upcoming Dholera
              International Airport (India’s second largest). With investments
              from mega industries like Tata Semiconductor (₹91,000 CR), ReNew
              Power (₹1200 CR), and featuring one of the world’s largest Solar
              Power Parks, Dholera smart city is shaping up as India’s future
              business and investment capital.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
