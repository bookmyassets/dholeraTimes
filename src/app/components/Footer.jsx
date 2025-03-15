import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaPhoneAlt, FaUser } from "react-icons/fa";

export default function Footer() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
  });

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

    if (!formData.fullName || !formData.phone) {
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
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_TELECRM_API_KEY}`,
          },
          body: JSON.stringify({
            fields: {
              name: formData.fullName,
              phone: formData.phone,
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
          setFormData({ fullName: "", email: "", phone: "" });
          alert("Thank you! We'll contact you soon.");
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
            Have Questions? Enquire Now
          </h2>
          <div className="grid md:grid-cols-2 ">
            {/* Form column */}
            <div>
              {isSubmitted ? (
                <div className="bg-green-800 text-white p-4 rounded-md text-center">
                  <p className="font-medium">Thank you for contacting us!</p>
                  <p className="text-sm mt-1">We'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} id="footer-form">
                  <div className="mb-4 relative flex items-center w-full">
                    <FaUser className="absolute left-4 text-gray-500" />
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-96 max-sm:w-80 p-3 pl-12 rounded-lg border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                      required
                    />
                  </div>

                  <div className="mb-4 relative flex items-center w-full">
                    <FaPhoneAlt className="absolute left-4 text-gray-500" />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-96 max-sm:w-80 p-3 pl-12 rounded-lg border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-96 max-sm:w-80 py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition duration-200"
                    disabled={isLoading}
                  >
                    {isLoading ? "Submitting..." : "Send Message"}
                  </button>
                </form>
              )}
            </div>

            {/* Info column */}

            <div className="  flex flex-col justify-center  ">
              <div className="mb-6 py-5 ">
                <h3 className="text-white text-xl max-sm:text-center font-semibold mb-3">
                  Why Contact Us?
                </h3>
                <p className="text-gray-300 text-lg md:w-[400px]">
                  Have questions about Dholera Smart City? Want to explore
                  investment opportunities? Our team is ready to assist you with
                  any inquiries about properties, development updates, or
                  investment options.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* First 3-column row with company info, links, policy */}
        <div className="grid md:grid-cols-4 md:gap-32 md:left-8 gap-12 mb-12">
          <div>
            <h3 className="text-white text-lg font-semibold mb-3">Address</h3>
            <div>
              620, JMD Megapolis, Sector-48, Sohna Road, Gurugram - 122018,
              India{" "}
            </div>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-3">
              Quick Contact
            </h3>
            <div className="flex space-x-4 mb-3">
              <a
                href="https://www.facebook.com/profile.php?id=61572970112485"
                className="text-gray-400 hover:text-white transition"
                aria-label="Facebook"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/dholeratimes/"
                className="text-gray-400 hover:text-white transition"
                aria-label="Instagram"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="https://x.com/dholeratimes"
                className="text-gray-400 hover:text-white transition"
                aria-label="Twitter"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>

              <a
                href="https://www.linkedin.com"
                className="text-gray-400 hover:text-white transition"
                aria-label="LinkedIn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  fill="currentColor"
                  className="h-6 w-6"
                  viewBox="0 0 50 50"
                >
                  <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
                </svg>
              </a>
            </div>
            <p className="text-sm mb-3">Phone: +91 99589 93549</p>
          </div>

          <div className="">
            <h3 className="text-white text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="/pages/about" className="hover:text-white transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  href="/pages/contact"
                  className="hover:text-white transition"
                >
                  Refund & Cancellation policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          <div className="">
            <h3 className="text-white text-lg font-semibold mb-4">
              Useful Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white transition">
                  Live Booking Status
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Live Site Progress
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Constructed Properties
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Second row for Connect With Us and Map in one row */}
        <div className="">
          {/* Mobile-only map */}
          <div className="md:hidden w-full h-48 rounded overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3508.9936422630562!2d77.0362407!3d28.4194487!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d23d440cffedd%3A0x77e4afa67247493e!2sBookMyAssets!5e0!3m2!1sen!2sin!4v1741251280082!5m2!1sen!2sin"
              className="w-full h-full"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Location map"
            ></iframe>
          </div>

          {/* Desktop-only map */}
          <div className="hidden md:block rounded overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3508.9936422630562!2d77.0362407!3d28.4194487!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d23d440cffedd%3A0x77e4afa67247493e!2sBookMyAssets!5e0!3m2!1sen!2sin!4v1741251280082!5m2!1sen!2sin"
              className="w-full"
              height={350}
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Location map"
            ></iframe>
          </div>
        </div>
      </div>
      <p className="text-sm text-center pt-5">
        © 2025 Dholera Times. All rights reserved.
      </p>
    </footer>
  );
}
