import React from 'react'
import Navbar from '../Layouts/Navbar/Navbar'
import Footer from '../Layouts/Footer/Footer'
import ScriptMain from '../Sections/ScriptWritingSection/ScriptMain/ScriptMain'
import { MagneticNavbar } from '../Layouts/Navbar/MagneticNavbar'
// import { MagneticNavbar } from '../Layouts/Navbar/MagneticNavbar'

const ScriptWriting = () => {
  return (
    <div>
        {/* <Navbar/> */}
        {/* <MagneticNavbar/> */}
        <MagneticNavbar/>
        <ScriptMain/>
        <Footer/>
    </div>
  )
}

export default ScriptWriting