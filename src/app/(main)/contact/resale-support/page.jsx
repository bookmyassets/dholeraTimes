"use client";
import Image from "next/image";
import get from "@/assets/siteVisit.webp";
import {
  FaPhoneAlt,
  FaHeadset,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
  FaHandshake,
  FaShieldAlt,
  FaChartLine
} from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import ContactForm from "@/app/(main)/components/ContactForm";
import Resale from "../../components/Resale";
import resale from "@/assets/resale-support.webp"

export default function ContactDetails() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: "Dholera Times",
    image: "",
    "@id": "",
    url: "https://www.dholeratimes.com/",
    telephone: "+91 99589 93549",
    priceRange: "7Lac",
    address: {
      "@type": "PostalAddress",
      streetAddress: "JMD MEGAPOLIS, 620, Badshahpur Sohna Rd Hwy, Sector 48",
      addressLocality: "Gurugram",
      postalCode: "122018",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 28.4195542,
      longitude: 77.0386216,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "10:30",
      closes: "19:30",
    },
    sameAs: [
      "https://www.facebook.com/people/Dholera-Times",
      "https://x.com/dholeratimes/",
      "https://www.instagram.com/p/DJVtydWBCoK/",
      "https://www.youtube.com/@dholeratimes",
      "https://www.linkedin.com/company/dholera-times",
      "https://www.dholeratimes.com/",
    ],
  };

  const benefits = [
    {
      icon: <FaHandshake className="text-3xl text-blue-600" />,
      title: "Maximum Value",
      description: "We ensure you get the best market price for your property"
    },
    {
      icon: <FaShieldAlt className="text-3xl text-green-600" />,
      title: "Secure Transactions",
      description: "Safe and legally verified property transfers"
    },
    {
      icon: <FaChartLine className="text-3xl text-amber-600" />,
      title: "Market Expertise",
      description: "Benefit from our deep understanding of Dholera's real estate market"
    }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <title>Dholera Smart City Plot Resale Support | Hassle-free Transactions</title>
      <meta
        name="description"
        content="Get expert resale support for your Dholera Smart City plots. We help you get maximum value with secure, hassle-free transactions."
      />
      <meta
        name="keywords"
        content="Dholera plot resale, Dholera property resale, sell Dholera plot, Dholera resale support, Dholera investment exit"
      />
      
      {/* Hero Section */}
      <section className="relative h-[50vh] max-sm:h-[40vh] flex items-center justify-center text-center bg-black">
        <div className="absolute inset-0">
          <Image
            src={get}
            alt="Resale Support"
            className="w-full h-full object-cover opacity-60"
            priority
          />
        </div>
        <div className="relative z-10 max-w-4xl px-6 text-white">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">
            Dholera Plot Resale Support
          </h1>
          <p className="text-xl md:text-2xl font-medium mb-6 drop-shadow-md">
            Get maximum value for your investment with our expert resale assistance
          </p>
          <div className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg inline-block transition duration-300">
            Get Instant Assistance
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Introduction */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Smooth Resale Process for Your Dholera Plots
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto">
            We specialize in helping investors get the best value for their residential plots in Dholera Smart City. 
            Our dedicated resale support team ensures a hassle-free transaction process from start to finish.
          </p>
        </div>

        {/* Form and Benefits Section */}
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Form Section */}
          <div className="w-full lg:w-1/2 bg-white rounded-xl shadow-lg p-6 border border-gray-100">
            <Resale
              title="Request Resale Assistance"
              headline="Fill the form below and our resale specialist will contact you within 24 hours"
              buttonName="Submit Resale Request"
            />
          </div>

          {/* Benefits Section */}
          <div className="w-full lg:w-1/2">
            <div className="mb-10">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Why Choose Our Resale Service</h3>
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 mt-1">
                      {benefit.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-800">{benefit.title}</h4>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Process Section */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Our Simple Resale Process</h3>
              <ol className="space-y-4">
                <li className="flex items-start">
                  <span className="flex items-center justify-center w-8 h-8 bg-blue-100 text-blue-600 rounded-full mr-4 font-bold">1</span>
                  <span className="text-gray-700">Submit your plot details through the form</span>
                </li>
                <li className="flex items-start">
                  <span className="flex items-center justify-center w-8 h-8 bg-blue-100 text-blue-600 rounded-full mr-4 font-bold">2</span>
                  <span className="text-gray-700">Our expert evaluates your property</span>
                </li>
                <li className="flex items-start">
                  <span className="flex items-center justify-center w-8 h-8 bg-blue-100 text-blue-600 rounded-full mr-4 font-bold">3</span>
                  <span className="text-gray-700">We connect you with verified buyers</span>
                </li>
                <li className="flex items-start">
                  <span className="flex items-center justify-center w-8 h-8 bg-blue-100 text-blue-600 rounded-full mr-4 font-bold">4</span>
                  <span className="text-gray-700">Complete documentation & transfer</span>
                </li>
              </ol>
            </div>
          </div>
        </div>

        {/* Resale Image Section */}
        <div className="mt-16 rounded-xl overflow-hidden shadow-xl">
          <Image
            src={resale}
            alt="Dholera resale process"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Testimonial Section */}
        <div className="mt-16 bg-blue-50 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">What Our Clients Say</h3>
          <div className="max-w-3xl mx-auto">
            <blockquote className="text-lg italic text-gray-700 mb-4">
              "The Dholera Times team helped me sell my plot at 30% above market price. Their professional approach and wide network of buyers made the process extremely smooth."
            </blockquote>
            <div className="font-semibold text-gray-800">- Rajesh Kumar, Delhi</div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Need Immediate Assistance?</h3>
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-8">
            <div className="flex items-center justify-center space-x-2">
              <FaPhoneAlt className="text-blue-600" />
              <span className="text-gray-700">+91 99589 93549</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <CiMail className="text-blue-600" />
              <span className="text-gray-700">info@dholeratimes.com</span>
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-6">Connect With Us</h3>
          <div className="flex justify-center space-x-6">
            <a
              href="https://www.facebook.com/people/Dholera-Times"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 text-3xl hover:text-blue-800 transition"
            >
              <FaFacebook />
            </a>
            <a
              href="https://x.com/dholeratimes"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 text-3xl hover:text-blue-600 transition"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.instagram.com/p/DJVtydWBCoK/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 text-3xl hover:text-pink-700 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/company/dholera-times"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 text-3xl hover:text-blue-900 transition"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}