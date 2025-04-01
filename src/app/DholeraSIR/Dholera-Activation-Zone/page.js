import React from "react";
import hero from "@/assets/hero5.webp";
import Image from "next/image";

export default function About() {
  return (
    <>
      {/* Hero Section */}
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
            Activation Zone
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
            Activation Zone
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
                In Dholera SIR, the "Activation Zone" is a strategically
                planned, 22.5 sq km industrial park designed to attract
                industries and investments with ready-to-use infrastructure,
                aiming to transform Dholera into a global manufacturing hub. All
                the transport and public amenities for this area are in full
                swing. Everything from residential spaces, recreational
                activities, tourism, to community facilities, has been
                meticulously planned and is in the making.
              </p>
              <p className="text-lg leading-relaxed">
                The Town Planning (TP) in the Dholera SIR project has been
                divided into schemes to ensure fast and focused development,
                while the industrial region in the Activation Zone offers one of
                India's most promising real estate opportunities today.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
