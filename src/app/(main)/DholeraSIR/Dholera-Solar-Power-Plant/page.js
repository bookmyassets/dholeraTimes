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
          <h2 className="text-5xl font-extrabold drop-shadow-lg mb-4">
          Solar Power Plant
          </h2>
          <p className="text-xl font-light leading-relaxed">
          India's First Greenfield Smart City along the Delhi-Mumbai Industrial
          Corridor
          </p>
        </div>
      </section>
      <div>
       

        {/* Planning Section */}
        <section id="planning" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">
              World's Largest Solar Power Plant
            </h2>
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                <img
                  src="/api/placeholder/600/400"
                  alt="Dholera City Plan"
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="md:w-1/2">
                <p className="mb-4">
                  In Dholera’s infrastructure, a special focus has been laid on
                  renewable energies. The world’s largest solar park is up and
                  coming here, and it will boost not just the region’s
                  sustainable power consumption but that of many regions around
                  it.
                </p>
                <p className="mb-4">
                  A 4400 MW project, Dholera’s solar park is India’s largest
                  single-axis solar tracker system. With TATA taking the lead on
                  this, the first phase of 1000 MW is complete and already in
                  use. This will significantly boosting green energy adoption
                  across Gujarat and beyond.
                </p>
              </div>
            </div>
          </div>
        </section>

       
      </div>
    </>
  );
}
