"use client"
import React, { useState } from 'react'
import Home2Main from './components/home2/Home2Main';

export default function page() {
  const [showForm, setShowForm] = useState(false);
  return (
    <>
      <title>Dholera Smart City Gujarat | High ROI Plots -Dholera Times</title>
      <link
          rel="canonical"
          href="https://www.dholeratimes.com"
      />
    
      <meta name='description' content='Exclusive residential plots in Dholera Smart City Gujarat! Close to Dholera SIR & International Airport. Book now for high returns!' />
      <meta name='keywords`' content='Exclusive residential plots in Dholera Smart City Gujarat! Close to Dholera SIR & International Airport. Book now for high returns!' />
        <div>
            <Home2Main openForm={() => setShowForm(true)} />
        </div>  
    </>
  )
}