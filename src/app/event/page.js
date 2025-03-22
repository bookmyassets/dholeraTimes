import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <>
        <div className='pt-52 text-center'>
            <div>
                <Link href="/event/upcomingevent">
                    Upcoming Events
                </Link>
            </div>
            <div>
                <Link href="/event/webinar">
                    Webinar
                </Link>
            </div>
        </div>
    </>
  )
}
