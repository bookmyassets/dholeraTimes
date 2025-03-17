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
            Planning
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
            Planning
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
                The Indian Government aims to develop Dholera SIR as the next
                global industrial hub in the world, competing with Dubai and
                China.
              </p>
              <p className="text-lg leading-relaxed">
                The Draft Development Plan focuses on creating a modern city
                with global infrastructure and a high standard of living.
                Dedicated residential, commercial, and industrial zones have
                been planned for a sustainable layout. While being economically
                and socially balanced, the planning lays special focus on using
                sustainable systems in all sectors including transportation,
                waste management, resource efficiency, and overall urban form.
                Dholera Industrial City will be self-sustaining consisting of
                industrialization, utility & logistic infrastructure, social
                infrastructure, and various public amenities. TATA-led
                semiconductor hub is set to position India as a leader in chip
                manufacturing.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
