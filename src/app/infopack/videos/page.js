import { Play, ChevronRight, Info } from "lucide-react";
import Link from "next/link";
import bg from "@/assets/bg-image.webp";
import { FaMapMarkerAlt, FaVideo, FaBuilding } from "react-icons/fa";

const FixedNavigation = ({ currentPage = "home" }) => (
  <div className="fixed top-24 left-1/2 transform -translate-x-1/2 z-20 w-[95%] max-w-2xl">
    <div className="bg-white/95 backdrop-blur-lg rounded-2xl shadow-2xl border border-amber-200/50 px-3 py-3 md:px-6 md:py-4">
      <div className="flex items-center justify-center gap-2 md:gap-6">
        <Link
          href="/infopack/locations"
          className={`group flex items-center gap-2 px-3 py-2 md:px-4 md:py-2 rounded-xl transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105 hover:-translate-y-0.5 flex-1 md:flex-none justify-center border font-bold ${
            currentPage === "locations"
              ? "bg-gradient-to-br from-[#d3b36b] to-[#c4a55d] text-[#151f28] hover:shadow-[#d3b36b]/40 border-[#d3b36b]/40"
              : "bg-white text-gray-600 hover:bg-gray-50 border-gray-300"
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
              : "bg-white text-gray-600 hover:bg-gray-50 border-gray-300"
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
              : "bg-white text-gray-600 hover:bg-gray-50 border-gray-300"
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

export default async function VideosPage() {
  
  const videos = [
    {
      id: "yePZG0VDfjw?si=YE2H9KAmrQkqpvZ_",
      title: "India's First GreenField Smart City Dholera",
      duration: "3:37",
    },
    {
      id: "-3i9B9TQDUE?si=lNZn6PQNflBbTPYk",
      title: "Ahmedabad to Dholera in 45 Mins!",
      duration: "1:08",
    },
    {
      id: "-Jotm3dCha8?si=iOdBxOFGfVFQIonX",
      title: "Dholera Water Treatment Plant",
      duration: "0:51",
    },
    {
      id: "bUK2zLXUDkA?si=AONjVcYWG33EZUzA",
      title: "TATA’s ₹91,000 Cr. Semiconductor Revolution Begins!",
      duration: "1:11",
    },
    {
      id: "7g8QWTgK9Ro?si=lNnCg8IU9na-HW0T",
      title: "Dholera Now: WestWyn County",
      duration: "0:52",
    },
    {
      id: "PbkWAirTEnk?si=gwo9R8Zvfgw3gmLe",
      title: "Dholera Activation Area",
      duration: "0:48",
    },
  ];

  if (videos.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-gray-100 flex items-center justify-center px-4 py-16">
        <div className="max-w-md text-center bg-white p-10 rounded-xl shadow-xl">
          <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Info className="h-10 w-10 text-amber-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            No Videos Available
          </h1>
          <p className="text-gray-600 mb-8">
            We couldn't find any videos at the moment. Please check back later.
          </p>
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#bc9849] to-[#d8b66d] text-white rounded-lg shadow hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div
      className="min-h-[87vh] bg-gradient-to-b from-blue-50 to-gray-100 py-16 pt-32 px-4 sm:px-6 lg:px-8"
      style={{
       
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <meta name="robots" content="noindex, dofollow"/>
<link rel="canonical" href="https://www.dholeratimes.com/infopack/videos" />
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 w-24 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>

          <p className=" text-lg font-semibold max-w-2xl mx-auto leading-relaxed">
            Watch expert insights on why investing in Dholera is a smart
            financial decision and learn about the city's development.
          </p>
        </div>

        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 lg:gap-8">
          {videos.map((video, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden shadow-lg bg-white border border-gray-100 group hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative">
                <div className="aspect-video relative overflow-hidden">
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title || `YouTube Video ${index + 1}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>

                {/* Duration badge */}
                {/*  {video.duration && (
                  <div className="absolute bottom-3 right-3 bg-black/70 text-white px-2 py-1 rounded text-xs font-medium">
                    {video.duration}
                  </div>
                )} */}
              </div>

              <div className="p-5">
                {video.title && (
                  <h3 className="text-lg font-bold text-gray-800 group-hover:text-[#d8b66d] transition-colors">
                    {video.title}
                  </h3>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Video playlist CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block w-16 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
          <p className="mt-4 text-sm text-gray-500">
            Subscribe to our channel for more videos about Dholera Smart City
          </p>
        </div>
      </div>
      <FixedNavigation currentPage="videos"/>
    </div>
  );
}
