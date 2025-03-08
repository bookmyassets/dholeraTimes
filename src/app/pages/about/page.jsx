import React from "react";
import Image from "next/image";
import Link from "next/link";
import abt from "@/assets/abt.webp";

export default function AboutUs() {
  return (
    <div className="bg-gradient-to-b from-white to-gray-100">
      {/* Hero Section */}
      <div className="relative h-80 md:h-96 w-full overflow-hidden">
        <Image
          src={abt}
          alt="Dholera Skyline"
          className="object-cover w-full h-full brightness-75"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-6 py-10 bg-black bg-opacity-50 rounded-lg backdrop-blur-sm">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">About Dholera Times</h1>
            <p className="text-lg text-gray-200 max-w-xl">Pioneering India's First Smart City</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Vision Section */}
          <div className="order-2 md:order-1">
            <div className="border-l-4 border-black pl-6">
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-gray-700 mb-4">
                At Dholera Times, we don't just talk about real estate, we talk about the future.
              </p>
              <p className="text-gray-700 mb-4">
                As India's first smart city, Dholera is paving the way for a new era of urban development where modern infrastructure, seamless connectivity, and strategic planning converge to create a thriving economic and residential hub.
              </p>
              <p className="text-gray-700 mb-6">
                Our goal is to connect visionary investors with high-growth real estate opportunities, ensuring they benefit from the rapid development and appreciation of this emerging city.
              </p>
            </div>
          </div>

          {/* Image Card */}
          <div className="order-1 md:order-2 rounded-xl overflow-hidden shadow-2xl transform transition hover:scale-105 duration-300">
            <Image
              src={abt}
              alt="Dholera Smart City"
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-20 bg-black text-white p-10 rounded-xl shadow-xl">
          <h2 className="text-3xl font-bold mb-6 text-center">Our Mission</h2>
          <p className="text-lg mb-6 text-center max-w-4xl mx-auto">
            To empower investors with knowledge, insights, and opportunities that unlock the potential of Dholera Smart City.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            <div className="text-center p-6 bg-white bg-opacity-10 rounded-lg">
              <div className="text-5xl mb-4">🏙️</div>
              <h3 className="text-xl font-bold mb-2">Urban Innovation</h3>
              <p>Showcasing cutting-edge urban planning and smart infrastructure solutions.</p>
            </div>
            <div className="text-center p-6 bg-white bg-opacity-10 rounded-lg">
              <div className="text-5xl mb-4">💼</div>
              <h3 className="text-xl font-bold mb-2">Investment Expertise</h3>
              <p>Providing data-driven investment guidance tailored to each client's goals.</p>
            </div>
            <div className="text-center p-6 bg-white bg-opacity-10 rounded-lg">
              <div className="text-5xl mb-4">🌱</div>
              <h3 className="text-xl font-bold mb-2">Sustainable Growth</h3>
              <p>Promoting environmentally conscious development for long-term prosperity.</p>
            </div>
          </div>
        </div>

        {/* Team Section */}
       {/*  <div className="mt-20">
          <h2 className="text-3xl font-bold mb-10 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="h-48 bg-gray-300"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Team Member {item}</h3>
                  <p className="text-gray-600 text-sm mb-3">Position Title</p>
                  <p className="text-gray-700">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed nec justo vel magna fringilla venenatis.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div> */}

      
   

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Invest in the Future?</h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            Join us in shaping the future of urban development in India. Our experts are ready to guide you through investment opportunities in Dholera Smart City.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/pages/contact">
              <button className="bg-black text-white px-8 py-4 rounded-lg shadow-lg hover:bg-gray-800 transition-colors">
                Contact Our Team
              </button>
            </Link>
            <Link href="/pages/projects">
              <button className="bg-white text-black border-2 border-black px-8 py-4 rounded-lg shadow-lg hover:bg-gray-100 transition-colors">
                Explore Opportunities
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}