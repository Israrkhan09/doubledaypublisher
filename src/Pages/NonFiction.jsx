import React from 'react'
import Navbar from '../Layouts/Navbar/Navbar'
import Footer from '../Layouts/Footer/Footer'
import NonFictionElite from '../Sections/NonFictionSection/NonFictionElite/NonFictionElite'
import FictionHero from '../Sections/FictionWritingSection/FictionHero/FictionHero'
import NonFictionHero from '../Sections/NonFictionSection/NonFictionHero/NonFiction'
import { MagneticNavbar } from '../Layouts/Navbar/MagneticNavbar'
// import { MagneticNavbar } from '../Layouts/Navbar/MagneticNavbar'

const NonFiction = () => {
  return (
    <div>
        {/* <Navbar/> */}
        {/* <MagneticNavbar/> */}
        <MagneticNavbar/>
        <NonFictionHero/>
        <NonFictionElite/>
        {/* <h1>Hello </h1> */}
        <Footer/>
    </div>
  )
}

export default NonFiction