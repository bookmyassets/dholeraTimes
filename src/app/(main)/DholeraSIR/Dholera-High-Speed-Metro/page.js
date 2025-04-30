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
          Dholera-Ahmedabad Metro Train
          </h2>
          <p className="text-xl font-light leading-relaxed">
          India's First Greenfield Smart City along the Delhi-Mumbai Industrial
          Corridor
          </p>
        </div>
      </section>
      <div>
        

        {/* Activation Zone Section */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Dholera-Ahmedabad Metro Train
            </h2>
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-8 order-2 md:order-1">
                <p className="mb-4">
                  The central government has approved a High Speed Metro And
                  Rail project which will run through
                  Ahmedabad-Dholera-Gandhinagar. The project will unfold in two
                  phases with phase 1 connecting Ahmedabad to Gandhinagar while
                  phase 2 will link Gandhinagar to Dholera Smart city via GIFT
                  city.
                </p>
                <p>
                  The National Highways Authority Of India (NHAI) has designated
                  a 120-metre-wide strip extending from Dholera SIR to Ahmedabad
                  as a part of this project. Three-fourths of this strip would
                  be used for a six-lane highway and one-fourth for a metro
                  link, both running parallel. The planned Mass Rapid Transit
                  System (MRTS), or monorail, will connect Ahmedabad to the
                  Dholera Special Investment Region, spanning 100 kilometres
                  with 70 stations along the routes.
                </p>
                <p>
                  Dholera’s metro project is designed to accommodate 80,000
                  passengers per hour and 1.7 million commuters by 2031.
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