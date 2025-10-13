import React from "react";
import dholeraSite from "@/assets/westwyn-estate-home-image.webp";
import Image from "next/image";
import Link from "next/link";

export default function AboutDT() {
  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12">
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
              <span className="bg-gray-100 text-[#151f28] text-sm font-medium px-3 py-1 rounded-full">
                About Dholera Times
              </span>
            </div> */}

            {/* Main heading */}
            <h2 className="text-[28px] font-bold text-[#151f28] mb-6 leading-tight">
              WestWyn Estate – Your Gateway to Smart Investment in Dholera SIR
            </h2>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed mb-8">
              WestWyn Estate is the newest landmark project in Dholera SIR,
              designed for long-term value and growth. Strategically located on
              Vadhela–Navda Highway,<br /> it offers unbeatable connectivity: just 0
              km from the Dholera SIR boundary,<br /> 5 minutes from the
              Ahmedabad–Dholera Expressway, 15 minutes from the Activation Area,
              25 minutes from the Tata Semiconductor Plant, and 30 minutes from
              the Dholera International Airport. <br />
              All plots are NA/NOC approved, title-cleared, and registry-ready,
              ensuring a secure investment. With flexible plot sizes, even
              buyers looking to buy under <br />10 lakhs plot in Dholera can own a
              future-ready property. This is an ideal opportunity for investors
              seeking growth in India’s first Greenfield Smart City.
            </p>

            {/* CTA Button */}
            <Link href="/dholera-residential-plots/westwyn-estate">
              <button className="bg-[#b69b5e] hover:bg-[#d3b36b] text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200 shadow-md">
                Explore WestWyn Estate →
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}