import React from 'react'
// import HeroSection from '../Sections/HomeSections/HeroSection/HeroSection'
import Footer from '../Layouts/Footer/Footer'
import Navbar from '../Layouts/Navbar/Navbar'
// import AboutSection from '../Sections/AboutSections/Main/Main'
import ContactUs from '../Sections/ContactSections/MainContact/MainContact'
import ContactHero from '../Sections/ContactSections/ContactHero/ContactHero'
import DreamBookSection from '../Sections/AboutSections/AboutText/AboutText'
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
        
        <div style={{
            width: '100%',
            height: '1px',
            background: 'linear-gradient(to right, transparent, rgba(20, 184, 166, 0.4), transparent)',
            backgroundColor: '#ffffff'
        }} />

        <DreamBookSection/>
        {/* <AboutSection/> */}
        <Footer/>
    </div>
  )
}

export default Contact