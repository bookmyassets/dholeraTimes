import React from "react";
import hero from "@/assets/hero5.webp";
import Image from "next/image";

export default function About() {
  return (
    <>
      {/* Hero Section */}
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
            Connectivity
          </h2>
          <p className="text-xl font-light leading-relaxed">
          India's First Greenfield Smart City along the Delhi-Mumbai Industrial
          Corridor
          </p>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-20 bg-gradient-to-br from-gray-100 to-gray-300"
      >
        <div className="container mx-auto px-8 lg:px-20">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Connectivity
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative shadow-xl rounded-xl overflow-hidden transform hover:scale-105 transition duration-300">
              <Image
                src={hero}
                alt="Dholera SIR Overview"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20"></div>
            </div>
            <div className="text-gray-700 space-y-6 bg-white p-8 rounded-xl shadow-lg">
              <p className="text-lg leading-relaxed">
                Dholera SIR is quite strategically located. With world-class
                infrastructure and seamless multimodal connectivity, it is
                setting the stage for a world-class change. The Dholera SIR
                project has proximity to mega cities like Ahmedabad, Bhavnagar,
                Vadodara, and Gujarat International Finance TechCity (GIFT).
              </p>
              <p className="text-lg leading-relaxed">
                Considered an investment paradise by many realtors today, the
                Dholera SIR project is expected to yield 15-20% returns
                annually. This high ROI is driven by its government-backed
                development, rapid infrastructure growth, and emerging
                semiconductor industry.
              </p>
              <p className="text-lg leading-relaxed">
                Intracity connectivity is ensured with blacktop roads, metros,
                and smart buses. For intercity, interstate, and international
                connectivity, Dholera SIR has easy access through road, rail,
                air, and sea. The six-lane Central Spine Expressway connects
                Dholera to Ahmedabad. The Gulf of Khambhat sea ports open
                Dholera SIR’s avenues to the entire world - both freight and
                passengers. Public investment is driving core infrastructure
                development, making Dholera a critical hub in the DMIC.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
