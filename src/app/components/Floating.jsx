import React from "react";
import { FaWhatsapp,  FaPhoneAlt } from "react-icons/fa";

export default function FloatingIcons() {
  return (
    <div className="fixed right-0 space-y-2 top-1/2 transform -translate-y-1/2 flex flex-col z-30">
      {/* Call Button */}
      <a href="tel:+919958993549" 
         className="bg-blue-600 text-white p-3 shadow-lg hover:bg-blue-700 transition">
        <FaPhoneAlt className=" size-5 md:size-7" />
      </a>

      {/* WhatsApp Button */}
      <a href="https://api.whatsapp.com/send?phone=919958993549" target="_blank" rel="noopener noreferrer"
         className="bg-green-500 text-white p-3 shadow-lg hover:bg-green-600 transition">
        <FaWhatsapp className=" size-5 md:size-7" />
      </a>
    </div>
  );
}
