import Image from "next/image";
import React from "react";
import banner from "@/assets/bulkLand/knowledge-it-bulk-land-desktop.webp";
import bannerMob from "@/assets/bulkLand/knowledge-it-bulk-land-mobile.webp";
import {
  Cpu,
  FlaskConical,
  GraduationCap,
  Building2,
  Home,
  Lightbulb,
  Globe2,
  Server,
  TrendingUp,
  BrainCircuit,
  ArrowRight,
} from "lucide-react";
import residentialMap from "@/assets/bulkLand/knowledge-it-map.webp";
import Table from "./table";
import BulkLand from "../../components/BulkLandForm";
import { TbBuildingSkyscraper } from "react-icons/tb";
import { getKnowledgeITLinks, getResidentialLinks } from "../InterLink";

// Horizontal Scroll Design
const HorizontalScrollInterlink = ({ properties }) => {
  return (
    <div className="bg-gradient-to-r from-[#deae3c]/10 to-[#deae3c]/5 py-8 mb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">
            Discover Other Investment Zones
          </h3>
          <p className="text-gray-600">Swipe to explore more opportunities</p>
        </div>

        <div className="flex overflow-x-auto space-x-6 pb-4 scrollbar-hide">
          {properties.map((property) => (
            <a
              key={property.id}
              href={property.link}
              className="group flex-shrink-0 w-64 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-40 w-full rounded-t-xl overflow-hidden">
                <Image
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  fill
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3">
                  <h4 className="text-white font-semibold text-sm line-clamp-2">
                    {property.title}
                  </h4>
                </div>
              </div>
              <div className="p-4">
                <p className="text-gray-600 text-sm mb-3">{property.area}</p>
                <div className="flex items-center justify-between">
                  <span className="text-[#deae3c] font-medium text-sm">
                    Explore Zone
                  </span>
                  <ArrowRight className="w-4 h-4 text-[#deae3c] group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function page() {
  const relatedProperties = getKnowledgeITLinks();

  return (
    <>
      <title> Knowledge and IT Zone Dholera | Tech Investment Hub</title>
      <meta
        name="description"
        content="Dholera Smart City’s Knowledge & IT Zone offers bulk land for IT parks, R&D centres, and universities - positioned near Dholera International Airport."
      />
      <meta
        name="keywords"
        content="Dholera Smart City, Dholera Gujarat, Dholera International Airport, Dholera Project, Invest in Dholera"
      />

      <div className="relative h-[50vh] w-full ">
        {/* Banner Image */}
        <Image
          src={banner}
          alt="Knowledge and IT Zone"
          className="h-full w-full object-cover max-sm:hidden"
          fill
          priority
        />
        <Image
          src={bannerMob}
          alt="Knowledge and IT Zone"
          className="h-full w-full object-cover md:hidden"
          fill
          priority
        />

        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>

        {/* Main Title - Center */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-white text-4xl font-bold tracking-wide mb-2 md:mb-4">
              KNOWLEDGE AND IT ZONE
            </h1>
            <p className="text-white text-lg font-light tracking-wider">
              Where Opportunities Multiply
            </p>
          </div>
        </div>

        {/* Bottom Info Card */}
      </div>
      <div className=" w-full  z-10">
        <div className="p-4 md:p-6 mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 text-center">
              <div className="flex flex-col items-center">
                <h3 className="text-gray-800 font-semibold text-xs md:text-sm mb-1">
                  Zone Area
                </h3>
                <p className="text-gray-700 text-sm md:text-lg font-medium">
                  3,039.32 Sq. Yards
                </p>
              </div>
              <div className="flex flex-col items-center">
                <h3 className="text-gray-800 font-semibold text-xs md:text-sm mb-1">
                  Key Permissions
                </h3>
                <p className="text-gray-700 text-sm md:text-lg font-medium">
                  Commercial & Residential Development
                </p>
              </div>
              <div className="flex flex-col items-center">
                <h3 className="text-gray-800 font-semibold text-xs md:text-sm mb-1">
                  Future Growth
                </h3>
                <p className="text-gray-700 text-sm md:text-lg font-medium">
                  High ROI
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <HorizontalScrollInterlink properties={relatedProperties} />

      {/* Description Section */}
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <div>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
                The Knowledge and IT Zone is the innovation hub of Dholera Smart
                City, fostering research, learning, and tech enterprises.
                Designed for IT parks, universities, and startups, it
                strengthens Dholera digital economy.
              </p>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                Located near Dholera International Airport, it provides
                world-class infrastructure for IT firms, R&D labs, and
                educational institutions. This makes Dholera Gujarat a magnet
                for tech companies and talent.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <Image
                src={residentialMap}
                alt="residential Zone Dholera SIR land plots"
                className="w-full max-w-96 h-96 object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto pb-8 pt-12 p-4">
        <p className="text-center text-3xl font-semibold mb-8">
          What's Allowed in Knowledge and IT Zones?
        </p>

        {/* Project Types Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Retail & Commercial Services */}
          <div className="flex flex-col items-center text-center space-y-4 p-6 rounded-lg bg-gray-50  hover:bg-gray-100 transition-colors">
            <Lightbulb className="w-16 h-16 " style={{ color: "#d3b36b" }} />
            <p className="text-lg font-medium text-gray-800">
              Retail & Commercial Services
            </p>
          </div>

          {/* Hospitality & Food Services */}
          <div className="flex flex-col items-center text-center space-y-4 p-6 rounded-lg bg-gray-50  hover:bg-gray-100 transition-colors">
            <BrainCircuit className="w-16 h-16 text-gray-800 rotate-90" />
            <p className="text-lg font-medium text-gray-800">
              Innovation Ecosystem
            </p>
          </div>

          {/* Healthcare & Wellness */}
          <div className="flex flex-col items-center text-center space-y-4 p-6 rounded-lg bg-gray-50  hover:bg-gray-100 transition-colors">
            <Globe2 className="w-16 h-16 " style={{ color: "#d3b36b" }} />
            <p className="text-lg font-medium text-gray-800">
              Global Competitiveness
            </p>
          </div>
        </div>
        <div className="md:flex justify-center items-center pt-4 max-sm:space-y-4 md:space-x-8">
          {/* Education & Community Facilities */}
          <div className="flex flex-col items-center text-center space-y-4 p-6 rounded-lg bg-gray-50  hover:bg-gray-100 transition-colors">
            <TbBuildingSkyscraper className="w-16 h-16 text-gray-800" />
            <p className="text-lg font-medium text-gray-800">
              Modern Infrastructure
            </p>
          </div>

          {/* Residential & Housing Projects */}
          <div className="flex flex-col items-center text-center space-y-4 p-6 rounded-lg bg-gray-50  hover:bg-gray-100 transition-colors">
            <TrendingUp className="w-16 h-16 " style={{ color: "#d3b36b" }} />
            <p className="text-lg font-medium text-gray-800">
              Long-Term Value Growth
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-4">
        {/* Benefits Grid */}
        <div>
          <p className="text-center text-3xl font-semibold mb-8">
            Why Invest in Dholera Knowledge and IT Zones?
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-4">
            {/* High Appreciation Potential */}
            <div className="flex flex-col items-center text-center space-y-4 p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <Cpu className="w-16 h-16 " style={{ color: "#d3b36b" }} />
              <p className="text-lg font-medium text-gray-800">
                IT & Technology Parks
              </p>
            </div>

            {/* Mixed-Use Flexibility */}
            <div className="flex flex-col items-center text-center space-y-4 p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <FlaskConical className="w-16 h-16 text-gray-800" />
              <p className="text-lg font-medium text-gray-800">
                Research & Development Facilities
              </p>
            </div>

            {/* Plug & Play Infrastructure */}
            <div className=" flex flex-col items-center text-center space-y-4 p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <GraduationCap
                className="w-16 h-16 "
                style={{ color: "#d3b36b" }}
              />
              <p className="text-lg font-medium text-gray-800">
                Educational Institutions
              </p>
            </div>
          </div>
        </div>
        <div className="md:flex justify-center items-center pt-4 max-sm:space-y-4 md:space-x-8">
          {/* Community-Centric Planning */}
          <div className="flex flex-col items-center text-center space-y-4 p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
            <Building2 className="w-16 h-16 text-gray-800" />
            <p className="text-lg font-medium text-gray-800">
              Corporate & Office Spaces
            </p>
          </div>

          {/* Government-Backed Development */}
          <div className="flex flex-col items-center text-center space-y-4 p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
            <Home className="w-16 h-16 " style={{ color: "#d3b36b" }} />
            <p className="text-lg font-medium text-gray-800">
              Supporting Residential & Mixed-Use
            </p>
          </div>
        </div>
      </div>

      <div>
        <Table />
      </div>
      <BulkLand title="Knowledge & IT Zones Land Parcels Starting from Rs. 2 Cr Onwards" />
    </>
  );
}
