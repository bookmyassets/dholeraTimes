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
      <div className="bg-gray-900 w-full">
        <title>
          Contact Us | Dholera Times – Real Estate Experts in Dholera Smart City
        </title>
        <meta
          name="description"
          content="Get in touch with our team for plot bookings, site visits, or investment advice in Dholera Smart City. Call, WhatsApp or visit us."
        />
        <meta
          name="keywords"
          content="Expert guidance on dholera Smart City, Contact dholera times , Dholera investment consultation, Book plot in dholera , Dholera inquiry, Dholera Investment "
        />
        <div className="max-w-7xl mx-auto  flex flex-col md:flex-row items-center text-white px-6 md:px-10">
          {/* Left Text Section */}
          <div className="md:w-1/2 text-center">
            <h2 className="text-4xl font-bold">Have Some Questions?</h2>
            <p className="text-gray-300 text-lg mt-3">
              Let us know, we will be more than happy to connect.
            </p>
          </div>
          {/* Right Image Section */}
          <div className="md:w-1/2 flex  justify-center mt-6 md:mt-0">
            <Image
              src={get}
              alt="Contact"
              width={400}
              height={300}
              className="rounded-lg p-5"
            />
          </div>
        </div>
      </div>

      <div className="">
        {/* Header Section */}

        {/* Contact Cards Section */}
        <div className="bg-white py-12">
          <h1 className="text-center mb-10 font-bold text-4xl max-sm:text-3xl max-sm:ml-4 max-sm:text-left">
            Get Expert Guidance on Dholera Smart City
          </h1>
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-6 md:px-10">
            {/* Talk to Sales */}
            <div className="hover:scale-105 shadow-2xl">
              <a
                href="tel:+919958993549"
                className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col items-center text-center"
              >
                <FaPhoneAlt className="text-gray-800 text-3xl mb-4" />
                <h2 className="text-lg font-semibold text-gray-800">
                  Talk to Sales
                </h2>
                <p className="text-gray-600 mt-2">
                  Interested in our services? Just pick up the phone to chat
                  with a member of our sales team.
                </p>
              </a>
            </div>

            {/* Contact Support */}
            <div className="hover:scale-105 shadow-2xl">
              <a
                href="https://api.whatsapp.com/send?phone=919958993549"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col items-center text-center"
              >
                <FaHeadset className="text-gray-800 text-3xl mb-4" />
                <h2 className="text-lg font-semibold text-gray-800">
                  Contact Customer Support
                </h2>
                <p className="text-gray-600 mt-2">
                  Need help? Our support team is here for you. Reach out
                  anytime!
                </p>
              </a>
            </div>
          </div>

          {/* Address Section */}

          {/* Social Media Links */}
          <div className="mt-10 ">
            {/* Why Choose Us & Contact Form */}
            <div className="flex flex-col max-sm:flex-col-reverse md:flex-row justify-center items-center  gap-16 p-6">
              {/* Contact Info Section */}
              <div className="max-w-2xl text-left">
                <div className="space-y-8">
                  <div>
                    <h2 className="font-bold text-2xl md:text-3xl">
                      Our Contact Info
                    </h2>
                    <div className="mt-4 text-lg space-y-2">
                      <div>
                        <h3>
                          <strong>Phone no:</strong> +91 99589 93549
                        </h3>
                      </div>
                      <div>
                        <h3>
                          <strong>Email ID:</strong> info@dholeratimes.com
                        </h3>
                      </div>
                      <div>
                        <h3>
                          <strong>Address:</strong> 620, JMD Megapolis,
                          Sector-48, Sohna Road, Gurugram - 122018, India
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
                        <strong>
                          {" "}
                          <h3>Transparent Process: </h3>{" "}
                        </strong>{" "}
                        <p>
                          No hidden fees, no surprises — just honest real estate
                          services.
                        </p>
                      </div>
                      <div>
                        <h3>
                          <strong>End-to-End Support:</strong>{" "}
                        </h3>{" "}
                        <p>
                          Our dedicated team provides complete assistance, from
                          selecting plots to registration.
                        </p>
                      </div>
                      <div>
                        <h3>
                          <strong>Trusted by Investors:</strong>{" "}
                        </h3>{" "}
                        <p>
                          {" "}
                          Join a growing community of satisfied investors
                          benefiting from Dholera’s growth.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form Section */}
              <div className=" ">
                <ContactForm title="Enquire Now" headline="" buttonName="Get A Call Back" />
              </div>
            </div>
            <div className="space-y-5 text-center">
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
                  href="https://www.linkedin.com/company/dholera-times"
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
