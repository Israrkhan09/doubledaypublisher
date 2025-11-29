import React from 'react'
import Navbar from '../Layouts/Navbar/Navbar'
import Footer from '../Layouts/Footer/Footer'
import MemoirMain from '../Sections/MemoirWritingSection/MemoirMain/MemoiMain'
import MemoirStepsSection from '../Sections/MemoirWritingSection/MemoirWritingSteps/MemoirSteps'
// import { MagneticNavbar } from '../Layouts/Navbar/MagneticNavbar'
import CardSwap3D, { CardSwapCard3D } from '../Sections/MemoirWritingSection/CardSwiper/CardSwiper'
import { MagneticNavbar } from '../Layouts/Navbar/MagneticNavbar'
// import MaskEffect from '../Sections/MemoirWritingSection/MaskEffect/MaskEffect'

const MemoirWriting = () => {
  return (
    <div>
        {/* <Navbar/> */}
        {/* <MagneticNavbar/> */}
        <MagneticNavbar/>
        <MemoirMain/>
        <MemoirStepsSection/>
        {/* <MaskEffect/> */}
        {/* <CardSwap3D/> */}
        {/* <CardSwapCard3D/> */}
        <Footer/>
    </div>
  )
}

export default MemoirWriting