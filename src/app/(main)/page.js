"use client"
import React, { useState } from 'react'
import NewHome from './NewHome'

export default function page() {
  const [showForm, setShowForm] = useState(false);
  return (
    <>
    <link ref="canonical" href='https://www.dholeratimes.com' />
      <title>Dholera Smart City Gujarat | High ROI Plots -Dholera Times</title>
      <meta name='description' content='Exclusive residential plots in Dholera Smart City Gujarat! Close to Dholera SIR & International Airport. Book now for high returns!' />
        <div>
            <NewHome openForm={() => setShowForm(true)} />
        </div>  
    </>
  )
}