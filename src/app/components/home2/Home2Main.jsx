"use client";
import React, { useState } from "react";
import HOME2 from "./carosuel";
import Dholera from "./Dholera";
import LatestUpdates from "../Latest-updates";
import WhyDT from "./WhyDT";
import AboutDT from "./AboutDT";
import MegaIndustries from "./MegaIndusties";
import TestimonialPagination from "../Testimonials";
import FAQS from "./FAQs";
import PopupForm from "./PopUpForm";
import BulkLand from "../BulkLandForm";
import { AnimatePresence } from "framer-motion";
import BrochureDownload from "../BrochureDownload";

export default function Home2Main() {
  const [showpopForm, setpopShowForm] = useState(false);
  const [isBrochureFormOpen, setIsBrochureFormOpen] = useState(false);

  const openBrochureForm = () => {
    setIsBrochureFormOpen(true);
  };

  const closeBrochureForm = () => {
    setIsBrochureFormOpen(false);
  };

  return (
    <>
      <div>
        <HOME2 openForm={() => setpopShowForm(true)} />
      </div>
      <div>
        <AboutDT />
      </div>
      <div>
        <Dholera />
      </div>
      <div>
        <BulkLand
          title="Invest in Registry-Ready plots in Dholera under ₹10 Lakh"
          buttonName="Get A Call Back"
          pageName="Home"
        />
      </div>
      <div>
        <LatestUpdates />
      </div>

      <div>
        <WhyDT />
      </div>

      {/* <div>
        <InvestmentTimeline />
      </div> */}

      <div>
        <MegaIndustries />
      </div>

      <div>
        <FAQS />
      </div>
      <div>
        <TestimonialPagination />
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 mb-16 border border-white/20">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h2 className="text-2xl font-bold text-[#151f28] mb-3">
                🚀 Ready to Invest in Dholera SIR?
              </h2>
              <p className="text-gray-600 text-lg">
                Get expert guidance and exclusive investment opportunities
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+919958993549"
                className="bg-[#d3b36b] text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              >
                Get Free Consultation
              </a>
              <button
                onClick={openBrochureForm}
                className="border-2 border-[#151f28] text-[#d3b36b] px-8 py-3 rounded-xl font-semibold hover:bg-[#caac66] hover:text-white transition-all duration-300"
              >
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isBrochureFormOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[1000]">
            <BrochureDownload
              title="Explore verified residential plots in Dholera under ₹10 lakh"
              buttonName="Get A Call Back"
              onClose={() => setIsBrochureFormOpen(false)}
            />
          </div>
        )}
      </AnimatePresence>

      <PopupForm />
    </>
  );
}
