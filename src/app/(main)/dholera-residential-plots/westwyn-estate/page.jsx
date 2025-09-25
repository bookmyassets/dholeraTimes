import React from 'react'
import Hero from './Hero'
import WestWynAboutSection from './About'
import WestWynEstate from './WhyInvest'
import ProjectAmenities from './Amenities'

export default function page() {
  return (
    <>
        <div>
            <Hero/>
            <WestWynAboutSection/>
            <WestWynEstate/>
            <ProjectAmenities/>
        </div>
    </>
  )
}
