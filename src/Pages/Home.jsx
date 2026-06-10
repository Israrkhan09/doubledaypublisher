import React from 'react'
// import Navbar from '../Layouts/Navbar/Navbar'
// import PortfolioShowcase from '../Sections/HomeSections/Portfolio/Portfolio'
// import ModernBookSlider from '../Sections/HomeSections/ModernBookSlider/ModernBookSlider'
import Navbar from '../Layouts/Navbar/Navbar'
import BookServicesSection from '../Sections/HomeSections/BookServicesSection/BookServicesSection'
// import BestsellerSection from '../Sections/HomeSections/BestsellerSection/BestsellerSection'
// import NewBookSection from '../Sections/HomeSections/NewBookSection/NewBookSection'
// import TopBooksSection from '../Sections/HomeSections/TopBooksSection/TopBooksSection'
import Footer from '../Layouts/Footer/Footer'
// import HeroSection from '../Sections/HomeSections/HeroSection/HeroSection'
// import AnimatedCardSection from '../Sections/HomeSections/DataCard/DataCard'
// import CardSlider from '../Sections/HomeSections/CardSlider/CardSlider'
// import { MagneticNavbar } from '../Layouts/Navbar/MagneticNavbar'
import { AuroraHero } from '../Sections/HomeSections/HeroSection/Header'
import { PortfolioSection } from '../Sections/HomeSections/Portfolio/PortfolioData'
import FeaturedPressSection from '../Sections/HomeSections/FeaturedPressSection/FeaturedPressSection'
import BookWritingProcess from '../Sections/HomeSections/BookWritingProcess/BookWritingProcess'
import FeaturedCarousel from '../Sections/AboutSections/FeaturedCarousel/FeaturedCarousel'
import { WhyChooseUs, ReviewsCarousel, DreamBookCTA } from '../Sections/HomeSections/BrandSections/BrandSections'
// import MagneticNavbar from '../Layouts/Navbar/MagneticNavbar'
// import { MagneticNavbar } from '../Layouts/Navbar/MagneticNavbar'
// import MagneticNavbar from '../Layouts/Navbar/MagneticNavbar'
// import BookWritingSection from '../Sections/HomeSections/AnimationSection/AnimationSection'
// import FlowingMenu from '../Sections/HomeSections/FlowingMenu/FlowingMenu'




const Home = () => {

  return (
    <div>
      <Navbar/>
      <AuroraHero />
      <FeaturedPressSection/>
      <BookWritingProcess />
      {/* <BookCarousel /> */}

      {/* Portfolio */}
      <PortfolioSection />





      {/*
      <div style={{backgroundColor: '#0A0F1F', color: 'white' ,  minHeight: '14vh' }}>
      
        <ParallaxText
          baseVelocity={-0.8}
          isPaused={isPaused}
          onEnter={handleMouseEnter}
          onLeave={handleMouseLeave}
        >
          DRAFTING YOUR MASTERPIECE - PLOT - CHARACTERS - WORLD-BUILDING - EDITING - REVISIONS -
        </ParallaxText>

         <ParallaxText
          baseVelocity={0.8}
          isPaused={isPaused}
          onEnter={handleMouseEnter}
          onLeave={handleMouseLeave}
        >
          PUBLISH - LITERARY SUCCESS - AGENT - PROOFREADING - COVER DESIGN - MARKETING STRATEGY -
        </ParallaxText>

      </div>
      */}




      {/* Services + Bestseller */}
      <div style={{
          width: '100%',
          height: '1px',
          background: 'var(--divider-bg)',
          position: 'relative',
          zIndex: 10
      }} />
      <BookServicesSection />
      
      {/* <BestsellerSection /> */}
      
      {/* <BookWritingSection/> */}
      <FeaturedCarousel/>
      <TopSeller/>
      <div style={{
          width: '100%',
          height: '1px',
          background: 'var(--divider-bg)',
          position: 'relative',
          zIndex: 10
      }} />
      <WhyChooseUs />
      <ReviewsCarousel />
      <DreamBookCTA />
      
      <Footer />
    </div>
  )
}

export default Home
