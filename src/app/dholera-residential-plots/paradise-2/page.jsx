import React from "react";
import Hero from "./Hero";
import WestWynAboutSection from "./About";
import CommonForm from "@/app/components/CommonForm";
import PopupScroll from "@/app/components/PopUpScroll";

export default function page() {
  return (
    <>
      <link
        rel="canonical"
        href="https://www.dholeratimes.com/dholera-residential-plots/paradise-2"
      />
      <div>
        <Hero />
        <WestWynAboutSection />
        <div className="">
          <CommonForm title="Get Plots Under ₹10 Lakh at 0 KM from Dholera SIR " />
        </div>
      </div>
    </>
  );
}
