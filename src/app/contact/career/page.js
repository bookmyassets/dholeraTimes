"use client"
import { useState, useRef } from "react";
import { FaUser, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaFileAlt, FaBuilding } from "react-icons/fa";


export default function CareerPage() {
  const [currentView, setCurrentView] = useState("jobListings");
  const [selectedJob, setSelectedJob] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const fileInputRef = useRef(null);
  const [fileName, setFileName] = useState("");
  
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    experience: "",
    currentCompany: "",
    resume: null
  });

  const jobListings = [
    {
      id: 1,
      title: "Portfolio Manager",
      description: "We are looking for an experienced Portfolio Manager to join our team.",
      skills: ["Financial analysis", "Investment management", "Client relations"],
      experience: "5+ years",
      location: "Gurugram"
    },
    {
      id: 2,
      title: "Sales Executive (Portfolio Manager)",
      description: "About the company: Dholera Times is a leading investment advisory firm specializing in Dholera SIR investments.",
      skills: ["Sales", "Financial products", "Client acquisition", "Investment advisory"],
      experience: "3+ years",
      location: "Gurugram"
    }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
      setFormData(prev => ({
        ...prev,
        resume: file
      }));
    }
  };

  const handleJobSelect = (job) => {
    setSelectedJob(job);
    setCurrentView("applicationForm");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Create FormData object to handle file upload
      const submitData = new FormData();
      
      // Add all form fields
      Object.keys(formData).forEach(key => {
        if (key !== 'resume') {
          submitData.append(key, formData[key]);
        }
      });
      
      // Add job details
      submitData.append('jobTitle', selectedJob.title);
      submitData.append('jobId', selectedJob.id);
      
      // Add the resume file
      if (formData.resume) {
        submitData.append('resume', formData.resume);
      }

      // In a real application, you would send this to your backend
      // const response = await fetch('/api/job-applications', {
      //   method: 'POST',
      //   body: submitData
      // });
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Reset form after successful submission
      setSubmitSuccess(true);
      
      // Log the data (for demonstration purposes)
      console.log("Form submitted with data:", Object.fromEntries(submitData));
      
    } catch (error) {
      console.error("Error submitting application:", error);
      alert("There was an error submitting your application. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBackToJobs = () => {
    setCurrentView("jobListings");
    setSelectedJob(null);
    setSubmitSuccess(false);
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      location: "",
      experience: "",
      currentCompany: "",
      resume: null
    });
    setFileName("");
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      
      
      {/* Banner */}
      <div className="relative h-48 md:h-72 bg-cover bg-center" 
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h2 className="text-white text-4xl md:text-5xl font-bold">Career</h2>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        {currentView === "jobListings" && (
          <>
            <h2 className="text-3xl font-bold text-center mb-8">Current Openings</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {jobListings.map(job => (
                <div key={job.id} className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
                  <div className="bg-blue-50 p-4 border-b border-gray-200">
                    <h3 className="text-2xl font-bold text-gray-800">{job.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">
                      <FaMapMarkerAlt className="inline mr-1" /> {job.location}
                    </p>
                  </div>
                  
                  <div className="p-4">
                    <p className="text-gray-700 mb-4">{job.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-bold text-gray-800 mb-2">Skills Required:</h4>
                      <ul className="list-disc pl-5">
                        {job.skills.map((skill, index) => (
                          <li key={index} className="text-gray-700">{skill}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="font-bold text-gray-800 mb-2">Experience:</h4>
                      <p className="text-gray-700">{job.experience}</p>
                    </div>
                    
                    <button 
                      onClick={() => handleJobSelect(job)}
                      className="w-full py-3 bg-[#d8b66d] text-white font-bold rounded-lg 
                               transition duration-300 shadow-md"
                    >
                      Apply Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
        
        {currentView === "applicationForm" && !submitSuccess && (
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-gray-800 text-white p-4">
              <h2 className="text-2xl font-bold">Apply for: {selectedJob.title}</h2>
            </div>
            
            <div className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative">
                  <FaUser className="absolute left-4 top-4 text-gray-500" />
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Full Name"
                    required
                    className="w-full p-4 pl-12 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                  />
                </div>
                
                <div className="relative">
                  <FaEnvelope className="absolute left-4 top-4 text-gray-500" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    required
                    className="w-full p-4 pl-12 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                  />
                </div>
                
                <div className="relative">
                  <FaPhoneAlt className="absolute left-4 top-4 text-gray-500" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    required
                    className="w-full p-4 pl-12 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                  />
                </div>
                
                <div className="relative">
                  <FaMapMarkerAlt className="absolute left-4 top-4 text-gray-500" />
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="Current Location"
                    required
                    className="w-full p-4 pl-12 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                  />
                </div>
                
                <div className="relative">
                  <FaBuilding className="absolute left-4 top-4 text-gray-500" />
                  <input
                    type="text"
                    name="currentCompany"
                    value={formData.currentCompany}
                    onChange={handleChange}
                    placeholder="Current Company (if any)"
                    className="w-full p-4 pl-12 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                  />
                </div>
                
                <div className="relative">
                  <input
                    type="text"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    placeholder="Years of Experience"
                    required
                    className="w-full p-4 pl-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                  />
                </div>
                
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <FaFileAlt className="mx-auto text-gray-400 text-3xl mb-2" />
                  <p className="text-gray-700 mb-2">Upload your resume (PDF, DOC, DOCX)</p>
                  
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx"
                    className="hidden"
                  />
                  
                  <button
                    type="button"
                    onClick={() => fileInputRef.current.click()}
                    className="bg-blue-100 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-200 transition"
                  >
                    Choose File
                  </button>
                  
                  {fileName && (
                    <p className="mt-2 text-sm text-gray-600">Selected: {fileName}</p>
                  )}
                </div>
                
                <div className="flex space-x-4">
                  <button
                    type="button"
                    onClick={handleBackToJobs}
                    className="flex-1 py-3 bg-gray-300 text-gray-700 font-bold rounded-lg hover:bg-gray-400 transition"
                  >
                    Back to Jobs
                  </button>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`flex-1 py-3 text-white font-bold rounded-lg transition ${
                      isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#d8b66d]'
                    }`}
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Application'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
        
        {currentView === "applicationForm" && submitSuccess && (
          <div className="max-w-xl mx-auto bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="w-20 h-20 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-6">
              <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Application Submitted Successfully!</h2>
            <p className="text-gray-600 mb-6">Thank you for applying. We will review your application and contact you soon.</p>
            
            <button
              onClick={handleBackToJobs}
              className="px-6 py-3 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition"
            >
              Back to Job Listings
            </button>
          </div>
        )}
      </div>
      
      {/* Footer */}
      <div className="bg-gray-800 text-white p-4 text-center text-sm">
        <p>© 2025 Dholera Times. All rights reserved.</p>
        <p>Ref. Link: https://www.dholeratimes.com/career</p>
      </div>
    </div>
  );
}