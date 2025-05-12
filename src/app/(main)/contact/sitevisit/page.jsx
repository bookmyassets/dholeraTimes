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
      <title>Free Site Visit to Dholera Smart City – Book Now</title>
      <meta
        name="description"
        content="Book a free site visit to Dholera Smart City with expert guidance. Explore plots, project
insights, and investment opportunities on the ground. Limited slots!"
      />
      <section className="relative h-[50vh] max-sm:h-[30vh] flex items-center justify-center text-center bg-black">
        <div className="absolute inset-0">
          <Image
            src={get}
            alt="Site Visit"
            className="w-full h-[50vh] max-sm:h-[30vh] object-cover opacity-60"
          />
        </div>
        <div className="relative z-10 max-w-3xl text-white px-6">
          <h1 className="text-3xl md:text-5xl font-extrabold drop-shadow-lg mb-4">
            Book A Free Site Visit
          </h1>
        </div>
      </section>

      <div className="">
        <div className="bg-white ">
          <div className="flex flex-col md:flex-row justify-center items-center  gap-16 p-6">
            {/* Contact Info Section */}

            <div className="">
              <ContactForm title="Book A Free Site Visit" headline="" buttonName="Submit" />
            </div>

            <div className="max-w-2xl text-left">
              <div className="space-y-8">
                <div>
                  <h2 className="font-bold text-4xl text-[#2863e5]">
                    Head Office{" "}
                  </h2>
                  <h3 className="font-bold text-2xl">Dholera Times </h3>
                  <div className=" mt-4 text-lg space-y-2">
                    <div>
                      <h3>
                        <p className="flex justify-start items-center gap-4">
                          <strong>
                            <FaPhoneAlt />
                          </strong>{" "}
                          +91 99589 93549
                        </p>
                      </h3>
                    </div>
                    <div>
                      <h3>
                        <p className="flex justify-start items-center gap-4">
                          <strong>
                            <CiMail />
                          </strong>{" "}
                          info@dholeratimes.com
                        </p>
                      </h3>
                    </div>
                    <div>
                      <h3>
                        <p className="flex justify-start items-center gap-4">
                          <strong>
                            <FaMapMarkerAlt />
                          </strong>{" "}
                          620, JMD Megapolis, Sector-48, Sohna Road, Gurugram -
                          122018, India
                        </p>
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h2 className="font-bold text-2xl md:text-3xl mt-4">
                    Why Choose Us
                  </h2>
                  <div className="mt-4 text-lg space-y-2">
                    <div>
                      <h3>
                        <strong>Transparent Process:</strong>{" "}
                      </h3>
                      <p>
                        No hidden fees, no surprises — just honest real estate
                        services.
                      </p>
                    </div>
                    <div>
                      <h3>
                        <strong>End-to-End Support:</strong>
                      </h3>{" "}
                      <p>
                        Our dedicated team provides complete assistance, from
                        selecting plots to registration.
                      </p>
                    </div>
                    <div>
                      <h3>
                        <strong>Trusted by Investors:</strong>
                      </h3>{" "}
                      <p>
                        Join a growing community of satisfied investors
                        benefiting from Dholera’s growth.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form Section */}
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
    </>
  );
}
