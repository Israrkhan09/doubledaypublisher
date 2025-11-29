// src/components/NonFictionHero.jsx
import React from 'react';
import './NonFiction.css';
import useIntersectionObserver from '../NonFictionHook/NonFictionHook';

const NonFictionHero = () => {
  const [heroRef, isVisible] = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section
      ref={heroRef}
      className={`nonfiction-hero-container ${isVisible ? 'is-visible' : ''}`}
    >
      {/* Hero Content */}
      <div className="nonfiction-hero-content">
        <h1 className="reveal-item fade-up nonfiction-hero-title">
          Nonfiction Writing That Inspires and Educates
        </h1>

        <p className="reveal-item fade-up nonfiction-hero-description">
          Have a story, research, or knowledge that deserves to reach the world? 
          Our professional nonfiction writers craft compelling articles, memoirs, biographies, and research-based narratives 
          that captivate readers while maintaining factual integrity. Turn your expertise into content that makes an impact.
        </p>

        <div className="reveal-item fade-up nonfiction-hero-buttons">
          <button className="nonfiction-btn-primary">Hire a Writer</button>
          <button className="nonfiction-btn-secondary">Get Free Consultation</button>
        </div>
      </div>
    </section>
  );
};

export default NonFictionHero;
