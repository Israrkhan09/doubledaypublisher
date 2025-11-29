// src/components/HeroSection.jsx
import React, { useState } from "react";
import "./FictionHero.css";
import useIntersectionObserver from "../FictionHook/FictionHook";

const FictionHero = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [heroRef, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section
      ref={heroRef}
      className={`fiction-container hero-top-adjust ${
        isVisible ? "is-visible" : ""
      }`}
    >
            {/* Left Content */}     {" "}
      <div className="fiction-content">
               {" "}
        <h1 className="reveal-item fade-up fiction-title">
          Fiction Writing Turning Your Stories Into Reality        {" "}
        </h1>
               {" "}
        <p className="reveal-item fade-up fiction-description">
          Got a story burning inside you but need the voice? Our expert fiction
          ghostwriters for hire specialize in turning your creative vision into
          a masterpiece. Whether it's a novel or a short story, let us craft a
          narrative that is uniquely yours, backed by professionalism and a true
          passion for the art of fiction.        {" "}
        </p>
        <div className="reveal-item fade-up fiction-buttons">
          <button className="fiction-new-btns fiction-btn-primary">
            Call Now
          </button>
          <button className="fiction-new-btns fiction-btn-secondary">
            Get Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default FictionHero;
