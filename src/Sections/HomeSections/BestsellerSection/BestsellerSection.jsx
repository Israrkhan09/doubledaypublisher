import React, { useState, useEffect, useRef } from 'react';
import Book_Image from '../images/fiction/fiction4.jpeg';

// --- MOCK INTERSECTION OBSERVER HOOK ---
const useIntersectionObserver = ({ threshold }) => {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [scrollY, setScrollY] = useState(0);

    const handleScroll = () => setScrollY(window.scrollY);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                } else if (entry.boundingClientRect.top > window.innerHeight) {
                    setIsVisible(false);
                }
            },
            { threshold }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [threshold]);

    return [ref, isVisible, scrollY];
};

const BestsellerSection = () => {
    // Using images from your screenshot for better visual consistency
    const bestsellerBookCover = Book_Image; // Matches the "The Overstory" cover
    // Example background image

    const [sectionRef, isVisible, scrollY] = useIntersectionObserver({ threshold: 0.1 });
    
    const calculateParallax = () => {
        if (!sectionRef.current) return 0;
        
        const rect = sectionRef.current.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        
        const center = rect.top + rect.height / 2;
        const viewportCenter = viewportHeight / 2;
        const offset = (center - viewportCenter) / 6; 
        
        return offset;
    };

    const parallaxOffset = calculateParallax();

    const cssStyles = `
        /* --- Variables --- */
        :root {
            --primary-dark: #1A202C; 
            --accent-gold: #FFC107;
            --background-light: #F7F8FC; 
            --text-dark: #222;
            --shadow-main: rgba(0, 0, 0, 0.4);
            --cta-color: #533549;
            --cta-hover: #3D273A;
            --luxury-cubic: cubic-bezier(0.8, 0.0, 0.2, 1);
            --luxury-cubic-snap: cubic-bezier(0.68, -0.55, 0.265, 1.55);
            --delay-start: 0.1s;
        }

        /* --- Keyframes (Unchanged) --- */
        @keyframes slideInLeft {
            from { opacity: 0; transform: translateX(-100px); }
            to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInRight {
            0% { opacity: 0; transform: translateX(250px) scale(0.9); }
            100% { opacity: 1; transform: translateX(0) scale(1); }
        }
        @keyframes badgePop {
            0% { transform: scale(0); }
            50% { transform: scale(1.3); }
            80% { transform: scale(0.95); }
            100% { transform: scale(1); }
        }
        @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-8px); }
            100% { transform: translateY(0px); }
        }

        /* --- Section Container --- */
        .bestseller-section-container {
            padding: 40px 40px; 
            background-color: #F5F5F7; 
            font-family: 'Inter', sans-serif;
            overflow: hidden;
            min-height: 450px; 
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            opacity: 1; 
        }
        
        /* Background Layer with Image, Blur, and Parallax */
        .bestseller-background-layer {
            position: absolute;
            top: -15%; /* Adjusted */
            left: -15%; /* Adjusted */
            width: 130%; /* Adjusted */
            height: 130%; /* Adjusted */
            
            background-size: cover;
            background-position: center;
            filter: blur(2px); 
            transition: transform 0.1s linear; 
        }

        /* --- Content Layout --- */
        .bestseller-content-wrapper-outer {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            max-width: 1200px;
            position: relative;
            z-index: 10;
        }
        .bestseller-content-wrapper {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 70px; /* Increased gap */
        }

        /* --- Text Content Animations --- */
        .bestseller-text-content {
            flex: 1; 
            max-width: 600px; /* Slightly increased max-width for text */
            text-align: left;
        }
        .reveal-item-left {
            opacity: 0; transform: translateX(-100px);
        }
        .bestseller-section-container.is-visible .reveal-item-left {
            animation: slideInLeft 1.0s var(--luxury-cubic) forwards;
            animation-delay: var(--delay); 
        }

        /* --- Image Content Animations --- */
        .bestseller-image-wrapper {
            position: relative; flex-shrink: 0; 
            width: 300px; /* Increased width for larger image */
            aspect-ratio: 1 / 1.5; perspective: 1200px;
            opacity: 0; transform: translateX(250px) scale(0.9);
        }
        .bestseller-section-container.is-visible .bestseller-image-wrapper {
            animation: slideInRight 1.0s var(--luxury-cubic-snap) forwards, 
                       float 6s ease-in-out infinite 1.0s; 
            animation-delay: 0.3s; 
        }

        /* --- General Styling (Unchanged for text elements) --- */
        .bestseller-tagline {
            font-size: 0.9em; font-weight: 700; color: var(--cta-color);
            margin-bottom: 10px; text-transform: uppercase; letter-spacing: 2px;
        }
        .bestseller-heading {
            font-size: 38px; font-weight: 900; color: var(--primary-dark);
            line-height: 1.15; margin-bottom: 15px;
        }
        .bestseller-heading span { display: block; }
        .bestseller-title {
            font-size: 1.5em; font-weight: 700; color: var(--text-dark);
            margin-bottom: 5px; 
        }
        .bestseller-author {
            font-size: 15px; font-style: italic; color: #555;
            margin-bottom: 20px;
        }
        .bestseller-description {
            font-size: 16px; line-height: 1.6; color: #333;
            margin-bottom: 25px; 
        }

        /* CTA Buttons (Unchanged) */
        .bestseller-cta-group { display: flex; gap: 20px; }
        .bestseller-cta-main {
            background: var(--cta-color); color: #fff; border: none;
            padding: 14px 30px; font-weight: 700; font-size: 0.95em;
            border-radius: 10px; cursor: pointer;
            box-shadow: 0 10px 25px rgba(83, 53, 73, 0.5);
            transition: all 0.4s var(--luxury-cubic); letter-spacing: 0.5px;
        }
        .bestseller-cta-main:hover {
            transform: translateY(-5px) scale(1.01);
            box-shadow: 0 12px 30px rgba(83, 53, 73, 0.7);
            background: var(--primary-dark);
        }
        .bestseller-cta-secondary {
            background-color: transparent; border: 2px solid var(--cta-color);
            color: var(--cta-color); padding: 14px 30px; font-weight: 600;
            font-size: 0.95em; border-radius: 10px; cursor: pointer;
            transition: all 0.4s var(--luxury-cubic);
        }
        /* Image styling (Unchanged) */
        .bestseller-book-cover {
            width: 100%; height: 100%; object-fit: cover;
            border-radius: 16px; box-shadow: 0 30px 60px var(--shadow-main);
            transition: transform 0.5s ease-out; display: block;
        }
        .bestseller-image-wrapper:hover .bestseller-book-cover {
            transform: scale(1.03); 
        }
        
        /* Bestseller Badge (Updated to match screenshot) */
        .bestseller-badge {
            position: absolute; 
            top: -10px; /* Adjusted to match screenshot */
            right: -10px; /* Adjusted to match screenshot */
            width: 90px; /* Slightly larger */
            height: 90px; /* Slightly larger */
            background-color: var(--accent-gold); 
            color: var(--primary-dark);
            border: 5px solid white; 
            border-radius: 50%;
            display: flex; flex-direction: column; align-items: center;
            justify-content: center; font-weight: 900;
            box-shadow: 0 8px 20px var(--shadow-main); transform: scale(0);
            line-height: 1.2; /* Adjusted for multi-line text */
            font-size: 0.9em; /* Smaller font for better fit */
        }
        .bestseller-badge .badge-text {
            font-size: 1.5em; /* Larger #1 */
            margin-bottom: -5px; /* Adjust spacing */
        }
        .bestseller-badge .badge-subtext {
            font-size: 0.7em; /* Smaller BEST SELLER */
        }
        .bestseller-section-container.is-visible .bestseller-badge {
            animation: badgePop 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
            animation-delay: 1.0s; 
        }

        /* --- Responsive (Unchanged) --- */
        @media (max-width: 900px) {
            .bestseller-content-wrapper { flex-direction: column-reverse; text-align: center; gap: 30px; }
            .bestseller-image-wrapper { width: 220px; margin: 0 auto; }
            .bestseller-heading { font-size: 32px; }
        }
        @media (max-width: 600px) {
            .bestseller-heading { font-size: 26px; }
            .bestseller-cta-group { flex-direction: column; }
            .bestseller-section-container { padding: 30px 20px; }
        }
    `;

    // Updated heading to match screenshot if possible for rendering
    const headingText = "Master Your Potential: The Ultimate Guide to Productivity";
    const [line1, line2] = headingText.split(': ');
    
    let delay = 0.0; 

    return (
        <section ref={sectionRef} className={`bestseller-section-container ${isVisible ? 'is-visible' : ''}`}>
            <style>{cssStyles}</style>
            
            {/* Background Layer with Parallax, Image, and 2px Blur (No Opacity) */}
            <div 
                className="bestseller-background-layer" 
                style={{ transform: `translateY(${parallaxOffset * 0.5}px)` }}
            ></div>

            <div className="bestseller-content-wrapper-outer">
                <div className="bestseller-content-wrapper">

                    {/* Left Text Content */}
                    <div className="bestseller-text-content">
                        <p className="bestseller-tagline reveal-item-left" style={{ '--delay': `${(delay += 0.05)}s` }}>
                            🏆 TOP SELLER OF THE MONTH
                        </p>

                        <h2 className="bestseller-heading">
                            <span className="reveal-item-left" style={{ '--delay': `${(delay += 0.05)}s` }}>
                                {line1}:
                            </span>
                            <span className="reveal-item-left" style={{ '--delay': `${(delay += 0.1)}s` }}>
                                {line2}
                            </span>
                        </h2>

                        <h3 className="bestseller-title reveal-item-left" style={{ '--delay': `${(delay += 0.1)}s` }}>
                            "The Ultimate Guide to Productivity"
                        </h3>
                        <p className="bestseller-author reveal-item-left" style={{ '--delay': `${(delay += 0.1)}s` }}>
                            Authored by: Jordan Reeves, the productivity expert transforming modern workflows
                        </p>

                        <p className="bestseller-description reveal-item-left" style={{ '--delay': `${(delay += 0.1)}s` }}>
                            This bestseller empowers professionals to optimize focus, time, and results. Jordan Reeves shares actionable strategies and real-world tips for maximum productivity without burnout.
                            <br /><br />
                            Perfect for entrepreneurs, students, and corporate professionals seeking peak performance.
                        </p>

                        <div className="bestseller-cta-group reveal-item-left" style={{ '--delay': `${(delay += 0.1)}s` }}>
                            <button className="bestseller-cta-main">Get Your Copy Now</button>
                            <button className="bestseller-cta-secondary">Read Reviews & Ratings</button>
                        </div>
                    </div>

                    {/* Right Image Content */}
                    <div className="bestseller-image-wrapper">
                        <img 
                            src={bestsellerBookCover} 
                            alt="Top Seller Book Cover" 
                            className="bestseller-book-cover"
                            onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x900/1A202C/FFFFFF?text=Productivity+Guide'; }}
                        />
                        <div className="bestseller-badge">
                            <span className="badge-text">#1</span>
                            <span className="badge-subtext">BEST<br />SELLER</span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default BestsellerSection;