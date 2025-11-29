import React, { useEffect, useRef } from "react";
import "./Main.css";

import aboutImg from "../../AboutSections/Images/photo-1.png";

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Add animation when visible
          if (entry.isIntersecting) {
            entry.target.classList.add("show-about");
          }
          // Remove animation when leaving screen
          else {
            entry.target.classList.remove("show-about");
          }
        });
      },
      { threshold: 0.3 }
    );

    const section = sectionRef.current;
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section className="about-section fade-about" ref={sectionRef}>
      
      {/* LEFT IMAGE */}
      <div className="about-left fade-left">
        <img src={aboutImg} alt="Our Team" />
      </div>

      {/* RIGHT CONTENT */}
      <div className="about-right fade-right">
        {/* REVISED PROFESSIONAL HEADING STRUCTURE */}
        <h2 className="about-section-title">
          Who We Are
        </h2>

        <h3 className="about-section-subtitle">
          Your Dedicated Partner in Professional Book Writing and Publishing
        </h3>

        <p className="about-section-text">
          Welcome to <span><b>DoubleDay Publishers</b></span>, your full-service book writing partner. We specialize in
          transforming your ideas into captivating narratives through a comprehensive suite of services, including
          Ghostwriting, Fiction, Non-Fiction, Memoirs, Biography Writing,
          Editing, and Author Branding.
        </p>

        <p className="about-section-text">
          Whether you're an aspiring author or a seasoned professional, our expert team is here to
          structure your message into a powerful story that resonates with
          readers worldwide. We handle the complexities of the writing process so you can focus on your vision.
        </p>

        <p className="about-section-text">
          With years of industry experience, we deliver polished, high-quality,
          and impactful writing—helping authors secure book deals, media
          recognition, and speaking engagements.
        </p>
      </div>

    </section>
  );
};

export default About;