import React from 'react'
import Footer from '../Layouts/Footer/Footer'
// import HeroGhost from '../Sections/GhostWritingSection/GhostHero/GhostHero'
import GhostServices from '../Sections/GhostWritingSection/GhostServices/GhostServices'
import Navbar from '../Layouts/Navbar/Navbar'
import GhostMainHero from '../Sections/GhostWritingSection/GhostHero/GhostHero'
import GhostStepsSection from '../Sections/GhostWritingSection/GhostSteps/GhostSteps'
import { TopSeller } from '../Sections/HomeSections/BestsellerSection/TopSeller'
import { WhyChooseUs, ReviewsCarousel, DreamBookCTA } from '../Sections/HomeSections/BrandSections/BrandSections'
import GhostCTASection from '../Sections/GhostWritingSection/GhostCTASection/GhostCTASection'

const GhostWriting = () => {
    return (
       
        <div className="ghost-writing-page">
            {/* <MagneticNavbar/> */}
            <Navbar/>
            
                {/* <GhostHeroSection/> */}
                <GhostMainHero/>
           
                <GhostServices/>
                {/* <GhostCardsSection/> */}
                {/* <GhostCardsSection/> */}
                {/* <GhostCards/>    */}
                {/* <DataCardGrid /> */}
                <GhostStepsSection/>
                <div style={{
                    width: '100%',
                    height: '1px',
                    background: 'linear-gradient(to right, transparent, rgba(20, 184, 166, 0.4), transparent)',
                    backgroundColor: '#0A0F1F'
                }} />
                <GhostCTASection/>
                <TopSeller/>
                <div style={{
                    width: '100%',
                    height: '1px',
                    background: 'linear-gradient(to right, transparent, rgba(20, 184, 166, 0.4), transparent)',
                    backgroundColor: 'var(--hero-bg)'
                }} />
                <WhyChooseUs
                    title="TRUST DOUBLEDAY PUBLISHER, THE LEADING GHOSTWRITING AGENCY FOR YOUR WRITING NEEDS"
                    desc={
                        <>
                            <p className="wcu-desc">
                                When it comes to reliable expert ghostwriting, <strong>Doubleday Publisher</strong> stands out. Our team of skilled ghostwriters is committed to bringing your ideas to life most efficiently.
                            </p>
                            <p className="wcu-desc">
                                We have a history of delivering exceptional results and can provide a smooth personal experience tailored to your requirements. From the initial idea to the final product, our expert ghostwriters bring their expertise and imagination to every project, making sure your style is expressed in a way that’s exactly what you want it to be. You may require a captivating memoir, a stimulating book, or engaging material for your website. Our talented team of ghostwriters is here to translate your thoughts into words that readers will want to read.
                            </p>
                            <p className="wcu-desc">
                                You can count on <strong>Doubleday Publisher</strong> to provide excellent ghostwriting services in the USA that go far beyond what you think you can get. Employ one of our experienced ghostwriters now and experience the difference it makes working with an advanced and affordable ghostwriting service.
                            </p>
                        </>
                    }
                />
                <ReviewsCarousel/>
                <DreamBookCTA/>
            
                {/* <MemoirStepsSection/> */}
                {/* <CardSwap3D/> */}
                {/* <GhostwritingSection/> */}
                {/* <div style={{ height: '40vh', backgroundColor: '#060010' }}>
                    <FlowingMenu items={menuItems} />
                </div> */}
            {/* </div> */}
            {/* <ScriptServices/> */}

            <Footer/>
        </div>
    )
}

export default GhostWriting