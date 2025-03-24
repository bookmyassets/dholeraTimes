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
            Infrastructure
          </h2>
          <p className="text-xl font-light leading-relaxed">
          India's First Greenfield Smart City along the Delhi-Mumbai Industrial
          Corridor
          </p>
        </div>
      </section>
      <div>

        {/* Connectivity Section */}
        <section id="connectivity" className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Dholera International Airport
            </h2>
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-8 order-2 md:order-1">
                <p className="mb-4">
                  With a whopping 20,000-crore investment, Dholera International
                  Airport is set to be a key pillar of Dholera’s infrastructure
                  development. Designed to ease congestion at the Ahmedabad
                  Airport, it will enhance connectivity for the region.
                </p>
                <p className="mb-4">
                  Spread across 1,700 acres, the airport is located 29 km from
                  Dholera and 80 km from Ahmedabad. The airport will feature two
                  large runaways, developed in phases. The first phase includes
                  a single runway capable of handling up to 30 million
                  passengers annually, while the second phase will add another
                  runway, increasing the total capacity to 50 million passengers
                  per year, apart from the cargo.
                </p>
                <p>
                  For intercity, interstate, and international connectivity,
                  Dholera SIR has easy access through road, rail, air, and sea.
                  The six-lane Central Spine Expressway connects Dholera to
                  Ahmedabad. The Gulf of Khambhat sea ports open Dholera SIR's
                  avenues to the entire world - both freight and passengers.
                  Public investment is driving core infrastructure development,
                  making Dholera a critical hub in the DMIC.
                </p>
                <p>
                  Intra-city networks will directly link the airport to Dholera
                  SIR, making it a game-changer for trade, tourism, and
                  business.
                </p>
                <p>
                  The first phase is now ready, marking a significant milestone
                  in the project's development. The Dholera International
                  Airport will become a crucial aviation hub accelerating
                  economic growth and enhancing regional connectivity.
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
