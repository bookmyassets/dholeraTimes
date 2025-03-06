import { useState } from "react";
import { FaUser, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

export default function ContactForm() {
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

    if (!formData.fullName || !formData.email || !formData.phone) {
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
              email: formData.email,
              phone: formData.phone,
            },
            source: "Dholera Times Website",
            tags: ["Dholera Investment", "Website Lead"],
          }),
        }
      );

      const responseText = await response.text();

      if (response.ok) {
        if (responseText === "OK" || responseText.toLowerCase().includes("success")) {
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
    <div className="bg-gradient-to-b from-blue-50 to-white p-10  shadow-2xl w-[600px] mx-auto border border-gray-200">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Enquire Now
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Full Name Input */}
        <div className="relative">
          <FaUser className="absolute left-4 top-4 text-gray-500" />
          <input
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            required
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
            required
            className="w-full p-4 pl-12 rounded-xl border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition shadow-sm"
          />
        </div>

        {/* Phone Number Input */}
        <div className="relative">
          <FaPhoneAlt className="absolute left-4 top-4 text-gray-500" />
          <input
            name="phone"
            type="tel"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full p-4 pl-12 rounded-xl border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition shadow-sm"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading}
          className={`w-full p-4 text-white text-lg font-semibold rounded-xl shadow-md transition-all duration-300
            ${isLoading 
              ? "bg-gray-400 cursor-not-allowed" 
              : "bg-blue-500 hover:bg-blue-600 hover:shadow-lg active:scale-95"
            }`}
        >
          {isLoading ? "Submitting..." : "Get a Call Back"}
        </button>
      </form>
    </div>
  );
}
