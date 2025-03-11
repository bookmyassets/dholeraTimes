import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";


const FeatureCard = ({ icon, title, content, index }) => {
  const [expanded, setExpanded] = useState(false);
  
  // Extract just the first sentence for preview
  const previewContent = content.split(".")[0] + ".";
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-gradient-to-br from-[#101730] to-[#0c1121] rounded-xl p-8 border border-[#2a3868] shadow-xl hover:shadow-2xl hover:border-yellow-400/50 transition-all duration-300 h-full flex flex-col"
    >
      <div className="text-yellow-400 mb-5 transform transition-transform duration-300 hover:scale-110">
        {icon}
      </div>
      
      <h3 className="text-2xl font-bold mb-4 text-white tracking-tight">{title}</h3>

      <div className="text-gray-300 text-md flex-grow">
        {/* Always show the preview */}
        <p className="font-medium">{previewContent}</p>

        {/* Content that's hidden initially */}
        <motion.div
          animate={{
            height: expanded ? "auto" : 0,
            opacity: expanded ? 1 : 0
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="mt-3 overflow-hidden"
        >
          <p>{content}</p>
        </motion.div>

        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-4 px-4 py-2 rounded-lg bg-yellow-400/10 text-yellow-400 hover:bg-yellow-400/20 text-sm font-medium flex items-center transition-all duration-300 group"
        >
          {expanded ? "Read Less" : "Read More"}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-y-1 ${
              expanded ? "rotate-180" : ""
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>
    </motion.div>
  );
};

const DholeraFeatures = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [filteredFeatures, setFilteredFeatures] = useState([]);
  
  const features = [
    {
      icon: (
        <div className="w-16 h-16 flex items-center justify-center rounded-full bg-yellow-400/20 shadow-lg shadow-yellow-400/10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            />
          </svg>
        </div>
      ),
      title: "Special Economic Zone",
      content:
        "Developing the Delhi-Mumbai Industrial Corridor (DMIC) is India's biggest project to be undertaken today. Dholera Smart City Gujarat has been declared as a Special Economic Zone (SEZ), meaning companies have been offered special benefits for setting up base here. Companies are being given special incentives including tax breaks, fast-track approval processes, and cheaper land leases. A special Administrative and Business Tower called the ABCD building has also been created for faster administrative processes. Companies like TATA and Vedanta have already marked their presence in this Gujarat smart city. TATA will set up their semiconductor manufacturing plant here which is expected to change the industry's dynamics across the world. The Dholera City Gujarat is expected to generate more than 8 lakh jobs.",
      category: "economy"
    },
    {
      icon: (
        <div className="w-16 h-16 flex items-center justify-center rounded-full bg-yellow-400/20 shadow-lg shadow-yellow-400/10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
        </div>
      ),
      title: "5000MW Solar Park",
      content:
        "In the Dholera SIR project, a special focus has been laid on renewable energies. The construction of India's largest solar project has already begun here, and it will boost not just the region's sustainable power consumption but that of many regions around it. This 4,400 MegaWatt solar power plant is said to change how energy production will look in this region. Dholera smart city is a platinum-rated green city meaning sustainability and environment-friendliness will be an integral part of it.",
      category: "sustainability"
    },
    {
      icon: (
        <div className="w-16 h-16 flex items-center justify-center rounded-full bg-yellow-400/20 shadow-lg shadow-yellow-400/10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
      ),
      title: "3X Investment Growth",
      content:
        "Dholera Smart City Gujarat is systematically planned to include dedicated residential, commercial, and industrial zones. With such a solid plan, multiple global companies have already shown interest in setting up offices here, and Foreign Direct Investment (FDI) is expected to pour in, too. Dholera metro city residential plots are currently one of the top-ranked for investment purposes Returns are expected to skyrocket in the next three years. From November 2022 to March 2024 alone, the land rates saw a 3X jump - a land appreciation every investor loves!",
      category: "investment"
    },
    {
      icon: (
        <div className="w-16 h-16 flex items-center justify-center rounded-full bg-yellow-400/20 shadow-lg shadow-yellow-400/10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
        </div>
      ),
      title: "World-class Civic Amenities",
      content:
        "Sustainable and cost-effective civic amenities will be an integral part of this smart city. While planning each amenity, inspiration has been taken from successful cities across the world like Singapore and Dubai. The Dholera smart city's global-level infrastructure will include a central cooling system for the city which will eliminate the need for individual air conditioners. To step closer towards a digital-first India, a city-wide wifi will be installed. The city will have an IoT-enabled smart infrastructure. A one-stop administration app for all administrative needs has been planned exclusively for the Dholera Smart City Gujarat. The detailed planning of the water system will ensure that there is never a water shortage in the area. All water supply, electrical, and other resource lines have been laid underground to ensure hassle-free operations on the ground.",
      category: "infrastructure"
    },
  ];
  
  const tabs = [
    { id: "all", label: "All Features" },
    { id: "economy", label: "Economy" },
    { id: "sustainability", label: "Sustainability" },
    { id: "investment", label: "Investment" },
    { id: "infrastructure", label: "Infrastructure" }
  ];
  
  useEffect(() => {
    if (activeTab === "all") {
      setFilteredFeatures(features);
    } else {
      setFilteredFeatures(features.filter(feature => feature.category === activeTab));
    }
  }, [activeTab]);

  return (
    <section className="bg-gradient-to-b from-[#0a0e1f] to-[#141b38] text-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-yellow-500 mb-4">
            Key Features That Make Dholera a Prime Investment
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-300 to-yellow-500 mx-auto mt-4 rounded-full"></div>
          <p className="mt-6 text-gray-300 max-w-3xl mx-auto">
            Discover why Dholera is becoming one of India's most strategic investment opportunities, with world-class infrastructure and exceptional growth potential.
          </p>
        </motion.div>
        
        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center mb-12 gap-2">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-yellow-400 text-[#0a0e1f]"
                  : "bg-[#1e2747] text-white hover:bg-[#2a3868]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="grid w-full md:grid-cols-2 gap-8">
          {filteredFeatures.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              content={feature.content}
              index={index}
            />
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <Link
            href="/pages/projects" 
            className="inline-block px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full text-[#0a0e1f] font-bold hover:shadow-lg hover:shadow-yellow-400/20 transform transition-all duration-300 hover:scale-105"
          >
            Learn More About Dholera Projects
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default DholeraFeatures;