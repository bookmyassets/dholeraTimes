import React from "react";
import Image from "next/image";
import whatsapp from "@/assets/whatsapp.svg";
import Link from "next/link";
import './whatsapp.css'

export default function Whatsapp() {
  return (
      <>
      <div className="max-w-7xl mx-auto">

    <div>
      <Link href="https://wa.link/bvb3dt">
        <div className="fixed bottom-5 right-5 z-10">
          <div className="relative h-20 w-20 rounded-full bg-white shadow-lg flex items-center justify-center">
            {/* Rotating Circular Text using SVG */}
            <svg className="absolute w-24 h-24 animate-spin-slow" viewBox="0 0 100 100">
              <defs>
                <path id="circlePath" d="M 50,50 m -30,0 a 30,30 0 1,1 60,0 a 30,30 0 1,1 -60,0" />
              </defs>
              <text fill="black" fontSize="12" fontWeight="bold">
                <textPath href="#circlePath" startOffset="50%" textAnchor="middle">
          {/*         Let's Connect &nbsp;  ●  We're Online ● */}
          We're Online Let's Connect
                </textPath>
              </text>
            </svg>

            {/* WhatsApp Icon */}
            <div className="absolute">
              <Image src={whatsapp} alt="WhatsApp" width={50} height={50} />
            </div>
          </div>
        </div>
      </Link>
    </div>
      </div>
      </>
  );
}
