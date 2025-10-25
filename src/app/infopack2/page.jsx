import {
  Users,
  Building,
  BadgeCheck,
  AreaChart,
  MapPin,
  Video,
  Home,
} from "lucide-react";
import bg from "@/assets/pexels.jpg";
import estate1 from "@/assets/residential/estate-hero.webp";
import county1 from "@/assets/residential/westwyn-county-banner.webp";
import Image from "next/image";
import Link from "next/link";
import { FaMapMarkerAlt, FaVideo, FaBuilding } from "react-icons/fa";
import LatestUpdates from "../components/Latest-updates";
import DholeraCarousel from "./gallery";

// Updated FixedNavigation component that accepts currentPage prop
const FixedNavigation = ({ currentPage = "home" }) => (
  <div className="fixed top-24 left-1/2 transform -translate-x-1/2 z-20 w-[95%] max-w-2xl">
    <div className="bg-white/95 backdrop-blur-lg rounded-2xl shadow-2xl border border-amber-200/50 px-3 py-3 md:px-6 md:py-4">
      <div className="flex items-center justify-center gap-2 md:gap-6">
        <Link
          href="/infopack/locations"
          className={`group flex items-center gap-2 px-3 py-2 md:px-4 md:py-2 rounded-xl transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105 hover:-translate-y-0.5 flex-1 md:flex-none justify-center border font-bold ${
            currentPage === "locations"
              ? "bg-gradient-to-br from-[#d3b36b] to-[#c4a55d] text-[#151f28] hover:shadow-[#d3b36b]/40 border-[#d3b36b]/40"
              : "bg-white hover:bg-gradient-to-br from-[#d3b36b] to-[#c4a55d] hover:text-[#151f28] text-gray-600 hover:bg-gray-50 border-gray-300"
          }`}
        >
          <FaMapMarkerAlt className="text-sm md:text-lg" />
          <span className="font-semibold text-sm md:text-base">Locations</span>
        </Link>

        <Link
          href="/infopack/videos"
          className={`group flex items-center gap-2 px-3 py-2 md:px-4 md:py-2 rounded-xl transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105 hover:-translate-y-0.5 flex-1 md:flex-none justify-center border font-bold ${
            currentPage === "videos"
              ? "bg-gradient-to-br from-[#d3b36b] to-[#c4a55d] text-[#151f28] hover:shadow-[#d3b36b]/40 border-[#d3b36b]/40"
              : "bg-white text-gray-600 hover:bg-gray-50 border-gray-300 hover:bg-gradient-to-br from-[#d3b36b] to-[#c4a55d] hover:text-[#151f28]"
          }`}
        >
          <FaVideo className="text-sm md:text-lg" />
          <span className="font-semibold text-sm md:text-base">Videos</span>
        </Link>

        <Link
          href="/infopack/inventory"
          className={`group flex items-center gap-2 px-2 py-2 md:px-4 md:py-2 rounded-xl transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105 hover:-translate-y-0.5 flex-1 md:flex-none justify-center border font-bold ${
            currentPage === "inventory"
              ? "bg-gradient-to-br from-[#d3b36b] to-[#c4a55d] text-[#151f28] hover:shadow-[#d3b36b]/40 border-[#d3b36b]/40"
              : "bg-white text-gray-600 hover:bg-gray-50 border-gray-300 hover:bg-gradient-to-br from-[#d3b36b] to-[#c4a55d] hover:text-[#151f28]"
          }`}
        >
          <FaBuilding className="text-sm md:text-lg" />
          <span className="font-semibold text-xs md:text-base whitespace-nowrap">
            Available Plots
          </span>
        </Link>
      </div>
    </div>
  </div>
);

