import Image from "next/image";
import React from "react";
import banner from "@/assets/bulkLand/industrial-bulk-land-desktop.webp";
import bannerMob from "@/assets/bulkLand/industrial-bulk-land-mobile.webp";
import {
  Factory,
  Truck,
  Wrench,
  Zap,
  School,
  Network,
  Construction,
  Banknote,
  Ruler,
  Globe2,
} from "lucide-react";
import icon2 from "@/assets/svg/plug-and-plug-connection.svg";
import residentialMap from "@/assets/bulkLand/industrial-zone-map.webp";
import Table from "./table";
import BulkLand from "../../components/BulkLandForm";

export default function page() {
  return (
    <>
      <div className="relative h-[50vh] w-full ">
        {/* Banner Image */}
        <Image
          src={banner}
          alt="banner"
          className="h-full w-full object-cover max-sm:hidden"
          fill
          priority
        />
        <Image
          src={bannerMob}
          alt="banner"
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
              INDUSTRIAL ZONE
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
                  28,311.75 Sq. Yards
                </p>
              </div>
              <div className="flex flex-col items-center">
                <h3 className="text-gray-800 font-semibold text-xs md:text-sm mb-1">
                  Key Permissions
                </h3>
                <p className="text-gray-700 text-sm md:text-lg font-medium">
                  Industrial Development
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

      {/* Description Section */}
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <div>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
                The Industrial Zone in Dholera SIR is the backbone of Dholera
                Project, designed for large-scale factories, warehouses, and
                logistics. With connectivity to highways, ports, and Dholera
                International Airport, it attracts global companies.
              </p>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                Equipped with smart utilities, power, and logistics, this
                industrial hub positions Dholera Gujarat as a globally
                competitive manufacturing base.
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
          What's Allowed in Industrial Zones?
        </p>

        {/* Project Types Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Retail & Commercial Services */}
          <div className="flex flex-col items-center text-center space-y-4 p-6 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
            <Network className="w-16 h-16 text-blue-600" />
            <p className="text-lg font-medium text-gray-800">
              Strategic Connectivity
            </p>
          </div>

          {/* Hospitality & Food Services */}
          <div className="flex flex-col items-center text-center space-y-4 p-6 bg-red-50 rounded-lg hover:bg-red-100 transition-colors">
            <Image
              src={icon2}
              alt="Plug-and-Play Infrastructure"
              className="w-16 h-16 text-red-600"
            />
            <p className="text-lg font-medium text-gray-800">
              Plug-and-Play Infrastructure
            </p>
          </div>

          {/* Healthcare & Wellness */}
          <div className="flex flex-col items-center text-center space-y-4 p-6 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
            <Banknote className="w-16 h-16 text-green-600" />
            <p className="text-lg font-medium text-gray-800">
              High ROI & Incentives
            </p>
          </div>
        </div>
        <div className="md:flex justify-center items-center pt-4 max-sm:space-y-4 md:space-x-8">
          {/* Education & Community Facilities */}
          <div className="flex flex-col items-center text-center space-y-4 p-6 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
            <Ruler className="w-16 h-16 text-purple-600" />
            <p className="text-lg font-medium text-gray-800">
              Scalable Land Parcels
            </p>
          </div>

          {/* Residential & Housing Projects */}
          <div className="flex flex-col items-center text-center space-y-4 p-6 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors">
            <Globe2 className="w-16 h-16 text-orange-600" />
            <p className="text-lg font-medium text-gray-800">
              Global Investment Magnet
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-4">
        {/* Benefits Grid */}
        <div>
          <p className="text-center text-3xl font-semibold mb-8">
            Why Invest in Dholera Industrial Zones?
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-4">
            {/* High Appreciation Potential */}
            <div className="flex flex-col items-center text-center space-y-4 p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <Factory className="w-16 h-16 text-blue-600" />
              <p className="text-lg font-medium text-gray-800">
                Manufacturing & Heavy Industries
              </p>
            </div>

            {/* Mixed-Use Flexibility */}
            <div className="flex flex-col items-center text-center space-y-4 p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <Truck className="w-16 h-16 text-green-600" />
              <p className="text-lg font-medium text-gray-800">
                Warehousing & Logistics
              </p>
            </div>

            {/* Plug & Play Infrastructure */}
            <div className=" flex flex-col items-center text-center space-y-4 p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <Wrench className="w-16 h-16 text-purple-600" />
              <p className="text-lg font-medium text-gray-800">
                Light & Medium Industries
              </p>
            </div>
          </div>
        </div>
        <div className="md:flex justify-center items-center pt-4 max-sm:space-y-4 md:space-x-8">
          {/* Community-Centric Planning */}
          <div className="flex flex-col items-center text-center space-y-4 p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
            <Zap className="w-16 h-16 text-orange-600" />
            <p className="text-lg font-medium text-gray-800">
              Utilities & Support Services
            </p>
          </div>

          {/* Government-Backed Development */}
          <div className="flex flex-col items-center text-center space-y-4 p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
            <School className="w-16 h-16 text-red-600" />
            <p className="text-lg font-medium text-gray-800">
              Institutional & Ancillary Facilities
            </p>
          </div>
        </div>
      </div>

      <div>
        <Table />
      </div>
      <BulkLand title="Bulk Land Parcels Starting from Rs. 1.75 Cr." />
    </>
  );
}
