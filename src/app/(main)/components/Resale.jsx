import { useState } from "react";
import { User, Mail, Phone, Building, MapPin, MessageCircle } from "lucide-react";

export default function ContactForm({ title = "Contact Us", headline = "Fill out the form below and we'll get back to you soon", buttonName = "Submit Form" }) {
  const [isLoading, setIsLoading] = useState(false);
  const [submissionCount, setSubmissionCount] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobileNumber: "",
    projectName: "",
    plotNo: "",
    message: "",
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

    // Get submission count from memory (since localStorage isn't available)
    const currentTime = Date.now();
    
    // Validate required fields
    if (!formData.name || !formData.mobileNumber || !formData.projectName || !formData.plotNo) {
      alert("Please fill in all required fields marked with *");
      setIsLoading(false);
      return;
    }

    // Email validation if provided
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      alert("Please enter a valid email address");
      setIsLoading(false);
      return;
    }

    try {
      // Simulate API call (replace with actual API endpoint)
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Reset form on success
      setFormData({ 
        name: "", 
        email: "", 
        mobileNumber: "", 
        projectName: "", 
        plotNo: "", 
        message: "" 
      });
      setShowPopup(true);
      
      console.log("Form submitted:", formData);
      
    } catch (error) {
      console.error("Error submitting form:", error);
      alert(`Error submitting form: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center p-4">
      <div className="bg-white p-8 shadow-2xl w-full max-w-2xl mx-auto border border-gray-200 rounded-2xl">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
          {title}
        </h2>
        <p className="text-base text-center text-gray-600 mb-8">
          {headline}
        </p>
        
        {isDisabled ? (
          <p className="text-center text-red-500 font-semibold">
            You have reached the maximum submission limit. Try again after 24 hours.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Input - Required */}
            <div className="relative">
              <User className="absolute left-4 top-4 text-gray-500 w-5 h-5" />
              <input
                name="name"
                placeholder="Name *"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-4 pl-12 rounded-xl border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition shadow-sm bg-gray-50 focus:bg-white"
              />
            </div>

            {/* Email Input */}
            <div className="relative">
              <Mail className="absolute left-4 top-4 text-gray-500 w-5 h-5" />
              <input
                name="email"
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-4 pl-12 rounded-xl border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition shadow-sm bg-gray-50 focus:bg-white"
              />
            </div>

            {/* Mobile Number Input - Required */}
            <div className="relative">
              <Phone className="absolute left-4 top-4 text-gray-500 w-5 h-5" />
              <input
                name="mobileNumber"
                type="tel"
                placeholder="Mobile Number *"
                value={formData.mobileNumber}
                onChange={handleChange}
                required
                className="w-full p-4 pl-12 rounded-xl border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition shadow-sm bg-gray-50 focus:bg-white"
              />
            </div>

            {/* Project Name Input - Required */}
            <div className="relative">
              <Building className="absolute left-4 top-4 text-gray-500 w-5 h-5" />
              <input
                name="projectName"
                placeholder="Project Name *"
                value={formData.projectName}
                onChange={handleChange}
                required
                className="w-full p-4 pl-12 rounded-xl border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition shadow-sm bg-gray-50 focus:bg-white"
              />
            </div>

            {/* Plot No Input - Required */}
            <div className="relative">
              <MapPin className="absolute left-4 top-4 text-gray-500 w-5 h-5" />
              <input
                name="plotNo"
                placeholder="Plot No *"
                value={formData.plotNo}
                onChange={handleChange}
                required
                className="w-full p-4 pl-12 rounded-xl border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition shadow-sm bg-gray-50 focus:bg-white"
              />
            </div>

            {/* Message Input */}
            <div className="relative">
              <MessageCircle className="absolute left-4 top-4 text-gray-500 w-5 h-5" />
              <textarea
                name="message"
                placeholder="Message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-4 pl-12 rounded-xl border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition shadow-sm bg-gray-50 focus:bg-white resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading || isDisabled}
              className={`w-full p-4 text-white text-lg font-semibold rounded-xl shadow-lg transition-all duration-300 ${
                isLoading || isDisabled
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 hover:shadow-xl active:scale-95 transform"
              }`}
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
                  Submitting...
                </div>
              ) : (
                buttonName
              )}
            </button>
            
            <p className="text-center text-sm text-gray-500 mt-4">
              Fields marked with * are required
            </p>
            <p className="font-normal text-sm text-center text-gray-600">
              🔒 100% Privacy | ⚡ Fast Response | 👥 Personalized Support
            </p>
          </form>
        )}
      </div>

      {/* Success Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white p-8 rounded-2xl max-w-md w-full shadow-2xl transform animate-pulse">
            <div className="text-center">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
                <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Thank You!
              </h3>
               <p className="text-center text-gray-600 mb-6">
              Your form has been submitted successfully. We'll get back to you
              soon.
            </p>
            <button
              onClick={() => setShowPopup(false)}
              className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-4 rounded-xl transition duration-300"
            >
              Close
            </button>
          </div>
        </div>
        </div>
      )}
    </div>
  );
}