import React from 'react'
import Footer from '../Layouts/Footer/Footer'
import NonFictionHero from '../Sections/NonFictionSection/NonFictionHero/NonFiction'
import NonFictionBest from '../Sections/NonFictionSection/NonFictionBest/NonFictionBest'
import Navbar from '../Layouts/Navbar/Navbar'
import NonFictionStepsSection from '../Sections/NonFictionSection/NonFictionSteps/NonFictionSteps'
import { TopSeller } from '../Sections/HomeSections/BestsellerSection/TopSeller'
import { WhyChooseUs, ReviewsCarousel, DreamBookCTA } from '../Sections/HomeSections/BrandSections/BrandSections'
import NonFictionCTASection from '../Sections/NonFictionSection/NonFictionCTASection/NonFictionCTASection'

const NonFiction = () => {
  return (
    <div>
      <Navbar/>
      <NonFictionHero/>
      <NonFictionBest/>
      <NonFictionStepsSection/>
      
      <div style={{
          width: '100%',
          height: '1px',
          background: 'linear-gradient(to right, transparent, rgba(20, 184, 166, 0.4), transparent)',
          backgroundColor: '#0A0F1F'
      }} />

      <NonFictionCTASection/>
      
      <TopSeller/>
      
      <div style={{
          width: '100%',
          height: '1px',
          background: 'linear-gradient(to right, transparent, rgba(20, 184, 166, 0.4), transparent)',
          backgroundColor: 'var(--hero-bg)'
      }} />

      <WhyChooseUs
          title="HIRE EXPERT NON-FICTION WRITERS TO SHARE YOUR VISION & KNOWLEDGE"
          desc={
              <>
                  <p className="wcu-desc">
                      When it comes to professional non-fiction writing, <strong>Doubleday Publisher</strong> stands out. Our team of skilled writers, researchers, and editors is dedicated to crafting informative, well-researched, and engaging content that captivates your readers and delivers real value.
                  </p>
                  <p className="wcu-desc">
                      We have a proven track record of creating bestselling non-fiction across various genres, including business guides, memoirs, self-help, history, and scientific insights. From initial research and outlining to drafting and polishing, our expert writers work side-by-side with you to ensure your unique knowledge and voice are captured.
                  </p>
                  <p className="wcu-desc">
                      Partner with <strong>Doubleday Publisher</strong> to bring your ideas and expertise to the world. Hire a professional non-fiction writer today and take the first step toward publishing your dream book.
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

export default NonFiction