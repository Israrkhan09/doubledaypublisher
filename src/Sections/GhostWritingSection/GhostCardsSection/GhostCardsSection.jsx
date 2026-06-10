import React, { useState, useEffect, useRef } from 'react';

// Data for the memoir steps
const memoirSteps = [
    {
        id: 1,
        icon: '🔗',
        title: 'Book Details',
        frontText: 'You provide us with the necessary information about your memoir, such as your background, theme, and any other significant details you would like to include.',
        backText: 'Our experts will meticulously gather all your unique stories, experiences, and the core message you wish to convey, ensuring no detail is overlooked.',
        color: 'var(--card-front-bg)', 
        iconBg: '#34A853',
        iconColor: '#FFFFFF',
    },
    {
        id: 2,
        icon: '✍️',
        title: 'Research & Outline',
        frontText: 'Our memoir writers conduct thorough research and create an outline draft of the memoir, which serves as the blueprint for the final product.',
        backText: 'We develop a comprehensive outline, structuring your narrative into a compelling and coherent story arc, highlighting key events and emotional beats.',
        color: 'var(--card-front-bg)',
        iconBg: '#4285F4',
        iconColor: '#FFFFFF',
    },
    {
        id: 3,
        icon: '👍',
        title: 'Writing, editing, proofreading',
        frontText: 'Our memoir writing service team proceeds to write the full memoir with multiple rounds of editing and proofreading to ensure that the final product is free from errors.',
        backText: 'From first draft to final polish, our team refines every sentence, ensuring clarity, engagement, and a flawless narrative that captures your voice.',
        color: 'var(--card-front-bg)',
        iconBg: '#FBBC05',
        iconColor: '#FFFFFF',
    },
    {
        id: 4,
        icon: '🗣️',
        title: 'Publishing',
        frontText: 'The memoir is formatted and prepared for publication in the client’s preferred format, be it a printed book, an e-book, or an audiobook.',
        backText: 'We guide you through the publishing process, handling formatting, cover design coordination, and platform submission to bring your memoir to the world.',
        color: 'var(--card-front-bg)',
        iconBg: '#9C27B0',
        iconColor: '#FFFFFF',
    },
];

// Reusable FlipCard component
const FlipCard = ({ step, isHovered, onMouseEnter, onMouseLeave, className, style }) => {
    return (
        <div
            className={`flip-card-outer ${className}`}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            style={{ ...style, '--card-bg-color': step.color }}
        >
            <div className={`flip-card-inner ${isHovered ? 'flipped' : ''}`}>
                {/* Front of the card */}
                <div className="card-face card-front">
                    <div className="card-icon" style={{ backgroundColor: step.iconBg, color: step.iconColor }}>
                        {step.icon}
                    </div>
                    <h3 className="card-title">{step.title}</h3>
                    <p className="card-description">{step.frontText}</p>
                </div>

                {/* Back of the card */}
                <div className="card-face card-back">
                    <div className="card-icon" style={{ backgroundColor: step.iconBg, color: step.iconColor }}>
                        {step.icon}
                    </div>
                    <h3 className="card-title">{step.title}</h3>
                    <p className="card-description">{step.backText}</p>
                </div>
            </div>
        </div>
    );
};

// Helper function for character-by-character animation
const AnimatedCharacterText = ({ text, baseDelay = 0, charDelay = 0.03, className = "" }) => {
    let currentDelay = baseDelay;
    const characters = text.split('').map((char, index) => {
        currentDelay += charDelay;
        const content = char === ' ' ? '\u00A0' : char; 
        
        return (
            <span
                key={index}
                className={`inline-block text-reveal-char ${className}`}
                style={{ animationDelay: `${currentDelay}s` }}
            >
                {content}
            </span>
        );
    });

    return <>{characters}</>;
};

// Memoized Header Component
const MemoizedAnimatedHeader = React.memo(({ headingLines, isVisible, totalCharDuration }) => (
    <>
        <div>
            {/* Line 1 */}
            <h2 className="memoir-heading-line">
                {isVisible ? (
                    <AnimatedCharacterText 
                        text={headingLines[0]} 
                        baseDelay={0.1} 
                        className="text-glow-reveal"
                    />
                ) : headingLines[0]}
            </h2>
            
            {/* Line 2 */}
            <h2 className="memoir-heading-line">
                {isVisible ? (
                    <AnimatedCharacterText 
                        text={headingLines[1]} 
                        baseDelay={0.95} 
                        className="text-glow-reveal"
                    />
                ) : headingLines[1]}
            </h2>
        </div>

        <div 
            className={`heading-line ${isVisible ? 'visible' : ''}`} 
            style={{ transitionDelay: `${totalCharDuration + 0.1}s` }}
        ></div>
    </>
));


