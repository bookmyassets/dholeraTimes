"use client";
import { useState } from "react";
import { FaUser, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function ChannelPartnerPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    type: "Individual",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setStatus({ type: "", message: "" });
  };

  const validateForm = () => {
    if (!formData.name || !formData.phone) {
      setStatus({
        type: "error",
        message: "Please fill in all required fields",
      });
      return false;
    }

    if (!/^\d{10,15}$/.test(formData.phone.replace(/\D/g, ""))) {
      setStatus({
        type: "error",
        message: "Please enter a valid phone number (10-15 digits)",
      });
      return false;
    }

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setStatus({
        type: "error",
        message: "Please enter a valid email address",
      });
      return false;
    }

    return true;
  };

  // Enhanced handleSubmit function with better error handling
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    if (!validateForm()) {
      setIsSubmitting(false);
      return;
    }

    try {
      // Prepare data for Google Sheets
      const timestamp = new Date().toISOString();
      const sheetData = {
        timestamp,
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        type: formData.type,
        message: formData.message,
        source: "Channel Partner Page",
      };

      console.log("Submitting data:", sheetData); // Debug log

      // Send to Google Sheets via API route
      const response = await fetch("/api/submit-channel-partner", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(sheetData),
      });

      console.log("Response status:", response.status); // Debug log
      console.log("Response ok:", response.ok); // Debug log

      // Get response text/json for better error handling
      let responseData;
      const contentType = response.headers.get("content-type");

      if (contentType && contentType.includes("application/json")) {
        responseData = await response.json();
      } else {
        responseData = { message: await response.text() };
      }

      console.log("Response data:", responseData); // Debug log

      if (!response.ok) {
        // Provide more specific error message
        const errorMessage =
          responseData?.message ||
          responseData?.error ||
          `Server error: ${response.status} ${response.statusText}`;
        throw new Error(errorMessage);
      }

      setSubmitSuccess(true);
      setStatus({
        type: "success",
        message: "Thank you for your interest! We'll contact you soon.",
      });

      // Reset form after successful submission
      setFormData({
        name: "",
        email: "",
        phone: "",
        type: "Individual",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);

      // More detailed error handling
      let errorMessage = "Something went wrong. Please try again later.";

      if (error.name === "TypeError" && error.message.includes("fetch")) {
        errorMessage = "Network error. Please check your internet connection.";
      } else if (error.message.includes("404")) {
        errorMessage = "API endpoint not found. Please contact support.";
      } else if (error.message.includes("500")) {
        errorMessage = "Server error. Please try again later.";
      } else if (error.message) {
        errorMessage = error.message;
      }

      setStatus({
        type: "error",
        message: errorMessage,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const breadcrumb = {
     "@context": "https://schema.org/", 
  "@type": "BreadcrumbList", 
  "itemListElement": [{
    "@type": "ListItem", 
    "position": 1, 
    "name": "Home",
    "item": "https://www.dholeratimes.com/"  
  },{
    "@type": "ListItem", 
    "position": 2, 
    "name": "Contact Us",
    "item": "https://www.dholeratimes.com/contact"  
  },{
    "@type": "ListItem", 
    "position": 3, 
    "name": "Channel Partner",
    "item": "https://www.dholeratimes.com/contact/channel-partner"  
  }]

  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <meta name="robots" content="index, dofollow"/>

        <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <title>Become a Channel Partner in Dholera – Dholera Times</title>
      <meta
        name="description"
        content="Join Dholera Times as a Channel Partner in Dholera Smart City. Earn high commissions, get full support & grow with India's first Greenfield Smart City."
      />

      <div
        className="relative h-[50vh] max-sm:h-[30vh] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')",
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-white text-4xl md:text-5xl font-bold">
            Channel Partner
          </h2>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <section className="mb-12 bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-3xl font-bold mb-6 text-center">
            How to become Channel partner of Dholera Times ?
          </h1>
          <p className="text-lg mb-6 text-center">
            Joining the Dholera Times as a Channel Partner is quick,
            straightforward, and beginner-friendly.
          </p>

          {!submitSuccess ? (
            <form
              onSubmit={handleSubmit}
              className="max-w-2xl mx-auto space-y-6"
            >
              <div className="relative">
                <FaUser className="absolute left-4 top-4 text-gray-500" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name *"
                  required
                  className="w-full p-4 pl-12 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                />
              </div>

              <div className="relative">
                <FaPhoneAlt className="absolute left-4 top-4 text-gray-500" />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone No. *"
                  required
                  className="w-full p-4 pl-12 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                />
              </div>

              <div className="relative">
                <FaEnvelope className="absolute left-4 top-4 text-gray-500" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email ID"
                  className="w-full p-4 pl-12 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                />
              </div>

              <div className="relative">
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  className="w-full p-4 pl-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                >
                  <option value="Individual">Individual</option>
                  <option value="Broker">Broker</option>
                  <option value="Agency">Agency</option>
                  <option value="NRI">NRI</option>
                </select>
              </div>

              <div className="relative">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message (Optional)"
                  rows="4"
                  className="w-full p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                ></textarea>
              </div>

              {status.type === "error" && (
                <div className="p-4 bg-red-50 text-red-700 rounded-lg">
                  {status.message}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 text-white font-bold rounded-lg transition ${
                  isSubmitting
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-[#d8b66d] hover:bg-[#c9a85d]"
                }`}
              >
                {isSubmitting ? "Submitting..." : "Submit Application"}
              </button>
            </form>
          ) : (
            <div className="max-w-xl mx-auto bg-green-50 rounded-lg p-8 text-center">
              <div className="w-20 h-20 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-10 h-10 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              </div>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Application Submitted Successfully!
              </h2>
              <p className="text-gray-600 mb-6">{status.message}</p>

              <button
                onClick={() => setSubmitSuccess(false)}
                className="px-6 py-3 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition"
              >
                Apply Again
              </button>
            </div>
          )}
        </section>

        {/* Why Partner with Us Section */}
        <section className="mb-12 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Why Partner with Us in Dholera?
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">
                Earn Big with High Commissions
              </h3>
              <p>
                Be part of a powerful real estate network and promote Dholera
                smart city — India's first greenfield smart city. We offer high
                commissions, simple process, and full support to help you grow
                your earnings.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">
                Strategic Location Advantage
              </h3>
              <p>
                Dholera is located along the Delhi–Mumbai Industrial Corridor.
                Its location makes it one of the most exciting spots for real
                estate growth in Gujarat & in India.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">
                Government-Driven Growth
              </h3>
              <p>
                Dholera Smart City that is being built with full support from
                the Government of India. It brings top infrastructure, planned
                zones, and future-ready amenities — perfect for long-term
                success.
              </p>
            </div>
          </div>
        </section>

        {/* Why Dholera Section */}
        <section className="mb-12 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-3xl font-bold mb-6 text-center">Why Dholera?</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">
                India's Smart City of the Future
              </h3>
              <p>
                Dholera smart city is designed with world-class infrastructure
                like an international airport, 8-lane expressways, and a planned
                metro network.
              </p>
            </div>

            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Massive Growth Ahead</h3>
              <p>
                As a key part of the DMIC project, Dholera offers one of the
                strongest strategic investments in Gujarat. The appreciation
                potential here is unmatched.
              </p>
            </div>

            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">
                Start Early. Grow Faster
              </h3>
              <p>
                Get in early while Dholera is still growing. Enjoy first-mover
                advantage and build strong returns for yourself and your
                clients.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-12 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Benefits of Partnering with Dholera Times
          </h2>
          <p className="text-lg mb-6 text-center">
            Working with Dholera Times is more than just a collaboration — it's
            a full estate partnership built on trust, growth, and results.
            Whether you're a first-time agent or a seasoned broker, our platform
            helps you earn without upfront cost or risk.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-yellow-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">
                High Commissions & Incentives
              </h3>
              <p>
                We reward your efforts with attractive commissions on every
                sale. More sales, more income.
              </p>
            </div>

            <div className="bg-yellow-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">
                All-Inclusive Sales Support
              </h3>
              <p>
                Get access to brochures, sales scripts and training sessions.
                Everything you need to close deals with confidence.
              </p>
            </div>

            <div className="bg-yellow-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">
                Zero Investment to Start
              </h3>
              <p>
                You don't need to pay anything to get started. No joining fee.
                No franchise cost. Just your time and our full backing.
              </p>
            </div>

            <div className="bg-yellow-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">
                Site Visits, Webinars & Events
              </h3>
              <p>
                We offer help with site visits in Dholera, online events with
                industry experts, and tools to keep you updated.
              </p>
            </div>

            <div className="bg-yellow-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">
                Grow Your Network Nationwide
              </h3>
              <p>Join a wide real estate network & grow your reach.</p>
            </div>
          </div>
        </section>

        {/* Who Can Join Section */}
        <section className="mb-12 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Who Can Join Dholera Times?
          </h2>
          <p className="text-lg mb-6 text-center">
            We welcome all motivated individuals and professionals who want to
            be part of the Dholera smart city success story. No matter your
            experience, we'll help you succeed.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">First-Time Agents</h3>
              <p>
                New to real estate? No problem. We'll help you start earning
                from premium properties in Dholera without pressure or heavy
                targets.
              </p>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">
                Real Estate Brokers & Agents
              </h3>
              <p>
                Add top-selling, AUDA-approved Dholera plots to your portfolio.
                Enjoy high commissions and fast-moving inventory.
              </p>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">
                NRIs & Remote Professionals
              </h3>
              <p>
                If you live abroad or outside Gujarat, our remote sales support
                allows you to earn from Dholera sales without being on-site.
              </p>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">
                Channel Sales Agencies & Consultants
              </h3>
              <p>
                Work with a reliable partner in the Gujarat smart city region.
                Get full back-end support and grow your reach faster.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-3xl font-bold mb-6 text-center">Testimonials</h2>
          <h3 className="text-xl font-semibold mb-6 text-center">
            What Our Partners Say
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <blockquote className="italic mb-4">
                "Dholera Times has truly boosted my real estate income. The high
                commissions and smooth process make it a great experience."
              </blockquote>
              <p className="font-bold">– Harpreet Singh, Chandigarh</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <blockquote className="italic mb-4">
                "Partnering on Dholera projects is a smart move. The location
                and government planning make selling easier. Plus, their team is
                always helpful."
              </blockquote>
              <p className="font-bold">– Kuldeep Ahuja, Delhi</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
