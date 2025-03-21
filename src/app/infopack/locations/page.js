import React from "react";

const locations = [
  {
    name: "Orchid Township",
    coordinates: "22°21'50.2\"N 72°11'18.8\"E",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3689.7267443410783!2d72.1885556!3d22.363944399999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjLCsDIxJzUwLjIiTiA3MsKwMTEnMTguOCJF!5e0!3m2!1sen!2sin!4v1742204914354!5m2!1sen!2sin",
    link: "https://maps.app.goo.gl/WkCLTWstRABSY6jA7?g_st=iw",
  },
  {
    name: "Dholera International Airport",
    coordinates: "22°31'50.2\"N 72°02'18.8\"E",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57812.81960503426!2d72.29363084274443!3d22.343902600491873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395f210061a11ded%3A0xd9b68d7064988291!2sYashnand%20Engineers%20and%20Contractors%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1742205039372!5m2!1sen!2sin",
    link: "https://maps.app.goo.gl/zmuKb7sAwUt1cimp9",
  },
  {
    name: "TATA Semiconductor",
    coordinates: "22°41'50.2\"N 72°21'18.8\"E",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3693.300263675601!2d72.1980051!3d22.2286835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395f25005f33eaa3%3A0x15756b95b1ebde4a!2sTata%20Electronics%20Private%20Limited!5e0!3m2!1sen!2sin!4v1742205122068!5m2!1sen!2sin",
    link: "https://maps.app.goo.gl/j7QTwgdeFNBF4Fer9",
  },
];

export default function MultiMapComponent() {
  return (
    <div className="w-full max-w-7xl mx-auto space-y-3 px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="md:text-5xl font-bold text-4xl text-center p-5">DHOLERA LOCATIONS</h1>
        <p className="text-center md:text-xl md:font-medium font-semibold ">Know more about nearby landmarks and our project’s location on Google Maps</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pb-16 pt-16">
        {locations.map((location, index) => (
          <div
            key={index}
            className="bg-[#151f28] rounded-lg shadow-lg overflow-hidden"
          >
            <div className="p-4 border-b border-gray-200">
              <h2 className="text-xl text-center font-semibold text-[#f1cf86]">
                {location.name}
              </h2>
            </div>
            <div className="relative w-full">
              <div className="relative w-full aspect-video md:aspect-[16/9] lg:aspect-[21/9]">
                <iframe
                  src={location.mapSrc}
                  className="absolute top-0 left-0 w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={location.name}
                />
              </div>
            </div>
            <div className="p-4 bg-[#151f28] flex justify-center items-center">
              <a
                href={location.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-sm text-center font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Open in Google Maps
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
