// src/components/HeroSection.jsx
import React, { useState } from 'react';
import './MemoirMain.css';
// import './HeroSectionAnimation.css';
import useIntersectionObserver from '../MemoirHook/MemoirHook';

const MemoirMain = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [heroRef, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section
      ref={heroRef}
      className={`non-fiction-container hero-top-adjust ${isVisible ? 'is-visible' : ''}`}
    >
      {/* Left Content */}
      <div className="non-fiction-content">
        <h1 className="reveal-item fade-up non-fiction-title">
    {/* TEXT UPDATED HERE */}
Story Writing Turning Your Ideas into a Bestselling Narrative
</h1>

<p className="reveal-item fade-up non-fiction-description">
     Got a life story burning inside you but need the structure and voice? Our expert memoir ghostwriters turn your raw memories into a compelling, professional book. Let us craft a deeply authentic narrative that captures your unique perspective and resonates powerfully with readers.
</p>

<div className="reveal-item fade-up non-fiction-buttons">
<button className="fiction-new-btns non-fiction-btn-primary">Call Now</button>
<button className="fiction-new-btns non-fiction-btn-secondary">Get Free Consultation</button>
</div>
</div>

     
    </section>
  );
};

export default MemoirMain;