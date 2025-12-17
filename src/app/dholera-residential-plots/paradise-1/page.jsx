import React from 'react'
import Hero from './Hero'
import WestWynAboutSection from './About'
import CommonForm from '@/app/components/CommonForm'


export default function page() {
  return (
    <>
        <div>
            <Hero/>
            <WestWynAboutSection/>
            <div className="">
              <CommonForm title="Get Plots Under ₹10 Lakh at 0 KM from Dholera SIR " />
            </div>
        </div>
    </>
  )
}
