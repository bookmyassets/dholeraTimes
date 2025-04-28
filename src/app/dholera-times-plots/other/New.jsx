import React from "react";
import abcd from "@/assets/ABCD-Building-3.webp"


export default function New() {
  return (
    <>
      <section className="relative md:h-96 w-full h-[50vh] overflow-hidden">
        <Image
          src={abcd}
          alt="Dholera Skyline"
          className="object-cover w-full h-[50vh]"
          priority
        />
        <div className="flex flex-col md:flex-row justify-center items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <div className="bg-[#d7b36c] text-[#151f28] text-sm font-bold py-1 px-3 rounded-full inline-block mb-4">
                LIMITED PLOTS AVAILABLE
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Invest in India's First Smart City
              </h1>
              <h2 className="text-xl md:text-2xl mb-6">
                Secure premium plots in Dholera SIR before prices surge -
                projected 5x growth by 2030
              </h2>
              <div className="flex flex-col sm:flex-row gap-4">
                
                <Link href="/infopack/videos" className="bg-transparent border-2 border-white text-white font-bold py-3 px-6 rounded shadow-lg hover:bg-white hover:text-[#151f28] transition cursor-pointer">
                  Watch Project Video
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <ContactForm
                title="Reserve Your Plot Today"
                buttonName="GET PLOT DETAILS NOW"
              />
            </div>
          </div>
      </section>

      <div>

      </div>
    </>
  );
}
