import { useEffect, useRef, useState } from "react";
import { FaUser, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

export default function ContactForm({ title, headline, buttonName, onClose }) {
  const [isLoading, setIsLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [submissionCount, setSubmissionCount] = useState(0);
  const [lastSubmissionTime, setLastSubmissionTime] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");
  const [recaptchaLoaded, setRecaptchaLoaded] = useState(false);
  const [recaptchaRendered, setRecaptchaRendered] = useState(false);
  const recaptchaRef = useRef(null);
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY; // Fixed env variable name
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
        name: formData.fullName, // Changed from fullName to name
        phone: cleanPhone,
        email: formData.email || "", // Include email even if empty
        source: "Dholera Times",
        recaptchaToken: token,
        timestamp: now
      };

      console.log("Submitting payload:", payload);

      // Use the correct endpoint
      const response = await fetch("https://api.telecrm.in/enterprise/67a30ac2989f94384137c2ff/autoupdatelead", { // Use a proxy endpoint
        method: "POST",
        headers: {
          "Content-Type": "application/json",
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
        theme: "light", 
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
    <div className="relative">
      <div 
        id="contact-form-container"
        className="bg-gradient-to-b from-blue-50 to-white p-8 shadow-2xl w-full max-w-lg md:min-w-[600px] mx-auto border border-gray-200 rounded-xl"
      >
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          {title || "Contact Us"}
        </h2>
        <h2 className="text-sm font-medium text-center text-gray-800 mb-6">
          {headline || "Get in touch with us"}
        </h2>
        
        {errorMessage && (
          <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg">
            {errorMessage}
          </div>
        )}
        
        {isDisabled ? (
          <p className="text-center text-red-500 font-semibold">
            You have reached the maximum submission limit. Try again after 24 hours.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name Input */}
            <div className="relative">
              <FaUser className="absolute left-4 top-4 text-gray-500" />
              <input
                name="fullName"
                placeholder="Full Name *"
                value={formData.fullName}
                onChange={handleChange}
                required
                aria-label="Full Name (required)"
                className="w-full p-4 pl-12 rounded-xl border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition shadow-sm"
              />
            </div>

            {/* Email Input */}
            <div className="relative">
              <FaEnvelope className="absolute left-4 top-4 text-gray-500" />
              <input
                name="email"
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                aria-label="Email Address (optional)"
                className="w-full p-4 pl-12 rounded-xl border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition shadow-sm"
              />
            </div>

            {/* Phone Number Input */}
            <div className="relative">
              <FaPhoneAlt className="absolute left-4 top-4 text-gray-500" />
              <input
                name="phone"
                type="tel"
                placeholder="Phone Number *"
                value={formData.phone}
                onChange={handleChange}
                required
                aria-label="Phone Number (required)"
                className="w-full p-4 pl-12 rounded-xl border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition shadow-sm"
              />
            </div>

            {/* reCAPTCHA Container */}
            <div className="flex justify-center">
              <div ref={recaptchaRef} className="min-h-[78px]"></div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading || !recaptchaLoaded || isDisabled}
              className={`w-full p-4 text-white text-lg font-semibold rounded-xl shadow-md transition-all duration-300 ${
                isLoading || isDisabled || !recaptchaLoaded
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-[#be9233] hover:bg-[#dbaf51] hover:shadow-lg active:scale-95"
              }`}
            >
              {isLoading ? "Submitting..." : (buttonName || "Submit")}
            </button>
          </form>
        )}
      </div>

      {/* Success Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white p-8 rounded-xl max-w-md w-full shadow-lg">
            <h3 className="text-2xl font-bold text-center text-gray-800 mb-4">
              Thank You!
            </h3>
            <p className="text-center text-gray-600 mb-6">
              Your form has been submitted successfully. We'll get back to you soon.
            </p>
            <button
              onClick={() => setShowPopup(false)}
              className="w-full bg-[#be9233] hover:bg-[#dbaf51] text-white font-semibold py-3 px-4 rounded-xl transition duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}