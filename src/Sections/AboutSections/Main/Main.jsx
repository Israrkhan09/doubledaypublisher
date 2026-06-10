import React, { useEffect, useRef } from "react";
import "./Main.css";
import aboutImg from "../../AboutSections/Images/publishing_team.png";

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show-about");
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    const section = sectionRef.current;
    if (section) observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="about-section" ref={sectionRef}>
      <div className="about-container">
        {/* LEFT IMAGE */}
        <div className="about-left">
          <img src={aboutImg} alt="DoubleDay Publishers Team" />
        </div>

        {/* RIGHT CONTENT */}
        <div className="about-right">
          <h2 className="about-section-title">WHO WE ARE</h2>
          <h3 className="about-section-subtitle">
            Your Dedicated Partner in Professional Book Writing and Publishing
          </h3>

          <p className="about-section-text">
            Welcome to <span><b>DoubleDay Publishers</b></span>, your full-service book writing partner. 
            We specialize in transforming your ideas into captivating narratives through a comprehensive 
            suite of services, including Ghostwriting, Fiction, Non-Fiction, Memoirs, and Author Branding.
          </p>

          <p className="about-section-text">
            Whether you're an aspiring author or a seasoned professional, our expert team is here to 
            structure your message into a powerful story that resonates with readers worldwide.
          </p>

          <p className="about-section-text">
            With years of industry experience, we deliver polished, high-quality writing—helping 
            authors secure book deals, media recognition, and global impact.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;