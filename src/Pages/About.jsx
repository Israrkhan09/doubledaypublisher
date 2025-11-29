import React from 'react'
import HeroSection from '../Sections/HomeSections/HeroSection/HeroSection'
import Footer from '../Layouts/Footer/Footer'
import Navbar from '../Layouts/Navbar/Navbar'
import AboutSection from '../Sections/AboutSections/Main/Main'

const About = () => {
  return (
    <div>
        <Navbar/>
        <HeroSection/>
        <AboutSection/>
        <Footer/>
    </div>
  )
}

export default About