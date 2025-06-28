"use client";
import React, { useEffect, useState } from "react";

const formatTime = (seconds) => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
};

export default function Notifications({ onClose }) {
  const [updatesYes, setUpdatesYes] = useState(false);
  const [timeLeft, setTimeLeft] = useState(1800);
  const [showForm, setShowForm] = useState(false);
  const [showFormPopup, setShowFormPopup] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
  });

  // Show popup after 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFormPopup(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Timer for form
  useEffect(() => {
    let timer;
    if (showForm && !submitSuccess) { // Stop timer when success
      setTimeLeft(1800);
      timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [showForm, submitSuccess]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setStatus({ type: "", message: "" });
  };

  const handleClose = () => {
    setShowFormPopup(false);
    if (onClose && typeof onClose === "function") {
      onClose();
    }
  };

  const handleSuccessClose = () => {
    setSubmitSuccess(false);
    setShowForm(false);
    handleClose();
  };

  const validateForm = () => {
    if (!formData.fullName || !formData.phone) {
      setStatus({
        type: "error",
        message: "Please fill in all required fields",
      });
      return false;
    }

    if (!/^\d{10,15}$/.test(formData.phone.replace(/\D/g, ""))) {
      setStatus({
        type: "error",
        message: "Please enter a valid phone number (10-15 digits)",
      });
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    if (!validateForm()) {
      setIsSubmitting(false);
      return;
    }

    try {
      const timestamp = new Date().toISOString();
      const sheetData = {
        timestamp,
        name: formData.fullName,
        phone: formData.phone,
        source: "Whatsapp notification",
      };

      const response = await fetch("/api/schedule-whatsapp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(sheetData),
      });

      let responseData;
      const contentType = response.headers.get("content-type");

      if (contentType && contentType.includes("application/json")) {
        responseData = await response.json();
      } else {
        responseData = { message: await response.text() };
      }

      if (!response.ok) {
        const errorMessage =
          responseData?.message ||
          responseData?.error ||
          `Server error: ${response.status} ${response.statusText}`;
        throw new Error(errorMessage);
      }

      setSubmitSuccess(true);
      setFormData({
        fullName: "",
        phone: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      let errorMessage = "Something went wrong. Please try again later.";

      if (error.name === "TypeError" && error.message.includes("fetch")) {
        errorMessage = "Network error. Please check your internet connection.";
      } else if (error.message.includes("404")) {
        errorMessage = "API endpoint not found. Please contact support.";
      } else if (error.message.includes("500")) {
        errorMessage = "Server error. Please try again later.";
      } else if (error.message) {
        errorMessage = error.message;
      }

      setStatus({
        type: "error",
        message: errorMessage,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!showFormPopup) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        {submitSuccess ? (
          <div className="text-center">
            <div className="mb-4">
              <svg
                className="mx-auto h-12 w-12 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3 className="text-lg font-medium mb-2">Success!</h3>
            <p className="mb-4">Thank you for your interest! We'll contact you soon.</p>
            <button
              onClick={handleSuccessClose}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Close
            </button>
          </div>
        ) : !showForm ? (
          <>
            <h3 className="text-lg font-medium mb-4">
              Want to receive daily updates?
            </h3>
            <div className="flex space-x-4">
              <button
                onClick={() => {
                  setUpdatesYes(true);
                  setShowForm(true);
                }}
                className="flex-1 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Yes
              </button>
              <button
                onClick={handleClose}
                className="flex-1 px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400"
              >
                No
              </button>
            </div>
          </>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <h3 className="text-lg font-medium mb-2">Enter your details</h3>
              <p className="text-sm text-gray-500 mb-3">
                Form will expire in: {formatTime(timeLeft)}
              </p>
              {status.type && (
                <div
                  className={`mb-3 p-2 rounded ${
                    status.type === "error" ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700"
                  }`}
                >
                  {status.message}
                </div>
              )}
              <div className="mb-3">
                <label className="block mb-1 font-medium">Name:</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Enter your name"
                  className="w-full px-3 py-2 border rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1 font-medium">Phone Number:</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Enter your phone number"
                  className="w-full px-3 py-2 border rounded"
                  required
                />
              </div>
              <div className="flex space-x-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`flex-1 px-4 py-2 text-white rounded ${
                    isSubmitting ? "bg-green-400" : "bg-green-500 hover:bg-green-600"
                  }`}
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>
                <button
                  type="button"
                  onClick={handleClose}
                  className="flex-1 px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400"
                >
                  Cancel
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}