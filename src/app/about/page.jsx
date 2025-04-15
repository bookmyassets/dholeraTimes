"use client";

import Image from "next/image";
import React, { useState } from "react";
import hero from "@/assets/hero5.webp";
import TestimonialPagination from "../components/Testimonials";
import Link from "next/link";
export default function AboutUs() {
  const [activeTab, setActiveTab] = useState("CompanyProfile");

  const handleScroll = (id) => {
    setActiveTab(id);
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const buttonStyle = (id) =>
    `px-6 py-4 rounded-lg font-semibold transition-all duration-300 shadow ${
      activeTab === id
        ? "bg-[#d8b66d] text-white"
        : "bg-white text-gray-800 hover:bg-gray-100"
    }`;

  return (
    <>
      {/* Hero Section */}
      <div className="relative md:h-96 w-full h-[50vh] overflow-hidden">
        <Image
          src={hero}
          alt="Dholera Skyline"
          className="object-cover w-full h-[50vh]"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-6 py-10 ">
            <h1 className="text-5xl md:text-5xl font-bold text-white mb-2">
              About Us
            </h1>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <section className="py-12 bg-white">
        <div className="container max-w-5xl mx-auto px-4">
          <p className="text-center md:text-4xl font-semibold ">
            Your Trusted Partner in Dholera Smart City Real Estate
          </p>
        </div>
      </section>

      {/* Navigation Tabs */}
      <div className="sticky top-20 z-20 bg-white shadow-2xl py-4">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center gap-4 overflow-x-auto pb-2 flex-wrap md:flex-nowrap">
            <button
              className={buttonStyle("CompanyProfile")}
              onClick={() => handleScroll("CompanyProfile")}
              aria-label="Company Profile"
            >
              Company Profile
            </button>
            <button
              className={buttonStyle("Mission")}
              onClick={() => handleScroll("Mission")}
              aria-label="Our Mission"
            >
              Vision & Mission
            </button>
            <button
              className={buttonStyle("WhyChooseUs")}
              onClick={() => handleScroll("WhyChooseUs")}
              aria-label="Why Choose DholeraTimes"
            >
              Why Choose Us
            </button>
            <button
              className={buttonStyle("LocationAdvantage")}
              onClick={() => handleScroll("LocationAdvantage")}
              aria-label="Location Advantage"
            >
              Location Advantage
            </button>
            <button
              className={buttonStyle("InvestmentBenefits")}
              onClick={() => handleScroll("InvestmentBenefits")}
              aria-label="Investment Benefits"
            >
              Why Invest
            </button>
            <button
              className={buttonStyle("Testimonials")}
              onClick={() => handleScroll("Testimonials")}
              aria-label="Testimonials"
            >
              Customer Testimonial
            </button>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <section className="py-16 leading-relaxed bg-gray-50">
        {/* Company Profile Section */}
        <div id="CompanyProfile" className="container mx-auto px-4 mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center relative">
            <span className="relative after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:w-20 after:h-1 after:bg-[#d8b66d] after:-translate-x-1/2">
              Who We Are
            </span>
          </h2>
          <div className="flex flex-col text-lg md:flex-row items-center gap-12">
            <div className="md:w-1/2 order-2 md:order-1">
              <p className="text-gray-700 mb-4">
                At <strong>Dholera Times</strong>, we are your trusted real
                estate partners, helping you discover the best investment
                opportunities in the upcoming{" "}
                <strong>Dholera Smart City</strong> -- India's first planned
                smart city.
              </p>
              <p className="text-gray-700 mb-4">
                With deep roots in the region and a passion for smart real
                estate, we aim to make property buying simple, transparent, and
                rewarding.
              </p>
              <p className="text-gray-700 mb-4">
                With over{" "}
                <strong>8 years of real estate consulting experience</strong>,
                we specialize in guiding individual investors, NRIs, and
                professionals to make smart, secure investments in{" "}
                <strong>government-approved projects</strong>.
              </p>
              <p className="text-gray-700">
                <strong>DholeraTimes</strong> is a proud{" "}
                <strong>subsidiary of BMA</strong>, a reputed real estate group
                that primarily deals in{" "}
                <strong>Dholera Smart City development projects</strong>,
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

          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-6">What We Do</h3>
            <p className="text-gray-700 text-lg mb-4">
              We specialize in <strong>residential plots in Dholera SIR</strong>
              , offering end-to-end services including:
            </p>
            <ul className="space-y-4 text-lg">
              <li className="flex items-start">
                <span className="text-[#d8b66d] mr-2 text-xl">●</span>
                <span className="text-gray-700">
                  Site visits & personalized consultations
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
        <div id="Mission" className="container mx-auto px-4 mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center relative">
            <span className="relative after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:w-20 after:h-1 after:bg-[#d8b66d] after:-translate-x-1/2">
              Our Mission & Vision
            </span>
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-700 text-lg mb-8">
                Our mission is simple — to help you{" "}
                <strong>invest with confidence</strong> in one of India's
                fastest-growing smart cities. From verified land documents to
                on-ground project visits, we support you every step of the way.
              </p>

              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-700 text-lg">
                As Dholera transforms into a global smart city with world-class
                infrastructure, we envision a future where our clients grow
                alongside this development.
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
          className="container mx-auto px-4 py-16 mb-20 bg-gray-900 rounded-lg"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center relative">
            <span className="relative text-white after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:w-20 after:h-1 after:bg-[#d8b66d] after:-translate-x-1/2">
              Why Choose DholeraTimes
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-l-4 border-[#d8b66d]">
              <span className="text-[#d8b66d] mr-2 text-xl">●</span>
              <span className="text-white text-lg font-semibold">
                100% AUDA-Approved & Verified Projects
              </span>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-l-4 border-[#d8b66d]">
              <span className="text-[#d8b66d] mr-2 text-xl">●</span>
              <span className="text-white text-lg font-semibold">
                NA, NOC, Title Clear Project
              </span>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-l-4 border-[#d8b66d]">
              <span className="text-[#d8b66d] mr-2 text-xl">●</span>
              <span className="text-white text-lg font-semibold">
                Prime & Strategic Location
              </span>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-l-4 border-[#d8b66d]">
              <span className="text-[#d8b66d] mr-2 text-xl">●</span>
              <span className="text-white text-lg font-semibold">
                Re-sale Support Team
              </span>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-l-4 border-[#d8b66d]">
              <span className="text-[#d8b66d] mr-2 text-xl">●</span>
              <span className="text-white text-lg font-semibold">
                Dedicated On-Ground Team in Dholera
              </span>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-l-4 border-[#d8b66d]">
              <span className="text-[#d8b66d] mr-2 text-xl">●</span>
              <span className="text-white text-lg font-semibold">
                Personalized Guidance by Our Sales Experts
              </span>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-l-4 border-[#d8b66d]">
              <span className="text-[#d8b66d] mr-2 text-xl">●</span>
              <span className="text-white text-lg font-semibold">
                Free Site Visits & Plot Booking Support
              </span>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-l-4 border-[#d8b66d]">
              <span className="text-[#d8b66d] mr-2 text-xl">●</span>
              <span className="text-white text-lg font-semibold">
                Transparent Process with No Hidden Charges
              </span>
            </div>
          </div>

          <div className="bg-gray-800 p-8 rounded-lg">
            <h3 className="text-3xl font-bold text-[#d8b66d] text-center mb-8">
              Timely Project Deliveries with Proven Success
            </h3>
            <p className="text-gray-300 text-lg text-center mb-8">
              Investing with us in the Dholera project will not disappoint you,
              as we have delivered projects timely with guaranteed success.
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
        <div id="LocationAdvantage" className="container mx-auto px-4 mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center relative">
            <span className="relative after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:w-20 after:h-1 after:bg-[#d8b66d] after:-translate-x-1/2">
              Location Advantage
            </span>
          </h2>
          <div className="flex flex-col text-lg md:flex-row items-center gap-12">
            <div className="md:w-1/2 order-2 md:order-1">
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
        <div id="InvestmentBenefits" className="container mx-auto px-4 mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center relative">
            <span className="relative after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:w-20 after:h-1 after:bg-[#d8b66d] after:-translate-x-1/2">
              Benefits of Investing In Dholera Smart City
            </span>
          </h2>
          <p className="text-gray-700 text-lg text-center mb-12">
            Every bit of Gujarat's Dholera smart city has been planned
            meticulously with a futuristic vision. Its foundation stone was set
            by the then Prime Minister, Shri Manmohan Singh. Alongside being
            spread across an area of 920 sq.km., it will be developed such that
            it is highly self-sustaining.
          </p>

          <div className="space-y-12">
            {/* Benefit 1 */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-[#d8b66d]">
                Dholera Smart City - India's PM, Shri Narendra Modi's Dream
                Project
              </h3>
              <p className="text-gray-700 text-lg">
                For PM Modi, Dholera SIR is a dream project. Dholera SIR has the
                potential to redefine the country's urban and industrial
                landscape alongside setting a benchmark for all other cities not
                just pan-India but also globally. Dholera Smart City Gujarat is
                a symbol of PM Modi's ambitious vision for India's future.
                Modiji has taken a personal interest in the planning, investment
                and technological integration of the Dholera Smart City Gujarat
                project. Smart city Dholera is a key part of the government's
                'Make in India' initiative.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-[#d8b66d]">
                Strategic Location- Sea Port
              </h3>
              <p className="text-gray-700 text-lg">
                Dholera City Gujarat is located near the Gulf of Khambhat which
                gives it easy port access. This has skyrocketed its chances of
                becoming one of the largest trading and manufacturing hubs in
                the world in the near future. Alongside Ahmedabad, its closest
                cities include Surat, Vadodara, Rajkot, and Gandhinagar.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-[#d8b66d]">
                Intracity Connectivity - Dholera Metro Train
              </h3>
              <p className="text-gray-700 text-lg">
                Dholera SIR project is well-connected both internally and
                externally. The region is planned to include all modern
                transport facilities like black-top roads, metro rails, smart
                buses, and more. The high-speed metro rail lines planned
                throughout the region are expected to fast-track the city's
                daily commute.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-[#d8b66d]">
                Intercity Connectivity - Central Spine Road
              </h3>
              <p className="text-gray-700 text-lg">
                To speed up the connection between the smart city Dholera and
                Ahmedabad, the government has built a special 109 km long
                express highway, which is expected to be completed in the next
                three months. The central spine road, a six-lane expressway, is
                the first phase of a much larger project of the government.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-[#d8b66d]">
                Global Connectivity - Dholera International Airport
              </h3>
              <p className="text-gray-700 text-lg">
                Dholera Smart City Gujarat’s own international airport is also
                being developed and is expected to commence operations by
                December 2026. It will be equipped to handle cargo as well as
                passenger airplanes, both domestic and international.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-[#d8b66d]">
                Recognition as a Special Economic Zone (SEZ) and Employment
                Opportunities
              </h3>
              <p className="text-gray-700 text-lg">
                Developing the Delhi-Mumbai Industrial Corridor (DMIC) is
                India’s biggest project to be undertaken today. Dholera Smart
                City Gujarat has been declared as a Special Economic Zone (SEZ),
                meaning companies have been offered special benefits for setting
                up base here. Companies are being given special incentives
                including tax breaks, fast-track approval processes, and cheaper
                land leases. A special Administrative and Business Tower called
                the ABCD building has also been created for faster
                administrative processes. Companies like TATA and Vedanta have
                already marked their presence in this Gujarat smart city. TATA
                will set up their semiconductor manufacturing plant here which
                is expected to change the industry’s dynamics across the world.
                The Dholera City Gujarat is expected to generate more than 8
                lakh jobs.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-[#d8b66d]">
                World-class Civic Amenities
              </h3>
              <p className="text-gray-700 text-lg">
                Sustainable and cost-effective civic amenities will be an
                integral part of this smart city. While planning each amenity,
                inspiration has been taken from successful cities across the
                world like Singapore and Dubai. The Dholera smart city’s
                global-level infrastructure will include a central cooling
                system for the city which will eliminate the need for individual
                air conditioners.
                <br />
                To step closer towards a digital-first India, a city-wide wifi
                will be installed. The city will have an IoT-enabled smart
                infrastructure.
                <br />
                A one-stop administration app for all administrative needs has
                been planned exclusively for the Dholera Smart City Gujarat.
                <br />
                The detailed planning of the water system will ensure that there
                is never a water shortage in the area. All water supply,
                electrical, and other resource lines have been laid underground
                to ensure hassle-free operations on the ground.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-[#d8b66d]">
                India’s Largest Solar Power Project
              </h3>
              <p className="text-gray-700 text-lg">
                In the Dholera SIR project, a special focus has been laid on
                renewable energies. The construction of India’s largest solar
                project has already begun here, and it will boost not just the
                region’s sustainable power consumption but that of many regions
                around it. This 4,400 MegaWatt solar power plant is said to
                change how energy production will look in this region. Dholera
                smart city is a platinum-rated green city meaning sustainability
                and environment-friendliness will be an integral part of it.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-[#d8b66d]">
                Real Estate Plots
              </h3>
              <p className="text-gray-700 text-lg">
                Dholera Smart City Gujarat is systematically planned to include
                dedicated residential, commercial, and industrial zones. With
                such a solid plan, multiple global companies have already shown
                interest in setting up offices here, and Foreign Direct
                Investment (FDI) is expected to pour in, too. Dholera metro city
                residential plots are currently one of the top-ranked for
                investment purposes. Returns are expected to skyrocket in the
                next three years. From November 2022 to March 2024 alone, the
                land rates saw a 3X jump - a land appreciation every investor
                loves!
              </p>
            </div>

            {/* More benefits would follow the same pattern */}
          </div>
        </div>

        {/* Testimonial Section */}
        <div id="Testimonials">
          <TestimonialPagination />
        </div>

        {/* Contact Section */}
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center relative">
            <span className="relative after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:w-20 after:h-1 after:bg-[#d8b66d] after:-translate-x-1/2">
              Let's Connect
            </span>
          </h2>
          <p className="text-gray-700 text-center mb-8">
            Whether you're looking to buy your first plot, explore investment
            options, or simply want to understand how Dholera Smart City works —
            we're here to help.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/contact/inquiry" className="px-8 py-4 bg-[#d8b66d] text-white font-bold rounded-lg shadow-lg hover:bg-[#c6a55e] transition-colors">
              Contact Us
            </Link>
            <button className="px-8 py-4 bg-white text-[#d8b66d] font-bold rounded-lg shadow-lg border-2 border-[#d8b66d] hover:bg-gray-50 transition-colors">
              Book a Free Site Visit
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
