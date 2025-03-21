import { PortableText } from "@portabletext/react"; // Importing the correct renderer
import { urlFor } from "@/sanity/lib/image";
import { getEventBySlug } from "@/sanity/lib/api";
import {
  CalendarIcon,
  MapPinIcon,
  ClockIcon
} from "lucide-react";
import Image from "next/image";
import logo from "@/assets/dtlogobg.png"
import EventForm from "./Eventform";

// Create a client component
export default async function EventPage({ params }) {
  const { slug } = await params;
  const eventData = await getEventBySlug(slug);

  const components = {
    types: {
      image: ({ value }) => {
        if (!value?.asset?._ref) {
          return null;
        }
        return (
          <figure className="my-8">
            <img
              alt={value.alt || " "}
              src={urlFor(value).width(800).url()}
              className="w-full rounded-xl shadow-lg"
            />
            {value.caption && (
              <figcaption className="mt-2 text-center text-sm text-gray-500">
                {value.caption}
              </figcaption>
            )}
          </figure>
        );
      },
    },
    marks: {
      link: ({ children, value }) => {
        return (
          <a
            href={value.href}
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 underline decoration-blue-300 hover:decoration-blue-600 transition-colors"
          >
            {children}
          </a>
        );
      },
    },
    block: {
      h2: ({ children }) => (
        <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-800">
          {children}
        </h2>
      ),
      h3: ({ children }) => (
        <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">
          {children}
        </h3>
      ),
      normal: ({ children }) => (
        <p className="mb-6 text-gray-700 leading-relaxed">{children}</p>
      ),
      blockquote: ({ children }) => (
        <blockquote className="border-l-4 border-blue-500 pl-4 my-6 italic text-gray-700">
          {children}
        </blockquote>
      ),
    },
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero section */}
      <section className="relative h-[30vh] w-full flex justify-center items-center text-center bg-black">
        <div className="absolute inset-0 bg-gradient-to-r from-red-900 to-red-700 opacity-90"></div>
        <div className="relative text-2xl md:text-4xl text-white font-bold px-4">
          <p>{eventData.title}</p>
        </div>
      </section>

      {/* Main content */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Event details */}
          <div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-4 border-b border-gray-200">
                  Event Details
                </h2>

                <div className="space-y-6">
                  {/* Date, time, location */}
                  <div className="flex items-center text-gray-700">
                    <CalendarIcon className="h-6 w-6 text-red-800 mr-3" />
                    <p>
                      {new Date(eventData.dateOfEvent).toLocaleDateString(
                        "en-US",
                        { year: "numeric", month: "long", day: "numeric" }
                      )}
                    </p>
                  </div>

                  <div className="flex items-center text-gray-700">
                    <ClockIcon className="h-6 w-6 text-red-800 mr-3" />
                    <p>{eventData.timeOfEvent}</p>
                  </div>

                  <div className="flex items-center text-gray-700">
                    <MapPinIcon className="h-6 w-6 text-red-800 mr-3" />
                    <p>{eventData.location}</p>
                  </div>

                  {/* Description, why attend, who should attend - Using PortableText */}
                  <div className="pt-6 border-t border-gray-200">
                    <h3 className="font-bold text-gray-900 mb-3">
                      Description
                    </h3>
                    <PortableText value={eventData.description} components={components} />

                    <h3 className="font-bold text-gray-900 mb-3">
                      Why should you attend this Dholera property Event?
                    </h3>
                    <PortableText value={eventData.whyAttend} components={components} />

                    <h3 className="font-bold text-gray-900 mb-3">
                      Who needs to attend this Dholera property Event?
                    </h3>
                    <PortableText value={eventData.whoShouldAttend} components={components} />
                  </div>

                  {/* Organizer */}
                  <div className="pt-6 border-t border-gray-200">
                    <h3 className="font-bold text-gray-900 mb-3">
                      Organisers
                    </h3>
                    <div className="flex items-center">
                      <div className="h-16 w-16 bg-red-800 rounded-full flex items-center justify-center overflow-hidden mr-4">
                        <Image
                          src={logo}
                          alt="organiser img"
                        />
                      </div>
                      <div>
                        <p className="font-medium">{eventData.organizer}</p>
                        <p className="text-sm text-gray-500">
                          Name of Point Of Contact
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Registration form */}
          <div>
           <EventForm/>
          </div>
        </div>
      </div>
    </div>
  );
}
