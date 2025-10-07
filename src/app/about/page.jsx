import AboutPage from '@/components/About'
import Hero from '@/components/hero'
import React from 'react'

const page = () => {
  return (
    <div className='min-h-screen'>
      <Hero heading="About Us" banner="/view.jpg" mobileBanner="/mob-contact.png" />
        <AboutPage/>
         </div>
  )
}

export default page