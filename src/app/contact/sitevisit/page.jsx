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

import ContactForm from "@/app/components/ContactForm";

export default function ContactDetails() {
  return (
    <>
      <section className="relative h-[50vh] max-sm:h-[30vh] flex items-center justify-center text-center bg-black">
        <div className="absolute inset-0">
          <Image
            src={get}
            alt="Site Visit"
            className="w-full h-[50vh] max-sm:h-[30vh] object-cover opacity-60"
          />
        </div>
        <div className="relative z-10 max-w-3xl text-white px-6">
          <h2 className="text-5xl font-extrabold drop-shadow-lg mb-4">
            Book A Free Site Visit
          </h2>
        </div>
      </section>

      <div className="">
        <div className="bg-white ">
          <div className="flex flex-col md:flex-row justify-center items-center  gap-16 p-6">
            {/* Contact Info Section */}

            <div className="">
            <ContactForm title="Book A Free Site Visit" buttonName="Submit" />
            </div>

            <div className="max-w-2xl text-left">
              <div className="space-y-8">
                <div>
                  <h3 className="font-bold text-4xl text-[#2863e5]">Head Office </h3>
                  <h3 className="font-bold text-2xl">Dholera Times </h3>
                  <div className=" mt-4 text-lg space-y-2">
                    <div>

                    <p className="flex justify-start items-center gap-4">
                      <strong>
                        <FaPhoneAlt />
                      </strong>{" "}
                      +91 99589 93549
                    </p>
                    </div>
                    <div>

                    <p className="flex justify-start items-center gap-4">
                      <strong>
                        <CiMail />
                      </strong>{" "}
                      info@dholeratimes.com
                    </p>
                    </div>
                    <div>

                    <p className="flex justify-start items-center gap-4">
                      <strong>
                        <FaMapMarkerAlt />
                      </strong>{" "}
                      620, JMD Megapolis, Sector-48, Sohna Road, Gurugram -
                      122018, India
                    </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                    <h3 className="font-bold text-2xl md:text-3xl mt-4">
                      Why Choose Us
                    </h3>
                    <div className="mt-4 text-lg space-y-2">
                      <div>
                        <p>
                          <strong>Transparent Process:</strong> No hidden fees,
                          no surprises — just honest real estate services.
                        </p>
                      </div>
                      <div>
                        <p>
                          <strong>End-to-End Support:</strong> Our dedicated
                          team provides complete assistance, from selecting
                          plots to registration.
                        </p>
                      </div>
                      <div>
                        <p>
                          <strong>Trusted by Investors:</strong> Join a growing
                          community of satisfied investors benefiting from
                          Dholera’s growth.
                        </p>
                      </div>
                    </div>
                  </div>  
              </div>
            </div>

            {/* Contact Form Section */}
          </div>
          <div className="space-y-5  mb-5 text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Follow Us
            </h3>
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
