import React from "react";
import { Users, Building, Check, Star } from "lucide-react";
import bg from "@/assets/pexels2.jpg";
import Image from "next/image";

export default function About() {
  const stats = [
    {
      value: "6",
      label: "Total No. of Projects",
      icon: <Building className="h-10 w-10" />,
    },
    {
      value: "5",
      label: "Projects Sold Out",
      icon: <Check className="h-10 w-10" />,
    },
    {
      value: "400+",
      label: "Happy NRI Clients",
      icon: <Users className="h-10 w-10" />,
    },
    {
      value: "1100+",
      label: "Happy Customers",
      icon: <Star className="h-10 w-10" />,
    },
  ];
  return (
    <>
      <section className="relative py-8 px-4">
      
      <Image
        src={bg}
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 -z-10 opacity-30"
      />
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Dholera Investment Expertise
            </h2>
            <div className="w-24 h-1 bg-yellow-600 mx-auto"></div>
            <p className="text-xl text-[#d8b66e]  mb-8">
              Your trusted partner for secure and profitable real estate
              investments
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg">
            <p className=" text-lg leading-relaxed mb-8">
              With over 8 years of real estate consulting experience, we
              specialize in guiding individual investors, NRIs, and
              professionals to make smart, secure investments in
              government-approved projects.{" "}
              <span className="text-blue-600">
                <a href="/about">Read More</a>
              </span>
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-gray-900 p-4 rounded-lg text-center transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#d8b66e]/20 flex flex-col items-center"
                >
                  <div className="text-[#d8b66e] mb-3">{stat.icon}</div>
                  <div className="text-2xl md:text-3xl font-bold text-[#d8b66e] mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm md:text-base text-gray-300">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
