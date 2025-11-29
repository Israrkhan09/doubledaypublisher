// src/components/AboutSection/AboutSection.jsx

import React from 'react';
import './About.css'; // For basic styling
import './AboutAnimation.css'; // For animation definitions
// import useIntersectionObserver from '../../hook/useIntersectionObserver'; 
import useIntersectionObserver from '../hooks/UserObservationSection';
// Content blocks representing the phases of writing/editing
const processSteps = [
    {
        icon: "💡",
        title: "Phase I: Conception & Discovery",
        description: "Every great book begins with a flash of inspiration. We map out the core idea, define the target audience, and establish the emotional stakes before the first word is written.",
        animationDelay: '0s',
    },
    {
        icon: "🖋️",
        title: "Phase II: Drafting & Iteration",
        description: "The dedicated creation phase. This involves deep research, disciplined daily word counts, and the freedom to fail—producing a complete, if messy, first draft.",
        animationDelay: '0.2s',
    },
    {
        icon: "🔎",
        title: "Phase III: Structural Editing",
        description: "We step back and scrutinize the narrative arc, pacing, character development, and theme. This is where a manuscript transforms into a cohesive story.",
        animationDelay: '0.4s',
    },
    {
        icon: "✨",
        title: "Phase IV: Polish & Publication",
        description: "The final review for line-by-line clarity and grammar. We finalize the cover design and strategically plan the launch to ensure the book reaches its readers.",
        animationDelay: '0.6s',
    },
];

const AboutSection = () => {
    // 1. Attach the Intersection Observer hook to the main section
    const [aboutRef, isVisible] = useIntersectionObserver({
        threshold: 0.2, // Trigger animation when 20% of the section is visible
    });

    return (
        // Apply the ref and the 'is-visible' class to the container
        <section 
            ref={aboutRef} 
            className={`about-section-container ${isVisible ? 'is-visible' : ''}`}
        >
            {/* Header Area: Uses fade-up animation with the main visibility class */}
            <header className="about-header reveal-item fade-up" style={{ transitionDelay: '0s' }}>
                <h2 className="main-heading">The Journey of the Word</h2>
                <p className="sub-heading">We believe a book is forged, not simply written. This is our four-phase creative approach.</p>
            </header>

            {/* Content Grid: Individual items stagger in */}
            <div className="process-grid">
                {processSteps.map((step, index) => (
                    // Each step is a 'reveal-item' whose animation is triggered by the parent 'is-visible' class
                    <div 
                        key={step.title} 
                        className="process-step reveal-item fade-in-stagger"
                        // Apply the staggered delay directly via inline style
                        style={{ transitionDelay: step.animationDelay }} 
                    >
                        <div className="icon-badge">{step.icon}</div>
                        <h3 className="step-title">{step.title}</h3>
                        <p className="step-description">{step.description}</p>
                    </div>
                ))}
            </div>
            
            {/* CTA: Fade up with an extra delay after the grid finishes */}
             <div className="about-cta-wrapper reveal-item fade-up" style={{ transitionDelay: '0.8s' }}>
                <button className="cta-button">Start Your Story</button>
             </div>
        </section>
    );
};

export default AboutSection;