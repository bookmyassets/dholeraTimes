import Image from "next/image";
import React from "react";
import hero from "@/assets/hero5.webp";

export default function AboutUs() {

  return (
    <>
      <link rel="canonical" href="https://www.dholeratimes.com/about" />
      <meta name="robots" content="index, dofollow" />

      {/* Hero Section */}
      <div className="relative md:h-96 w-full h-[30vh] overflow-hidden">
        <Image
          src={hero}
          alt="Dholera Skyline"
          className="object-cover w-full h-[50vh]"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-6 py-10">
            <h1 className="text-5xl md:text-5xl font-bold text-white mb-2">
              About Us
            </h1>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <section className="py-12 bg-white">
        <div className="container max-w-5xl mx-auto px-6">
          <p className="text-center md:text-4xl text-2xl font-semibold">
            Your Real Estate Partner in
            <br /> Dholera Smart City
          </p>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-12 top-40 leading-relaxed bg-gray-50">
        {/* Company Profile Section */}
        <div id="CompanyProfile" className="container mx-auto px-6 mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center relative">
            <span className="relative after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:w-20 after:h-1 after:bg-[#d8b66d] after:-translate-x-1/2">
              Who We Are
            </span>
          </h2>
          <div className="flex flex-col text-lg md:flex-row items-center gap-12">
            <div className="md:w-1/2 order-2 md:order-1">
              <p className="text-gray-700 mb-4">
                At <strong>Dholera Times</strong>, we specialize in helping
                <strong> investors, NRIs, and professionals</strong> discover
                the best opportunities in <strong>Dholera Smart City</strong> —
                India's first planned greenfield smart city under the DMIC
                initiative.
              </p>
              <p className="text-gray-700 mb-4">
                With over{" "}
                <strong>
                  8 years of experience in Dholera real estate consulting
                </strong>
                , our team provides{" "}
                <strong>transparent, end-to-end services</strong> to make
                property buying simple, transparent, and rewarding.
              </p>
              <p className="text-gray-700 mb-4">
                We are your trusted real estate partners, helping you discover
                the best investment opportunities in{" "}
                <strong>verified, government-approved projects</strong>
                within Dholera Smart City by offering complete support from
                consultation to registration.
              </p>
              <p className="text-gray-700">
                <strong>DholeraTimes</strong> is a proud{" "}
                <strong>subsidiary of BMA</strong>, a reputed real estate group
                that primarily deals in
                <strong> Dholera Smart City development projects</strong>,
                ensuring trust, transparency, and timely service.
              </p>
            </div>
            <div className="md:w-1/2 order-1 md:order-2">
              <div className="rounded-lg overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300">
                <Image
                  src={hero}
                  alt="Dholera Smart City"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-2xl font-bold mb-4">What We Do</h3>
            <p className="text-gray-700 text-lg mb-4">
              We specialize in <strong>residential plots in Dholera SIR</strong>
              , offering comprehensive services including:
            </p>
            <ul className="space-y-4 text-lg">
              <li className="flex items-start">
                <span className="text-[#d8b66d] mr-2 text-xl">●</span>
                <span className="text-gray-700">
                  Free site visits & personalized consultation
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-[#d8b66d] mr-2 text-xl">●</span>
                <span className="text-gray-700">
                  Project selection guidance
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-[#d8b66d] mr-2 text-xl">●</span>
                <span className="text-gray-700">
                  Legal documentation & registration support
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-[#d8b66d] mr-2 text-xl">●</span>
                <span className="text-gray-700">
                  Regular updates on Dholera's infrastructure & development
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Mission Section */}
        <div id="Mission" className="container mx-auto px-6 mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center relative">
            <span className="relative after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:w-20 after:h-1 after:bg-[#d8b66d] after:-translate-x-1/2">
              Our Mission & Vision
            </span>
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-700 text-lg mb-8">
                To help individuals <strong>invest with confidence</strong> in
                <strong> verified, government-approved projects</strong> within
                Dholera Smart City by offering complete support from
                consultation to registration.
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="rounded-lg overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300">
                <Image
                  src={hero}
                  alt="Dholera Smart City Vision"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div
          id="WhyChooseUs"
          className="container mx-auto px-6 py-12 mb-8 bg-gray-900 rounded-lg"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center relative">
            <span className="relative text-white after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:w-20 after:h-1 after:bg-[#d8b66d] after:-translate-x-1/2">
              What Sets Us Apart
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-4">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-l-4 border-[#d8b66d]">
              <span className="text-[#d8b66d] mr-2 text-xl">●</span>
              <span className="text-white text-lg font-semibold">
                100% AUDA-approved, NA, NOC, and Title-Clear projects
              </span>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-l-4 border-[#d8b66d]">
              <span className="text-[#d8b66d] mr-2 text-xl">●</span>
              <span className="text-white text-lg font-semibold">
                Prime location plots near Dholera Airport, Expressway, and Metro
              </span>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-l-4 border-[#d8b66d]">
              <span className="text-[#d8b66d] mr-2 text-xl">●</span>
              <span className="text-white text-lg font-semibold">
                Dedicated on-ground team with resale & buyback assistance
              </span>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-l-4 border-[#d8b66d]">
              <span className="text-[#d8b66d] mr-2 text-xl">●</span>
              <span className="text-white text-lg font-semibold">
                No hidden charges, transparent process
              </span>
            </div>
          </div>

          <div className="bg-gray-800 p-8 rounded-lg">
            <h3 className="text-3xl font-bold text-[#d8b66d] text-center mb-8">
              Proven delivery track record with sold-out projects
            </h3>
            <p className="text-gray-300 text-lg text-center mb-8">
              Paradise, Pride, Marina, Maple & Orchid - delivered with
              guaranteed success.
            </p>
            <div className="flex flex-wrap text-lg justify-center gap-4">
              <div className="bg-gray-900 px-6 py-3 rounded-full border border-[#d8b66d] text-[#d8b66d] font-semibold hover:bg-[#d8b66d] hover:text-gray-900 transition-colors">
                Paradise 1 & 2
              </div>
              <div className="bg-gray-900 px-6 py-3 rounded-full border border-[#d8b66d] text-[#d8b66d] font-semibold hover:bg-[#d8b66d] hover:text-gray-900 transition-colors">
                Pride 1, 2, & 3
              </div>
              <div className="bg-gray-900 px-6 py-3 rounded-full border border-[#d8b66d] text-[#d8b66d] font-semibold hover:bg-[#d8b66d] hover:text-gray-900 transition-colors">
                Marina
              </div>
              <div className="bg-gray-900 px-6 py-3 rounded-full border border-[#d8b66d] text-[#d8b66d] font-semibold hover:bg-[#d8b66d] hover:text-gray-900 transition-colors">
                Maple
              </div>
              <div className="bg-gray-900 px-6 py-3 rounded-full border border-[#d8b66d] text-[#d8b66d] font-semibold hover:bg-[#d8b66d] hover:text-gray-900 transition-colors">
                Orchid
              </div>
            </div>
          </div>
        </div>

        {/* Location Advantage Section */}
        <div id="LocationAdvantage" className="container mx-auto px-6 mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center relative">
            <span className="relative after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:w-20 after:h-1 after:bg-[#d8b66d] after:-translate-x-1/2">
              Location Advantage
            </span>
          </h2>
          <div className="flex flex-col text-lg md:flex-row items-center gap-12">
            <div className="md:w-1/2 font-semibold order-2 md:order-1">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-[#d8b66d] mr-2 text-xl">●</span>
                  <span className="text-gray-700">
                    Near to Knowledge and IT Zone
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#d8b66d] mr-2 text-xl">●</span>
                  <span className="text-gray-700">
                    In The Vicinity of Dholera SIR
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#d8b66d] mr-2 text-xl">●</span>
                  <span className="text-gray-700">
                    Site Visit Assistance 365 Days
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#d8b66d] mr-2 text-xl">●</span>
                  <span className="text-gray-700">On Government Road</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#d8b66d] mr-2 text-xl">●</span>
                  <span className="text-gray-700">
                    Near to Dholera International Airport
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#d8b66d] mr-2 text-xl">●</span>
                  <span className="text-gray-700">
                    NA, NOC, Title Clear Project With Plan-pass
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#d8b66d] mr-2 text-xl">●</span>
                  <span className="text-gray-700">
                    Very near metro and Expressway
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#d8b66d] mr-2 text-xl">●</span>
                  <span className="text-gray-700">
                    Immediate Sale deed Registration
                  </span>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2 order-1 md:order-2">
              <div className="rounded-lg overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300">
                <Image
                  src={hero}
                  alt="Dholera Location Map"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Investment Benefits Section */}
        <div id="InvestmentBenefits" className="container mx-auto px-6 mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center relative">
            <span className="relative after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:w-20 after:h-1 after:bg-[#d8b66d] after:-translate-x-1/2">
              Why Dholera Smart City?
            </span>
          </h2>
          <p className="text-gray-700 text-lg text-center mb-12">
            Dholera Smart City is a{" "}
            <strong>dream project of PM Narendra Modi</strong>, designed as a{" "}
            <strong>global manufacturing, trading, and living hub</strong>. With
            strong infrastructure, an international airport, metro & expressway
            connectivity, SEZ recognition, and India's largest solar power
            plant, Dholera is set to generate over <strong>8 lakh jobs</strong>{" "}
            and attract massive global investment.
          </p>

          <div className="space-y-8">
            {/* Key Benefits */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-[#d8b66d]">
                PM Modi's Dream Project & Global Investment Hub
              </h3>
              <p className="text-gray-700 text-lg">
                Dholera Smart City is a key part of the government's 'Make in
                India' initiative, designed to redefine India's urban and
                industrial landscape. Companies like TATA and Vedanta have
                already marked their presence, with TATA setting up their
                semiconductor manufacturing plant here.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-[#d8b66d]">
                World-Class Infrastructure & Connectivity
              </h3>
              <p className="text-gray-700 text-lg">
                Strategic location near Gulf of Khambhat for port access,
                Dholera International Airport (operational by December 2026),
                metro rail connectivity, and a 109 km express highway connecting
                to Ahmedabad make it a perfect investment destination.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-[#d8b66d]">
                Special Economic Zone (SEZ) Benefits
              </h3>
              <p className="text-gray-700 text-lg">
                As a Special Economic Zone, companies get special incentives
                including tax breaks, fast-track approval processes, and cheaper
                land leases. This recognition attracts global companies and
                ensures rapid development.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