const WhyDholeraGrowth = () => (
  <div className="bg-gradient-to-br from-[#151f28] via-[#1a2832] to-[#151f28] p-8 rounded-3xl shadow-2xl border-2 border-[#d3b36b]/40">
    <div className="text-center mb-8">
      <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
        Why Dholera is the
        <span className="text-[#d3b36b]">Future of India</span>
      </h2>
      <div className="h-1.5 w-40 bg-gradient-to-r from-transparent via-[#d3b36b] to-transparent mx-auto rounded-full" />
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
      <div className="space-y-6">
        <div className="group bg-white/95 p-6 rounded-xl shadow-lg hover:shadow-2xl hover:shadow-[#d3b36b]/20 transition-all duration-300 border border-[#d3b36b]/20 hover:border-[#d3b36b]/60 hover:scale-105">
          <h3 className="text-xl font-bold text-[#151f28] mb-4 group-hover:text-[#d3b36b] transition-colors">
            🚀 Infrastructure-First Planning
          </h3>
          <p className="text-gray-700">
            Roads, water, and ICT systems already operational in key zones.
          </p>
        </div>

        <div className="group bg-white/95 p-6 rounded-xl shadow-lg hover:shadow-2xl hover:shadow-[#d3b36b]/20 transition-all duration-300 border border-[#d3b36b]/20 hover:border-[#d3b36b]/60 hover:scale-105">
          <h3 className="text-xl font-bold text-[#151f28] mb-4 group-hover:text-[#d3b36b] transition-colors">
            💰 High ROI Zone
          </h3>
          <p className="text-gray-700">
            Early investors gaining value as infrastructure advances.
          </p>
        </div>

        <div className="group bg-white/95 p-6 rounded-xl shadow-lg hover:shadow-2xl hover:shadow-[#d3b36b]/20 transition-all duration-300 border border-[#d3b36b]/20 hover:border-[#d3b36b]/60 hover:scale-105">
          <h3 className="text-xl font-bold text-[#151f28] mb-4 group-hover:text-[#d3b36b] transition-colors">
            🏭 Industrial Magnet
          </h3>
          <p className="text-gray-700">
            Major players like TATA, Jabil, and Vedanta establishing operations
            nearby.
          </p>
        </div>
      </div>

      <div className="space-y-6">
        <div className="group bg-white/95 p-6 rounded-xl shadow-lg hover:shadow-2xl hover:shadow-[#d3b36b]/20 transition-all duration-300 border border-[#d3b36b]/20 hover:border-[#d3b36b]/60 hover:scale-105">
          <h3 className="text-xl font-bold text-[#151f28] mb-4 group-hover:text-[#d3b36b] transition-colors">
            🌆 Green & Sustainable
          </h3>
          <p className="text-gray-700">
            India’s largest planned solar park and eco-friendly smart grids.
          </p>
        </div>

        <div className="group bg-white/95 p-6 rounded-xl shadow-lg hover:shadow-2xl hover:shadow-[#d3b36b]/20 transition-all duration-300 border border-[#d3b36b]/20 hover:border-[#d3b36b]/60 hover:scale-105">
          <h3 className="text-xl font-bold text-[#151f28] mb-4 group-hover:text-[#d3b36b] transition-colors">
            🎯 Strategic Location
          </h3>
          <p className="text-gray-700">
            Positioned between Ahmedabad and Bhavnagar with rapid connectivity.
          </p>
        </div>

        <div className="group bg-white/95 p-6 rounded-xl shadow-lg hover:shadow-2xl hover:shadow-[#d3b36b]/20 transition-all duration-300 border border-[#d3b36b]/20 hover:border-[#d3b36b]/60 hover:scale-105">
          <h3 className="text-xl font-bold text-[#151f28] mb-4 group-hover:text-[#d3b36b] transition-colors">
            ✈️ Quality of Life
          </h3>
          <p className="text-gray-700">
            Designed for smart housing, healthcare, and educational
            institutions.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default function Page() {
  return (
    <div className="relative min-h-screen">
      {/* Background Image for entire page */}

      {/* Hero Section */}
      <div className="relative">
        {/* Content */}
        <div className="relative z-10 px-4 sm:px-6 lg:px-8 pt-32 ">
          <div className="max-w-7xl mx-auto">
            <div className="text-center space-y-6 mb-16">
              <div className="inline-block">
                <h1 className="text-3xl md:text-5xl font-black text-[#d3b36b] mb-4 tracking-tight">
                  Dholera: India’s Smart City Revolution
                </h1>
                <div className="h-2 bg-gradient-to-r from-transparent via-[#d3b36b] to-transparent rounded-full"></div>
              </div>

              <p className="text-[#d3b36b] text-2xl md:text-3xl font-bold tracking-wide">
                Dholera matlab{" "}
                <span className="text-[#151f28]">Dholera Times</span>
              </p>

              <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-6 md:p-8 border-2 border-[#d3b36b]/40 max-w-5xl mx-auto mt-8">
                <h3 className="text-2xl md:text-3xl font-bold text-[#151f28] mb-4 text-center">
                  The Vision of{" "}
                  <span className="text-[#d3b36b]">Dholera SIR</span>
                </h3>

                <p className="text-gray-700 leading-relaxed mb-6 text-center">
                  Dholera Special Investment Region is India's flagship smart
                  city spanning{" "}
                  <span className="font-bold text-[#d3b36b]">920 sq. km</span>,
                  developed under the Delhi-Mumbai Industrial Corridor (DMIC). A
                  self-sustained global hub combining advanced technology,
                  world-class infrastructure, and sustainable design - setting
                  the standard for future Indian cities.
                </p>

                <div className="bg-gradient-to-br from-[#151f28] to-[#1a2832] rounded-xl p-6 mb-4">
                  <h4 className="text-xl font-bold text-[#d3b36b] mb-4 text-center">
                    Dholera 2040
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white/10 rounded-lg p-4 border border-[#d3b36b]/30">
                      <div className="text-3xl mb-2 text-center">🏭</div>
                      <h5 className="font-bold text-[#d3b36b] text-sm mb-2 text-center">
                        Manufacturing Powerhouse
                      </h5>
                      <p className="text-white text-xs text-center">
                        Global hub for electronics, semiconductors, and defense
                      </p>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4 border border-[#d3b36b]/30">
                      <div className="text-3xl mb-2 text-center">✈️</div>
                      <h5 className="font-bold text-[#d3b36b] text-sm mb-2 text-center">
                        Connectivity Hub
                      </h5>
                      <p className="text-white text-xs text-center">
                        Airport, expressway, and seaport network
                      </p>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4 border border-[#d3b36b]/30">
                      <div className="text-3xl mb-2 text-center">💡</div>
                      <h5 className="font-bold text-[#d3b36b] text-sm mb-2 text-center">
                        Innovation Zone
                      </h5>
                      <p className="text-white text-xs text-center">
                        Magnet for startups, R&D, and clean-tech
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
              {[
                {
                  value: "7",
                  label: "Total No. of Projects",
                  icon: Building,
                },
                { value: "1000+", label: "Plots Sold Out", icon: BadgeCheck },
                { value: "400", label: "Happy Customers", icon: Users },
                { value: "5 Lakh", label: "Sq. Yards Sold", icon: AreaChart },
              ].map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    className="group bg-[#1a2832]/95 backdrop-blur-sm p-6 md:p-8 rounded-2xl text-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#d3b36b]/20 border-2 border-[#d3b36b]/30 hover:border-[#d3b36b]/60"
                  >
                    <div className="flex justify-center mb-4">
                      <div className="p-3 bg-[#d3b36b] rounded-xl group-hover:scale-110 transition-transform shadow-lg">
                        <Icon className="h-7 w-7 text-[#151f28]" />
                      </div>
                    </div>
                    <div className="text-3xl md:text-4xl font-bold text-[#d3b36b] mb-3">
                      {stat.value}
                    </div>
                    <div className="text-sm md:text-base text-gray-300 font-medium leading-snug">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Why Dholera Section */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto">
          <WhyDholeraGrowth />
        </div>
      </div>

      {/* Projects Grid Section */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-black text-[#d3b36b] mb-4">
              Our Projects
            </h2>
            <div className="h-1.5 w-40 bg-gradient-to-r from-transparent via-[#d3b36b] to-transparent mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            <Link
              href="/dholera-residential-plots/westwyn-estate"
              className="group block transform transition-all duration-300 hover:scale-105"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl border-2 border-[#d3b36b]/30 hover:border-[#d3b36b]/60">
                <Image
                  src={estate1}
                  alt="Westwyn Estate"
                  className="w-full h-52 object-contain md:object-cover md:h-72 group-hover:scale-110 transition-transform duration-300"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#d3b36b] mb-2">
                    WestWyn Estate - A Smart Investment for Smart Futures
                  </h3>
                  <p className="text-[#151f28]">
                    Located at the 0 KM mark of Dholera SIR, on the
                    Vadhela–Navda Highway, WestWyn Estate stands as a landmark
                    plotted community - offering ready-to-register,
                    NA/NOC-approved plots within the entry zone of India’s most
                    futuristic city.
                  </p>
                </div>
              </div>
            </Link>

            <Link
              href="/dholera-residential-plots/westwyn-county"
              className="group block transform transition-all duration-300 hover:scale-105"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl border-2 border-[#d3b36b]/30 hover:border-[#d3b36b]/60">
                <Image
                  src={county1}
                  alt="Westwyn County"
                  className="w-full h-52 object-contain md:object-cover md:h-72 group-hover:scale-110 transition-transform duration-300"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#d3b36b] mb-2">
                    WestWyn County - Premium Plots, Promising Returns
                  </h3>
                  <p className="text-[#151f28]">
                    WestWyn County is a premium plot located along the
                    Fedra–Pipli Highway in the Dholera region. The project
                    offers government-approved residential plots ranging from
                    150 sq. yds to 325 sq. yds, combining smart design,
                    connectivity, and long-term appreciation.
                  </p>
                </div>
              </div>
            </Link>
          </div>

          <section aria-labelledby="updates-heading" className="pt-8">
            <h2
              id="updates-heading"
              className="bg-[#d3b36b] text-gray-900 text-xl md:text-3xl lg:text-4xl text-center p-3 md:p-5 font-semibold mx-auto rounded-md"
            >
              Explore Latest Progress Around Dholera
            </h2>
            <LatestUpdates />
          </section>
        </div>
      </div>

      <div>
        <DholeraCarousel />
      </div>

      {/* Fixed Navigation - Moved to bottom */}
      <FixedNavigation />
    </div>
  );
}
