import React from 'react'
// USE THIS EXACT PATH STRUCTURE, CONFIRMED BY YOUR WORKING FILE
// import Navbar from '../Layouts/Navbar/Navbar' 
import Footer from '../Layouts/Footer/Footer'
import FictionHero from '../Sections/FictionWritingSection/FictionHero/FictionHero'
import FictionBest from '../Sections/FictionWritingSection/FictionBest/FictionBest'
import { MagneticNavbar } from '../Layouts/Navbar/MagneticNavbar'


const FictionWriting = () => {
  return (
    <div>
      {/* <Navbar/> */}
      <MagneticNavbar/>
      <FictionHero/>
      <FictionBest/>
      
      <Footer/>
    </div>
  )
}

export default FictionWriting