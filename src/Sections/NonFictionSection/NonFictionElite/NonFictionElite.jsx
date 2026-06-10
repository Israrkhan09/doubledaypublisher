// src/components/NonFictionElite.jsx
import React from 'react';
import './NonFictionElite.css'; // Import the CSS file
import writerIllustration from '../NonFictionImages/bg-fiction.png'; // Assuming your illustration path
import useIntersectionObserver from '../NonFictionHook/NonFictionHook'; // Assuming you have this hook

const NonFictionElite = () => {
    // 1. Hook Integration
    const [sectionRef, isVisible] = useIntersectionObserver({ threshold: 0.2 });

    return (
        <section 
            ref={sectionRef} // Attach the ref here
            className={`non-fiction-section ${isVisible ? 'is-visible' : ''}`} // Apply is-visible class
        >
            <div className="section-inner">
                {/* Left Content Block */}
                <div className="non-fiction-content">
                    <h2 className="non-fiction-title reveal-item" style={{ transitionDelay: '0s' }}> 
                        Elite Non-Fiction Writers For Hire For Thought Leaders & Visionaries
                    </h2>
                    <p className="non-fiction-text reveal-item" style={{ transitionDelay: '0.2s' }}>
                        We know how tricky non-fiction can be as facts need to be sharp, ideas need to connect,
                        and the writing still has to keep readers turning the page. That's where nonfiction
                        ghostwriters step in.We've worked with authors from all over, helping them shape ideas into books that feel
                        sharp, engaging, and true to their voice. Business guides, memoirs, self-help, history, you
                        name it, we've done it. If you have the idea, we'll help you put it into words that stick.
                    </p>
                    
                </div>

                {/* Right Image Block */}
                <div className="non-fiction-image-wrapper reveal-item" style={{ transitionDelay: '0.8s' }}>
                    <img 
                        src={writerIllustration} 
                        alt="Writer working at a desk" 
                        className="non-fiction-illustration" 
                    />
                </div>
            </div>
        </section>
    );
};

export default NonFictionElite;