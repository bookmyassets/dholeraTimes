import Image from "next/image";
import React from "react";
import hero from "@/assets/hero5.webp";

export default function page() {
  return (
    <>
      <section className="relative h-[50vh] flex items-center justify-center text-center bg-black">
        <div className="absolute inset-0">
          <Image
            src={hero}
            alt="Dholera SIR Aerial View"
            className="w-full h-[50vh] object-cover opacity-60"
          />
        </div>
        <div className="relative z-10 max-w-3xl text-white px-6">
          <p className="text-xl font-light leading-relaxed">
            India's First Greenfield Smart City along the Delhi-Mumbai
            Industrial Corridor
          </p>
        </div>
      </section>

      <div className="space-y-12">
        <div className="pt-6">
          <h2 className="text-5xl text-center font-extrabold drop-shadow-lg mb-4">
            Dholera International Airport
          </h2>
        </div>

        <div className="flex justify-center items-center mt-6 mb-6 gap-8">
          <button className="bg-[#d8b66d] p-6 shadow-2xl rounded-lg">
            Key Role of Dholera Airport
          </button>
          <button className="bg-[#d8b66d] p-6 shadow-2xl rounded-lg">
            Strategic Location
          </button>
          <button className="bg-[#d8b66d] p-6 shadow-2xl rounded-lg">
            Recent Updates
          </button>
          <button className="bg-[#d8b66d] p-6 shadow-2xl rounded-lg">
            Timeline of Dholera Airport
          </button>
        </div>

        <div className="max-w-4xl mx-auto">
          <p className="text-center pt-6 font-semibold text-lg">
            Dholera International Airport is a new Indian airport being built in
            the Dholera Special Investment Region (DSIR) to ease access to
            India&#39;s first greenfield smart city, Dholera, and to reduce
            traffic load on the Ahmedabad Airport.
          </p>
        </div>
      </div>
      <div>
        {/* Connectivity Section */}
        <section id="connectivity" className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Why Does Dholera Airport Play Such A Key Role?
            </h2>
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-8 order-2 md:order-1">
                <p className="mb-4">
                  ● Lessen traffic load on Sardar Vallabhbhai Patel
                  International Airport 
                  ● Boost connectivity to the DSIR across
                  the globe 
                  ● Boost freight and cargo movement 
                  ● Support the industrial opportunities being created by the Delhi-Mumbai
                  Industrial Corridor (DMIC) 
                  ● Boost tourism to the Dholera region
                </p>
              </div>
              <div className="md:w-1/2 mb-8 md:mb-0 order-1 md:order-2">
                <img
                  src="/api/placeholder/600/400"
                  alt="Dholera Connectivity Map"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
