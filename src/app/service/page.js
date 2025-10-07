import Areas from '@/components/Areas'
import Hero from '@/components/hero'
import React from 'react'

const Service = () => {
  return (
    <div className=' min-h-screen'>
        <Hero heading="Service" banner="/hn.jpg" mobileBanner="/hn.jpg" />
        <Areas/>
    </div>
  )
}

export default Service