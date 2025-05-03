import React from "react";
import { FaWhatsapp,  FaPhoneAlt } from "react-icons/fa";
import Whatsapp from "./Whatsapp";

export default function FloatingIcons() {
  return (
    <div className="">
      

      <Whatsapp/>
      <Whatsapp className="left-20"/>
    </div>
  );
}
