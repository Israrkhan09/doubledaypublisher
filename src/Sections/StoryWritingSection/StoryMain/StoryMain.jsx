// src/components/HeroSection.jsx
import React, { useState } from 'react';
import './StoryMain.css';
// import './HeroSectionAnimation.css';
// import useIntersectionObserver from '../StoryHook/userInterSection';
// ✅ CORRECT (If the hook file uses export function)
// import { useIntersectionObserver } from '../StoryHook/userInterSection';
// ✅ Correct Import Syntax for a Default Export
import useIntersectionObserver from '../StoryHook/useIntersectionObserver';

const StoryMain = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [heroRef, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section
      ref={heroRef}
      className={`story-container hero-top-adjust ${isVisible ? 'is-visible' : ''}`}
    >
      {/* Left Content */}
      <div className="story-content">
        <h1 className="reveal-item fade-up story-title">
          Story Writing Turning Your Ideas into a Bestselling Narrative
        </h1>

        <p className="reveal-item fade-up story-description">
         Got a plot brewing? Our expert ghostwriters turn your raw ideas into a professional novel. We refine your voice, structure, and pacing to deliver an authentic narrative that immediately captures readers, elevating your story to publishable quality.
        </p>

        <div className="reveal-item fade-up story-buttons">
          <button className="story-new-btns story-btn-primary">Call Now</button>
          <button className="story-new-btns story-btn-secondary">Get Free Consultation</button>
        </div>
      </div>

     
    </section>
  );
};

export default StoryMain;
