import React from "react";
import Hero from "./Hero";
import WestWynAboutSection from "./About";
import WestWynEstate from "./WhyInvest";
import ProjectAmenities from "./Amenities";
import FAQS from "./FAQs";
import CommonForm from "@/app/components/CommonForm";

export default function page() {
  return (
    <>
      <div>
        <Hero />
        <div className="md:hidden">
          <CommonForm title="Get Plots Under ₹10 Lakh at 0 KM from Dholera SIR " />
        </div>
        <WestWynAboutSection />
        <div className="max-sm:hidden">
          <CommonForm title="Get Plots Under ₹10 Lakh at 0 KM from Dholera SIR " />
        </div>
        <WestWynEstate />
        <ProjectAmenities />
        <FAQS />
      </div>
    </>
  );
}
