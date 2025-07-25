"use client";
import { metadata } from "next-sanity/studio";
import { useState, useRef } from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaFileAlt,
  FaBuilding,
} from "react-icons/fa";

export default function CareerPage() {
  const [currentView, setCurrentView] = useState("jobListings");
  const [selectedJob, setSelectedJob] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });
  const fileInputRef = useRef(null);
  const [fileName, setFileName] = useState("");

  // Replace with your deployed Google Apps Script URL
  const SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbw8zO4FlKmxTM1DW0EQTivcxKbNwZ8IFhL0dse0D67Zp_TCUu-EZ1Fknha0ug9yTUMVUQ/exec";

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    experience: "",
    currentCompany: "",
    resume: null,
  });

  const jobListings = [
    {
      id: 1,
      title: "Real Estate Sales Manager",
      description:
        "We are looking for an experienced Real Estate Sales Manager to join our team.",
      skills: [
        "Good Communication",
        "Presentable",
        "Negotiation Skills",
        "Client relations",
        "Quick Adaptability",
        "Convincing Skill",
      ],
      experience: "5+ years",
      location: "Gurugram",
    },
    {
      id: 2,
      title: "Senior Sales Executive",
      description:
        "We are looking for an experienced Senior Sales Executive to join our team.",
      skills: [
        "Good Communication",
        "Presentable",
        "Negotiation Skills",
        "Client relations",
        "Quick Adaptability",
        "Convincing Skill",
      ],
      experience: "3+ years",
      location: "Gurugram",
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
      setFormData((prev) => ({
        ...prev,
        resume: file,
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
    setStatus({ type: "", message: "" });

    try {
      // Create FormData object to handle submission
      const submitData = new FormData();

      // Add all form fields
      Object.keys(formData).forEach((key) => {
        if (key !== "resume") {
          submitData.append(key, formData[key]);
        }
      });

      // Add job details
      submitData.append("jobTitle", selectedJob.title);
      submitData.append("jobId", selectedJob.id);
      submitData.append("timestamp", new Date().toISOString());

      // Add the resume file
      if (formData.resume) {
        submitData.append("resume", formData.resume);
      }

      // Use no-cors mode and form data instead of JSON
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        body: submitData,
      });

      setSubmitSuccess(true);
      setStatus({
        type: "success",
        message: "Thank you for your application! We'll get back to you soon.",
      });

      console.log("Form submitted with data:", Object.fromEntries(submitData));
    } catch (error) {
      console.error("Error submitting application:", error);
      setStatus({
        type: "error",
        message: "Something went wrong. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBackToJobs = () => {
    setCurrentView("jobListings");
    setSelectedJob(null);
    setSubmitSuccess(false);
    setStatus({ type: "", message: "" });
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      location: "",
      experience: "",
      currentCompany: "",
      resume: null,
    });
    setFileName("");
  };

  const breadcrumb = {
    "@context": "https://schema.org/",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.dholeratimes.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Contact Us",
        item: "https://www.dholeratimes.com/contact",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Career",
        item: "https://www.dholeratimes.com/contact/career",
      },
    ],
  };

  const localBuisness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Dholera Times",
    image: "",
    "@id": "",
    url: "https://www.dholeratimes.com/",
    telephone: "+91 99589 93549",
    priceRange: "10 Lac +",
    address: {
      "@type": "PostalAddress",
      streetAddress: "620,JMD Megapolis, sector-48, Sohna Road",
      addressLocality: "Gurugram",
      postalCode: "1220018",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 28.4195542,
      longitude: 77.0386216,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "10:00",
      closes: "19:30",
    },
    sameAs: [
      "https://www.facebook.com/people/Dholera-Times/61573763438050/",
      "https://x.com/dholeratimes",
      "https://www.instagram.com/dholeratimes/",
      "https://www.youtube.com/@dholeratimes",
      "https://www.linkedin.com/company/dholera-times",
      "https://www.dholeratimes.com/",
    ],
  };

  const organisation = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Dholera Times",
    alternateName: "DT",
    url: "https://www.dholeratimes.com/",
    logo: "https://www.dholeratimes.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdt.7009f759.webp&w=128&q=75",
    sameAs: [
      "https://www.facebook.com/people/Dholera-Times/61573763438050/",
      "https://x.com/dholeratimes",
      "https://www.instagram.com/dholeratimes/",
      "https://www.youtube.com/channel/UCNyUMTmsaZ4VCOzBGnS0Zgw",
      "https://www.linkedin.com/company/dholera-times",
    ],
  };

  const jobPosting = {
    "@context": "https://schema.org/",
    "@type": "JobPosting",
    title: "Portfolio Manager (Sr. Sales Executive)",
    description: `What’s the role?
You’ll be selling high-growth real estate projects to investors across Delhi-NCR.
You’ll be helping them make smart, scalable investment decisions — not just transactions.

• Should have the experience with higher ticket size (e.g - 10Lakh - 20Lakh)
• 2 years of experience in rejection handling (Sales is a plus)
• Should be able to handle 100 to 150 calls a day (Outbound Calls)
• Addressing inquiries and resolving issues within specific timeline
• Quickly assess the situation
• Should have good knowledge of Call handling
• Deliver world-class customer experience`,
    hiringOrganization: {
      "@type": "Organization",
      name: "Dholera Times",
      sameAs: "https://www.dholeratimes.com/",
      logo: "https://www.dholeratimes.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdt.7009f759.webp&w=128&q=75",
    },
    industry: "Real Estate",
    employmentType: "FULL_TIME",
    workHours: "10:30am–7:30pm",
    datePosted: "2025-06-21",
    validThrough: "2025-07-31", // You can update this as needed
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        streetAddress: "620, JMD Megapolis, Sector-48, Sohna Road",
        addressLocality: "Gurugram",
        postalCode: "122018",
        addressCountry: "IN",
      },
    },
    baseSalary: {
      "@type": "MonetaryAmount",
      currency: "INR",
      value: {
        "@type": "QuantitativeValue",
        value: 15000,
        unitText: "MONTH",
      },
    },
    responsibilities:
      "Selling high-growth real estate projects to investors across Delhi-NCR.",
    skills: [
      "Experience with high-ticket size sales (10L - 20L)",
      "2+ years of rejection handling in sales",
      "Ability to handle 100–150 outbound calls per day",
      "Issue resolution within defined timelines",
      "Strong call handling knowledge",
      "Quick situational assessment",
      "Customer experience delivery",
    ],
    qualifications: "Graduate",
    educationRequirements: "Graduate",
    experienceRequirements: "Minimum 2 years",
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organisation) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBuisness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPosting) }}
      />
      <link
        rel="canonical"
        href="https://www.dholeratimes.com/contact/career"
      />

      <title>Career at Dholera Times | Join a Trusted Real Estate Brand</title>
      <meta name="robots" content="noindex, dofollow"/>

      <meta
        name="description"
        content="Explore exciting career opportunities with Dholera Times. Join a trusted real estate group creating value in Dholera Smart City. Apply now."
      />

      <div
        className="relative h-[50vh] max-sm:h-[30vh] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')",
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold">Career</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {currentView === "jobListings" && (
          <>
            <h2 className="text-3xl font-bold text-center mb-8">
              Current Openings
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {jobListings.map((job) => (
                <div
                  key={job.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200"
                >
                  <div className="bg-blue-50 p-4 border-b border-gray-200">
                    <h3 className="text-2xl font-bold text-gray-800">
                      {job.title}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                      <FaMapMarkerAlt className="inline mr-1" /> {job.location}
                    </p>
                  </div>

                  <div className="p-4">
                    <p className="text-gray-700 mb-4">{job.description}</p>

                    <div className="mb-4">
                      <h4 className="font-bold text-gray-800 mb-2">
                        Skills Required:
                      </h4>
                      <ul className="list-disc pl-5">
                        {job.skills.map((skill, index) => (
                          <li key={index} className="text-gray-700">
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-bold text-gray-800 mb-2">
                        Experience:
                      </h4>
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
              <h2 className="text-2xl font-bold">
                Apply for: {selectedJob.title}
              </h2>
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
                  <p className="text-gray-700 mb-2">
                    Upload your resume (PDF, DOC, DOCX)
                  </p>

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
                    <p className="mt-2 text-sm text-gray-600">
                      Selected: {fileName}
                    </p>
                  )}
                </div>

                {status.type === "error" && (
                  <div className="p-4 bg-red-50 text-red-700 rounded-lg">
                    {status.message}
                  </div>
                )}

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
                      isSubmitting
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-[#d8b66d]"
                    }`}
                  >
                    {isSubmitting ? "Submitting..." : "Submit Application"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {currentView === "applicationForm" && submitSuccess && (
          <div className="max-w-xl mx-auto bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="w-20 h-20 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-6">
              <svg
                className="w-10 h-10 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Application Submitted Successfully!
            </h2>
            <p className="text-gray-600 mb-6">{status.message}</p>

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
    </div>
  );
}
