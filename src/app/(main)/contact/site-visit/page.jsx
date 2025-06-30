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

  const breadcrumb = {
    "@context": "https://schema.org/",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.dholeratimes.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Contact Us",
        item: "https://www.dholeratimes.com/contact",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Site visit",
        item: "https://www.dholeratimes.com/contact/site-visit",
      },
    ],
  };

  return (
    <>
      <meta name="robots" content="index, dofollow"/>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <title>Free Site Visit to Dholera Smart City – Book Now</title>
      <meta
        name="description"
        content="Book a free site visit to Dholera Smart City with expert guidance. Explore plots, project
insights, and investment opportunities on the ground. Limited slots!"
      />
      <meta
        name="keywords"
        content="Book site visit dholera,Free site visit dholera,Dholera SIR visit,Dholera smart city site visit,Dholera Smart city Visit,Dholera Project visit "
      />
      <link
        rel="canonical"
        href="https://www.dholeratimes.com/contact/site-visit"
      />
      <div>
        <section className="relative md:h-[50vh] max-sm:h-[30vh] flex items-center justify-center text-center bg-black">
          <div className="absolute inset-0">
            <Image
              src={get}
              alt="Site Visit"
              className="w-full h-[50vh] max-sm:h-[30vh] object-cover  "
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
                <ContactForm
                  title="Book A Free Site Visit"
                  headline="Fill the form below to schedule a site visit . Fields marked with * are mandatory."
                  buttonName="Submit"
                />
              </div>

              <div className="max-w-2xl text-left">
                <div className="space-y-8">
                  <div>
                    <h2 className="font-bold text-4xl text-[#2863e5]">
                      Registered Office{" "}
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
                            620, JMD Megapolis, Sector-48, Sohna Road, Gurugram
                            - 122018, India
                          </p>
                        </h3>
                      </div>

                      <div className="space-y-4">
                    <div className=" w-full h-48 rounded overflow-hidden">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4203.4823453415875!2d77.03488882442701!3d28.41943917746384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87ed979cce195a67%3A0xa6ea8ada5da2aaf5!2sDholera%20Times!5e1!3m2!1sen!2sin!4v1744797963851!5m2!1sen!2sin"
                        className="w-full h-full"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Location map"
                      ></iframe>
                    </div>
                  </div>
                    </div>
                  </div>

                  {/* Branch Office Section */}
                  <div>
                    <h2 className="font-bold text-4xl text-[#2863e5]">
                      Branch Office{" "}
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
                            Westgate by true value, B-1110, Sarkhej - Gandhinagar Hwy, Makarba, Ahmedabad, Gujarat 380015
                          </p>
                        </h3>
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
      </div>
    </>
  );
}