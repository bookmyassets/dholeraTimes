import Image from "next/image";
import React from "react";
import banner from "@/assets/bulkLand/city-centre-bulk-land-desktop.webp";
import bannerMob from "@/assets/bulkLand/city-centre-bulk-land-mobile.webp";
import {
  ShoppingBag,
  Clapperboard,
  Building2,
  Landmark,
  Building,
  MapPin,
  Users,
  Star,
  Layers,
  Train,
   ArrowRight,
} from "lucide-react";
import residentialMap from "@/assets/bulkLand/city-centre-map.webp";
import Table from "./table";
import BulkLand from "../../components/BulkLandForm";
import { getCityCenterLinks, getResidentialLinks } from "../InterLink";



// Horizontal Scroll Design
const HorizontalScrollInterlink = ({ properties }) => {
  return (
    <div className="bg-gradient-to-r from-[#deae3c]/10 to-[#deae3c]/5 py-8 mb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Discover Other Investment Zones</h3>
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
                  <span className="text-[#deae3c] font-medium text-sm">Explore Zone</span>
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
  const relatedProperties = getCityCenterLinks();

  const cardStyle = `
    .golden-card {
      background-color: rgba(211, 179, 107, 0.1);
      transition: background-color 0.3s ease;
    }
    .golden-card:hover {
      background-color: rgba(211, 179, 107, 0.2);
    }
    .dark-card {
      background-color: rgba(21, 31, 40, 0.1);
      transition: background-color 0.3s ease;
    }
    .dark-card:hover {
      background-color: rgba(21, 31, 40, 0.2);
    }
  `;

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
              CITY CENTRE ZONE
            </h1>
            <p className="text-white text-lg font-light tracking-wider">
              Where Opportunities Multiply
            </p>
          </div>
        </div>

        {/* Bottom Info Card */}
      </div>
      <div className=" w-full  z-10" >
        <div className="p-4 md:p-6 mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 text-center">
              <div className="flex flex-col items-center">
                <h3 className="text-gray-800 font-semibold text-xs md:text-sm mb-1">
                  Zone Area
                </h3>
                <p className="text-gray-700 text-sm md:text-lg font-medium">
                  1,678.045 Sq. Yards
                </p>
              </div>
              <div className="flex flex-col items-center">
                <h3 className="text-gray-800 font-semibold text-xs md:text-sm mb-1">
                  Key Permissions
                </h3>
                <p className="text-gray-700 text-sm md:text-lg font-medium">
                  Commercial & Hospitality Development
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
                The City Centre is the heartbeat of Dholera Smart City, blending
                commerce, governance, and culture. Planned for retail, hotels,
                corporate towers, and civic spaces, it is the most prestigious
                hub of Dholera Project.
              </p>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                With seamless connectivity to Dholera International Airport, the
                City Centre ensures maximum visibility, footfall, and
                global-standard facilities, making it a landmark destination of
                Dholera, Gujarat.
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

      <div className="max-w-6xl mx-auto pb-8 pt-12 p-4" >
        <p className="text-center text-3xl font-semibold mb-8">
          What's Allowed in City Centre Zones?
        </p>

        {/* Project Types Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Prime Central Location */}
        <div className="flex flex-col items-center text-center space-y-4 p-6 rounded-lg golden-card bg-gray-50  hover:bg-gray-100 ">
          <MapPin className="w-16 h-16" style={{ color: '#d3b36b' }} />
          <p className="text-lg font-medium" style={{ color: '#151f28' }}>
            Prime Central Location
          </p>
        </div>

        {/* High Footfall & Business Potential */}
        <div className="flex flex-col items-center text-center space-y-4 p-6 rounded-lg dark-card bg-gray-50  hover:bg-gray-100 ">
          <Users className="w-16 h-16" style={{ color: '#151f28' }} />
          <p className="text-lg font-medium" style={{ color: '#151f28' }}>
            High Footfall & Business Potential
          </p>
        </div>

        {/* Prestige & Landmark Value */}
        <div className="flex flex-col items-center text-center space-y-4 p-6 rounded-lg golden-card bg-gray-50  hover:bg-gray-100 ">
          <Star className="w-16 h-16" style={{ color: '#d3b36b' }} />
          <p className="text-lg font-medium" style={{ color: '#151f28' }}>
            Prestige & Landmark Value
          </p>
        </div>
      </div>

      <div className="md:flex justify-center items-center max-sm:space-y-4 md:space-x-8 pt-4">
        {/* Versatility of Development */}
        <div className="flex flex-col items-center text-center space-y-4 p-6 rounded-lg dark-card bg-gray-50  hover:bg-gray-100 ">
          <Layers className="w-16 h-16" style={{ color: '#151f28' }} />
          <p className="text-lg font-medium" style={{ color: '#151f28' }}>
            Versatility of Development
          </p>
        </div>

        {/* Seamless Connectivity */}
        <div className="flex flex-col items-center text-center space-y-4 p-6 rounded-lg golden-card bg-gray-50  hover:bg-gray-100">
          <Train className="w-16 h-16" style={{ color: '#d3b36b' }} />
          <p className="text-lg font-medium" style={{ color: '#151f28' }}>
            Seamless Connectivity
          </p>
        </div>
      </div>
      </div>

      <div className="max-w-6xl mx-auto p-4">
        {/* Benefits Grid */}
        <div>
          <p className="text-center text-3xl font-semibold mb-8">
           Why Invest in Dholera City Centre Zone?
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-4">
            {/* High Appreciation Potential */}
            <div className="flex flex-col items-center text-center space-y-4 p-6 bg-gray-50  hover:bg-gray-100 rounded-lg transition-colors">
              <ShoppingBag className="w-16 h-16 "style={{ color: '#d3b36b' }} />
              <p className="text-lg font-medium text-gray-800">
                Retail & Shopping Districts
              </p>
            </div>

            {/* Mixed-Use Flexibility */}
            <div className="flex flex-col items-center text-center space-y-4 p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <Clapperboard className="w-16 h-16 text-gray-800" />
              <p className="text-lg font-medium text-gray-800">
                Hospitality & Entertainment
              </p>
            </div>

            {/* Plug & Play Infrastructure */}
            <div className="flex flex-col items-center text-center space-y-4 p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <Building2 className="w-16 h-16 "style={{ color: '#d3b36b' }} />
              <p className="text-lg font-medium text-gray-800">
                Corporate & Administrative Offices
              </p>
            </div>

            
          </div>
        </div>
        <div className="md:flex justify-center items-center pt-4 max-sm:space-y-4 md:space-x-8">
          {/* Community-Centric Planning */}
            <div className="flex flex-col items-center text-center space-y-4 p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <Landmark className="w-16 h-16 text-gray-800" />
              <p className="text-lg font-medium text-gray-800">
                Cultural & Civic Spaces
              </p>
            </div>

            {/* Government-Backed Development */}
            <div className="flex flex-col items-center text-center space-y-4 p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <Building className="w-16 h-16 "style={{ color: '#d3b36b' }} />
              <p className="text-lg font-medium text-gray-800">
                Residential & Mixed-Use Living
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
