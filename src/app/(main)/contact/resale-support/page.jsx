"use client";
import Image from "next/image";
import get from "@/assets/resaleHero.webp";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import Resale from "../../components/Resale";
import resaleD from "@/assets/ResaleDesktop2.webp";
import buyBack from "@/assets/hassle.webp";
import freeListing from "@/assets/Free-Listing.webp";
import resaleIcons from "@/assets/resale-icons.webp";
import strong from "@/assets/strong.webp";
import hassle from "@/assets/hassle.webp";
import ct1 from "@/assets/customer-testimonial.webp";
import ct2 from "@/assets/Customer-testimonial-2.webp";

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
      <title>Resale Support | Dholera Plot Buyback & Assistance</title>
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
            <p className="text-3xl md:text-5xl font-extrabold drop-shadow-lg mb-4">
              ReSale Support
            </p>
          </div>
        </section>

        <div className="text-center max-w-7xl mx-auto md:text-2xl text-xl  md:p-8 font-semibold">
          <h1 className="text-3xl md:text-5xl font-extrabold drop-shadow-lg mb-8">
            Need Help with Resale? <br /> We're Here to Support You
          </h1>
          <p>
            We offer buyback & smooth full resale support for our residential
            plots in Dholera smart city,we are committed to helping our
            investors get maximum value.
          </p>
          <div className="bg-white">
            {/* Form and Image Section - Side by Side */}
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              {/* Form Section */}
              <div className="w-full lg:w-1/2">
                <Resale
                  title="Resale Support"
                  headline="Fill the form below to book Resale support Assistance. Fields marked with * are mandatory."
                  buttonName="Get Resale Assistance"
                />
              </div>

              {/* Image Section */}
              <div className="w-full lg:w-1/2 md:pt-8">
                <div className="text-center text-xl md:text-3xl pt-8 ">
                  <h2>How Our Resale Support Works</h2>
                </div>
                <div>
                  <Image src={resaleD} alt="re-sale" className=" w-full" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="py-8 px-6 w-full bg-[#151f28]">
          <div className="flex justify-center items-center">
            <ul className="space-y-4">
              <h2 className="text-xl md:text-4xl font-semibold text-center text-white pb-4">
                Why Choose Our Resale Support ?
              </h2>
              <li
                className="flex items-center text-lg md:text-2xl md:font-semibold"
                style={{ color: "#d8b66d" }}
              >
                <span className="mr-3 text-xl ">
                  <Image
                    src={buyBack}
                    alt="buyBack"
                    className="h-12 w-12 rounded"
                  />
                </span>
                Guaranteed Buyback Option
              </li>
              <li
                className="flex items-center text-lg md:text-2xl md:font-semibold"
                style={{ color: "#d8b66d" }}
              >
                <span className="mr-3 text-xl ">
                  <Image
                    src={strong}
                    alt="strong"
                    className="h-12 w-12 rounded"
                  />
                </span>
                Strong Buyer Network (Local + NRI)
              </li>
              <li
                className="flex items-center text-lg md:text-2xl md:font-semibold"
                style={{ color: "#d8b66d" }}
              >
                <span className="mr-3 text-xl ">
                  <Image
                    src={hassle}
                    alt="hassle"
                    className="h-12 w-12 rounded"
                  />
                </span>
                Hassle-Free Documentation
              </li>
              <li
                className="flex items-center text-lg md:text-2xl md:font-semibold"
                style={{ color: "#d8b66d" }}
              >
                <span className="mr-3 text-xl ">
                  <Image
                    src={freeListing}
                    alt="freeListing"
                    className="h-12 w-12 rounded"
                  />
                </span>
                Free Listing on Dholera Times
              </li>
              <li
                className="flex items-center text-lg md:text-2xl md:font-semibold"
                style={{ color: "#d8b66d" }}
              >
                <span className="mr-3 text-xl ">
                  <Image
                    src={resaleIcons}
                    alt="resaleIcons"
                    className="h-12 w-12 rounded"
                  />
                </span>
                Dedicated Resale Specialist
              </li>
            </ul>
          </div>
        </div>

        <div>
          <h2 className="text-center text-xl md:text-4xl font-semibold">
            Customer Testimonials
          </h2>
          <div className="md:grid md:grid-cols-2 ">
            <Image src={ct1} alt="Customer-testimonial" />
            <Image src={ct2} alt="Customer-testimonial" />
          </div>
        </div>
      </div>
    </>
  );
}