const GhostCards = () => {
    const [hoveredCardId, setHoveredCardId] = useState(null);
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    const headingLines = [
        'OUR MEMOIR WRITING EXPERTS',
        'WRITE YOUR MEMOIR IN 4 SIMPLE STEPS!'
    ];
    
    const totalCharDuration = 1.0; 

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect(); 
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    const handleMouseEnter = (id) => setHoveredCardId(id);
    const handleMouseLeave = () => setHoveredCardId(null);

    const customStyles = `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800;900&display=swap');

        :root {
            --section-bg: #F8FBFD;
            --main-text: #17373C;
            --card-front-bg: #FFFFFF;
            --card-desc: #4A5568;
            --dark-charcoal: #111827;
            --accent-green-primary: #00c49a;
            --card-padding: 1.5rem;
        }

        /* --- THEME ADAPTATION --- */
        [data-theme='dark'], .dark-mode {
            --section-bg: #0A0F1F;
            --main-text: #FFFFFF;
            --card-front-bg: #1F2937;
            --card-desc: #D1D5DB;
        }

        .memoir-section {
            font-family: 'Inter', sans-serif;
            padding: 5rem 1rem;
            background-color: var(--section-bg);
            text-align: center;
            overflow: hidden; 
            transition: background-color 0.4s ease;
        }

        /* --- Character & Glow Animations --- */
        @keyframes fadeInUpStagger {
            from { opacity: 0; transform: translateX(-10px); }
            to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes fadeInGlow {
            0% { opacity: 0; transform: translateX(-10px); text-shadow: 0 0 0px var(--accent-green-primary); }
            100% { opacity: 1; transform: translateX(0); text-shadow: 0 0 12px var(--accent-green-primary); }
        }

        .text-reveal-char {
            opacity: 0; 
            animation-duration: 0.5s;
            animation-timing-function: ease-out;
            animation-fill-mode: forwards;
            color: var(--main-text);
        }
        
        .text-reveal-char.text-glow-reveal { animation-name: fadeInGlow; }
        .text-reveal-char:not(.text-glow-reveal) { animation-name: fadeInUpStagger; }

        @keyframes slideInRight {
            from { opacity: 0; transform: translateX(100%); }
            to { opacity: 1; transform: translateX(0); }
        }
        
        .animate-on-scroll-right {
            opacity: 0;
            animation-name: slideInRight;
            animation-duration: 0.8s;
            animation-timing-function: ease-out;
            animation-fill-mode: forwards;
        }

        .memoir-heading-line {
            font-size: 2.25rem;
            font-weight: 800;
            line-height: 1.2;
            display: flex; 
            justify-content: center;
            flex-wrap: wrap; 
        }

        .heading-line {
            width: 60px;
            height: 4px;
            background-color: var(--accent-green-primary);
            margin: 1.5rem auto 3rem auto;
            border-radius: 2px;
            opacity: 0;
            transition: opacity 0.5s ease-out;
        }
        .heading-line.visible { opacity: 1; }

        /* --- Cards Grid --- */
        .cards-grid {
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            gap: 2rem;
            max-width: 1200px;
            margin: 0 auto;
            justify-items: center;
        }

        @media (min-width: 768px) { .cards-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 1024px) { .cards-grid { grid-template-columns: repeat(4, 1fr); } }

        /* --- 🎯 FLIP CARD STYLES RESTORED --- */
        .flip-card-outer {
            width: 100%;
            max-width: 280px;
            height: 400px;
            perspective: 1000px;
            background-color: transparent;
            border-radius: 1rem;
            opacity: 0; 
            transform: translateX(100%); 
        }

        .flip-card-inner {
            position: relative;
            width: 100%;
            height: 100%;
            text-align: center;
            transition: transform 0.8s, box-shadow 0.3s;
            transform-style: preserve-3d;
            box-shadow: 0 15px 45px rgba(0, 0, 0, 0.15);
            border-radius: 1rem;
        }
        
        .flip-card-outer:hover .flip-card-inner {
            transform: translateY(-10px);
            box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2);
        }

        .flip-card-inner.flipped {
            transform: rotateY(180deg);
        }
        
        .flip-card-outer:hover .flip-card-inner.flipped {
              transform: rotateY(180deg);
        }

        .card-face {
            position: absolute;
            width: 100%;
            height: 100%;
            backface-visibility: hidden;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            padding: var(--card-padding);
            border-radius: 1rem;
            box-sizing: border-box;
        }

        .card-front {
            background-color: var(--card-front-bg); 
            color: var(--main-text);
            transform: rotateY(0deg);
        }

        .card-back {
            background-color: var(--dark-charcoal);
            color: #FFFFFF;
            transform: rotateY(180deg);
            justify-content: center;
            border: 1px solid rgba(255,255,255,0.2);
        }

        .card-icon {
            width: 65px;
            height: 65px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 2rem;
            margin-bottom: 1.5rem;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        }

        .card-title { font-size: 1.3rem; font-weight: 800; margin-bottom: 1rem; }
        .card-description { font-size: 0.95rem; line-height: 1.6; color: var(--card-desc); }
        .card-back .card-description { color: #E2E8F0; }
    `;

    return (
        <section ref={sectionRef} className="memoir-section">
            <style>{customStyles}</style>
            
            <MemoizedAnimatedHeader
                headingLines={headingLines}
                isVisible={isVisible}
                totalCharDuration={totalCharDuration}
            />

            <div className="cards-grid">
                {memoirSteps.map((step, index) => (
                    <FlipCard
                        key={step.id}
                        step={step}
                        isHovered={hoveredCardId === step.id}
                        onMouseEnter={() => handleMouseEnter(step.id)}
                        onMouseLeave={handleMouseLeave}
                        className={isVisible ? 'animate-on-scroll-right' : ''}
                        style={{ animationDelay: `${1.2 + index * 0.15}s` }} 
                    />
                ))}
            </div>
        </section>
    );
};

export default GhostCards;