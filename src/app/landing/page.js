"use client"
import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

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
      <div className="bg-gradient-to-b from-blue-50 to-white p-8 shadow-2xl w-full max-w-lg md:min-w-[600px] mx-auto border border-gray-200 rounded-xl">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
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
              <FaUser className="absolute left-4 top-4 text-gray-500" />
              <input
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full p-4 pl-12 rounded-xl border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition shadow-sm"
              />
            </div>

            {/* Email Input */}
            <div className="relative">
              <FaEnvelope className="absolute left-4 top-4 text-gray-500" />
              <input
                name="email"
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-4 pl-12 rounded-xl border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition shadow-sm"
              />
            </div>

            {/* Phone Number Input */}
            <div className="relative">
              <FaPhoneAlt className="absolute left-4 top-4 text-gray-500" />
              <input
                name="phone"
                type="tel"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full p-4 pl-12 rounded-xl border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition shadow-sm"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading || isDisabled}
              className={`w-full p-4 text-white text-lg font-semibold rounded-xl shadow-md transition-all duration-300 ${
                isLoading || isDisabled
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-[#be9233] hover:bg-[#dbaf51] hover:shadow-lg active:scale-95"
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
          <div className="bg-white p-8 rounded-xl max-w-md w-full shadow-lg">
            <h3 className="text-2xl font-bold text-center text-gray-800 mb-4">
              Thank You!
            </h3>
            <p className="text-center text-gray-600 mb-6">
              Your form has been submitted successfully. We'll get back to you
              soon.
            </p>
            <button
              onClick={() => setShowPopup(false)}
              className="w-full bg-[#be9233] hover:bg-[#dbaf51] text-white font-semibold py-3 px-4 rounded-xl transition duration-300"
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
  const [email, setEmail] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="font-sans text-gray-800">
      {/* HERO SECTION - DHOLERA FOCUS */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-800 text-white py-16 relative">
        <div className="absolute inset-0 bg-[url('/dholera-cityscape.jpg')] bg-cover opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row justify-center items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <div className="bg-yellow-500 text-black text-sm font-bold py-1 px-3 rounded-full inline-block mb-4">
                LIMITED PLOTS AVAILABLE
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Invest in India's First Smart City</h1>
              <h2 className="text-xl md:text-2xl mb-6">Secure premium plots in Dholera SIR before prices surge - projected 5x growth by 2030</h2>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="bg-yellow-500 text-black font-bold py-3 px-6 rounded shadow-lg hover:bg-yellow-400 transition cursor-pointer">
                  Download Free Dholera Investment Guide
                </div>
                <div className="bg-transparent border-2 border-white text-white font-bold py-3 px-6 rounded shadow-lg hover:bg-white hover:text-blue-900 transition cursor-pointer">
                  Watch Project Video
                </div>
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
          <h2 className="text-3xl font-bold text-center mb-12">Why Dholera SIR is India's #1 Investment Destination</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="text-blue-600 text-4xl mb-4">🏗️</div>
              <h3 className="text-xl font-bold mb-2">Government-Backed Mega Project</h3>
              <p>₹78,000 crore investment by DMIC - India's largest infrastructure project with special economic zone status.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="text-blue-600 text-4xl mb-4">📈</div>
              <h3 className="text-xl font-bold mb-2">Proven Price Appreciation</h3>
              <p>Early investors saw 300-400% returns in Phase 1. Current Phase 2 plots expected to multiply 5x by 2030.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="text-blue-600 text-4xl mb-4">🏙️</div>
              <h3 className="text-xl font-bold mb-2">Next-Gen Smart City</h3>
              <p>World-class infrastructure including international airport, metro, solar parks, and industrial corridors.</p>
            </div>
          </div>
        </div>
      </div>

      {/* LOCATION MAP */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-6">Strategic Location</h2>
              <ul className="space-y-4 text-lg">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>110km from Ahmedabad (90-min drive)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Adjacent to Delhi-Mumbai Industrial Corridor</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Dholera International Airport (2025 completion)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Direct access to Dedicated Freight Corridor</span>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <div className="bg-gray-200 p-4 rounded-lg">
                <img 
                  src="/dholera-location-map.jpg" 
                  alt="Dholera Strategic Location Map" 
                  className="w-full h-auto rounded border border-gray-300"
                />
                <p className="text-center text-sm mt-2 text-gray-600">Dholera's connectivity to major industrial and transportation hubs</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* INVESTMENT OPPORTUNITIES */}
      <div className="py-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Current Investment Opportunities</h2>
          <p className="text-center mb-12 max-w-3xl mx-auto">Premium residential and commercial plots with clear titles in approved sectors</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Plot Card 1 */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition transform hover:-translate-y-1">
              <div className="relative h-48 bg-[url('/dholera-plot1.jpg')] bg-cover bg-center">
                <div className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
                  SELLING FAST
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">Residential Plots - Sector 6</h3>
                <div className="flex justify-between items-center mb-4">
                  <span className="font-bold text-blue-600">₹2,999/sq.yd</span>
                  <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">Approved Layout</span>
                </div>
                <ul className="mb-4 space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>600-1200 sq.yd plots</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Near proposed metro station</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>90% sold in Phase 1</span>
                  </li>
                </ul>
                <button className="w-full bg-blue-600 text-white py-2 rounded font-semibold hover:bg-blue-700 transition">
                  Check Availability
                </button>
              </div>
            </div>
            
            {/* Plot Card 2 */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition transform hover:-translate-y-1">
              <div className="relative h-48 bg-[url('/dholera-plot2.jpg')] bg-cover bg-center">
                <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">
                  BEST VALUE
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">Commercial Plots - Sector 12</h3>
                <div className="flex justify-between items-center mb-4">
                  <span className="font-bold text-blue-600">₹4,200/sq.yd</span>
                  <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">DTCP Approved</span>
                </div>
                <ul className="mb-4 space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Future CBD location</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>200-500 sq.yd plots</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Adjacent to proposed mall</span>
                  </li>
                </ul>
                <button className="w-full bg-blue-600 text-white py-2 rounded font-semibold hover:bg-blue-700 transition">
                  Check Availability
                </button>
              </div>
            </div>
            
            {/* Plot Card 3 */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition transform hover:-translate-y-1">
              <div className="relative h-48 bg-[url('/dholera-plot3.jpg')] bg-cover bg-center">
                <div className="absolute top-4 left-4 bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded">
                  NEW RELEASE
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">Farmhouse Plots - Sector 9</h3>
                <div className="flex justify-between items-center mb-4">
                  <span className="font-bold text-blue-600">₹1,799/sq.yd</span>
                  <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">Green Zone</span>
                </div>
                <ul className="mb-4 space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>1-2 acre plots</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Near proposed golf course</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Water table at just 60ft</span>
                  </li>
                </ul>
                <button className="w-full bg-blue-600 text-white py-2 rounded font-semibold hover:bg-blue-700 transition">
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
          <h2 className="text-3xl font-bold text-center mb-12">Dholera Development Timeline</h2>
          <div className="relative">
            {/* Timeline bar */}
            <div className="hidden md:block absolute left-16 right-16 h-1 bg-blue-200 top-1/2 transform -translate-y-1/2"></div>
            
            <div className="space-y-8 md:space-y-0">
              {/* Timeline Item 1 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/3 md:text-right md:pr-8 mb-4 md:mb-0">
                  <h3 className="text-xl font-bold">2011</h3>
                  <p className="text-gray-600">Project announced under DMIC</p>
                </div>
                <div className="md:w-1/6 flex justify-center">
                  <div className="w-8 h-8 rounded-full bg-blue-600 border-4 border-white shadow flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
                <div className="md:w-1/3 md:text-left md:pl-8">
                  <h3 className="text-xl font-bold">Phase 1 Launch</h3>
                  <p className="text-gray-600">Initial plots sold at ₹500-800/sq.yd</p>
                </div>
              </div>
              
              {/* Timeline Item 2 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/3 md:text-right md:pr-8 mb-4 md:mb-0">
                  <h3 className="text-xl font-bold">2019</h3>
                  <p className="text-gray-600">Infrastructure work begins</p>
                </div>
                <div className="md:w-1/6 flex justify-center">
                  <div className="w-8 h-8 rounded-full bg-blue-600 border-4 border-white shadow flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
                <div className="md:w-1/3 md:text-left md:pl-8">
                  <h3 className="text-xl font-bold">Phase 1 Completion</h3>
                  <p className="text-gray-600">Prices reach ₹2,500/sq.yd</p>
                </div>
              </div>
              
              {/* Timeline Item 3 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/3 md:text-right md:pr-8 mb-4 md:mb-0">
                  <h3 className="text-xl font-bold">2023</h3>
                  <p className="text-gray-600">Airport construction starts</p>
                </div>
                <div className="md:w-1/6 flex justify-center">
                  <div className="w-8 h-8 rounded-full bg-blue-600 border-4 border-white shadow flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
                <div className="md:w-1/3 md:text-left md:pl-8">
                  <h3 className="text-xl font-bold">Phase 2 Launch</h3>
                  <p className="text-gray-600">Current price ₹3,000-4,500/sq.yd</p>
                </div>
              </div>
              
              {/* Timeline Item 4 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/3 md:text-right md:pr-8 mb-4 md:mb-0">
                  <h3 className="text-xl font-bold">2025-26</h3>
                  <p className="text-gray-600">Expected milestones</p>
                </div>
                <div className="md:w-1/6 flex justify-center">
                  <div className="w-8 h-8 rounded-full bg-blue-600 border-4 border-white shadow flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
                <div className="md:w-1/3 md:text-left md:pl-8">
                  <h3 className="text-xl font-bold">Airport Operational</h3>
                  <p className="text-gray-600">Projected prices ₹6,000+/sq.yd</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FINAL CTA */}
      <div className="bg-blue-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Last Chance to Invest at Current Prices</h2>
          <p className="text-xl mb-8">Phase 2 plots are selling 30% faster than Phase 1. Secure your plot before the next price revision.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-yellow-500 text-black text-xl font-bold py-4 px-8 rounded-lg shadow-lg hover:bg-yellow-400 transition">
              BOOK SITE VISIT
            </button>
            <button className="bg-transparent border-2 border-white text-white text-xl font-bold py-4 px-8 rounded-lg hover:bg-white hover:text-blue-900 transition">
              WHATSAPP FOR DETAILS
            </button>
          </div>
          <p className="mt-6 text-yellow-300 font-medium">
            <span className="text-white">Limited offer:</span> Free legal verification & payment plan available for first 20 investors this month
          </p>
        </div>
      </div>
    </div>
  );
}