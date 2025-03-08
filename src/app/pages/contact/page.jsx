"use client";
import Image from "next/image";
import get from "@/assets/get.webp";
import {
  FaPhoneAlt,
  FaHeadset,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function ContactDetails() {
  const scrollToFooter = () => {
    document.getElementById("footer-form").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-gray-900 w-full py-16">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center text-white px-6 md:px-10">
        {/* Left Text Section */}
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold">Get in touch</h2>
          <p className="text-gray-300 mt-3">
            Want to get in touch? We'd love to hear from you. Here's how you can reach us.
          </p>
        </div>
        {/* Right Image Section */}
        <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
          <Image src={get} alt="Contact" width={400} height={300} className="rounded-lg" />
        </div>
      </div>

      {/* Contact Cards Section */}
      <div className="bg-white py-12 mt-10">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-6 md:px-10">
          {/* Talk to Sales */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col items-center text-center">
            <FaPhoneAlt className="text-blue-600 text-3xl mb-4" />
            <h3 className="text-lg font-semibold text-gray-800">Talk to Sales</h3>
            <p className="text-gray-600 mt-2">
              Interested in our services? Just pick up the phone to chat with a member of our sales team.
            </p>
          </div>

          {/* Contact Support */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col items-center text-center">
            <FaHeadset className="text-blue-600 text-3xl mb-4" />
            <h3 className="text-lg font-semibold text-gray-800">Contact Customer Support</h3>
            <p className="text-gray-600 mt-2">
              Need help? Our support team is here for you. Reach out anytime!
            </p>
          </div>
        </div>

        {/* Address Section */}
        <div className="mt-10 text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Head Office Address</h3>
          <div className="flex justify-center items-center space-x-4  text-gray-700">
            <FaMapMarkerAlt className="text-blue-600 text-3xl max-sm:hidden" />
            <p className="text-lg max-sm:p-3">620 JMD Megapolis, Sector-48, Sohna Road, Gurugram, India</p>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="mt-10 text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Follow Us</h3>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-blue-600 text-3xl hover:text-blue-800">
              <FaFacebook />
            </a>
            <a href="#" className="text-blue-400 text-3xl hover:text-blue-600">
              <FaTwitter />
            </a>
            <a href="#" className="text-pink-500 text-3xl hover:text-pink-700">
              <FaInstagram />
            </a>
            <a href="#" className="text-blue-700 text-3xl hover:text-blue-900">
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Scroll to Footer Button */}
        <div className="mt-10 text-center">
          <button
            onClick={scrollToFooter}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-800 transition"
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}
