"use client"
import React, { useState } from 'react'
import NewHome from './NewHome'
import Popup from './components/Pop';

export default function page() {
  const [showForm, setShowForm] = useState(false);
  return (
    <>
      <title>Dholera Smart City Gujarat | High ROI Plots -Dholera Times</title>
      <meta name='description' content='Exclusive residential plots in Dholera Smart City Gujarat! Close to Dholera SIR & International Airport. Book now for high returns!' />
        <div>
            <NewHome openForm={() => setShowForm(true)} />
        </div>  
        {showForm && (
        <Popup
          onClose={() => setShowForm(false)}
          title={`Exclusive Deal: Own a plot at ₹9,250/sq. yard — hurry, limited units! –  left`}
          buttonName="Speak with a Plot Specialist"
          className="font-medium"
        />
      )}
    </>
  )
}