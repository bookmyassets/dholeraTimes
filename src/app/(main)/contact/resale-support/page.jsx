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
} from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import ContactForm from "@/app/(main)/components/ContactForm";
import Resale from "../../components/Resale";
import resale from "@/assets/resale-support.webp"
import resaleD from "@/assets/ResaleDesktop.webp"

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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <title>Resale Support | Dholera Plot Buyback & Assistance
</title>
      <meta
        name="description"
        content="Get expert help for Dholera plot resale. We offer buyback, buyer matching & full support. Trusted by Indian & NRI investors. Contact us today."
      />
      <meta
        name="keywords"
        content="Dholera Plot Buyback ,Dholera Plot Resale Support & Assistance ,Expert Support for Resale ,Dholera Smart City Residential Plot Resale Support "
      />
      <div className="space-y-8">

      <section className="relative h-[50vh] max-sm:h-[30vh] flex items-center justify-center text-center bg-black">
        <div className="absolute inset-0">
          <Image
            src={get}
            alt="Site Visit"
            className="w-full h-[50vh] max-sm:h-[30vh] object-cover opacity-60"
          />
        </div>
        <div className="relative z-10 max-w-3xl text-white px-6">
          <p className="text-3xl md:text-5xl font-extrabold drop-shadow-lg mb-4">ReSale Support</p>
        </div>
      </section>


      <div className="text-center max-w-7xl mx-auto md:text-2xl text-xl p-8 font-semibold">
        <h1 className="text-3xl md:text-5xl font-extrabold drop-shadow-lg mb-8">
          Need Help with Resale? <br />  We're Here to Support You
        </h1>
        <p>
          We offer buyback & smooth & full resale support for our residential
          plots in Dholera smart city,we are committed to helping our investors
          get maximum value.
        </p>
        <div className="bg-white ">
          

          <div className="">
            <Resale
              title="Resale Support"
              headline="Fill the form below to book Resale support Assitance . Fields marked with * are mandatory."
              buttonName="Get Resale Assistance"
              />
          </div>

          <div>
            <div className="text-center text-xl md:text-3xl pt-8">
              <h2>How Our Resale Support Works</h2>
            </div>
            <Image
              src={resale}
              alt="re-sale"
              className="md:hidden"
              />
            <Image
              src={resaleD}
              alt="re-sale"
              className="max-sm:hidden"
              />
          </div>

          <div className="space-y-5  mb-5 text-center">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Follow Us
            </h2>
            <div className="flex justify-center space-x-6">
              <a
                href="https://www.facebook.com/profile.php?id=61573763438050"
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
          </div>
        </div>
      </div>
    </>
  );
}
