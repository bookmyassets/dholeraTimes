import React from "react";
import dholeraSite from "@/assets/dholera-smart-city-home-image.webp";
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
              <span className="bg-gray-100 text-gray-800 text-sm font-medium px-3 py-1 rounded-full">
                About Dholera Times
              </span>
            </div> */}

            {/* Main heading */}
            <h2 className="text-[28px] font-bold text-gray-800 mb-6 leading-tight">
              Discover Premium Residential Plots with WestWyn County
            </h2>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed mb-8">
              Your Trusted Gateway to Dholera Smart City – India's first
              Greenfield Smart City under DMIC. With upcoming mega projects like
              the Ahmedabad–Dholera Expressway, the Dholera International Airport,
              and the Tata Semiconductor Plant, this region is set to become one
              of India's top investment destinations. Our project, WestWyn County,
              brings you residential plots in Dholera at the prime Fedra–Pipli
              Highway location. Backed by government approvals and equipped with
              future-ready infrastructure, it offers the perfect mix of high ROI
              and a modern lifestyle.
            </p>

            {/* CTA Button */}
            <Link href="/projects/westwyn-county">
            <button className="bg-[#b69b5e] hover:bg-[#d3b36b] text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200 shadow-md">
             Explore WestWyn County →
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}