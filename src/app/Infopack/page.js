import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from "@/assets/dt.webp";

export default function Info() {
  const items = [
    { 
      id: 1, 
      title: "Locations", 
      description: "Explore strategic areas in Dholera Smart City", 
      link: "/infopack/locations"
    },
    { 
      id: 2, 
      title: "Videos", 
      description: "Watch informative videos about development", 
      link: "/infopack/videos"
    },
    { 
      id: 3, 
      title: "Brochure", 
      description: "Download detailed project brochures", 
      link: "/infopack/Brochure"
    },
    { 
      id: 4, 
      title: "Inventory", 
      description: "Browse available properties and plots", 
      link: "/infopack/Inventory"
    }
  ]

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Explore Dholera
          </h1>
          <p className="mt-4 text-xl text-gray-500">
            Discover strategic investment opportunities in India's first planned smart city
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
              <Link href={item.link} className="block">
                <div className="relative h-64 w-full">
                  <Image
                    src={logo}
                    alt={`${item.title}`}
                    fill
                    className="object-contain p-4"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-medium text-gray-900">{item.title}</h3>
                  <p className="mt-2 text-sm text-gray-500">{item.description}</p>
                  <div className="mt-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                      View Details
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}