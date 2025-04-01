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
            ABCD Building
          </h2>
          <p className="text-xl font-light leading-relaxed">
          India's First Greenfield Smart City along the Delhi-Mumbai Industrial
          Corridor
          </p>
        </div>
      </section>
      <div>
        <section id="about" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">
              The ABCD Building - Smart Governance in Action
            </h2>
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                <img
                  src="/api/placeholder/600/400"
                  alt="Dholera SIR Overview"
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="md:w-1/2">
                <p className="mb-4">
                  The government has planned an exclusive administration for
                  Dholera city. The ABCD building, short for Administration Cum
                  Business Center for Dholera, will be the central admin office
                  of the smart city. This building is already up and running in
                  full swing. In a total built-up area of 36,000 sq. m., the
                  building has offices of the development agencies, a command
                  and control centre, and a skill development centre.
                </p>
                <p className="mb-4">
                  The ABCD building is located west of the Central Spine
                  Expressway and is directly connected to the 55-metre arterial
                  road leading to the expressway.
                </p>
                <p>
                  In a digital-first move, the government has also planned a
                  one-stop app for Dholera to cater to all administration needs,
                  putting ease for its residents and working community at the
                  forefront.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}