import React from "react";
import dholeraSite from "@/assets/westwyn-estate-home-image.webp";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Clock, CheckCircle2, Sparkles, ArrowRight } from "lucide-react";

export default function AboutDT() {
  const locationFeatures = [
    { text: "0 km from Dholera SIR Boundary", icon: MapPin },
    { text: "Direct access to Vadhela-Navda Highway", icon: MapPin },
    { text: "5 minutes from Ahmedabad-Dholera Expressway", icon: Clock },
    { text: "15 minutes from Dholera Activation Area", icon: Clock },
    { text: "25 minutes from Tata Semiconductor Plant", icon: Clock },
    { text: "30 minutes from Dholera International Airport", icon: Clock },
  ];
  return (
    <div className="bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[28px] font-bold text-center text-[#151f28] mb-6 leading-tight">
              WestWyn Estate - Where Smart Location Meets Smart Investment
            </h2>
        <div className="flex flex-col-reverse md:flex-row items-center gap-12">
          {/* Left side - Image */}
          <div className="md:w-1/2 w-full">
            <div className="relative">
              <Image
                src={dholeraSite}
                alt="WestWyn Estate in Dholera SIR"
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
            

            {/* Description */}
            <p className="text-gray-600 leading-relaxed mb-4">
              WestWyn Estate is a strategically planned project located right next
              to Dholera SIR. Designed for secure investment and long-term
              appreciation, the project offers excellent connectivity, legal
              safety, and affordable entry options for buyers looking to invest
              in India’s first semiconductor smart city.
            </p>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#b69b5e]" />
                Key Location Advantages
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {locationFeatures.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-3 rounded-lg bg-white border border-gray-200 hover:border-amber-300 hover:shadow-md transition-all duration-200"
                    >
                      <Icon className="w-5 h-5 text-[#b69b5e] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700 leading-snug">
                        {feature.text}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* CTA Button */}
            <Link href="/dholera-residential-plots/westwyn-estate" className="block pt-4">
              <button className="w-full md:w-auto bg-[#b69b5e] hover:bg-[#d3b36b] text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                <span>Explore WestWyn Estate</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
