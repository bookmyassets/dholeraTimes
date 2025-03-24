import Image from "next/image";
import React from "react";
import hero from "@/assets/hero5.webp";

export default function page() {
  return (
    <>
      <section className="relative h-[70vh] flex items-center justify-center text-center bg-black">
        <div className="absolute inset-0">
          <Image
            src={hero}
            alt="Dholera SIR Aerial View"
            className="w-full h-[70vh] object-cover opacity-60"
          />
        </div>
        <div className="relative z-10 max-w-3xl text-white px-6">
          <h2 className="text-5xl font-extrabold drop-shadow-lg mb-4">
          Mega Industrial Park 
          </h2>
          <p className="text-xl font-light leading-relaxed">
          India's First Greenfield Smart City along the Delhi-Mumbai Industrial
          Corridor
          </p>
        </div>
      </section>
      <div>
        
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Mega Industrial Park - Global Business Hub
            </h2>
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-8 order-2 md:order-1">
                <p className="mb-4">
                  A mega industrial park is being developed as a key component
                  of the Dholera infrastructure project. Companies from across
                  the world are showing interest in setting up offices here and
                  Foreign Direct Investment (FDI) has also started pouring in.
                </p>
                <p>
                  Corporate interest from renowned firms, including TATA &
                  Vedanta, has positioned the region as a major industrial
                  powerhouse. TATA and Vedanta have already commenced their
                  operations here. Dedicated zones have been made for
                  industries, residences, and commercial outlets. This
                  industrial hub once complete will give tough competition to
                  the world’s largest industrial hubs like China and Dubai.
                </p>
              </div>
              <div className="md:w-1/2 mb-8 md:mb-0 order-1 md:order-2">
                <img
                  src="/api/placeholder/600/400"
                  alt="Dholera Activation Zone"
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
