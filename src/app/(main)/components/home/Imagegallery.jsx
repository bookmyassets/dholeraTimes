import React from "react";
import dholeraSIRprogress from "@/assets/dholeraSIRprogress.webp";
import dholeraSite from "@/assets/dholeraSite.webp";
import Link from "next/link";
import Image from "next/image";

export default function Imagegallery() {
  return (
    <>
      <div>
        <h2 className="text-center text-2xl font-semibold md:text-4xl mb-4 mt-8">
          Dholera Smart City Images &amp; Photos Gallery
        </h2> 
        <p className="text-center text-lg mb-4 text-[#d8b66e] ">
          <span className="font-semibold">Visual Proof of Progress.</span> From aerial shots to ground-level site
          photos, get a first-hand look at how Dholera is transforming into
          India’s most ambitious smart city.
        </p>
      </div>
      <section className=" max-w-7xl mx-auto grid grid-cols-2 gap-6 pl-2 pr-2">
        <Link
          href="/gallery/Dholera-SIR-progress"
          className="block bg-white rounded-lg shadow-2xl overflow-hidden transition-transform duration-300 hover:scale-105"
          aria-label="View photo gallery"
        >
          <div className="relative">
            <Image
              src={dholeraSIRprogress}
              alt="dholera sir progress"
              width={1200}
              height={600}
              className="w-full object-cover md:h-full"
              loading="lazy"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px"
            />
          </div>
        </Link>
        <Link
          href="/gallery/site-progress"
          className="block bg-white rounded-lg shadow-2xl overflow-hidden transition-transform duration-300 hover:scale-105"
          aria-label="View photo gallery"
        >
          <div className="relative">
            <Image
              src={dholeraSite}
              alt="dholera site progress"
              width={1200}
              height={600}
              className="w-full object-cover md:h-full"
              loading="lazy"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px"
            />
          </div>
        </Link>
      </section>
    </>
  );
}
