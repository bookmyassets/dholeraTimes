"use client";
import { useState, useEffect } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Monitor,
  ShoppingBag,
  BarChart3,
  Paintbrush,
  Instagram,
  Video,
  Search,
} from "lucide-react";
import Link from "next/link";
import "./globals.css";
import logo from "@/assets/dtLogo.png";
import Image from "next/image";
import Footer from "./components/Footer";
import FloatingIcons from "./components/Floating";
import { getPosts, getblogs } from "@/sanity/lib/api";

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
  const [blogs, setBlogs] = useState([]);
  const [projects, setProjects] = useState([]);

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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Close dropdowns when main menu is closed
    setIsBlogsDropdownOpen(false);
    setIsProjectsDropdownOpen(false);
  };

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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav className="fixed z-40 w-full pt-4 pb-4 bg-[#151f28]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              <div className="flex-shrink-0">
                <Link href="/">
                  <Image src={logo} alt="logo" width={100} height={50} />
                </Link>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link
                    href="/pages/about"
                    className="text-white hover:text-orange-200 px-3 py-2"
                  >
                    About
                  </Link>
                  <Link
                    href="/pages/dholeraSIR"
                    className="text-white hover:text-orange-200 px-3 py-2"
                  >
                    Dholera SIR
                  </Link>
                  {/* Blogs Dropdown */}
                  <div className="relative ">
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
                          >
                            {blog.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Projects Dropdown */}
                  <div className="relative">
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
                        {projects.map((project) => (
                          <Link
                            key={project._id}
                            href={`/posts/${project.slug.current}`}
                            className="block px-4 py-2 text-black hover:bg-gray-200"
                          >
                            {project.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                  <Link
                    href="/pages/contact"
                    className="text-white hover:text-orange-200 px-3 py-2"
                  >
                    Contact
                  </Link>
                </div>
              </div>

              <div className="md:hidden">
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
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="md:hidden bg-black/30 backdrop-blur-md fixed top-0 left-0 w-3/4 h-full z-50 p-5"
              >
                <div className="flex justify-end" onClick={toggleMenu}></div>
                <Link href="/">
                  <Image src={logo} alt="logo" width={100} height={50} />
                </Link>
                <div className="px-7 pt-20 pb-3 text-lg space-y-4 sm:px-3">
                  <Link href="/" className="text-white block px-3 py-2">
                    Home
                  </Link>
                  <Link
                    href="/pages/about"
                    className="text-white block px-3 py-2"
                  >
                    About
                  </Link>
                  <Link
                    href="/pages/dholeraSIR"
                    className="text-white block px-3 py-2"
                  >
                    Dholera SIR
                  </Link>
                  <Link
                    href="/pages/Blogs"
                    className="text-white block px-3 py-2"
                  >
                    Blogs
                  </Link>
                  <Link
                    href="/pages/projects"
                    className="text-white block px-3 py-2"
                  >
                    Projects
                  </Link>
                  <Link
                    href="/pages/contact"
                    className="text-white block px-3 py-2"
                  >
                    Contact
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
