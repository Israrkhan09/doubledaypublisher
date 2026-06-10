import React from 'react'
// USE THIS EXACT PATH STRUCTURE, CONFIRMED BY YOUR WORKING FILE
// import Navbar from '../Layouts/Navbar/Navbar' 
import Footer from '../Layouts/Footer/Footer'
import FictionHero from '../Sections/FictionWritingSection/FictionHero/FictionHero'
import FictionBest from '../Sections/FictionWritingSection/FictionBest/FictionBest'
import { MagneticNavbar } from '../Layouts/Navbar/MagneticNavbar'
import Navbar from '../Layouts/Navbar/Navbar'
import FictionStepsSection from '../Sections/FictionWritingSection/FictionSteps/FictionSteps'
import { TopSeller } from '../Sections/HomeSections/BestsellerSection/TopSeller'
import { WhyChooseUs, ReviewsCarousel, DreamBookCTA } from '../Sections/HomeSections/BrandSections/BrandSections'
import FictionCTASection from '../Sections/FictionWritingSection/FictionCTASection/FictionCTASection'
// import Navbar from '../Layouts/Navbar/Navbar'


const FictionWriting = () => {
  return (
    <div>
      <Navbar/>
      {/* <MagneticNavbar/> */}
      <FictionHero/>
      <FictionBest/>
      {/* <DataCardGrid /> */}
      <FictionStepsSection/>
      
      <div style={{
          width: '100%',
          height: '1px',
          background: 'linear-gradient(to right, transparent, rgba(20, 184, 166, 0.4), transparent)',
          backgroundColor: '#0A0F1F'
      }} />

      <FictionCTASection/>
      
      <TopSeller/>
      
      <div style={{
          width: '100%',
          height: '1px',
          background: 'linear-gradient(to right, transparent, rgba(20, 184, 166, 0.4), transparent)',
          backgroundColor: 'var(--hero-bg)'
      }} />

      <WhyChooseUs
          title="HIRE EXPERT FICTION WRITERS TO BRING YOUR IMAGINATION TO LIFE"
          desc={
              <>
                  <p className="wcu-desc">
                      When it comes to professional fiction writing, <strong>Doubleday Publisher</strong> stands out. Our team of skilled novelists and storytellers is dedicated to crafting compelling stories that capture your readers' imagination.
                  </p>
                  <p className="wcu-desc">
                      We have a track record of creating bestselling fiction across various genres, including romance, mystery, thriller, fantasy, and sci-fi. From the initial concept and character development to the final manuscript, our expert writers collaborate with you to ensure your narrative is engaging and unique.
                  </p>
                  <p className="wcu-desc">
                      Partner with <strong>Doubleday Publisher</strong> to elevate your story. Hire a professional fiction writer today and take the first step toward publishing your dream novel.
                  </p>
              </>
          }
      />
      <ReviewsCarousel/>
      <DreamBookCTA/>
      
      <Footer/>
    </div>
  )
}

export default FictionWriting