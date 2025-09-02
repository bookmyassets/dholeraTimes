"use client";
import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { PortableText } from "next-sanity";
import { getNews, getPosts, getUpdates } from "@/sanity/lib/api";
import { urlFor } from "@/sanity/lib/image";

const BrowseUpdates = () => {
  const brandColors = {
    maroon: "#650000", // Deep maroon/burgundy background
    gold: "#d8b66e", // Bright yellow/gold for text and accents
    soldOut: "#D32F2F", // Red color for sold out indicators
  };

  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideRef = useRef(null);
  const timeoutRef = useRef(null);

  // Number of items to show based on screen size
  const [itemsToShow, setItemsToShow] = useState(1);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const fetchedProjects = await getNews();

        // Sort projects to place sold out items at the end
        const sortedProjects = fetchedProjects.sort((a, b) => {
          const aIsSoldOut =
            a.categories?.some((cat) => cat.title === "Sold Out") || false;
          const bIsSoldOut =
            b.categories?.some((cat) => cat.title === "Sold Out") || false;

          if (aIsSoldOut && !bIsSoldOut) return 1; // a is sold out, b is not, so b comes first
          if (!aIsSoldOut && bIsSoldOut) return -1; // a is not sold out, b is, so a comes first
          return 0; // maintain original order otherwise
        });

        setProjects(sortedProjects);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();

    // Handle responsive slider based on window size
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setItemsToShow(3); // Desktop: 3 items
        setIsMobile(false);
      } else if (window.innerWidth >= 768) {
        setItemsToShow(2); // Tablet: 2 items
        setIsMobile(false);
      } else {
        setItemsToShow(1); // Mobile: 1 item
        setIsMobile(true);
      }
    };

    // Set initial items to show
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up
    return () => {
      window.removeEventListener("resize", handleResize);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // Auto-slide functionality
  useEffect(() => {
    if (projects.length > 0) {
      const startAutoSlide = () => {
        timeoutRef.current = setTimeout(() => {
          nextSlide();
          startAutoSlide();
        }, 5000); // Change slide every 5 seconds
      };

      startAutoSlide();

      return () => {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
      };
    }
  }, [projects, currentIndex, itemsToShow]);

  // Add touch swipe capability for mobile
  useEffect(() => {
    if (!slideRef.current) return;

    let touchStartX = 0;
    let touchEndX = 0;

    const handleTouchStart = (e) => {
      touchStartX = e.changedTouches[0].screenX;
    };

    const handleTouchEnd = (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    };

    const handleSwipe = () => {
      // Swipe left (next)
      if (touchStartX - touchEndX > 50) {
        nextSlide();
      }

      // Swipe right (previous)
      if (touchEndX - touchStartX > 50) {
        prevSlide();
      }
    };

    const sliderElement = slideRef.current;
    sliderElement.addEventListener("touchstart", handleTouchStart, {
      passive: true,
    });
    sliderElement.addEventListener("touchend", handleTouchEnd, {
      passive: true,
    });

    return () => {
      if (sliderElement) {
        sliderElement.removeEventListener("touchstart", handleTouchStart);
        sliderElement.removeEventListener("touchend", handleTouchEnd);
      }
    };
  }, [slideRef.current, projects]);

  const nextSlide = () => {
    if (projects.length <= itemsToShow) return;

    setCurrentIndex((prevIndex) => {
      // On mobile, move one at a time
      if (isMobile) {
        return (prevIndex + 1) % projects.length;
      }
      // On larger screens, we keep the original logic
      const newIndex = (prevIndex + 1) % (projects.length - itemsToShow + 1);
      return newIndex;
    });
  };

  const prevSlide = () => {
    if (projects.length <= itemsToShow) return;

    setCurrentIndex((prevIndex) => {
      // On mobile, move one at a time
      if (isMobile) {
        return prevIndex === 0 ? projects.length - 1 : prevIndex - 1;
      }
      // On larger screens, we keep the original logic
      const newIndex =
        prevIndex === 0 ? projects.length - itemsToShow : prevIndex - 1;
      return newIndex;
    });
  };

  const goToSlide = (index) => {
    if (projects.length <= itemsToShow) return;

    // Make sure we're not going beyond the valid index range
    const maxIndex = isMobile
      ? projects.length - 1
      : projects.length - itemsToShow;

    setCurrentIndex(Math.min(index, maxIndex));
  };

  if (loading) {
    return (
      <section
        className="py-12 md:py-24 px-6 md:px-36"
        style={{ minHeight: "60vh" }}
      >
        <div className="container">
          <div
            className="flex justify-center items-center"
            style={{ minHeight: "40vh" }}
          >
            <div className="text-center">
              <div
                className="w-16 h-16 border-4 border-t-4 rounded-full animate-spin mx-auto mb-4"
                style={{
                  borderColor: `${brandColors.gold}`,
                  borderTopColor: brandColors.maroon,
                }}
              ></div>
              <p className="text-lg" style={{ color: brandColors.maroon }}>
                Loading projects...
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-8 px-6 md:px-36 bg-gray-50">
      <div className="container mx-auto">
        <div className="w-full px-2 mb-10 text-center">
          <h3
            className="font-bold text-2xl md:text-3xl lg:text-4xl mb-3 relative inline-block pb-2"
            style={{ color: brandColors.maroon }}
          >
            Breaking News on Dholera Smart City &amp; Dholera SIR – Verified &amp; <span className="text-blue-400"><a href="/Dholera-Updates/latest-news"> Latest Update.</a></span>
            <span
              className="absolute bottom-0 left-1/4 right-1/4 h-1 rounded-full"
              style={{ backgroundColor: brandColors.gold }}
            ></span>
          </h3>
          <p className="text-sm md:text-base max-w-2xl mx-auto text-gray-600 mt-4">
          From government approvals to infrastructure progress and corporate investments — we bring you verified news that
          matters to every smart investor.
          </p>
        </div>

        {projects.length > 0 && (
          <div className="px-4 relative">
            {/* Navigation arrows */}
            {projects.length > itemsToShow && (
              <>
                <button
                  onClick={prevSlide}
                  className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:shadow-lg transition-all"
                  style={{ color: brandColors.maroon }}
                  aria-label="Previous slide"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:shadow-lg transition-all"
                  style={{ color: brandColors.maroon }}
                  aria-label="Next slide"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </>
            )}

            {/* Slider container */}
            <div className="overflow-hidden">
              <div
                ref={slideRef}
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: isMobile
                    ? `translateX(-${currentIndex * (100 / projects.length)}%)`
                    : `translateX(-${currentIndex * (100 / itemsToShow)}%)`,
                  width: isMobile
                    ? `${projects.length * 100}%`
                    : `${(projects.length / itemsToShow) * 100}%`,
                }}
              >
                {projects.map((project) => (
                  <div
                    key={project._id}
                    className="px-2"
                    style={{
                      width: isMobile
                        ? `${100 / projects.length}%`
                        : `${(100 / projects.length) * itemsToShow}%`,
                    }}
                  >
                    <div className="rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:shadow-xl hover:-translate-y-1 h-full bg-white">
                      <div className="relative h-64">
                        {project.mainImage && (
                          <img
                            src={urlFor(project.mainImage)
                              .width(600)
                              .height(400)
                              .url()}
                            alt={project.title}
                            className="w-full h-full object-cover"
                          />
                        )}
                      </div>

                      <div className="p-5">
                        <h3
                          className="text-xl font-bold mb-3 line-clamp-2"
                          style={{ color: brandColors.maroon }}
                        >
                          {project.title}
                          {project.categories?.some(
                            (cat) => cat.title === "Sold Out"
                          ) && (
                            <span
                              className="ml-2 text-sm font-normal"
                              style={{ color: brandColors.soldOut }}
                            >
                              (Sold Out)
                            </span>
                          )}
                        </h3>

                        <Link
                          href={`/dholera-updates/latest-updates/${project.slug?.current}`}
                          passHref
                        >
                            <button
                              className="w-full px-4 py-2 text-white transition-colors duration-300 rounded-md hover:opacity-90  mt-8"
                              style={{ backgroundColor: brandColors.gold }}
                            >
                              Read More
                            </button>
                          </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dots navigation */}
            {projects.length > itemsToShow && (
              <div className="flex justify-center mt-6 space-x-2">
                {Array.from({
                  // For mobile, we need dots for each slide
                  // For desktop, we need dots for each group of slides
                  length: isMobile
                    ? projects.length
                    : projects.length - itemsToShow + 1,
                }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      currentIndex === index
                        ? "bg-current"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                    style={{
                      color: currentIndex === index ? brandColors.maroon : "",
                    }}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default BrowseUpdates;