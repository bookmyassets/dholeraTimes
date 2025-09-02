"use client"
import React, { useState } from 'react'
import HOME2 from './carosuel'
import Dholera from './Dholera'
import LatestUpdates from '../Latest-updates'
import WhyDT from './WhyDT'
import AboutDT from './AboutDT'
import InvestmentTimeline from './WhyInvest'
import MegaIndustries from './MegaIndusties'
import TestimonialPagination from '../Testimonials'
import FAQS from './FAQs'
import PopupForm from './PopUpForm'
import BulkLand from '../BulkLandForm'

export default function Home2Main() {

  const [showpopForm, setpopShowForm] = useState(false);
  
  return (
    <>
        <div>
            <HOME2 openForm={() => setpopShowForm(true)} />
        </div>
        <div>
            <AboutDT/>
        </div>
        <div>
            <Dholera/>
        </div>
        <div>
          <BulkLand title="Know Today’s Best Offer" buttonName="Claim My Offer"/>
        </div>
        <div>
            <LatestUpdates/>
        </div>

        <div>
            <WhyDT/>
        </div>

        <div>
          <InvestmentTimeline/>
        </div>

        <div>
          <MegaIndustries/>
        </div>

        <div>
            <FAQS/>
        </div>
        <div>
          <TestimonialPagination/>
        </div>
        <PopupForm/>
    </>
  )
}