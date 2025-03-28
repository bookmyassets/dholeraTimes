"use client";
import { useState, useEffect, useRef } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";
import "./globals.css";
import logo from "@/assets/dt.webp";
import logo2 from "@/assets/dtlogobg.png";
import Image from "next/image";
import Footer from "./components/Footer";
import FloatingIcons from "./components/Floating";
import { getPosts, getblogs } from "@/sanity/lib/api";
import { usePathname } from "next/navigation";
import { initFacebookPixel, trackPageView } from "@/lib/fbpixel";
import call from "@/assets/call.svg";
import Script from "next/script";

const FACEBOOK_PIXEL_ID = "619746600964977"; // Replace with your actual Pixel ID

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBlogsDropdownOpen, setIsBlogsDropdownOpen] = useState(false);
  const [isProjectsDropdownOpen, setIsProjectsDropdownOpen] = useState(false);
  const [isMobileBlogsOpen, setIsMobileBlogsOpen] = useState(false);
  const [isMobileProjectsOpen, setIsMobileProjectsOpen] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const [projects, setProjects] = useState([]);
  const [isDholeraDropdownOpen, setIsDholeraDropdownOpen] = useState(false);
  const [isMobileDholeraOpen, setIsMobileDholeraOpen] = useState(false);
  const [isEventOpen, setIsEventOpen] = useState(false);
  const [isMobileEventOpen, setIsMobileEventOpen] = useState(false);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [isMobileGalleryOpen, setIsMobileGalleryOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isMobileContactOpen, setIsMobileContactOpen] = useState(false);

  //PIXEL
  const pathname = usePathname();

  useEffect(() => {
    initFacebookPixel(FACEBOOK_PIXEL_ID);
    trackPageView();
  }, []);

  useEffect(() => {
    trackPageView();
  }, [pathname]);

  // Refs for dropdown elements
  const blogsDropdownRef = useRef(null);
  const projectsDropdownRef = useRef(null);
  const menuOpenRef = useRef(null);
  const dholeraDropdownRef = useRef(null);
  const eventRef = useRef(null);
  const galleryRef = useRef(null);
  const contactRef = useRef(null);

  const toggleDholeraDropdown = () => {
    setIsDholeraDropdownOpen(!isDholeraDropdownOpen);
    setIsBlogsDropdownOpen(false);
    setIsEventOpen(false);
    setIsProjectsDropdownOpen(false);
    setIsGalleryOpen(false);
  };

  const toggleEvent = () => {
    setIsEventOpen(!isEventOpen);
    setIsDholeraDropdownOpen(false);
    setIsBlogsDropdownOpen(false);
    setIsProjectsDropdownOpen(false);
    setIsGalleryOpen(false);
    setIsContactOpen(false);
  };

  const toggleBlogsDropdown = () => {
    setIsBlogsDropdownOpen(!isBlogsDropdownOpen);
    setIsProjectsDropdownOpen(false);
    setIsDholeraDropdownOpen(false);
    setIsEventOpen(false);
    setIsContactOpen(false);
    setIsGalleryOpen(false);
  };

  const toggleProjectsDropdown = () => {
    setIsProjectsDropdownOpen(!isProjectsDropdownOpen);
    setIsBlogsDropdownOpen(false);
    setIsDholeraDropdownOpen(false);
    setIsEventOpen(false);
    setIsContactOpen(false);
    setIsGalleryOpen(false);
  };

  const toggleGalleryDropdown = () => {
    setIsGalleryOpen(!isGalleryOpen);
    setIsBlogsDropdownOpen(false);
    setIsDholeraDropdownOpen(false);
    setIsEventOpen(false);
    setIsContactOpen(false);
    setIsProjectsDropdownOpen(false);
  };

  const toggleContactDropdown = () => {
    setIsContactOpen(!isContactOpen);
    setIsBlogsDropdownOpen(false);
    setIsDholeraDropdownOpen(false);
    setIsEventOpen(false);
    setIsGalleryOpen(false);
    setIsProjectsDropdownOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleMobileDholeraDropdown = () => {
    setIsMobileDholeraOpen(!isMobileDholeraOpen);
    setIsMobileProjectsOpen(false);
    setIsMobileEventOpen(false);
    setIsMobileBlogsOpen(false);
    setIsMobileGalleryOpen(false);

    setIsContactOpen(false);
  };

  const toggleMobileEvent = () => {
    setIsMobileEventOpen(!isMobileEventOpen);
    setIsMobileDholeraOpen(false);
    setIsMobileProjectsOpen(false);
    setIsMobileBlogsOpen(false);
    setIsMobileGalleryOpen(false);

    setIsContactOpen(false);
  };

  const toggleMobileProjectsDropdown = () => {
    setIsMobileProjectsOpen(!isMobileProjectsOpen);
    // Close other mobile dropdowns
    setIsMobileDholeraOpen(false);
    setIsMobileEventOpen(false);
    setIsMobileBlogsOpen(false);
    setIsMobileGalleryOpen(false);
    setIsContactOpen(false);
  };

  const toggleMobileBlogsDropdown = () => {
    setIsMobileBlogsOpen(!isMobileBlogsOpen);
    // Close other mobile dropdowns
    setIsMobileDholeraOpen(false);
    setIsMobileEventOpen(false);
    setIsMobileProjectsOpen(false);
    setIsMobileGalleryOpen(false);
    setIsContactOpen(false);
  };

  const toggleMobileGalleryDropdown = () => {
    setIsMobileGalleryOpen(!isMobileGalleryOpen);
    // Close other mobile dropdowns
    setIsMobileDholeraOpen(false);
    setIsMobileEventOpen(false);
    setIsMobileProjectsOpen(false);
    setIsMobileBlogsOpen(false);
    setIsContactOpen(false);
  };

  const toggleMobileContactDropdown = () => {
    setIsMobileContactOpen(!isMobileContactOpen);
    // Close other mobile dropdowns
    setIsMobileDholeraOpen(false);
    setIsMobileEventOpen(false);
    setIsMobileProjectsOpen(false);
    setIsMobileBlogsOpen(false);
    setIsContactOpen(false);
    setIsMobileGalleryOpen(false);
  };

  // Handle clicks outside dropdowns to close them
  useEffect(() => {
    function handleClickOutside(event) {
      // Close blogs dropdown if click is outside
      if (
        blogsDropdownRef.current &&
        !blogsDropdownRef.current.contains(event.target)
      ) {
        setIsBlogsDropdownOpen(false);
      }

      // Close projects dropdown if click is outside
      if (
        projectsDropdownRef.current &&
        !projectsDropdownRef.current.contains(event.target)
      ) {
        setIsProjectsDropdownOpen(false);
      }
      if (menuOpenRef.current && !menuOpenRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    }

    // Add event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        dholeraDropdownRef.current &&
        !dholeraDropdownRef.current.contains(event.target)
      ) {
        setIsDholeraDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    async function fetchData() {
      const blogsData = await getblogs();
      const projectsData = await getPosts();
      setBlogs(blogsData);
      setProjects(projectsData);
    }
    fetchData();
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (eventRef.current && !eventRef.current.contains(event.target)) {
        setIsEventOpen(false);
        setIsMobileEventOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (galleryRef.current && !galleryRef.current.contains(event.target)) {
        setIsGalleryOpen(false);
        setIsMobileGalleryOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (contactRef.current && !contactRef.current.contains(event.target)) {
        setIsContactOpen(false);
        setIsMobileContactOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <html lang="en">
      <head>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-7TB2TDXYX0"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || []; 
              function gtag(){ dataLayer.push(arguments); }
              gtag('js', new Date());
              gtag('config', 'G-7TB2TDXYX0'); 
            `,
          }}
        />

        <Script
          id="taboola-pixel-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            window._tfa = window._tfa || [];
            window._tfa.push({notify: 'event', name: 'page_view', id: 1829100});
          `,
          }}
        />

        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-NLL6M3PL');
          `}
        </Script>

        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NLL6M3PL"
            height="0"
            width="0"
            style="display:none;visibility:hidden"
          ></iframe>
        </noscript>

        <meta
          name="google-site-verification"
          content="w4B8pqZZDySMLUmxZYsGxeKSCsTI_aHk-myN3iKS3CU"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        ></link>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        ></link>
        <link
          rel="icon"
          type="image/ico"
          sizes="16x16"
          href="/favicon-16x16.ico"
        ></link>
        <title>Dholera Times</title>
        <meta
          name="title"
          content="Dholera Smart City Gujarat | High ROI Plots -Dholera Times"
        ></meta>
        <meta
          name="description"
          content="
Exclusive residential plots in Dholera Smart City Gujarat! Close to Dholera SIR & International Airport. Book now for high returns!"
        ></meta>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NLL6M3PL"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <nav className="fixed z-40 w-full max-sm:pt-2 max-sm:pb-2 pt-4 pb-4 bg-[#151f28]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-14 max-sm:h-16 items-center">
              <div className="flex-shrink-0">
                <Link href="/">
                  <Image
                    src={logo}
                    alt="Dholera Times Logo"
                    width={100}
                    height={100}
                  />
                </Link>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link
                    href="/"
                    className="text-white hover:text-orange-200 px-3 py-2"
                  >
                    Home
                  </Link>
                  <div className="relative" ref={dholeraDropdownRef}>
                    <button
                      onClick={toggleDholeraDropdown}
                      className="text-white hover:text-orange-200 px-3 py-2 flex items-center gap-1"
                    >
                      <Link href="/DholeraSIR">Dholera SIR</Link>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-4 w-4 text-white transition-transform duration-300 ${
                          isDholeraDropdownOpen ? "rotate-180" : ""
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {isDholeraDropdownOpen && (
                      <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-50">
                        {[
                          {
                            title: "About Dholera SIR",
                            path: "/DholeraSIR",
                          },
                          {
                            title: "Connectivity",
                            path: "/DholeraSIR/Connectivity",
                          },
                          { title: "Planning", path: "/DholeraSIR/Planning" },
                          {
                            title: "Activation Zone",
                            path: "/DholeraSIR/ActivationZone",
                          },
                          {
                            title: "ABCD Building",
                            path: "/DholeraSIR/ABCDBuilding",
                          },
                          {
                            title: "Dholera International Airport",
                            path: "/DholeraSIR/DholeraInternationalAirport",
                          },
                          {
                            title: "Expressway",
                            path: "/DholeraSIR/Expressway",
                          },
                          {
                            title: "Industrial Park",
                            path: "/DholeraSIR/IndustrialPark",
                          },
                          {
                            title: "Metro Rail",
                            path: "/DholeraSIR/MetroTrain",
                          },
                          {
                            title: "Solar Power Plant",
                            path: "/DholeraSIR/SolarPowerPlant",
                          },
                          { title: "Logistic", path: "/DholeraSIR/Logistic" },
                        ].map((item) => (
                          <Link
                            key={item.path}
                            href={item.path}
                            className="block px-4 py-2 text-black hover:bg-gray-200"
                            onClick={() => setIsDholeraDropdownOpen(false)}
                          >
                            {item.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="relative" ref={projectsDropdownRef}>
                    <button
                      onClick={toggleProjectsDropdown}
                      className="text-white hover:text-orange-200 px-3 py-2 flex items-center gap-1"
                    >
                      <Link href="/projects">Projects</Link>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-4 w-4 text-white transition-transform duration-300 ${
                          isProjectsDropdownOpen ? "rotate-180" : ""
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {isProjectsDropdownOpen && (
                      <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-50">
                        {projects
                          .filter(
                            (project) =>
                              !(Array.isArray(project.categories)
                                ? project.categories.includes("Sold Out")
                                : project.categories === "Sold Out")
                          )
                          .map((project) => (
                            <Link
                              key={project._id}
                              href={`/posts/${project.slug.current}`}
                              className="block px-4 py-2 text-black hover:bg-gray-200"
                              onClick={() => setIsProjectsDropdownOpen(false)}
                            >
                              {project.title}
                            </Link>
                          ))}
                      </div>
                    )}
                  </div>

                  <div className="relative" ref={galleryRef}>
                    <button
                      onClick={toggleGalleryDropdown}
                      className="text-white hover:text-orange-200 px-3 py-2 flex items-center gap-1"
                    >
                      Gallery
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-4 w-4 text-white transition-transform duration-300 ${
                          isGalleryOpen ? "rotate-180" : ""
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {isGalleryOpen && (
                      <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-50">
                        {[
                          {
                            title: "Video Gallery",
                            path: "/gallery/video",
                          },
                          {
                            title: "Image Gallery",
                            path: "/gallery/image",
                          },
                        ].map((item) => (
                          <Link
                            key={item.path}
                            href={item.path}
                            className="block px-4 py-2 text-black hover:bg-gray-200"
                            onClick={() => setIsGalleryOpen(false)}
                          >
                            {item.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="relative" ref={eventRef}>
                    <button
                      onClick={toggleEvent}
                      className="text-white hover:text-orange-200 px-3 py-2 flex items-center gap-1"
                    >
                      <Link href="/">Events</Link>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-4 w-4 text-white transition-transform duration-300 ${
                          isEventOpen ? "rotate-180" : ""
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {isEventOpen && (
                      <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-50">
                        {[
                          {
                            title: "Upcoming Event",
                            path: "/event/upcomingevent",
                          },
                          {
                            title: "Webinar",
                            path: "/event/webinar",
                          },
                        ].map((item) => (
                          <Link
                            key={item.path}
                            href={item.path}
                            className="block px-4 py-2 text-black hover:bg-gray-200"
                            onClick={() => setIsEventOpen(false)}
                          >
                            {item.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="relative" ref={blogsDropdownRef}>
                    <button
                      onClick={toggleBlogsDropdown}
                      className="text-white hover:text-orange-200 px-3 py-2 flex items-center gap-1"
                    >
                      <Link href="/Blogs">Blogs</Link>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-4 w-4 text-white transition-transform duration-300 ${
                          isBlogsDropdownOpen ? "rotate-180" : ""
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {isBlogsDropdownOpen && (
                      <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-50">
                        {blogs.map((blog) => (
                          <Link
                            key={blog._id}
                            href={`/posts/${blog.slug.current}`}
                            className="block px-4 py-2 text-black hover:bg-gray-200"
                            onClick={() => setIsBlogsDropdownOpen(false)}
                          >
                            {blog.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                  <Link
                    href="/about"
                    className="text-white hover:text-orange-200 px-3 py-2"
                  >
                    About Us
                  </Link>
                  <div className="relative" ref={contactRef}>
                    <button
                      onClick={toggleContactDropdown}
                      className="text-white hover:text-orange-200 px-3 py-2 flex items-center gap-1"
                    >
                      <Link href="/contact"> Contact Us</Link>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-4 w-4 text-white transition-transform duration-300 ${
                          isContactOpen ? "rotate-180" : ""
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {isContactOpen && (
                      <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-50">
                        {[
                          {
                            title: "Contact Us",
                            path: "/contact",
                          },
                          {
                            title: "Career",
                            path: "/contact/career",
                          },
                        ].map((item) => (
                          <Link
                            key={item.path}
                            href={item.path}
                            className="block px-4 py-2 text-black hover:bg-gray-200"
                            onClick={() => setIsContactOpen(false)}
                          >
                            {item.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                  <Link
                    href="/infopack"
                    className="text-white hidden hover:text-orange-200 px-3 py-2"
                  >
                    Info Pack
                  </Link>
                </div>
              </div>

              <div className="md:hidden flex items-center gap-4">
                <div className="text-[#d8b66d] mt-3 animate-bounce duration-2000 flex items-center space-x-2">
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

          {/* Mobile menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: "-100%", opacity: 0 }}
                ref={menuOpenRef}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="md:hidden bg-black/30 backdrop-blur-md fixed top-0 left-0 w-3/4 h-full z-50 p-5 overflow-y-auto"
              >
                <div className="flex justify-end"></div>
                <Link href="/" onClick={() => setIsMenuOpen(false)}>
                  <Image
                    src={logo2}
                    alt="Dholera Times Logo"
                    width={150}
                    height={150}
                  />
                </Link>
                <div className="px-7 pt-10 pb-3 text-lg space-y-4 sm:px-3">
                  <Link
                    href="/"
                    className="text-white block px-3 py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Home
                  </Link>
                  <Link
                    href="/about"
                    className="text-white block px-3 py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    About Us
                  </Link>

                  {/* Dholera SIR Dropdown */}
                  <div ref={dholeraDropdownRef} className="lg:hidden px-4 py-2">
                    <div
                      className="flex items-center justify-between text-white cursor-pointer"
                      onClick={toggleMobileDholeraDropdown}
                    >
                      <span>Dholera SIR</span>
                      {isMobileDholeraOpen ? (
                        <ChevronUp className="h-5 w-5" />
                      ) : (
                        <ChevronDown className="h-5 w-5" />
                      )}
                    </div>
                    <AnimatePresence>
                      {isMobileDholeraOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="pl-6 overflow-hidden"
                        >
                          {[
                            { title: "About Dholera SIR", path: "/DholeraSIR" },
                            {
                              title: "Connectivity",
                              path: "/DholeraSIR/Connectivity",
                            },
                            { title: "Planning", path: "/DholeraSIR/Planning" },
                            {
                              title: "Activation Zone",
                              path: "/DholeraSIR/ActivationZone",
                            },
                            {
                              title: "ABCD Building",
                              path: "/DholeraSIR/ABCDBuilding",
                            },
                            {
                              title: "Dholera International Airport",
                              path: "/DholeraSIR/DholeraInternationalAirport",
                            },
                            {
                              title: "Expressway",
                              path: "/DholeraSIR/Expressway",
                            },
                            {
                              title: "Industrial Park",
                              path: "/DholeraSIR/Industrial Park",
                            },
                            {
                              title: "Metro Rail",
                              path: "/DholeraSIR/MetroTrain",
                            },
                            {
                              title: "Solar Power Plant",
                              path: "/DholeraSIR/SolarPowerPlant",
                            },
                            { title: "Logistic", path: "/DholeraSIR/Logistic" },
                          ].map((item) => (
                            <Link
                              key={item.path}
                              href={item.path}
                              className="block px-4 py-2 text-white"
                              onClick={() => {
                                setIsMobileDholeraOpen(false);
                                setIsMenuOpen(false);
                              }}
                            >
                              {item.title}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Projects Dropdown */}
                  <div>
                    <div
                      className="flex items-center justify-between text-white px-3 py-2 cursor-pointer"
                      onClick={toggleMobileProjectsDropdown}
                    >
                      <span>Projects</span>
                      {isMobileProjectsOpen ? (
                        <ChevronUp className="h-5 w-5" />
                      ) : (
                        <ChevronDown className="h-5 w-5" />
                      )}
                    </div>
                    <AnimatePresence>
                      {isMobileProjectsOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="pl-6 overflow-hidden"
                        >
                          {projects.map((project) => (
                            <Link
                              key={project._id}
                              href={`/posts/${project.slug.current}`}
                              className="text-white font-bold hover:text-white block px-3 py-2 text-sm"
                              onClick={() => {
                                setIsMobileProjectsOpen(false);
                                setIsMenuOpen(false);
                              }}
                            >
                              {project.title}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Blogs Dropdown */}
                  <div>
                    <div
                      className="flex items-center justify-between text-white px-3 py-2 cursor-pointer"
                      onClick={toggleMobileBlogsDropdown}
                    >
                      <span>Blogs</span>
                      {isMobileBlogsOpen ? (
                        <ChevronUp className="h-5 w-5" />
                      ) : (
                        <ChevronDown className="h-5 w-5" />
                      )}
                    </div>
                    <AnimatePresence>
                      {isMobileBlogsOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="pl-6 overflow-hidden"
                        >
                          {blogs.map((blog) => (
                            <Link
                              key={blog._id}
                              href={`/posts/${blog.slug.current}`}
                              className="text-white font-bold hover:text-white block px-3 py-2 text-sm"
                              onClick={() => {
                                setIsMobileBlogsOpen(false);
                                setIsMenuOpen(false);
                              }}
                            >
                              {blog.title}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Gallery Dropdown */}
                  <div ref={galleryRef}>
                    <div
                      className="flex items-center justify-between text-white px-3 py-2 cursor-pointer"
                      onClick={toggleMobileGalleryDropdown}
                    >
                      <span>Gallery</span>
                      {isMobileGalleryOpen ? (
                        <ChevronUp className="h-5 w-5" />
                      ) : (
                        <ChevronDown className="h-5 w-5" />
                      )}
                    </div>
                    <AnimatePresence>
                      {isMobileGalleryOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="pl-6 overflow-hidden"
                        >
                          {[
                            { title: "Video Gallery", path: "/gallery/video" },
                            { title: "Image Gallery", path: "/gallery/image" },
                          ].map((item) => (
                            <Link
                              key={item.path}
                              href={item.path}
                              className="text-white font-bold hover:text-white block px-3 py-2 text-sm"
                              onClick={() => {
                                setIsMobileGalleryOpen(false);
                                setIsMenuOpen(false);
                              }}
                            >
                              {item.title}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Events Dropdown */}
                  <div ref={eventRef} className="lg:hidden px-4 py-2">
                    <div
                      className="flex items-center justify-between text-white cursor-pointer"
                      onClick={toggleMobileEvent}
                    >
                      <span>Event</span>
                      {isMobileEventOpen ? (
                        <ChevronUp className="h-5 w-5" />
                      ) : (
                        <ChevronDown className="h-5 w-5" />
                      )}
                    </div>
                    <AnimatePresence>
                      {isMobileEventOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="pl-6 overflow-hidden"
                        >
                          {[
                            {
                              title: "Upcoming Event",
                              path: "/event/upcomingevent",
                            },
                            { title: "Webinar", path: "/event/webinar" },
                          ].map((item) => (
                            <Link
                              key={item.path}
                              href={item.path}
                              className="block px-4 py-2 text-white"
                              onClick={() => {
                                setIsMobileEventOpen(false);
                                setIsMenuOpen(false);
                              }}
                            >
                              {item.title}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Contact Dropdown */}
                  <div ref={contactRef}>
                    <div
                      className="flex items-center justify-between text-white px-3 py-2 cursor-pointer"
                      onClick={toggleMobileContactDropdown}
                    >
                      <span>Contact Us</span>
                      {isMobileContactOpen ? (
                        <ChevronUp className="h-5 w-5" />
                      ) : (
                        <ChevronDown className="h-5 w-5" />
                      )}
                    </div>
                    <AnimatePresence>
                      {isMobileContactOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="pl-6 overflow-hidden"
                        >
                          {[
                            { title: "Contact Us", path: "/contact" },
                            { title: "Career", path: "/contact/career" },
                          ].map((item) => (
                            <Link
                              key={item.path}
                              href={item.path}
                              className="text-white font-bold hover:text-white block px-3 py-2 text-sm"
                              onClick={() => {
                                setIsMobileContactOpen(false);
                                setIsMenuOpen(false);
                              }}
                            >
                              {item.title}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>

        <div className="pt-20">{children}</div>
        <FloatingIcons />
        <Footer />
      </body>
    </html>
  );
}
