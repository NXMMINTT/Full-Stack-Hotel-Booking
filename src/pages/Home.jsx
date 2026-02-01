import React from 'react'
import Hero from '../componenets/Hero.jsx'
import FeaturedDestination from '../componenets/FeaturedDestination.jsx'
import ExclusiveOffers from '../componenets/ExclusiveOffers.jsx'
import Testimonial from '../componenets/Testimonial.jsx'
import NewsLetter from '../componenets/NewsLetter.jsx'

function Home() {
  return (
    <>
    
      <Hero />
      <FeaturedDestination />
      <ExclusiveOffers />
      <Testimonial />
      <NewsLetter />
    </>
  )
}

export default Home