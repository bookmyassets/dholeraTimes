"use client";
import Image from "next/image";
import hero from "@/assets/image.png";
import dsir from "@/assets/dsir.png";
import { FaUser, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { useState } from "react";
import DholeraInvestmentGuide from "./components/Investment";
import FAQSection from "./components/Faq";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
  
    // Validate form data
    if (!formData.fullName || !formData.email || !formData.phone) {
      alert("Please fill in all fields");
      setIsLoading(false);
      return;
    }
  
    try {
      // API Request
      const response = await fetch("https://api.telecrm.in/enterprise/67a30ac2989f94384137c2ff/autoupdatelead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${process.env.NEXT_PUBLIC_TELECRM_API_KEY}` // Use environment variable
        },
        body: JSON.stringify({
          fields: {
            name: formData.fullName,
            email: formData.email,
            phone: formData.phone,
          },
          source: "Dholera Times Website",
          tags: ["Dholera Investment", "Website Lead"]
        }),
      });
  
      // Store response text before parsing
      const responseText = await response.text();
  
      // Check response status and handle accordingly
      if (response.ok) {
        // Check for specific success indicators
        if (responseText === "OK" || responseText.toLowerCase().includes("success")) {
          setFormData({ fullName: "", email: "", phone: "" });
          alert("Thank you! We'll contact you soon.");
        } else {
          // Try parsing as JSON if it's not a simple text response
          let result;
          try {
            result = JSON.parse(responseText);
            console.log("Parsed Response:", result);
          } catch {
            console.log("Response Text:", responseText);
          }
        }
      } else {
        // Handle error responses
        console.error("Server Error:", responseText);
        throw new Error(responseText || "Submission failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert(`Error submitting form: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <>
      <main className="w-full -z-10 h-full pt-4">
        <div className="relative flex w-full h-[80vh]">
          {/* Hero Image */}
          <div className="absolute inset-0">
            <Image
              src={hero}
              alt="hero image"
              className="w-full h-[80vh]  object-cover max-sm:justify-start"
            />
            <div className="absolute inset-0 "></div> {/* Dark Overlay */}
          </div>

          {/* Form Container */}
          <div className="relative  flex w-full items-center justify-end pr-40 max-md:justify-center max-md:pr-0">
            <div className="bg-white/80 p-8 rounded-2xl shadow-xl w-[500px] max-md:w-[90%] border border-gray-300 backdrop-blur-md">
              <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
                Contact Us
              </h2>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Full Name Input */}
                <div className="relative flex items-center w-full">
                  <FaUser className="absolute left-4 text-gray-500" />
                  <input
                    name="fullName"
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full p-3 pl-12 rounded-lg border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                  />
                </div>

                {/* Email Input */}
                <div className="relative flex items-center w-full">
                  <FaEnvelope className="absolute left-4 text-gray-500" />
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Email"
                    className="w-full p-3 pl-12 rounded-lg border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                  />
                </div>

                {/* Phone Number Input */}
                <div className="relative flex items-center w-full">
                  <FaPhoneAlt className="absolute left-4 text-gray-500" />
                  <input
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="Phone Number"
                    className="w-full p-3 pl-12 rounded-lg border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full p-3 text-white rounded-lg font-medium shadow-md transition-all duration-300 
                    ${isLoading 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-blue-500 hover:bg-blue-600 hover:shadow-lg active:scale-95'
                    }`}
                >
                  {isLoading ? 'Submitting...' : 'Submit'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>

      <section>
        {/* DHOLERA SIR */}
        <div>
          <div className="text-center text-[#253559] text-5xl font-semibold pt-5">
            DHOLERA SIR
          </div>
          <div>
            <div className="max-w-screen-xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
              <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
                {/* Decorative top accent */}
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-500 to-green-400"></div>

                <div className="grid md:grid-cols-2 gap-8 p-8">
                  {/* Content section */}
                  <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-gray-900 leading-tight">
                      Dholera Smart City
                      <span className="block text-blue-600">
                        The Future of Gujarat
                      </span>
                    </h2>

                    <p className="text-lg leading-relaxed text-gray-700">
                      Dholera Smart City Gujarat is India's first planned smart
                      city, developing in the heart of the state of Gujarat
                      along the Delhi-Mumbai Industrial Corridor (DMIC). Dholera
                      Special Investment Region (SIR) is India's 95,000-crore
                      greenfield smart city project that has been declared as
                      the biggest project by Forbes Magazine. It is being called
                      an 'investment haven' for all real estate investors.{" "}
                      <strong className="text-gray-900">Dholera Times</strong>{" "}
                      is the most trusted real estate partner for investment
                      opportunities in the Dholera Smart City Gujarat.
                    </p>

                    <p className="text-lg leading-relaxed text-gray-700">
                      Dholera Special Investment Region (SIR) is a crucial step
                      towards
                      <strong className="text-gray-900"> New India</strong>, and
                      the government aims to complete it in 4 phases by 2042.
                      Once fully developed, smart city Dholera is expected to
                      become an industrial power centre and overtake Dubai and
                      China. The city has been meticulously planned to equip it
                      with facilities to foster exponential development in the
                      coming years. The mission is to make it a fully
                      self-sustaining city.
                    </p>

                    <div className="mt-8">
                      <a
                        href="#learn-more"
                        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 shadow-md transition duration-150 ease-in-out"
                      >
                        Explore Investment Opportunities
                      </a>
                    </div>
                  </div>

                  {/* Image section */}
                  <div className="relative h-96 md:h-auto overflow-hidden rounded-xl">
                    {/* Placeholder image - would be replaced with your actual image */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-green-300 opacity-20"></div>
                    <Image
                      src={dsir}
                      alt="Dholera Smart City Aerial View"
                      className="w-full h-full object-cover"
                    />

                    {/* Stats overlay */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                      <div className="grid grid-cols-3 gap-4 text-white">
                        <div className="text-center">
                          <div className="text-2xl font-bold">₹95,000 Cr</div>
                          <div className="text-sm">Investment</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold">920 km²</div>
                          <div className="text-sm">Development Area</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold">2042</div>
                          <div className="text-sm">Completion</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="relative bg-white rounded-xl shadow-lg overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 via-red-600 to-red-700"></div>

              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Dholera Smart City: Vision & Development
                </h2>
                <p className="text-gray-600 mb-6">
                  Explore the future of Gujarat's premier planned urban
                  development project
                </p>

                <div className="relative aspect-video w-full bg-gray-100 rounded-lg overflow-hidden">
                  {isLoading && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full border-4 border-gray-200 border-t-red-600 animate-spin"></div>
                    </div>
                  )}

                  <div className="relative z-10 w-full h-full">
                    <iframe
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/hNbWaEU1d_A?si=rXk2EQPRG65Q3VJ3"
                      title="Dholera Smart City: Vision & Development"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                      onLoad={() => setIsLoading(false)}
                    ></iframe>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                    #SmartCity
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                    #Gujarat
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
                    #Investment
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-orange-100 text-orange-800">
                    #Development
                  </span>
                </div>
              </div>

              <div className="bg-gray-50 px-6 py-4 flex justify-between items-center border-t border-gray-100">
                <div className="text-sm text-gray-500">
                  Presented by Dholera Times
                </div>
                <div className="flex space-x-4">
                  <button className="text-gray-500 hover:text-red-600 transition">
                    <span className="sr-only">Share</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                    </svg>
                  </button>
                  <button className="text-gray-500 hover:text-red-600 transition">
                    <span className="sr-only">Save</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <DholeraInvestmentGuide />
          <FAQSection />
        </div>
      </section>
    </>
  );
  };


