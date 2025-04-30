"use client";
import React, { useEffect, useState, useRef } from "react";
import abcd from "@/assets/ABCD-Building-3.webp";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "./components/ContactForm";
import banner from "@/assets/dtLanding.webp";
import bannerMobile from "@/assets/dtLandingmobile.webp";
import TestimonialPagination from "./components/Testimonials";
import FAQSection from "./Faq";
import PopupForm from "./components/PopupForm";
import { AnimatePresence, motion } from "framer-motion";
import semiconductor from "@/assets/tata_semiconductor_plant.webp";
import rail from "@/assets/mono_rail_connectivity.webp";
import airport from "@/assets/dholera_international_airport.webp";
import expressway from "@/assets/expressway_landing.webp";
import solar from "@/assets/renewable_solar.webp";
import mega from "@/assets/mega_industrial_park.webp";
import nanoc from "@/assets/naNoc.webp";
import residential from "@/assets/residentialPlot.webp";
import hidden from "@/assets/hiddenCharges.webp";
import Gallery from "./components/Gallery";
import BrochureForm from "./components/BrochureForm";
import logo from "@/assets/dt.webp";
import logo2 from "@/assets/dtlogobg.png";
import call from "@/assets/call.svg";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import govtApprovedProject from "@/assets/govt-approved-project.webp";
import salesDeed from "@/assets/immediate-sale-deed.webp";
import afterSales from "@/assets/after-sales.webp" 

const colors = [
  { bg: "#ffffff", text: "#d7b36c" },
  { bg: "#f0e6d2", text: "#c2a05e" },
  { bg: "#e6d7b3", text: "#a58a4e" },
  { bg: "#d7b36c", text: "#ffffff" },
];

