import React from 'react'
import Footer from '../Layouts/Footer/Footer'
import MemoirMain from '../Sections/MemoirWritingSection/MemoirMain/MemoiMain'
import MemoirStepsSection from '../Sections/MemoirWritingSection/MemoirWritingSteps/MemoirSteps'
import Navbar from '../Layouts/Navbar/Navbar'
import { TopSeller } from '../Sections/HomeSections/BestsellerSection/TopSeller'
import MemoirText from '../Sections/MemoirWritingSection/MemoirText/MemoirText'
import { WhyChooseUs, ReviewsCarousel, DreamBookCTA } from '../Sections/HomeSections/BrandSections/BrandSections'
import MemoirCTASection from '../Sections/MemoirWritingSection/MemoirCTASection/MemoirCTASection'

const MemoirWriting = () => {
  return (
    <div>
        <Navbar/>
        <MemoirMain/>
        <MemoirText/>
        <MemoirStepsSection/>

        <div style={{
            width: '100%',
            height: '1px',
            background: 'linear-gradient(to right, transparent, rgba(20, 184, 166, 0.4), transparent)',
            backgroundColor: '#0A0F1F'
        }} />

        <MemoirCTASection/>

        <TopSeller/>

        <div style={{
            width: '100%',
            height: '1px',
            background: 'linear-gradient(to right, transparent, rgba(20, 184, 166, 0.4), transparent)',
            backgroundColor: 'var(--hero-bg)'
        }} />

        <WhyChooseUs
            title="HIRE EXPERT MEMOIR WRITERS TO PRESERVE YOUR LEGACY & STORIES"
            desc={
                <>
                    <p className="wcu-desc">
                        When it comes to professional memoir writing, <strong>Doubleday Publisher</strong> stands out. Our team of skilled autobiographers and ghostwriters is dedicated to crafting compelling life stories that preserve your legacy and personal journey.
                    </p>
                    <p className="wcu-desc">
                        We work closely with you through interviews, reviews, and collaborative drafting to capture your true voice, emotions, and key life milestones. Whether it's a personal biography, family history, or professional milestone, our expert writers shape it into a polished and publication-ready masterpiece.
                    </p>
                    <p className="wcu-desc">
                        Partner with <strong>Doubleday Publisher</strong> to share your life’s lessons. Hire a professional memoir writer today and take the first step toward launching your story to the world.
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

export default MemoirWriting