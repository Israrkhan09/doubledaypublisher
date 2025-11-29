import React from 'react'
import Footer from '../Layouts/Footer/Footer'
import GhostHero from '../Sections/GhostWritingSection/GhostHero/GhostHero'
import GhostServices from '../Sections/GhostWritingSection/GhostServices/GhostServices'
import GhostwritingSection from '../Sections/GhostWritingSection/GhostWritingSection/GhostWriting'
import image_path from '../Sections/HomeSections/images/Home-bg/main-home-hero-image.jpg'
import FlowingMenu from '../Sections/GhostWritingSection/FloatingText/FloatingText'
import { MagneticNavbar } from '../Layouts/Navbar/MagneticNavbar'

const menuItems = [
    { link: '#home', text: 'Home', image: image_path },
    { link: '#about', text: 'About Us', image: 'url/to/image2.jpg' },
    { link: '#work', text: 'Our Work', image: 'url/to/image3.jpg' },
    { link: '#contact', text: 'Contact', image: 'url/to/image4.jpg' },
];

const GhostWriting = () => {
    return (
        // 🌟 CHANGE APPLIED HERE
        // The main container is given top padding to offset the fixed height of the MagneticNavbar.
        // This ensures the content starts *below* the header, not underneath it.
        <div>
            <MagneticNavbar/>
            
            <div style={{ paddingTop: '100px' }}> {/* Adjust this value if the Navbar height changes */}
                <GhostHero/>
                <GhostServices/>
                <GhostwritingSection/>
                <div style={{ height: '40vh', backgroundColor: '#060010' }}>
                    <FlowingMenu items={menuItems} />
                </div>
            </div>

            <Footer/>
        </div>
    )
}

export default GhostWriting