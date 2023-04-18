import React from 'react'
import { Landing } from './LandingSection/Landing'
import Carousel from './Carousel/Carousel'
import Features from './Features/Features'
import Lines from './Lines/Lines'
import Footer from "../Footer/Footer"

function Home() {
  return (
    <div className='mt-1' >
        {/* <Lines/> */}
        {/* <Landing/> */}
        <Carousel/>
        <Features/>
        {/* <Footer/> */}
        {/* <Footer/> */}
    </div>
  )
}

export default Home