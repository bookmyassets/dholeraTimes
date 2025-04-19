"use client";
import React, { useState } from "react";
import { FaUser, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import dMap from "@/assets/dholeraMap.webp";
import p2 from "@/assets/paradise2.webp";
import orchid from "@/assets/orchid.webp";
import Image from "next/image";
import Link from "next/link";

// TeleCRM Contact Form Component
function ContactForm({ title, buttonName, onClose }) {
  const [isLoading, setIsLoading] = useState(false);
  const [submissionCount, setSubmissionCount] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
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

    // Get submission count and last submission timestamp
    let submissionCount = localStorage.getItem("formSubmissionCount") || 0;
    let lastSubmissionTime = localStorage.getItem("lastSubmissionTime");

    // Check if 24 hours have passed since the last submission
    if (lastSubmissionTime) {
      const timeDifference = Date.now() - parseInt(lastSubmissionTime, 10);
      const hoursPassed = timeDifference / (1000 * 60 * 60); // Convert ms to hours

      if (hoursPassed >= 24) {
        // Reset submission count after 24 hours
        submissionCount = 0;
        localStorage.setItem("formSubmissionCount", 0);
        localStorage.setItem("lastSubmissionTime", Date.now().toString());
      }
    }

    // Restrict submission after 20 attempts
    if (submissionCount >= 20) {
      alert(
        "You have reached the maximum submission limit. Try again after 24 hours."
      );
      setIsLoading(false);
      setIsDisabled(true);
      return;
    }

    // Validate form data
    if (!formData.fullName || !formData.phone || !formData.email) {
      alert("Please fill in all fields");
      setIsLoading(false);
      return;
    }

    try {
      // API Request
      const response = await fetch(
        "https://api.telecrm.in/enterprise/67a30ac2989f94384137c2ff/autoupdatelead",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_TELECRM_API_KEY}`,
          },
          body: JSON.stringify({
            fields: {
              name: formData.fullName,
              phone: formData.phone,
              email: formData.email,
              source: "Dholera Times",
            },
            source: "Dholera Times Website",
            tags: ["Dholera Investment", "Website Lead"],
          }),
        }
      );

      // Store response text before parsing
      const responseText = await response.text();

      // Check response status and handle accordingly
      if (response.ok) {
        if (
          responseText === "OK" ||
          responseText.toLowerCase().includes("success")
        ) {
          setFormData({ fullName: "", email: "", phone: "" }); // Reset all form fields
          setShowPopup(true); // Show popup on success

          // Increment submission count & store time
          submissionCount++;
          setSubmissionCount(submissionCount);
          localStorage.setItem("formSubmissionCount", submissionCount);
          localStorage.setItem("lastSubmissionTime", Date.now().toString());
        } else {
          // Handle unexpected response
          console.log("Response Text:", responseText);
          alert("Submission received but with unexpected response");
        }
      } else {
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
    <div className="relative">
      <div className="bg-gradient-to-b from-[#151f28] to-[#1a2a3a] p-8 shadow-2xl w-full max-w-lg md:min-w-[600px] mx-auto border border-[#d7b36c] rounded-xl">
        <h2 className="text-3xl font-bold text-center text-[#d7b36c] mb-6">
          {title}
        </h2>
        {isDisabled ? (
          <p className="text-center text-red-500 font-semibold">
            You have reached the maximum submission limit. Try again after 24
            hours.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name Input */}
            <div className="relative">
              <FaUser className="absolute left-4 top-4 text-[#d7b36c]" />
              <input
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full p-4 pl-12 rounded-xl border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#d7b36c] focus:border-[#d7b36c] transition shadow-sm"
              />
            </div>

            {/* Email Input */}
            <div className="relative">
              <FaEnvelope className="absolute left-4 top-4 text-[#d7b36c]" />
              <input
                name="email"
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-4 pl-12 rounded-xl border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#d7b36c] focus:border-[#d7b36c] transition shadow-sm"
              />
            </div>

            {/* Phone Number Input */}
            <div className="relative">
              <FaPhoneAlt className="absolute left-4 top-4 text-[#d7b36c]" />
              <input
                name="phone"
                type="tel"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full p-4 pl-12 rounded-xl border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#d7b36c] focus:border-[#d7b36c] transition shadow-sm"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading || isDisabled}
              className={`w-full p-4 text-white text-lg font-semibold rounded-xl shadow-md transition-all duration-300 ${
                isLoading || isDisabled
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-[#d7b36c] hover:bg-[#c9a45f] hover:shadow-lg active:scale-95"
              }`}
            >
              {isLoading ? "Submitting..." : buttonName}
            </button>
          </form>
        )}
      </div>

      {/* Success Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-[#151f28] p-8 rounded-xl max-w-md w-full shadow-lg border border-[#d7b36c]">
            <h3 className="text-2xl font-bold text-center text-[#d7b36c] mb-4">
              Thank You!
            </h3>
            <p className="text-center text-white mb-6">
              Your form has been submitted successfully. We'll get back to you
              soon.
            </p>
            <button
              onClick={() => setShowPopup(false)}
              className="w-full bg-[#d7b36c] hover:bg-[#c9a45f] text-[#151f28] font-semibold py-3 px-4 rounded-xl transition duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// Main Landing Page Component
export default function DholeraLandingPage() {
  const [email, setEmail] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="font-sans text-gray-800">
      {/* HERO SECTION - DHOLERA FOCUS */}
      <div className="bg-gradient-to-r from-[#151f28] to-[#1a2a3a] text-white py-16 relative">
        <div className="absolute inset-0 bg-[url('')] bg-cover opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row justify-center items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <div className="bg-[#d7b36c] text-[#151f28] text-sm font-bold py-1 px-3 rounded-full inline-block mb-4">
                LIMITED PLOTS AVAILABLE
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Invest in India's First Smart City
              </h1>
              <h2 className="text-xl md:text-2xl mb-6">
                Secure premium plots in Dholera SIR before prices surge -
                projected 5x growth by 2030
              </h2>
              <div className="flex flex-col sm:flex-row gap-4">
                
                <Link href="/infopack/videos" className="bg-transparent border-2 border-white text-white font-bold py-3 px-6 rounded shadow-lg hover:bg-white hover:text-[#151f28] transition cursor-pointer">
                  Watch Project Video
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <ContactForm
                title="Reserve Your Plot Today"
                buttonName="GET PLOT DETAILS NOW"
              />
            </div>
          </div>
        </div>
      </div>

      {/* WHY DHOLERA SECTION */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#151f28]">
            Why Dholera SIR is India's #1 Investment Destination
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition border-t-4 border-[#d7b36c]">
              <div className="text-[#d7b36c] text-4xl mb-4">🏗️</div>
              <h3 className="text-xl font-bold mb-2 text-[#151f28]">
                Government-Backed Mega Project
              </h3>
              <p className="text-gray-600">
                ₹78,000 crore investment by DMIC - India's largest
                infrastructure project with special economic zone status.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition border-t-4 border-[#d7b36c]">
              <div className="text-[#d7b36c] text-4xl mb-4">📈</div>
              <h3 className="text-xl font-bold mb-2 text-[#151f28]">
                Proven Price Appreciation
              </h3>
              <p className="text-gray-600">
                Early investors saw 300-400% returns in Phase 1. Current Phase 2
                plots expected to multiply 5x by 2030.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition border-t-4 border-[#d7b36c]">
              <div className="text-[#d7b36c] text-4xl mb-4">🏙️</div>
              <h3 className="text-xl font-bold mb-2 text-[#151f28]">
                Next-Gen Smart City
              </h3>
              <p className="text-gray-600">
                World-class infrastructure including international airport,
                metro, solar parks, and industrial corridors.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* LOCATION MAP */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-6 text-[#151f28]">
                Strategic Location
              </h2>
              <ul className="space-y-4 text-lg">
                <li className="flex items-start">
                  <span className="text-[#d7b36c] mr-2">✓</span>
                  <span className="text-gray-700">
                    110km from Ahmedabad (90-min drive)
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#d7b36c] mr-2">✓</span>
                  <span className="text-gray-700">
                    Adjacent to Delhi-Mumbai Industrial Corridor
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#d7b36c] mr-2">✓</span>
                  <span className="text-gray-700">
                    Dholera International Airport (2025 completion)
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#d7b36c] mr-2">✓</span>
                  <span className="text-gray-700">
                    Direct access to Dedicated Freight Corridor
                  </span>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <div className="bg-gray-200 p-4 rounded-lg border border-[#d7b36c]">
                <Image
                  src={dMap}
                  alt="Dholera Strategic Location Map"
                  className="w-full h-auto rounded"
                />
                <p className="text-center text-sm mt-2 text-gray-600">
                  Dholera's connectivity to major industrial and transportation
                  hubs
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* INVESTMENT OPPORTUNITIES */}
      <div className="py-16 bg-gradient-to-b from-[#f8f9fa] to-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-[#151f28]">
            Current Investment Opportunities
          </h2>
          <p className="text-center mb-12 max-w-3xl mx-auto text-gray-600">
            Premium residential and commercial plots with clear titles in
            approved sectors
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Plot Card 1 */}
            <div className="bg-white border rounded-lg overflow-hidden hover:shadow-lg transition transform hover:-translate-y-1 border-t-4 border-[#d7b36c]">
              <div className="relative h-48 overflow-hidden">
              <Image
                  src={p2}
                  alt="Paradise 2"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-[#151f28] text-[#d7b36c] text-xs font-bold px-2 py-1 rounded">
                  SELLING FAST
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2 text-[#151f28]">
                  Paradise 
                </h3>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm bg-[#151f28] text-[#d7b36c] px-2 py-1 rounded">
                    Approved Layout
                  </span>
                </div>
                <ul className="mb-4 space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <span className="text-[#d7b36c] mr-2">✓</span>
                    <span>600-1200 sq.yd plots</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#d7b36c] mr-2">✓</span>
                    <span>Near proposed metro station</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#d7b36c] mr-2">✓</span>
                    <span>90% sold in Phase 1</span>
                  </li>
                </ul>
                <button className="w-full bg-[#151f28] text-[#d7b36c] py-2 rounded font-semibold hover:bg-[#1a2a3a] transition">
                  Check Availability
                </button>
              </div>
            </div>

            {/* Plot Card 2 */}
            <div className="bg-white border rounded-lg overflow-hidden hover:shadow-lg transition transform hover:-translate-y-1 border-t-4 border-[#d7b36c]">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={orchid}
                  alt="Commercial Plots - Sector 12"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-[#151f28] text-[#d7b36c] text-xs font-bold px-2 py-1 rounded">
                  BEST VALUE
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2 text-[#151f28]">
                  Orchid
                </h3>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm bg-[#151f28] text-[#d7b36c] px-2 py-1 rounded">
                    DTCP Approved
                  </span>
                </div>
                <ul className="mb-4 space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <span className="text-[#d7b36c] mr-2">✓</span>
                    <span>Future CBD location</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#d7b36c] mr-2">✓</span>
                    <span>200-500 sq.yd plots</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#d7b36c] mr-2">✓</span>
                    <span>Adjacent to proposed mall</span>
                  </li>
                </ul>
                <button className="w-full bg-[#151f28] text-[#d7b36c] py-2 rounded font-semibold hover:bg-[#1a2a3a] transition">
                  Check Availability
                </button>
              </div>
            </div>

            {/* Plot Card 3 */}
            <div className="bg-white border rounded-lg overflow-hidden hover:shadow-lg transition transform hover:-translate-y-1 border-t-4 border-[#d7b36c]">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={p2}
                  alt="Farmhouse Plots"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-[#151f28] text-[#d7b36c] text-xs font-bold px-2 py-1 rounded">
                  NEW RELEASE
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2 text-[#151f28]">
                  Paradise 2
                </h3>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm bg-[#151f28] text-[#d7b36c] px-2 py-1 rounded">
                    Green Zone
                  </span>
                </div>
                <ul className="mb-4 space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <span className="text-[#d7b36c] mr-2">✓</span>
                    <span>1-2 acre plots</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#d7b36c] mr-2">✓</span>
                    <span>Near proposed golf course</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#d7b36c] mr-2">✓</span>
                    <span>Water table at just 60ft</span>
                  </li>
                </ul>
                <button className="w-full bg-[#151f28] text-[#d7b36c] py-2 rounded font-semibold hover:bg-[#1a2a3a] transition">
                  Check Availability
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* TIMELINE & DEVELOPMENT */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#151f28]">
            Dholera Development Timeline
          </h2>
          <div className="relative">
            {/* Timeline bar */}
            <div className="hidden md:block absolute left-16 right-16 h-1 bg-[#d7b36c] top-1/2 transform -translate-y-1/2"></div>

            <div className="space-y-8 md:space-y-0">
              {/* Timeline Item 1 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/3 md:text-right md:pr-8 mb-4 md:mb-0">
                  <h3 className="text-xl font-bold text-[#151f28]">2011</h3>
                  <p className="text-gray-600">Project announced under DMIC</p>
                </div>
                <div className="md:w-1/6 flex justify-center">
                  <div className="w-8 h-8 rounded-full bg-[#d7b36c] border-4 border-white shadow flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
                <div className="md:w-1/3 md:text-left md:pl-8">
                  <h3 className="text-xl font-bold text-[#151f28]">
                    Phase 1 Launch
                  </h3>
                  <p className="text-gray-600">
                    Initial plots sold at ₹500-800/sq.yd
                  </p>
                </div>
              </div>

              {/* Timeline Item 2 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/3 md:text-right md:pr-8 mb-4 md:mb-0">
                  <h3 className="text-xl font-bold text-[#151f28]">2019</h3>
                  <p className="text-gray-600">Infrastructure work begins</p>
                </div>
                <div className="md:w-1/6 flex justify-center">
                  <div className="w-8 h-8 rounded-full bg-[#d7b36c] border-4 border-white shadow flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
                <div className="md:w-1/3 md:text-left md:pl-8">
                  <h3 className="text-xl font-bold text-[#151f28]">
                    Phase 1 Completion
                  </h3>
                  <p className="text-gray-600">Prices reach ₹2,500/sq.yd</p>
                </div>
              </div>

              {/* Timeline Item 3 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/3 md:text-right md:pr-8 mb-4 md:mb-0">
                  <h3 className="text-xl font-bold text-[#151f28]">2023</h3>
                  <p className="text-gray-600">Airport construction starts</p>
                </div>
                <div className="md:w-1/6 flex justify-center">
                  <div className="w-8 h-8 rounded-full bg-[#d7b36c] border-4 border-white shadow flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
                <div className="md:w-1/3 md:text-left md:pl-8">
                  <h3 className="text-xl font-bold text-[#151f28]">
                    Phase 2 Launch
                  </h3>
                  <p className="text-gray-600">
                    Current price ₹3,000-4,500/sq.yd
                  </p>
                </div>
              </div>

              {/* Timeline Item 4 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/3 md:text-right md:pr-8 mb-4 md:mb-0">
                  <h3 className="text-xl font-bold text-[#151f28]">2025-26</h3>
                  <p className="text-gray-600">Expected milestones</p>
                </div>
                <div className="md:w-1/6 flex justify-center">
                  <div className="w-8 h-8 rounded-full bg-[#d7b36c] border-4 border-white shadow flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
                <div className="md:w-1/3 md:text-left md:pl-8">
                  <h3 className="text-xl font-bold text-[#151f28]">
                    Airport Operational
                  </h3>
                  <p className="text-gray-600">
                    Projected prices ₹6,000+/sq.yd
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FINAL CTA */}
      <div className="bg-[#151f28] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Last Chance to Invest at Current Prices
          </h2>
          <p className="text-xl mb-8">
            Phase 2 plots are selling 30% faster than Phase 1. Secure your plot
            before the next price revision.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            {/* <button className="bg-[#d7b36c] text-[#151f28] text-xl font-bold py-4 px-8 rounded-lg shadow-lg hover:bg-[#c9a45f] transition">
              BOOK SITE VISIT
            </button> */}
            <Link href="https://wa.link/bvb3dt" className="bg-transparent border-2 border-white text-white text-xl font-bold py-4 px-8 rounded-lg hover:bg-white hover:text-[#151f28] transition">
              WHATSAPP FOR DETAILS
            </Link>
          </div>
          <p className="mt-6 text-[#d7b36c] font-medium">
            <span className="text-white">Limited offer:</span> Free legal
            verification & payment plan available for first 20 investors this
            month
          </p>
        </div>
      </div>
    </div>
  );
}
