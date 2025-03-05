import React from "react";
import { PhoneCall, MessageCircle } from "lucide-react"; // Icons from Lucide

export default function FloatingIcons() {
  return (
    <div className="fixed left-1 top-1/2 transform -translate-y-1/2 flex flex-col gap-4 z-50">
      {/* Call Button */}
      <a href="tel:+919958993549" 
         className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition">
        <PhoneCall size={24} />
      </a>

      {/* WhatsApp Button */}
      <a href="https://api.whatsapp.com/send?phone=919958993549" target="_blank" rel="noopener noreferrer"
         className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition">
        <MessageCircle size={24} />
      </a>
    </div>
  );
}
