import React from 'react'
import Navbar from '../Layouts/Navbar/Navbar'
import Footer from '../Layouts/Footer/Footer'
// import { MagneticNavbar } from '../Layouts/Navbar/MagneticNavbar'
import StoryMain from '../Sections/StoryWritingSection/StoryMain/StoryMain'
import FinalPublishingCalloutSection from '../Sections/StoryWritingSection/StoryContent/StoryContent'
import { MagneticNavbar } from '../Layouts/Navbar/MagneticNavbar'
// import StoryStickyScrollSection from '../Sections/StoryWritingSection/ScrollReveal/ScrollReveal'
// import FinalStoryParallaxSection from '../Sections/StoryWritingSection/FinalStoryParallaxSection/FinalStoryParallaxSection'

const StoryWriting = () => {
  return (
    <div>
        {/* <Navbar/> */}
        {/* <MagneticNavbar/> */}
        <MagneticNavbar/>
        <StoryMain/>
        <FinalPublishingCalloutSection/>
        {/* <StoryStickyScrollSection/> */}
        {/* <FinalStoryParallaxSection/> */}
        <Footer/>
    </div>
  )
}

export default StoryWriting