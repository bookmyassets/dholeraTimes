"use client";
import { useState, useEffect, useRef } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";
import "./globals.css";
import logo from "@/assets/dt.webp";
import Image from "next/image";
import Footer from "./components/Footer";
import FloatingIcons from "./components/Floating";
import { getPosts, getblogs } from "@/sanity/lib/api";
import { usePathname } from "next/navigation";
import { initFacebookPixel, trackPageView } from "@/lib/fbpixel";
import call from "@/assets/call.svg";

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

  const toggleDholeraDropdown = () => {
    setIsDholeraDropdownOpen(!isDholeraDropdownOpen);
  };

  const toggleMobileDholeraDropdown = () => {
    setIsMobileDholeraOpen(!isMobileDholeraOpen);
  };

  const toggleBlogsDropdown = () => {
    setIsBlogsDropdownOpen(!isBlogsDropdownOpen);
    // Close other dropdowns
    setIsProjectsDropdownOpen(false);
  };

  const toggleProjectsDropdown = () => {
    setIsProjectsDropdownOpen(!isProjectsDropdownOpen);
    // Close other dropdowns
    setIsBlogsDropdownOpen(false);
  };

  const toggleMobileBlogsDropdown = () => {
    setIsMobileBlogsOpen(!isMobileBlogsOpen);
    // Close other mobile dropdown
    setIsMobileProjectsOpen(false);
  };

  const toggleMobileProjectsDropdown = () => {
    setIsMobileProjectsOpen(!isMobileProjectsOpen);
    // Close other mobile dropdown
    setIsMobileBlogsOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Close dropdowns when main menu is closed
    setIsBlogsDropdownOpen(false);
    setIsProjectsDropdownOpen(false);
    setIsMobileBlogsOpen(false);
    setIsMobileProjectsOpen(false);
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

  return (
    <html lang="en">
      <head>
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
        <link rel="manifest" href="/site.webmanifest"></link>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav className="fixed z-40 w-full max-sm:pt-2 max-sm:pb-2 pt-4 pb-4 bg-[#151f28]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              <div className="flex-shrink-0">
                <Link href="/">
                  <Image src={logo} alt="logo" width={100} height={100} />
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
                      <Link href="/DholeraSIR/About">Dholera SIR</Link>
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
                            path: "/DholeraSIR/About",
                          },
                          {
                            title: "Connectivity",
                            path: "/DholeraSIR/Connectivity",
                          },
                          {
                            title: "Planning",
                            path: "/DholeraSIR/Planning",
                          },
                          {
                            title: "Activation Zone",
                            path: "/DholeraSIR/ActivationZone",
                          },
                          {
                            title: "Infrastructure",
                            path: "/DholeraSIR/Infrastructure",
                          },
                          {
                            title: "Logistic",
                            path: "/DholeraSIR/Logistic",
                          },
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
                      <Link href="/pages/projects">Projects</Link>
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

                  <Link
                    href="#"
                    className="text-white hover:text-orange-200 px-3 py-2"
                  >
                    Gallery
                  </Link>
                  <div className="relative" ref={blogsDropdownRef}>
                    <button
                      onClick={toggleBlogsDropdown}
                      className="text-white hover:text-orange-200 px-3 py-2 flex items-center gap-1"
                    >
                      <Link href="/pages/Blogs">Blogs</Link>
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
                    href="/pages/about"
                    className="text-white hover:text-orange-200 px-3 py-2"
                  >
                    About Us
                  </Link>
                  <Link
                    href="/pages/contact"
                    className="text-white hover:text-orange-200 px-3 py-2"
                  >
                    Contact Us
                  </Link>
                  <Link
                    href="/infopack"
                    className="text-white hidden hover:text-orange-200 px-3 py-2"
                  >
                    Info Pack
                  </Link>
                </div>
              </div>

              <div className="md:hidden flex items-center  gap-4">
                <div className=" text-[#d8b66d] animate-bounce duration-2000 flex items-center space-x-2">
                  <Link
                    href="tel:+919958993549"
                    className="flex items-center space-x-2"
                  >
                    <Image
                      src={call}
                      alt="call"
                      height={30}
                      width={30}
                      className=""
                    />
                    <p>Call Us</p>
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
                <div className="flex justify-end" onClick={toggleMenu}></div>
                <Link href="/">
                  <Image src={logo} alt="logo" width={100} height={100} />
                </Link>
                <div className="px-7 pt-20 pb-3 text-lg space-y-4 sm:px-3">
                  <Link
                    href="/"
                    className="text-white block px-3 py-2"
                    onClick={toggleMenu}
                  >
                    Home
                  </Link>
                  <Link
                    href="/pages/about"
                    className="text-white block px-3 py-2"
                    onClick={toggleMenu}
                  >
                    About Us
                  </Link>
                  <div ref={dholeraDropdownRef} className="lg:hidden px-4 py-2">
                    <div
                      className="flex items-center justify-between text-white  cursor-pointer"
                      onClick={toggleMobileDholeraDropdown}
                    >
                      <Link href="/DholeraSIR/About">Dholera SIR</Link>
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
                            {
                              title: "About Dholera SIR",
                              path: "/DholeraSIR/About",
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
                              title: "Infrastructure",
                              path: "/DholeraSIR/Infrastructure",
                            },
                            { title: "Logistic", path: "/DholeraSIR/Logistic" },
                          ].map((item) => (
                            <Link
                              key={item.path}
                              href={item.path}
                              className="block px-4 py-2 text-white"
                              onClick={() => setIsMobileDholeraOpen(false)}
                            >
                              {item.title}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <div>
                    <div
                      className="flex items-center justify-between text-white px-3 py-2 cursor-pointer"
                      onClick={toggleMobileProjectsDropdown}
                    >
                      <Link href="/pages/projects">Projects</Link>
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
                              onClick={toggleMenu}
                            >
                              {project.title}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Mobile Blogs Dropdown */}
                  <div>
                    <div
                      className="flex items-center justify-between text-white px-3 py-2 cursor-pointer"
                      onClick={toggleMobileBlogsDropdown}
                    >
                      <Link href="/pages/Blogs">Blogs</Link>
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
                              onClick={toggleMenu}
                            >
                              {blog.title}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <Link
                    href="#"
                    className="text-white block px-3 py-2"
                    onClick={toggleMenu}
                  >
                    Gallery
                  </Link>
                  <Link
                    href="/pages/contact"
                    className="text-white block px-3 py-2"
                    onClick={toggleMenu}
                  >
                    Contact Us
                  </Link>
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
