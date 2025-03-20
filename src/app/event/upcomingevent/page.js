import Image from "next/image";
import React from "react";
import hero from "@/assets/hero5.webp";
import Link from "next/link";
import {
  CalendarIcon,
  MapPinIcon,
  ClockIcon,
  ArrowRightIcon,
} from "lucide-react";
import { getEvents } from "@/sanity/lib/api";
import { urlFor } from "@/sanity/lib/image";

// Format date for display
function formatDate(dateString) {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dateString).toLocaleDateString("en-US", options);
}

export default async function EventsPage() {
  const events = await getEvents();

  return (
    <>
      <section className="relative h-[70vh] w-full flex justify-center items-center text-center bg-black">
        <div className="absolute inset-0">
          <Image
            src={hero}
            alt="events bg"
            className="w-full h-[70vh] object-cover opacity-60"
          />
        </div>
        <div className="relative text-3xl md:text-5xl text-white font-bold px-4">
          <p>UPCOMING REAL ESTATE EVENTS</p>
          
        </div>
      </section>

      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div
              key={event._id}
              className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02] hover:shadow-lg"
            >
              <div className="relative h-52 w-full">
                {event.mainImage ? (
                  <Image
                    src={urlFor(event.mainImage).width(800).height(600).url()}
                    alt={event.title}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="h-full w-full bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-400">No image available</span>
                  </div>
                )}

                {event.categories && event.categories.length > 0 && (
                  <div className="absolute top-4 right-4 bg-red-800 text-white text-sm font-medium px-3 py-1 rounded">
                    {event.categories[0].title}
                  </div>
                )}
              </div>

              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {event.title}
                </h3>

                <div className="flex items-center text-gray-600 mb-2">
                  <CalendarIcon className="h-4 w-4 mr-2" />
                  <span className="text-sm">
                    {formatDate(event.publishedAt)}
                  </span>
                </div>

                {/* Venue information - could be extracted from title or added as a custom field */}
                <div className="flex items-center text-gray-600 mb-2">
                  <MapPinIcon className="h-4 w-4 mr-2" />
                  <span className="text-sm">
                    {event.title.includes("in")
                      ? event.title.split("in")[1].trim()
                      : "Venue Details Available on Registration"}
                  </span>
                </div>

                <div className="flex items-center text-gray-600 mb-4">
                  <ClockIcon className="h-4 w-4 mr-2" />
                  <span className="text-sm">10:00 AM - 5:00 PM</span>
                </div>

                <div className="flex justify-between items-center pt-3 border-t border-gray-200">
                  {event.author && (
                    <span className="text-sm text-gray-600">
                      Organized by: {event.author.name}
                    </span>
                  )}

                  <Link
                    href={`/event/${event.slug.current}`}
                    className="flex items-center text-red-800 font-medium hover:text-red-900"
                  >
                    <span>Details</span>
                    <ArrowRightIcon className="ml-1 h-4 w-4" />
                  </Link>
                </div>

                {event.pdfFile && (
                  <div className="mt-4">
                    <a
                      href={event.pdfFile.asset.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full text-center bg-red-800 text-white py-2 rounded hover:bg-red-900 transition"
                    >
                      Download Brochure
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
