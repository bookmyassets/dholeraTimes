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
            Logistics
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
            Rail Based Multi Modal Freight Logistic Park
            </h2>
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-8 order-2 md:order-1">
                <p className="mb-4">
                  The Indian logistics industry is estimated to grow by 15%-25%,
                  says a Cushman and Wakefield report (Logistics Industry - Real
                  Estates' New Power House). The Dholera infrastructure project
                  involves a keen focus on all arrangements for logistics -
                  right from transportation to storage. The aim is to boost
                  cargo management, enhancing India's global trade footprint.
                </p>
                <p>
                  A 1,483 km long Dedicated Freight Corridor(DFC) is planned
                  across the country for freight movement. A substantial part of
                  this corridor will cross through Gujarat (38%). The
                  development of DFC at such a rapid pace also points out that
                  the Indian economy is poised for an economic and industrial
                  explosion.
                </p>
                <p>
                  The development of the Delhi-Mumbai Industrial Corridor will
                  also give a boost to Dholera becoming a logistics powerhouse.
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
