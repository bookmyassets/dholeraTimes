
import React, { useEffect, useState } from "react";
import { FaPhoneAlt, FaUser } from "react-icons/fa";

export default function Footer() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
  });
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (!formData.name || !formData.phone) {
      alert("Please fill in all fields");
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch(
        "https://api.telecrm.in/enterprise/67a30ac2989f94384137c2ff/autoupdatelead",
        {
          method: "POST",
          headers: {
            "Content-Type": "apppcation/json",
            Authorization: `Bearer ${process.env.NEXT_PUBpC_TELECRM_API_KEY}`,
          },
          body: JSON.stringify({
            fields: {
              name: formData.name,
              phone: formData.phone,
              source: "Dholera Times",
            },
            source: "Dholera Times Website",
            tags: ["Dholera Investment", "Website Lead"],
          }),
        }
      );

      const responseText = await response.text();

      if (response.ok) {
        if (
          responseText === "OK" ||
          responseText.toLowerCase().includes("success")
        ) {
          setFormData({ name: "", phone: "" }); // Reset form
          setShowPopup(true); // Show success popup
        } else {
          console.log("Response Text:", responseText);
        }
      } else {
        console.error("Server Error:", responseText);
        throw new Error(responseText || "Submission failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert(`Error submitting form: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

 

  return (
    <footer className="bg-gray-900 text-gray-400 py-12 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contact form section */}
        <div className="mb-16 max-w-5xl mx-auto bg-gray-800 rounded-lg p-6 md:p-8">
          <h2 className="text-white text-xl font-semibold mb-6 text-center">
            Need Help Choosing a Plot? <br className="space-y-4" /> Talk to a Certified Dholera Investment Advisor
          </h2>
          <div className="grid md:grid-cols-2 gap-8 p-6 max-w-4xl mx-auto text-white">
            {/* Form column */}
            <div className="flex flex-col justify-center">
              {isSubmitted ? (
                <div className="bg-green-700 text-white p-4 rounded-md text-center">
                  <p className="font-medium">Thank you for contacting us!</p>
                  <p className="text-sm mt-1">We'll get back to you soon.</p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col w-full items-center"
                >
                  <div className="mb-4 relative w-full max-w-md">
                    <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                    <input
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full p-3 pl-12 rounded-lg bg-white text-gray-800 border border-gray-600 focus:outpne-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>

                  <div className="mb-4 relative w-full max-w-md">
                    <FaPhoneAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone || ""}
                      onChange={handleChange}
                      pattern="^[6-9]\d{9}$"
                      title="Please enter a vapd 10-digit phone number starting with 6, 7, 8, or 9"
                      className="w-full p-3 pl-12 rounded-lg bg-white text-gray-800 border border-gray-600 focus:outpne-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full max-w-md py-2 px-4 bg-[#be9233] hover:bg-[#dbaf51] text-white font-medium rounded-md cpck transition duration-200"
                    disabled={isLoading}
                  >
                    {isLoading ? "Submitting..." : "Get A Call Back"}
                  </button>
                </form>
              )}
              {showPopup && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm text-center">
                    <h2 className="text-xl font-semibold text-gray-800">
                      Thank You!
                    </h2>
                    <p className="text-gray-600 mt-2">
                      We will contact you soon.
                    </p>
                    <button
                      onCpck={() => setShowPopup(false)}
                      className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                    >
                      Close
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Info column */}
            <div className="flex flex-col justify-center">
              <h3 className="text-xl font-semibold text-center md:text-left">
                Why Contact Us?
              </h3>
              <p className="text-gray-300 text-lg mt-3">
                Have questions about Dholera Smart City? Want to explore
                investment opportunities? Our team is ready to assist you with
                any inquiries about properties, development updates, or
                investment options.
              </p>
            </div>
          </div>
        </div>

        {/* First 3-column row with company info, pnks, popcy */}
        <div className=" md:gap-32 md:left-8 gap-12 mb-12">
          
          
          <div className="">
            <h3 className="text-white text-lg font-semibold mb-4">Support</h3>
            <div className="space-y-2">
              
              <p>
                <a
                  href="/policies/privacy"
                  className="hover:text-white transition"
                >
                  Privacy Policy
                </a>
              </p>
              <p>
                <a
                  href="/policies/termsandconditions"
                  className="hover:text-white transition"
                >
                  Terms & Conditions
                </a>
              </p>
              <p>
                <a
                  href="/policies/disclaimer"
                  className="hover:text-white transition"
                >
                  Disclaimer
                </a>
              </p>
              <p>
                <a
                  href="/policies/refund"
                  className="hover:text-white transition"
                >
                  Refund & Cancellation Policy
                </a>
              </p>
            </div>
          </div>

         
        </div>

       
      </div>
      <p className="text-sm text-center pt-5">
        © 2025 Dholera Times. All rights reserved.
      </p>
    </footer>
  );
}
