// src/components/ContactHeroSection.jsx
import React from 'react';
import './ContactHero.css';
// Ensure the hook path is correct relative to this new file location
import useIntersectionObserver from '../ContactHook/contacthook'

const ContactHero = () => {
  // Using a single Intersection Observer for the whole section
  const [heroRef, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section
      ref={heroRef}
      // Add a class to help with centering and making the content full width
      className={`contact-container-main center-contact ${isVisible ? 'is-visible' : ''}`}
    >
      
      {/* Content now takes full width and is centered */}
      <div className="contact-content-main center-content">
        
        {/* Main Title: Clearly states the page and is visually dominant */}
        <h1 className="reveal-item fade-up contact-title-main large-text">
          Contact Doubleday Publishers
        </h1>
        
        {/* Subtitle: Sets the professional tone */}
        <p className="reveal-item fade-up contact-subtitle-main">
          Your Direct Line to Professional Writing and Publishing Expertise.
        </p>
        
        {/* Brief Welcome/Instruction */}
        <p className="reveal-item fade-up contact-description-main">
          We look forward to hearing about your project. Please find our contact form and direct information below to submit your inquiry. We ensure complete confidentiality for all initial consultations.
        </p>
        
        {/* BUTTONS REMOVED */}
      </div>

      {/* Right Section Commented Out/Hidden */}
      {/* <div className="hero-form-wrapper"></div> */}
    </section>
  );
};

export default ContactHero;




