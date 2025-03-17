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

        <section className="py-16 ">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">
              New Six Lane Expressway
            </h2>
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-8 order-2 md:order-1">
                <p className="mb-4">
                  A 109-km long six-lane expressway extends from Ahmedabad to
                  Dholera. This is known as the Central Spine Road and is aimed
                  at enhancing Dholera SIR’s connectivity with nearby regions.
                  This expressway is expected to significantly reduce travel
                  time.
                </p>
                <p>
                  90 metre wide, this highway will be built by the National
                  Highways Authority of India (NHAI) and is expected to become
                  fully functional by the end of 2025.
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
