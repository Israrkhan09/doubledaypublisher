import React from 'react'
import Footer from '../Layouts/Footer/Footer'
import Navbar from '../Layouts/Navbar/Navbar'
import AboutSection from '../Sections/AboutSections/Main/Main'
import AboutMainHero from '../Sections/AboutSections/AboutHero/AboutHero'
import { TopSeller } from '../Sections/HomeSections/BestsellerSection/TopSeller'
import WhatMakesUsStandOut from '../Sections/AboutSections/WhatMakesUsStandOut/WhatMakesUsStandOut'
import FeaturedCarousel from '../Sections/AboutSections/FeaturedCarousel/FeaturedCarousel'
import FeaturedPressSectionAbout from '../Sections/AboutSections/FeaturedPressSection/FeaturedPressSectionAbout'
import { WhyChooseUs, ReviewsCarousel, DreamBookCTA } from '../Sections/HomeSections/BrandSections/BrandSections'

const About = () => {
  return (
    <div>
        <Navbar/>
        <AboutMainHero/>
        <FeaturedPressSectionAbout/>
        <AboutSection/>
        <WhatMakesUsStandOut/>
        <TopSeller/>
        <FeaturedCarousel/>

        <div style={{
            width: '100%',
            height: '1px',
            background: 'linear-gradient(to right, transparent, rgba(20, 184, 166, 0.4), transparent)',
            backgroundColor: 'var(--hero-bg)'
        }} />

        <WhyChooseUs
            title="PARTNER WITH THE NATION'S TOP BOOK PUBLISHING & WRITING EXPERTS"
            desc={
                <>
                    <p className="wcu-desc">
                        At <strong>Doubleday Publisher</strong>, we are committed to turning your ideas into beautifully crafted, publication-ready books. Our team of experienced authors, editors, designers, and publishing agents work in unison to bring your voice to the forefront.
                    </p>
                    <p className="wcu-desc">
                        We handle every stage of your writing journey—from brainstorming and research to editing, formatting, cover design, and marketing. Whether you want to write a compelling memoir, an insightful non-fiction guide, or a captivating novel, we align our strategy with your creative vision.
                    </p>
                    <p className="wcu-desc">
                        Choose <strong>Doubleday Publisher</strong> for premium, transparent, and award-winning publishing services. Let’s publish your legacy and share your message with the world today.
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

export default About