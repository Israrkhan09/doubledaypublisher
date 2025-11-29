import React, { useState, useEffect, useRef } from 'react';

// Data for the memoir steps
const memoirSteps = [
    {
        id: 1,
        icon: '🔗',
        title: 'Book Details',
        frontText: 'You provide us with the necessary information about your memoir, such as your background, theme, and any other significant details you would like to include.',
        backText: 'Our experts will meticulously gather all your unique stories, experiences, and the core message you wish to convey, ensuring no detail is overlooked.',
        color: '#FAFAFA', // Luxury White Front
        iconBg: '#34A853',
        iconColor: '#FFFFFF',
    },
    {
        id: 2,
        icon: '✍️',
        title: 'Research & Outline',
        frontText: 'Our memoir writers conduct thorough research and create an outline draft of the memoir, which serves as the blueprint for the final product.',
        backText: 'We develop a comprehensive outline, structuring your narrative into a compelling and coherent story arc, highlighting key events and emotional beats.',
        color: '#FAFAFA', // Luxury White Front
        iconBg: '#4285F4',
        iconColor: '#FFFFFF',
    },
    {
        id: 3,
        icon: '👍',
        title: 'Writing, editing, proofreading',
        frontText: 'Our memoir writing service team proceeds to write the full memoir with multiple rounds of editing and proofreading to ensure that the final product is free from errors.',
        backText: 'From first draft to final polish, our team refines every sentence, ensuring clarity, engagement, and a flawless narrative that captures your voice.',
        color: '#FAFAFA', // Luxury White Front
        iconBg: '#FBBC05',
        iconColor: '#FFFFFF',
    },
    {
        id: 4,
        icon: '🗣️',
        title: 'Publishing',
        frontText: 'The memoir is formatted and prepared for publication in the client’s preferred format, be it a printed book, an e-book, or an audiobook.',
        backText: 'We guide you through the publishing process, handling formatting, cover design coordination, and platform submission to bring your memoir to the world.',
        color: '#FAFAFA', // Luxury White Front
        iconBg: '#9C27B0',
        iconColor: '#FFFFFF',
    },
];

// Reusable FlipCard component (No Change)
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