const cardsData = [
  {
    image: airport,
    title: "International Airport",
    backTitle: "International Airport",
    description:
      "A world-class international airport facilitating global connectivity for businesses and residents, making Dholera a gateway to international markets.",
    icon: (
      <svg
        className="w-6 h-6 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
        />
      </svg>
    ),
  },
  {
    image: expressway,
    title: "Dholera - Ahmedabad Expressway",
    backTitle: "Dholera - Ahmedabad Expressway",
    description:
      "A high-speed expressway connecting Dholera to Ahmedabad, reducing travel time significantly and improving regional connectivity for commerce and tourism.",
    icon: (
      <svg
        className="w-6 h-6 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
        />
      </svg>
    ),
  },
  {
    image: rail,
    title: "Monorail Project",
    backTitle: "Advanced Monorail System",
    description:
      "A modern transportation network connecting Dholera with major cities, enhancing accessibility and reducing travel time for residents and businesses.",
    icon: (
      <svg
        className="w-6 h-6 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
        />
      </svg>
    ),
  },
  {
    image: semiconductor,
    title: "Tata Semiconductor",
    backTitle: "Tata Semiconductor Plant",
    description:
      "A state-of-the-art semiconductor manufacturing facility bringing thousands of jobs and cutting-edge technology to the region, boosting economic growth.",
    icon: (
      <svg
        className="w-6 h-6 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },

  {
    image: solar,
    title: "Dholera Solar Power Plant",
    backTitle: "Dholera Solar Power Plant",
    description:
      "A massive renewable energy project providing clean power to the city and industries, establishing Dholera as a sustainable smart city of the future.",
    icon: (
      <svg
        className="w-6 h-6 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
        />
      </svg>
    ),
  },
  {
    image: mega,
    title: "Dholera Mega Industrial Park",
    backTitle: "Dholera Mega Industrial Park",
    description:
      "A vast industrial development zone attracting global manufacturers with world-class infrastructure and business-friendly policies.",
    icon: (
      <svg
        className="w-6 h-6 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
        />
      </svg>
    ),
  },
];

export default function New() {
  const [currentColorIndex, setCurrentColorIndex] = useState(0);
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const [isBrochureFormOpen, setIsBrochureFormOpen] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [projectCount, setProjectCount] = useState(0);
  const [customerCount, setCustomerCount] = useState(0);
  const [nriCount, setNriCount] = useState(0);
  const [isVisible, setIsVisible] = useState({});
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuOpenRef = useRef(null);

  // Function to handle smooth scrolling
  const scrollToSection = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      // Adding offset for fixed header
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      // Close mobile menu after clicking
      setIsMenuOpen(false);
    }
  };

  const downloadBrochure = () => {
    // Replace with your actual brochure URL
    const brochureUrl = "https://shorturl.at/t7uyU";
    const link = document.createElement("a");
    link.href = brochureUrl;
    link.download = "Dholera-Smart-City-Brochure.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentColorIndex((prev) => (prev + 1) % colors.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const animateValue = (setter, end, duration) => {
      let start = 0;
      const incrementTime = 20;
      const totalIncrements = (duration * 1000) / incrementTime;
      const increment = end / totalIncrements;

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setter(end);
          clearInterval(timer);
        } else {
          setter(Math.ceil(start));
        }
      }, incrementTime);
    };

    animateValue(setProjectCount, 7, 1);
    animateValue(setCustomerCount, 500, 2);
    animateValue(setNriCount, 300, 2);
  }, []);

  // Effect for scroll animations
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".animate-on-scroll");

      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight * 0.8) {
          section.classList.add("animate-visible");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Click outside handler for mobile menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuOpenRef.current &&
        !menuOpenRef.current.contains(event.target) &&
        isMenuOpen
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  const currentColor = colors[currentColorIndex];

  const openContactForm = () => {
    setIsContactFormOpen(true);
  };

  const closeContactForm = () => {
    setIsContactFormOpen(false);
  };

  const openBrochureForm = () => {
    setIsBrochureFormOpen(true);
  };

  const closeBrochureForm = () => {
    setIsBrochureFormOpen(false);
  };

  return (
    <>
      <nav className="fixed z-40 w-full bg-[#151f28] pt-4 pb-4 max-sm:pt-2 max-sm:pb-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14 max-sm:h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/dholera-times-plots">
                <Image
                  src={logo}
                  alt="Dholera Times Logo"
                  width={100}
                  height={100}
                />
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8 text-white text-lg">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("home");
                }}
              >
                Home
              </a>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("why-invest");
                }}
              >
                Why Invest
              </a>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("investment-benefits");
                }}
              >
                Investment Benefits
              </a>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("why-us");
                }}
              >
                Why Us
              </a>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("testimonials");
                }}
              >
                Testimonials
              </a>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("faqs");
                }}
              >
                FAQs
              </a>
            </div>

            {/* Call Now and Mobile Menu Button */}
            <div className="flex items-center gap-4 lg:hidden">
              <div className="text-[#d8b66d] mt-3 animate-bounce flex items-center space-x-2">
                <Link
                  href="tel:+919958993549"
                  className="flex items-center space-x-2"
                >
                  <Image
                    src={call}
                    alt="call"
                    height={30}
                    width={30}
                    className="animate-image-tint"
                  />
                  <p className="animate-color-change">Call Now</p>
                </Link>
              </div>

              <button onClick={toggleMenu}>
                {isMenuOpen ? (
                  <X className="h-6 w-6 text-white" />
                ) : (
                  <Menu className="h-6 w-6 text-white" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-100%", opacity: 0 }}
              ref={menuOpenRef}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden bg-black/30 backdrop-blur-md fixed top-0 left-0 w-3/4 h-full z-50 p-5 overflow-y-auto"
            >
              <div className="flex flex-col space-y-6">
                <Link href="/dholera-times-plots" onClick={() => setIsMenuOpen(false)}>
                  <Image
                    src={logo2}
                    alt="Dholera Times Logo"
                    width={150}
                    height={150}
                  />
                </Link>

                {/* Mobile Menu Links */}
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("home");
                  }}
                  className="text-white text-xl"
                >
                  Home
                </a>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("why-invest");
                  }}
                  className="text-white text-xl"
                >
                  Why Invest
                </a>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("investment-benefits");
                  }}
                  className="text-white text-xl"
                >
                  Investment Benefits
                </a>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("why-us");
                  }}
                  className="text-white text-xl"
                >
                  Why Us
                </a>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("testimonials");
                  }}
                  className="text-white text-xl"
                >
                  Testimonials
                </a>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("faqs");
                  }}
                  className="text-white text-xl"
                >
                  FAQs
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap");

        body {
          font-family: "Poppins", sans-serif;
        }

        /* Flip Card Styles */
        .perspective-1000 {
          perspective: 1000px;
        }

        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }

        .backface-hidden {
          backface-visibility: hidden;
        }

        .transform-rotate-y-180 {
          transform: rotateY(180deg);
        }

        .flip-card:hover .flip-card-inner {
          transform: rotateY(180deg);
        }

        .flip-card-inner {
          transition: transform 0.7s;
        }

        /* Remove conflicting styles */
        .group:hover .group-hover\:opacity-0,
        .group:hover .group-hover\:opacity-100 {
          opacity: 1 !important;
        }

        /* Reveal from Bottom Animation */
        @keyframes revealFromBottom {
          0% {
            opacity: 0;
            transform: translateY(40px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Reveal from Left Animation */
        @keyframes revealFromLeft {
          0% {
            opacity: 0;
            transform: translateX(-40px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        /* Reveal from Right Animation */
        @keyframes revealFromRight {
          0% {
            opacity: 0;
            transform: translateX(40px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        /* Fade In Animation */
        @keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        /* Rotate and Scale Animation */
        @keyframes rotateAndScale {
          0% {
            transform: rotate(0deg) scale(0.8);
          }
          100% {
            transform: rotate(360deg) scale(1);
          }
        }

        /* Typing Animation */
        @keyframes typing {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }

        .animate-typing {
          overflow: hidden;
          white-space: nowrap;
          animation: typing 4s steps(50, end) forwards;
          border-right: 3px solid #d7b36c;
        }

        /* Shimmer Animation */
        @keyframes shimmer {
          0% {
            background-position: -100px 0;
          }
          100% {
            background-position: 100px 0;
          }
        }

        .animate-shimmer {
          background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.8) 50%,
            rgba(255, 255, 255, 0) 100%
          );
          background-size: 200px 100%;
          animation: shimmer 2s infinite;
        }

        /* Pulse Animation for CTA */
        @keyframes ctaPulse {
          0% {
            box-shadow: 0 0 0 0 rgba(215, 179, 108, 0.7);
          }
          70% {
            box-shadow: 0 0 0 12px rgba(215, 179, 108, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(215, 179, 108, 0);
          }
        }

        .animate-pulse-cta {
          animation: ctaPulse 2s infinite;
        }

        /* Animations for scroll reveal */
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(30px);
          transition:
            opacity 0.8s ease,
            transform 0.8s ease;
        }

        .animate-on-scroll.from-left {
          transform: translateX(-15px);
        }

        .animate-on-scroll.from-right {
          transform: translateX(15px);
        }

        @media (max-width: 640px) {
          .animate-on-scroll.from-left,
          .animate-on-scroll.from-right {
            transform: translateY(20px); /* Change to vertical animation */
          }
        }

        /* Animation when visible */
        .animate-visible {
          opacity: 1;
          transform: translate(0, 0) !important; /* Override all transforms */
        }

        .animate-visible {
          opacity: 1;
          transform: translate(0, 0);
        }

        /* Staggered children animation */
        .stagger-children > * {
          opacity: 0;
          transform: translateY(15px);
          transition:
            opacity 0.4s ease,
            transform 0.4s ease;
        }

        .stagger-children.animate-visible > *:nth-child(1) {
          transition-delay: 0.1s;
          opacity: 1;
          transform: translateY(0);
        }

        .stagger-children.animate-visible > *:nth-child(2) {
          transition-delay: 0.2s;
          opacity: 1;
          transform: translateY(0);
        }

        .stagger-children.animate-visible > *:nth-child(3) {
          transition-delay: 0.3s;
          opacity: 1;
          transform: translateY(0);
        }

        .stagger-children.animate-visible > *:nth-child(4) {
          transition-delay: 0.4s;
          opacity: 1;
          transform: translateY(0);
        }

        .stagger-children.animate-visible > *:nth-child(5) {
          transition-delay: 0.4s;
          opacity: 1;
          transform: translateY(0);
        }

        .stagger-children.animate-visible > *:nth-child(6) {
          transition-delay: 0.4s;
          opacity: 1;
          transform: translateY(0);
        }

        /* Flip card animation */
        .flip-card {
          perspective: 1000px;
        }

        .flip-card-inner {
          transition: transform 0.8s;
          transform-style: preserve-3d;
        }

        .flip-card:hover .flip-card-inner {
          transform: rotateY(180deg);
        }

        .flip-card-front,
        .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
        }

        .flip-card-back {
          transform: rotateY(180deg);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          text-align: center;
          padding: 2rem;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      {/* Hero Section with Enhanced Design */}
      <section
        id="home"
        className="relative h-[100vh] pt-20 w-full overflow-hidden"
      >
        <Image
          src={abcd}
          alt="Dholera Skyline"
          className="absolute top-0 left-0 w-full h-full object-cover z-0 brightness-[0.85]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent z-[1]"></div>
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row justify-center items-center h-full px-4 sm:px-8">
          <div className="md:w-1/2 w-full mb-8 md:mb-0">
            {/* Badge with pulse animation */}
            <div className="bg-[#d7b36c] text-white text-sm font-bold py-1 px-3 rounded-full inline-block mb-4 animate-pulse">
              LIMITED PLOTS AVAILABLE
            </div>

            {/* Main heading with fade-in animation instead of typing */}
            <h1
              className="text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-4 font-poppins leading-tight"
              style={{
                animation: "fadeIn 1s ease-out forwards",
                textShadow: "1px 1px 3px rgba(0,0,0,0.3)",
              }}
            >
              Invest in India's First Smart City
            </h1>

            {/* Subheading with reliable slide-up animation */}
            <h2
              className="text-xl md:text-2xl text-white/90 mb-6 font-poppins font-light"
              style={{
                animation: "slideUp 1.2s ease-out 0.3s forwards",
                opacity: "0",
                transform: "translateY(20px)",
              }}
            >
              Secure premium plots in Dholera SIR before prices surge -
              projected 5x growth by 2030
            </h2>
          </div>
          <div
            className="md:w-1/2 "
            style={{
              animation: "fadeIn 1s ease-out 0.8s forwards",
              opacity: 0,
            }}
          >
            <div>
              <ContactForm
                title="ENQUIRE NOW"
                buttonName="GET A FREE CONSULTATION"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Investment and CTA Sections with Improved Design */}
      <section id="investment-benefits" className=" py-8 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Investment Returns Section */}
          <div className="bg-gradient-to-r from-gray-100 to-gray-200 rounded-xl shadow-lg p-8 animate-on-scroll">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2 animate-on-scroll from-left">
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 font-poppins mb-4">
                  Investment Returns
                </h3>
                <div className="w-20 h-1 bg-[#d7b36c] mb-6"></div>
                <p className="text-lg md:text-xl text-gray-700 font-poppins mb-6">
                  Be a part of Dholera's growth story! With the region set to
                  become a hub for industries like aviation, electronics, and
                  renewable energy, your investment in Emerald City promises not
                  just a home but a future full of possibilities.
                </p>
                <div className="flex flex-col md:text-xl sm:flex-row gap-4">
                  <button
                    onClick={() => {
                      if (isFormSubmitted) {
                        downloadBrochure();
                      } else {
                        openBrochureForm();
                      }
                    }}
                    className={`inline-flex items-center px-6 py-3 ${
                      isFormSubmitted
                        ? "bg-green-600 hover:bg-green-700"
                        : "bg-[#d7b36c] hover:bg-[#c2a05e]"
                    } text-white font-bold rounded-lg transition duration-300 transform hover:scale-105 font-poppins shadow-md animate-float`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d={
                          isFormSubmitted
                            ? "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                            : "M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
                        }
                      />
                    </svg>
                    {isFormSubmitted ? "Download Brochure" : "Get Brochure"}
                  </button>
                </div>
              </div>
              <div className="md:w-1/2 animate-on-scroll from-right">
                <div className="bg-white rounded-lg p-8 shadow-md">
                  <div className="flex justify-between items-center mb-4">
                    <div className="text-2xl font-semibold text-gray-800">
                      ROI Projection
                    </div>
                    <div className="text-[#d7b36c] font-bold text-3xl">5x</div>
                  </div>
                  <div className="w-full bg-[#d7b36c] rounded-full h-3 mb-4">
                    <div
                      className="bg-[#d7b36c] h-3 rounded-full transition-all duration-1000 animate-shimmer"
                      style={{ width: "80%" }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-sm text-gray-600 mb-8">
                    <span>Current Value</span>
                    <span>Projected by 2030</span>
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
                      <div className="text-sm text-gray-600 mb-1">
                        Starting From
                      </div>
                      <div className="text-xl font-bold text-gray-800">
                        ₹6,700/sq.ft
                      </div>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
                      <div className="text-sm text-gray-600 mb-1">
                        Investment Period
                      </div>
                      <div className="text-xl font-bold text-gray-800">
                        5-7 Years
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="why-us" className="max-w-7xl mx-auto pb-12 max-sm:pl-8 max-sm:pr-8">
        <h1 className="text-center text-4xl mb-8 md:text-6xl font-bold ">
          Why DHOLERA TIMES?
        </h1>
        <div className="flex flex-col items-center gap-12 mb-16">
          {/* Features Grid */}
          <div className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-children animate-on-scroll">
              {/* Feature 1 */}
              <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center animate-float">
                <div className="h-52 md:h-80 mb-4 mx-auto flex items-center justify-center">
                  <Image
                    src={nanoc}
                    alt="NA/NOC Plots"
                    className="h-full w-auto object-contain"
                  />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
                  NA/NOC Plots
                </h3>
                <div className="w-12 h-1 bg-[#d7b36c] mx-auto"></div>
              </div>

              {/* Feature 2 */}
              <div
                className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center animate-float"
                style={{ animationDelay: "1s" }}
              >
                <div className="h-52 md:h-80 mb-4 mx-auto flex items-center justify-center">
                  <Image
                    src={residential}
                    alt="Residential Plots"
                    className="h-full w-auto object-contain"
                  />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
                  Residential Plots
                </h3>
                <div className="w-12 h-1 bg-[#d7b36c] mx-auto"></div>
              </div>

              {/* Feature 3 */}
              <div
                className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center animate-float"
                style={{ animationDelay: "2s" }}
              >
                <div className="h-52 md:h-80 mb-4 mx-auto flex items-center justify-center">
                  <Image
                    src={hidden}
                    alt="No Hidden Charges"
                    className="h-full w-auto object-contain"
                  />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
                  Transparent Pricing
                </h3>
                <div className="w-12 h-1 bg-[#d7b36c] mx-auto"></div>
              </div>
              {/* Feature 4 */}
              <div
                className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center animate-float"
                style={{ animationDelay: "2s" }}
              >
                <div className="h-52 md:h-80 mb-4 mx-auto flex items-center justify-center">
                  <Image
                    src={govtApprovedProject}
                    alt="govt-approved-project"
                    className="h-full w-auto object-contain"
                  />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
                  Govt Approved Projects
                </h3>
                <div className="w-12 h-1 bg-[#d7b36c] mx-auto"></div>
              </div>
              {/* Feature 5 */}
              <div
                className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center animate-float"
                style={{ animationDelay: "3s" }}
              >
                <div className="h-52 md:h-80 mb-4 mx-auto flex items-center justify-center">
                  <Image
                    src={salesDeed}
                    alt="Sales Deed"
                    className="h-full w-auto object-contain"
                  />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
                  Sales Deed
                </h3>
                <div className="w-12 h-1 bg-[#d7b36c] mx-auto"></div>
              </div>
                        {/* Feature 6 */}
              <div
                className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center animate-float"
                style={{ animationDelay: "3s" }}
              >
                <div className="h-52 md:h-80 mb-4 mx-auto flex items-center justify-center">
                  <Image
                    src={afterSales}
                    alt="After Sales Support"
                    className="h-full w-auto object-contain"
                  />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
                  After Sales Support
                </h3>
                <div className="w-12 h-1 bg-[#d7b36c] mx-auto"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id=""
        className="bg-[#151f28] shadow-xl text-center text-[#d3b469] animate-on-scroll"
      >
        <div className="py-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-8">
            Our Achievements
          </h2>
          <div className="flex flex-wrap justify-center gap-10">
            <div className="text-center">
              <h3 className="text-5xl font-bold text-[#d3b469]">
                {projectCount}+
              </h3>
              <p className="text-xl mt-2">Projects</p>
            </div>
            <div className="text-center">
              <h3 className="text-5xl font-bold text-[#d3b469]">
                {customerCount}+
              </h3>
              <p className="text-xl mt-2">Happy Customers</p>
            </div>
            <div className="text-center">
              <h3 className="text-5xl font-bold text-[#d3b469]">{nriCount}+</h3>
              <p className="text-xl mt-2">NRI</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Invest Section with Improved Layout */}
      <section id="why-invest" className="px-4 py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight font-poppins tracking-tight mb-4">
              WHY INVEST IN{" "}
              <span className="text-[#d7b36c] relative inline-block">
                DHOLERA SMART CITY
              </span>
            </h2>
            <div className="w-24 h-1 bg-[#d7b36c] mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {cardsData.map((card, index) => (
              <div
                key={index}
                className="flip-card h-96 max-sm:h-80 w-full perspective-1000" // Added perspective here
              >
                <div className="flip-card-inner relative w-full h-full transition-transform duration-700 transform-style-preserve-3d">
                  {/* Front Side */}
                  <div className="flip-card-front absolute w-full h-full backface-hidden bg-white rounded-lg shadow-lg border border-gray-200 p-6 flex flex-col">
                    <div className="h-48 relative flex-shrink-0">
                      <Image
                        src={card.image}
                        alt={card.title}
                        fill
                        className="object-cover rounded-t-lg"
                      />
                    </div>
                    <div className="mt-4">
                      <div className="flex items-center mb-4">
                        <div className="bg-[#d7b36c] p-2 rounded-full">
                          {card.icon}
                        </div>
                        <h3 className="ml-3 text-2xl md:text-3xl font-bold text-gray-800">
                          {card.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* Back Side */}
                  <div className="flip-card-back absolute w-full h-full backface-hidden bg-[#d7b36c] text-white rounded-lg p-6 flex flex-col justify-center transform-rotate-y-180">
                    <h3 className="text-2xl font-bold mb-4">
                      {card.backTitle}
                    </h3>
                    <p className="text-lg">{card.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#151f28] shadow-xl p-10 mb-16 text-center text-[#d3b469] animate-on-scroll">
        <h3 className="text-3xl md:text-4xl font-bold font-poppins mb-3">
          Are You Interested To Invest In Future?
        </h3>
        <p className="text-xl font-light mb-8 max-w-3xl mx-auto">
          We have something very special for you.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <button
            onClick={openContactForm}
            className="bg-[#d3b469] text-xl md:text-2xl hover:bg-[#c0a355] text-[#151f28] font-bold py-4 px-8 rounded-lg transition-all transform hover:scale-105 shadow-lg animate-pulse-cta"
          >
            Get Free Consultation
          </button>
          <Link
            href="tel:+919958993549"
            className="inline-block text-xl md:text-2xl px-8 py-4 bg-transparent border-2 border-white hover:bg-white hover:text-[#151f28] text-white font-bold rounded-lg transition duration-300 transform hover:scale-105 font-poppins shadow-lg animate-float"
          >
            Call Now
          </Link>
        </div>
      </section>

      <section>
        {/* Responsive Banner */}
        <div className="w-full relative mt-12 animate-on-scroll">
          <div className="hidden sm:block relative">
            <Image
              src={banner}
              alt="Dholera Times Banner"
              className="w-full h-auto rounded-lg shadow-md"
              width={1200}
              height={400}
            />
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
              <Link
                href="tel:+919958993549"
                className="inline-block px-8 py-4 text-3xl font-bold rounded-lg transition duration-300 transform hover:scale-105 font-poppins shadow-xl animate-pulse-cta"
                style={{
                  backgroundColor: currentColor.bg,
                  color: currentColor.text,
                }}
              >
                CALL NOW
              </Link>
            </div>
          </div>
          <div className="sm:hidden relative">
            <Image
              src={bannerMobile}
              alt="Dholera Times Banner"
              className="w-full h-auto rounded-lg shadow-md"
              width={600}
              height={800}
            />
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
              <Link
                href="tel:+919958993549"
                className="inline-block px-6 py-3 text-xl font-bold rounded-lg transition duration-300 transform hover:scale-105 font-poppins shadow-xl animate-pulse-cta"
                style={{
                  backgroundColor: currentColor.bg,
                  color: currentColor.text,
                }}
              >
                CALL NOW
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials and FAQ with animations */}
      <section className="animate-on-scroll overflow-hidden">
        <p className="text-6xl font-semibold text-center pb-8 pt-8">
          Dholera Gallery
        </p>
        <Gallery />
      </section>

      <section className="animate-on-scroll">
        <TestimonialPagination />
      </section>

      <section className="animate-on-scroll">
        <FAQSection />
      </section>

      {/* Contact Form Popup */}
      <AnimatePresence>
        {isContactFormOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-[1000]">
            <PopupForm
              title="Book A Free Consultation Today"
              buttonName="Get A Call Back"
              onClose={closeContactForm}
            />
          </div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isBrochureFormOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-[1000]">
            <BrochureForm
              title="Get Instant Access to Our Brochure"
              buttonName="Download Now"
              onClose={closeBrochureForm}
              onSuccess={() => setIsFormSubmitted(true)}
            />
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
