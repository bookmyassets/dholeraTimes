import React from 'react'
import NewHome from './NewHome'

export const metadata = {
  title: 'Dholera Smart City Gujarat | High ROI Plots -Dholera Times',
  description: 'Exclusive residential plots in Dholera Smart City Gujarat! Close to Dholera SIR & International Airport. Book now for high returns!',
  /* keywords: ['Next.js', 'App Router', 'SEO', 'Naman'],
  openGraph: {
    title: 'Home | Naman’s App',
    description: 'Welcome to the homepage of Naman’s awesome app.',
    url: 'https://yourdomain.com',
    siteName: 'Naman’s Site',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
        type: 'website',
  } */
}

export default function page() {
  return (
    <>
        <div>
            <NewHome/>
        </div>
    </>
  )
}