// --- Helper function for character-by-character animation ---
const AnimatedCharacterText = ({ text, baseDelay = 0, charDelay = 0.03, className = "" }) => {
    let currentDelay = baseDelay;
    const characters = text.split('').map((char, index) => {
        // Increment delay for each character
        currentDelay += charDelay;
        // Use &nbsp; for spaces to ensure they are rendered and spaced correctly
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
// -----------------------------------------------------------

// --- Memoized Header Component to prevent re-rendering on card hover ---
const MemoizedAnimatedHeader = React.memo(({ headingLines, isVisible, totalCharDuration }) => (
    <>
        <div>
            {/* Line 1 */}
            <h2 className="memoir-heading-line">
                {isVisible ? (
                    <AnimatedCharacterText 
                        text={headingLines[0]} 
                        baseDelay={0.1} // Start delay
                        className="text-glow-reveal" // ADDED GLOW CLASS
                    />
                ) : headingLines[0]}
            </h2>
            
            {/* Line 2 */}
            <h2 className="memoir-heading-line">
                {isVisible ? (
                    <AnimatedCharacterText 
                        text={headingLines[1]} 
                        // Start Line 2 animation after Line 1 is mostly complete (approx 0.84s)
                        baseDelay={0.95} 
                        className="text-glow-reveal" // ADDED GLOW CLASS
                    />
                ) : headingLines[1]}
            </h2>
        </div>

        {/* Divider Line (Animated after both lines) */}
        <div 
            className={`heading-line ${isVisible ? 'visible' : ''}`} 
            // Start the divider fade after the last character is almost visible
            style={{ transitionDelay: `${totalCharDuration + 0.1}s` }}
        ></div>
    </>
));
// ----------------------------------------------------------------------


const MemoirStepsSection = () => {
    // State to track which card is hovered for the flip effect
    const [hoveredCardId, setHoveredCardId] = useState(null);

    // State to trigger scroll animations
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null); // Ref for the main section to observe

    // Array containing the lines of the main heading
    const headingLines = [
        'OUR MEMOIR WRITING EXPERTS',
        'WRITE YOUR MEMOIR IN 4 SIMPLE STEPS!'
    ];
    
    // Calculate the total duration of the character animation for delay calculation
    const totalCharDuration = 1.0; 


    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect(); // Stop observing once it's visible
                }
            },
            {
                root: null, // viewport as the root
                rootMargin: '0px',
                threshold: 0.3, // Trigger when 30% of the section is visible
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    const handleMouseEnter = (id) => {
        setHoveredCardId(id);
    };

    const handleMouseLeave = () => {
        setHoveredCardId(null);
    };

    const customStyles = `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800;900&display=swap');

        :root {
            --primary-text: #17373C; /* Dark text for contrast */
            --dark-charcoal: #111827; /* Rich, dark color for the card back */
            --accent-green-primary: #00c49a; /* Used for the glow effect */
            --light-bg: #F8FBFD; /* Section background color */
            --card-padding: 1.5rem;
        }

        .memoir-section {
            font-family: 'Inter', sans-serif;
            padding: 4rem 1rem;
            background-color: #121212;
            text-align: center;
            overflow: hidden; 
        }

        /* --- New Character Stagger Animation --- */
        @keyframes fadeInUpStagger {
            from {
                opacity: 0;
                transform: translateX(-10px); 
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }
        
        /* New Keyframes for the Lighting Glow Effect */
        @keyframes fadeInGlow {
            0% {
                opacity: 0;
                transform: translateX(-10px);
                text-shadow: 0 0 0px var(--accent-green-primary); 
            }
            100% {
                opacity: 1;
                transform: translateX(0);
                text-shadow: 0 0 8px var(--accent-green-primary); /* Final bright glow */
            }
        }

        .text-reveal-char {
            opacity: 0; 
            animation-duration: 0.5s;
            animation-timing-function: ease-out;
            animation-fill-mode: forwards;
        }
        
        .text-reveal-char.text-glow-reveal {
            animation-name: fadeInGlow; /* Apply the glow animation */
        }
        
        /* Ensure normal reveal still works if glow is not applied */
        .text-reveal-char:not(.text-glow-reveal) {
            animation-name: fadeInUpStagger; 
        }
        /* -------------------------------------- */


        /* --- Card Slide-in Animation (Unchanged) --- */
        @keyframes slideInRight {
            from {
                opacity: 0;
                transform: translateX(100%);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }
        
        .animate-on-scroll-right {
            opacity: 0;
            animation-name: slideInRight;
            animation-duration: 0.8s;
            animation-timing-function: ease-out;
            animation-fill-mode: forwards;
        }
        /* ------------------------------------------- */


        .memoir-heading-line {
            font-size: 2.25rem;
            font-weight: 800;
            color: #FFFFFF; /* Base text color (will be overridden by shadow) */
            line-height: 1.2;
            margin: 0; 
            padding: 0;
            display: flex; 
            justify-content: center;
            flex-wrap: wrap; 
            overflow: hidden; 
        }
        /* Ensure spacing between the two lines */
        .memoir-heading-line:first-child {
            margin-bottom: 0.5rem; 
        }

        /* Divider line uses the same fade animation as the characters, just delayed */
        .heading-line {
            width: 50px;
            height: 4px;
            background-color: var(--accent-green-primary); /* Green divider */
            margin: 0 auto 2.5rem auto;
            border-radius: 2px;
            
            opacity: 0;
            transition: opacity 0.5s ease-out;
        }
        .heading-line.visible {
            opacity: 1;
        }


        .cards-grid {
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            gap: 1.5rem;
            max-width: 1200px;
            margin: 0 auto;
            justify-items: center;
        }

        @media (min-width: 768px) {
            .cards-grid {
                grid-template-columns: repeat(2, 1fr);
            }
        }

        @media (min-width: 1024px) {
            .cards-grid {
                grid-template-columns: repeat(4, 1fr);
            }
        }

        /* --- FLIP CARD STYLES (No Major Functional Change) --- */
        .flip-card-outer {
            width: 100%;
            max-width: 280px;
            height: 400px;
            perspective: 1000px;
            background-color: transparent;
            border-radius: 1rem;
            
            /* Initial state for scroll animation */
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
            box-shadow: 0 15px 45px rgba(0, 0, 0, 0.15), 0 5px 15px rgba(0, 0, 0, 0.05);
            border-radius: 1rem;
        }
        
        .flip-card-outer:hover .flip-card-inner {
            transform: translateY(-5px);
            box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2), 0 10px 20px rgba(0, 0, 0, 0.1);
        }

        .flip-card-inner.flipped {
            transform: rotateY(180deg);
            box-shadow: 0 15px 45px rgba(0, 0, 0, 0.15), 0 5px 15px rgba(0, 0, 0, 0.05);
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
            color: var(--primary-text);
            box-sizing: border-box;
        }

        .card-front {
            background-color: var(--card-bg-color, #FAFAFA); 
            transform: rotateY(0deg);
        }

        .card-back {
            background-color: var(--dark-charcoal);
            color: #FFFFFF;
            transform: rotateY(180deg);
            justify-content: center;
            border: 1px solid white;
        }

        .card-icon {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.8rem;
            margin-bottom: 1rem;
            flex-shrink: 0;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
        }

        .card-title {
            font-size: 1.25rem;
            font-weight: 700;
            margin-bottom: 0.75rem;
        }

        .card-description {
            font-size: 0.95rem;
            line-height: 1.6;
            color: #4A5568;
            margin-bottom: 0;
        }

        .card-back .card-description {
            color: #E2E8F0; 
        }
    `;

    return (
        <section ref={sectionRef} className="memoir-section">
            <style>{customStyles}</style>
            
            {/* Memoized Header Component to prevent re-render on hover */}
            <MemoizedAnimatedHeader
                headingLines={headingLines}
                isVisible={isVisible}
                totalCharDuration={totalCharDuration}
            />

            {/* Staggered Cards from Right */}
            <div className="cards-grid">
                {memoirSteps.map((step, index) => (
                    <FlipCard
                        key={step.id}
                        step={step}
                        isHovered={hoveredCardId === step.id}
                        onMouseEnter={() => handleMouseEnter(step.id)}
                        onMouseLeave={handleMouseLeave}
                        className={isVisible ? 'animate-on-scroll-right' : ''}
                        // Start cards significantly later to ensure header finishes
                        // Base delay of 1.2s + stagger
                        style={{ animationDelay: `${1.2 + index * 0.15}s` }} 
                    />
                ))}
            </div>
        </section>
    );
};

export default MemoirStepsSection;