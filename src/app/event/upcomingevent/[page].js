// app/events/[slug]/page.js
import Image from "next/image";
import { getEventBySlug } from "@/lib/api";
import { urlForImage } from "@/lib/urlForImage";
import { PortableText } from "@portabletext/react";
import { CalendarIcon, MapPinIcon, ClockIcon, UserIcon } from "lucide-react";
import { urlFor } from "@/sanity/lib/image";

// Define the components for rendering block content
const ptComponents = {
  types: {
    image: ({ value }) => {
      return (
        <div className="relative w-full h-60 md:h-96 my-6">
          <Image
            src={urlForImage(value)}
            alt="Content Image"
            fill
            className="object-contain"
          />
        </div>
      );
    },
  },
};

// Format date for display
function formatDate(dateString) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US', options);
}

export async function generateMetadata({ params }) {
  const event = await getEventBySlug(params.slug);
  return {
    title: event?.title || 'Event Detail',
    description: `Details about ${event?.title} event`,
  };
}

export default async function EventDetailPage({ params }) {
  const event = await getEventBySlug(params.slug);
  
  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800">Event not found</h1>
          <p className="mt-4 text-gray-600">The event you're looking for doesn't exist or has been removed.</p>
        </div>
      </div>
    );
  }
  
  // Extract venue from title if possible
  const getVenue = () => {
    if (event.title.includes("in")) {
      return event.title.split("in")[1].trim();
    }
    if (event.title.includes("at")) {
      return event.title.split("at")[1].trim();
    }
    return "Contact for venue details";
  };
  
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[50vh] w-full">
        {event.mainImage ? (
          <Image
            src={urlFor(event.mainImage)}
            alt={event.title}
            fill
            className="object-cover brightness-50"
          />
        ) : (
          <div className="h-full w-full bg-gray-800"></div>
        )}
        
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          {event.categories && event.categories.length > 0 && (
            <div className="bg-red-800 text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
              {event.categories[0].title}
            </div>
          )}
          <h1 className="text-3xl md:text-5xl font-bold text-white max-w-4xl">{event.title}</h1>
        </div>
      </div>
      
      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          {/* Event Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 border-b">
            <div className="p-6 border-b md:border-b-0 md:border-r">
              <div className="flex items-center">
                <CalendarIcon className="h-5 w-5 text-red-800 mr-3" />
                <div>
                  <p className="text-sm text-gray-500">Date</p>
                  <p className="font-medium">{formatDate(event.publishedAt)}</p>
                </div>
              </div>
            </div>
            
            <div className="p-6 border-b md:border-b-0 md:border-r">
              <div className="flex items-center">
                <MapPinIcon className="h-5 w-5 text-red-800 mr-3" />
                <div>
                  <p className="text-sm text-gray-500">Venue</p>
                  <p className="font-medium">{getVenue()}</p>
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex items-center">
                <UserIcon className="h-5 w-5 text-red-800 mr-3" />
                <div>
                  <p className="text-sm text-gray-500">Organizer</p>
                  <p className="font-medium">{event.author?.name || 'Dholera Times'}</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Event Description */}
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-6">About This Event</h2>
            
            <div className="prose max-w-none">
              {event.body && <PortableText value={event.body} components={ptComponents} />}
            </div>
            
            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              {event.pdfFile && (
                <a 
                  href={event.pdfFile.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 bg-red-800 text-white text-center py-3 px-6 rounded-md hover:bg-red-900 transition font-medium"
                >
                  Download Brochure
                </a>
              )}
              
              <a 
                href="#register" 
                className="flex-1 bg-white border border-red-800 text-red-800 text-center py-3 px-6 rounded-md hover:bg-red-50 transition font-medium"
              >
                Register Now
              </a>
            </div>
          </div>
        </div>
        
        {/* Registration Form */}
        <div id="register" className="mt-12 bg-white shadow-md rounded-lg overflow-hidden p-6">
          <h2 className="text-2xl font-bold mb-6">Register for this Event</h2>
          
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input 
                  type="text" 
                  className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-red-800 focus:border-transparent"
                  placeholder="John Doe"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input 
                  type="email" 
                  className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-red-800 focus:border-transparent"
                  placeholder="john@example.com"
                  required
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input 
                  type="tel" 
                  className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-red-800 focus:border-transparent"
                  placeholder="+91 9876543210"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                <input 
                  type="text" 
                  className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-red-800 focus:border-transparent"
                  placeholder="Mumbai"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">What are you interested in?</label>
              <select className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-red-800 focus:border-transparent">
                <option value="">Select your interest</option>
                <option value="investment">Property Investment</option>
                <option value="buying">Buying Property</option>
                <option value="plots">Residential Plots</option>
                <option value="commercial">Commercial Property</option>
                <option value="information">General Information</option>
              </select>
            </div>
            
            <button 
              type="submit" 
              className="w-full bg-red-800 text-white py-3 px-6 rounded-md hover:bg-red-900 transition font-medium"
            >
              Register for Event
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}