"use client";
import { useState, useEffect, useRef } from "react";
import { FaUser, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import Image from "next/image";
import { motion } from "framer-motion";
import logo from "@/assets/dt.webp";

export default function ContactForm({ title, headline, buttonName, onClose }) {
  const [isLoading, setIsLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [submissionCount, setSubmissionCount] = useState(0);
  const [lastSubmissionTime, setLastSubmissionTime] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");
  const [recaptchaLoaded, setRecaptchaLoaded] = useState(false);
  const [recaptchaRendered, setRecaptchaRendered] = useState(false);
  const recaptchaRef = useRef(null);
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    // Load standard reCAPTCHA script
    const loadRecaptcha = () => {
      if (typeof window !== "undefined" && !window.grecaptcha) {
        try {
          const script = document.createElement("script");
          script.src = "https://www.google.com/recaptcha/api.js";
          script.async = true;
          script.defer = true;
          script.onload = () => {
            setRecaptchaLoaded(true);
            console.log("reCAPTCHA loaded successfully");
          };
          script.onerror = () => {
            console.error("Failed to load reCAPTCHA script");
            setRecaptchaLoaded(true); // Still set as loaded so form submission can proceed as fallback
          };
          document.head.appendChild(script);
        } catch (err) {
          console.error("reCAPTCHA script loading error:", err);
          setRecaptchaLoaded(true); // Still set as loaded as fallback
        }
      } else if (window.grecaptcha) {
        setRecaptchaLoaded(true);
      }
    };

    loadRecaptcha();

    // Get submission count from localStorage
    if (typeof window !== "undefined") {
      setSubmissionCount(
        parseInt(localStorage.getItem("formSubmissionCount") || "0", 10)
      );
      setLastSubmissionTime(
        parseInt(localStorage.getItem("lastSubmissionTime") || "0", 10)
      );
    }

    // Prevent modal close when clicking inside
    const handleClickInside = (e) => {
      e.stopPropagation();
    };

    const formElement = document.getElementById("contact-form-container");
    if (formElement) {
      formElement.addEventListener("click", handleClickInside);
    }

    return () => {
      if (formElement) {
        formElement.removeEventListener("click", handleClickInside);
      }
      // Clean up reCAPTCHA
      if (window.grecaptcha && recaptchaRef.current) {
        try {
          window.grecaptcha.reset();
        } catch (e) {
          console.log("reCAPTCHA cleanup error:", e);
        }
      }
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setErrorMessage(""); // Clear error messages on input change
  };

  const validateForm = () => {
    if (!formData.fullName || !formData.phone) {
      setErrorMessage("Please fill in all required fields");
      return false;
    }
    
    // Email validation if provided
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setErrorMessage("Please enter a valid email address");
      return false;
    }
    
    // Simple phone validation
    if (!/^\d{10,15}$/.test(formData.phone.replace(/\D/g, ''))) {
      setErrorMessage("Please enter a valid phone number (10-15 digits)");
      return false;
    }
    
    // Check submission limits
    const now = Date.now();
    const hoursPassed = (now - lastSubmissionTime) / (1000 * 60 * 60);
    
    if (hoursPassed >= 24) {
      setSubmissionCount(0);
      if (typeof window !== "undefined") {
        localStorage.setItem("formSubmissionCount", "0");
        localStorage.setItem("lastSubmissionTime", now.toString());
      }
    } else if (submissionCount >= 3) {
      setErrorMessage("You have reached the maximum submission limit. Try again after 24 hours.");
      return false;
    }
    
    return true;
  };
  
  const isDisabled = submissionCount >= 3 && (Date.now() - lastSubmissionTime) / (1000 * 60 * 60) < 24;

  const onRecaptchaSuccess = async (token) => {
    console.log("reCAPTCHA token received:", token ? "✓" : "✗");
    
    try {
      const now = Date.now();
      
      // Clean phone number
      const cleanPhone = formData.phone.replace(/\D/g, '');
      
      // Prepare the payload - match the API expectations
      const payload = {
        name: formData.fullName,
        phone: cleanPhone,
        source: "Dholera Times",
      };

      console.log("Submitting payload:", payload);

      const response = await fetch("https://api.telecrm.in/enterprise/67a30ac2989f94384137c2ff/autoupdatelead", { // Use your API endpoint here
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_TELECRM_API_KEY}`,
        },
        body: JSON.stringify(payload),
      });

      let data = {};
      try {
        data = await response.json();
      } catch (jsonError) {
        console.log("Response is not JSON, status:", response.status);
      }

      console.log("API Response:", { status: response.status, data });

      if (response.ok) {
        // Success handling
        setFormData({ fullName: "", email: "", phone: "" });
        setShowPopup(true);
        setSubmissionCount((prev) => {
          const newCount = prev + 1;
          if (typeof window !== "undefined") {
            localStorage.setItem("formSubmissionCount", newCount.toString());
            localStorage.setItem("lastSubmissionTime", now.toString());
          }
          return newCount;
        });

        setTimeout(() => {
          if (onClose) onClose();
        }, 2000);
      } else {
        throw new Error(data.message || `Server error: ${response.status}`);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setErrorMessage(error.message || "Error submitting form. Please try again.");
    } finally {
      setIsLoading(false);
      
      // Reset reCAPTCHA safely
      if (window.grecaptcha && recaptchaRef.current) {
        try {
          window.grecaptcha.reset();
          setRecaptchaRendered(false);
        } catch (resetError) {
          console.log("reCAPTCHA reset error:", resetError);
        }
      }
    }
  };

  const renderRecaptcha = () => {
    if (!window.grecaptcha || !recaptchaLoaded || !siteKey) {
      console.log("reCAPTCHA not ready:", { 
        grecaptcha: !!window.grecaptcha, 
        loaded: recaptchaLoaded, 
        siteKey: !!siteKey 
      });
      return;
    }

    if (!recaptchaRef.current) {
      console.log("reCAPTCHA ref not available");
      return;
    }

    try {
      // Clear existing reCAPTCHA
      if (recaptchaRendered) {
        window.grecaptcha.reset();
      }

      // Render new reCAPTCHA
      window.grecaptcha.render(recaptchaRef.current, {
        sitekey: siteKey,
        callback: onRecaptchaSuccess,
        theme: "dark", 
        size: "normal"
      });
      
      setRecaptchaRendered(true);
      console.log("reCAPTCHA rendered successfully");
    } catch (error) {
      console.error("Error rendering reCAPTCHA:", error);
      setErrorMessage("Verification system error. Please refresh the page.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage("");

    console.log("Form submitted with data:", formData);

    if (!validateForm()) {
      setIsLoading(false);
      return;
    }

    // Check if reCAPTCHA is ready
    if (!siteKey) {
      setErrorMessage("Verification system not configured. Please contact support.");
      setIsLoading(false);
      return;
    }

    if (!recaptchaLoaded || !window.grecaptcha) {
      setErrorMessage("Verification system not loaded. Please refresh and try again.");
      setIsLoading(false);
      return;
    }

    // Render reCAPTCHA if not already rendered
    if (!recaptchaRendered) {
      renderRecaptcha();
    } else {
      // Execute existing reCAPTCHA
      try {
        window.grecaptcha.execute();
      } catch (error) {
        console.error("reCAPTCHA execute error:", error);
        renderRecaptcha(); // Try to re-render
      }
    }
  };

  return (
    <div
      className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 p-4 z-[1000]"
      onClick={onClose}
    >
      <motion.div
        id="contact-form-container"
        initial={{ scale: 0.9, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 50 }}
        className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-xl shadow-2xl border border-gray-700 max-w-md w-full relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onClose?.();
          }}
          className="absolute top-4 right-4 text-gray-400 hover:text-white focus:outline-none"
          aria-label="Close form"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M6 18L18 6M6 6l12 12" 
            />
          </svg>
        </button>

        {/* Logo */}
        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-black p-2 shadow-lg"
          >
            <Image
              src={logo}
              alt="Logo"
              width={60}
              height={60}
              className=""
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-center mb-6"
        >
          <h2 className="text-3xl font-bold text-white mb-2">
            {title || "Contact Us"}
          </h2>
          <p className="text-gray-300 text-sm">
            {headline || "Get Expert Guidance on Dholera Investment"}
          </p>
        </motion.div>

        {showPopup ? (
          <div className="text-center py-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="mb-4 inline-block"
            >
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            </motion.div>
            <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
            <p className="text-gray-300">
              Your request has been submitted successfully. We'll contact you
              shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            {errorMessage && (
              <div className="p-3 bg-red-500 bg-opacity-20 border border-red-400 text-red-100 rounded-lg text-sm">
                {errorMessage}
              </div>
            )}
            
            <div className="relative">
              <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-yellow-400" />
              <input
                name="fullName"
                placeholder="Full Name *"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full p-4 pl-12 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 border border-gray-700 hover:border-yellow-400 transition-colors"
              />
            </div>

            <div className="relative">
              <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-yellow-400" />
              <input
                name="email"
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-4 pl-12 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 border border-gray-700 hover:border-yellow-400 transition-colors"
              />
            </div>

            <div className="relative">
              <FaPhoneAlt className="absolute left-4 top-1/2 transform -translate-y-1/2 text-yellow-400" />
              <input
                name="phone"
                type="tel"
                placeholder="Phone Number *"
                value={formData.phone}
                onChange={handleChange}
                minLength="10"
                maxLength="15"
                required
                className="w-full p-4 pl-12 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 border border-gray-700 hover:border-yellow-400 transition-colors"
              />
            </div>

            {/* reCAPTCHA container */}
            <div className="flex justify-center">
              <div ref={recaptchaRef} className="min-h-[78px]"></div>
            </div>

            <button
              type="submit"
              disabled={isLoading || !recaptchaLoaded || isDisabled}
              className={`w-full py-3 px-6 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black rounded-lg hover:from-yellow-600 hover:to-yellow-700 transition-all shadow-lg hover:shadow-yellow-500/20 font-semibold ${
                isLoading || isDisabled || !recaptchaLoaded
                  ? "opacity-70 cursor-not-allowed"
                  : ""
              }`}
            >
              {isLoading ? "Submitting..." : (buttonName || "Book Consultation")}
            </button>
          </form>
        )}
      </motion.div>
    </div>
  );
}