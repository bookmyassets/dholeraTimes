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
import ContactForm from "@/app/components/ContactForm";

export default function ContactDetails() {
  return (
    <div className="bg-gray-900 w-full py-16">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center text-white px-6 md:px-10">
        {/* Left Text Section */}
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold">Get in touch</h2>
          <p className="text-gray-300 mt-3">
            Want to get in touch? We'd love to hear from you. Here's how you can
            reach us.
          </p>
        </div>
        {/* Right Image Section */}
        <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
          <Image
            src={get}
            alt="Contact"
            width={400}
            height={300}
            className="rounded-lg"
          />
        </div>
      </div>

      {/* Contact Cards Section */}
      <div className="bg-white py-12 mt-10">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-6 md:px-10">
          {/* Talk to Sales */}
          <div>
            <a
              href="tel:+919958993549"
              className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col items-center text-center"
            >
              <FaPhoneAlt className="text-gray-800 text-3xl mb-4" />
              <h3 className="text-lg font-semibold text-gray-800">
                Talk to Sales
              </h3>
              <p className="text-gray-600 mt-2">
                Interested in our services? Just pick up the phone to chat with
                a member of our sales team.
              </p>
            </a>
          </div>

          {/* Contact Support */}
          <div>
            <a
              href="https://api.whatsapp.com/send?phone=919958993549"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col items-center text-center"
            >
              <FaHeadset className="text-gray-800 text-3xl mb-4" />
              <h3 className="text-lg font-semibold text-gray-800">
                Contact Customer Support
              </h3>
              <p className="text-gray-600 mt-2">
                Need help? Our support team is here for you. Reach out anytime!
              </p>
            </a>
          </div>
        </div>

        {/* Address Section */}

        {/* Social Media Links */}
        <div className="mt-10 ">
          {/* Why Choose Us & Contact Form */}
          <div className="flex flex-col md:flex-row justify-center items-center  gap-12 p-6">
            {/* Contact Info Section */}
            <div className="max-w-2xl space-y-2">
              <h3 className="font-bold text-xl">Our Contact Info</h3>
              <p>
                <strong>Phone no:</strong> +91 99589 93549
              </p>
              <p>
                <strong>Email ID:</strong> info@dholeratimes.com
              </p>
              <p>
                <strong>Address:</strong> 620, JMD Megapolis, Sector-48, Sohna
                Road, Gurugram - 122018, India
              </p>

              <h3 className="font-bold text-xl mt-4">Why Choose Us</h3>
              <p>
                <strong>Transparent Process:</strong> No hidden fees, no
                surprises — just honest real estate services.
              </p>
              <p>
                <strong>End-to-End Support:</strong> Our dedicated team provides
                complete assistance, from selecting plots to registration.
              </p>
              <p>
                <strong>Trusted by Investors:</strong> Join a growing community
                of satisfied investors benefiting from Dholera’s growth.
              </p>
            </div>

            {/* Contact Form Section */}
            <div className="mt-6 md:mt-0">
              <ContactForm />
            </div>
          </div>
          <div className="space-y-5 text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Follow Us
            </h3>
            <div className="flex justify-center space-x-6">
              <a
                href="https://www.facebook.com/dholeratimes"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 text-3xl hover:text-blue-800"
              >
                <FaFacebook />
              </a>
              <a
                href="https://x.com/dholeratimes"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 text-3xl hover:text-blue-600"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.instagram.com/dholeratimes/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 text-3xl hover:text-pink-700"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 text-3xl hover:text-blue-900"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

          <div className="mt-10 text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Head Office Address
            </h3>
            <div className="flex justify-center items-center space-x-4 text-gray-700">
              <FaMapMarkerAlt className="text-gray-800 text-3xl max-sm:hidden" />
              <p className="text-lg max-sm:p-3">
                620 JMD Megapolis, Sector-48, Sohna Road, Gurugram, India
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
