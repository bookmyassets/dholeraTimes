"use client";
import Image from "next/image";
import { useState } from "react";
import get from "@/assets/get.webp";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Validate form data
    if (!formData.fullName || !formData.phone) {
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
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_TELECRM_API_KEY}`, // Use environment variable
          },
          body: JSON.stringify({
            fields: {
              name: formData.fullName,

              phone: formData.phone,
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
        // Check for specific success indicators
        if (
          responseText === "OK" ||
          responseText.toLowerCase().includes("success")
        ) {
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
      <div className=" bg-gray-900 w-full">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center text-white p-10 rounded-lg">
          {/* Left Text Section */}
          <div className="md:w-1/2">
            <h2 className="text-3xl font-extrabold">Get in touch</h2>
            <p className="text-gray-300 mt-2">
              Want to get in touch? We'd love to hear from you. Here's how you
              can reach us.
            </p>
          </div>

          {/* Right Image Section */}
          <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center">
            <Image
              src={get}
              alt="Contact"
              className=""
              width={400}
              height={300}
            />
          </div>
        </div>
      </div>
      <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact Us</h2>

        {submitStatus.message && (
          <div
            className={`p-4 rounded-lg mb-6 ${
              submitStatus.type === "success"
                ? "bg-green-50 text-green-700"
                : "bg-red-50 text-red-700"
            }`}
          >
            {submitStatus.message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Your name"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Phone
            </label>
            <input
              type="phone"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="+91 1234567809"
            />
          </div>

          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              required
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Message subject"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Your message"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3 px-6 text-white font-medium rounded-lg 
            ${
              isSubmitting
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            } transition-colors duration-200`}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </>
  );
}
