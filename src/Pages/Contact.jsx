import React from 'react'
// import HeroSection from '../Sections/HomeSections/HeroSection/HeroSection'
import Footer from '../Layouts/Footer/Footer'
import Navbar from '../Layouts/Navbar/Navbar'
// import AboutSection from '../Sections/AboutSections/Main/Main'
import ContactUs from '../Sections/ContactSections/MainContact/MainContact'
import ContactHero from '../Sections/ContactSections/ContactHero/ContactHero'
// import HeroSectionCon from '../Sections/ContactSections/HeroSectionContact/HeroSectionCon'
// import ContactHeroSection from '../Sections/ContactSections/HeroSectionContact/HeroSectionCon'

const Contact = () => {
  return (
    <div>
        <Navbar/>
        {/* <HeroSectionCon/> */}
        {/* <ContactHeroSection/> */}
        <ContactHero/>
        <ContactUs/>
        {/* <AboutSection/> */}
        <Footer/>
    </div>
  )
}

export default Contact