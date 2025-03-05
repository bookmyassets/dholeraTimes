import React from "react";
import abt from "@/assets/abt.webp"
import Image from "next/image";
import Link from "next/link";

export default function AboutUs() {
  return (
    <section className="max-w-5xl mx-auto my-16 px-6">
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Text Content */}
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="text-gray-700 mb-4">
            At Dholera Times, we don’t just talk about real estate, we talk about the future.
          </p>
          <p className="text-gray-700 mb-4">
            As India’s first smart city, Dholera is paving the way for a new era of urban development where modern infrastructure, seamless connectivity, and strategic planning converge to create a thriving economic and residential hub.
          </p>
          <p className="text-gray-700 mb-4">
            Our goal is to connect visionary investors with high-growth real estate opportunities, ensuring they benefit from the rapid development and appreciation of this emerging city.
          </p>
          <Link href="/pages/contact">
          <button className="bg-black text-white px-6 py-3 rounded-lg shadow-lg hover:bg-gray-800">
            Contact Us
          </button>
          </Link>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2">
          <Image
            src={abt} // Change to your image path
            alt="Dholera City"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
