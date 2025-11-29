import React, { useState } from 'react';

// --- SVG Icon Definitions ---

// Helper function to render the appropriate SVG based on the icon name
const IconRenderer = ({ name, color, size = 26 }) => { 
    const defaultProps = {
        stroke: color,
        fill: "none",
        strokeWidth: "2.5", 
        strokeLinecap: "round",
        strokeLinejoin: "round",
        height: size,
        width: size,
        className: "transition-transform duration-600",
    };

    switch (name) {
        case 'Feather':
            // Represents Ghost Writing/Quill (writing for another)
            return (
                <svg {...defaultProps} viewBox="0 0 24 24">
                    <path d="M12.67 19.1c.97-.97 1.25-2.28.87-3.48a4.98 4.98 0 0 1-4.83-4.83c-1.2-.38-2.51-.1-3.48.87L2 15l7 7 3.67-3.9z" />
                    <path d="M16 11l4-4 2-2.5L16 2l-2 2-4 4" />
                </svg>
            );
        case 'BookOpen':
            // Represents Fiction Writing/Story/Novel
            return (
                <svg {...defaultProps} viewBox="0 0 24 24">
                    <path d="M2 12s3 4 8 4 8-4 8-4M2 12V6s3 4 8 4 8-4 8-4V12M2 12c.7-.7 1.5-1 2.5-1 2 0 4 1 6 1s4-1 6-1c1 0 1.8.3 2.5 1M10 16v3M10 16h4M14 16v3M12 19v3" />
                </svg>
            );
        case 'FileText':
            // Represents Non-Fiction Writing/Documents/Academic Reports
            return (
                <svg {...defaultProps} viewBox="0 0 24 24">
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                    <line x1="10" y1="9" x2="8" y2="9" />
                </svg>
            );
        case 'Scroll':
            // Represents Memoir Writing/Life Story/History/Record
            return (
                <svg {...defaultProps} viewBox="0 0 24 24">
                    <path d="M12 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/>
                    <path d="M7 21h10"/>
                    <path d="M10 21V5a2 2 0 1 0-4 0v16"/>
                    <path d="M14 21V5a2 2 0 1 1 4 0v16"/>
                    <path d="M3 5c0-1.1.9-2 2-2h14a2 2 0 0 1 2 2v2H3V5Z"/>
                </svg>
            );
        case 'Sparkles':
            // Represents Story Writing/Creativity/Imagination
            return (
                <svg {...defaultProps} viewBox="0 0 24 24">
                    <path d="M17 3a2.85 2.83 0 0 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
                    <path d="M15 16l-4.5 4.5" />
                    <path d="M22 10V6" />
                    <path d="M22 18V14" />
                    <path d="M16 22h4" />
                    <path d="M8 22h4" />
                </svg>
            );
        case 'Film':
            // Represents Script Writing/Screenplay/Visual Media
            return (
                <svg {...defaultProps} viewBox="0 0 24 24">
                    <rect x="2" y="2" width="20" height="20" rx="2" ry="2" />
                    <line x1="8" y1="2" x2="8" y2="22" />
                    <line x1="16" y1="2" x2="16" y2="22" />
                    <line x1="2" y1="8" x2="22" y2="8" />
                    <line x1="2" y1="16" x2="22" y2="16" />
                </svg>
            );
        default:
            return null;
    }
};

// Data for six cards, using colors for the hover accent
const cardData = [
    { id: 1, slist: ['#a6c869', '#37a65a'], title: 'Ghost Writing Services', ptext: 'Our team of professional editors and ghostwriters provides top-notch ghostwriting services to help you pull your book all together.', link: 'Learn More →', icon: 'Feather' },
    { id: 2, slist: ['#ebac79', '#d65b56'], title: 'Fiction Writing Services', ptext: 'Seeking an authentic writing and editing source to eliminate all mistakes? Our team has the editors onboard to fine-tune your script!', link: 'Learn More →', icon: 'BookOpen' },
    { id: 3, slist: ['#5c7aff', '#3452cc'], title: 'Non-Fiction Writing Services', ptext: 'Our Book Proofreading service ensures your manuscript is free from errors and ready to captivate readers with its brilliance.', link: 'Learn More →', icon: 'FileText' },
    { id: 4, slist: ['#90cbb7', '#2fb1a9'], title: 'Memoir Writing Services', ptext: 'Transform your script into a beautifully formatted book that attracts readers from the first page to the last with our expert service.', link: 'Learn More →', icon: 'Scroll' },
    { id: 5, slist: ['#8a7876', '#32201c'], title: 'Story Writing Services', ptext: 'Great ideas for your book cover design but lacking the ability to execute them? You need professional assistance, and you are good to go!', link: 'Learn More →', icon: 'Sparkles' },
    { id: 6, slist: ['#8c67d6', '#694fb3'], title: 'Script Writing Services', ptext: 'Maximize your book sales potential with the best book promotion services offered by a leading book marketing company.', link: 'Learn More →', icon: 'Film' }
];

// Helper function to convert hex to RGB (needed for the CSS accent glow)
const hexToRgb = (hex) => {
    if (!hex || typeof hex !== 'string' || hex.length !== 7 || hex[0] !== '#') {
        return { r: 0, g: 0, b: 0 };
    }
    try {
        const bigint = parseInt(hex.slice(1), 16);
        const r = (bigint >> 16) & 255;
        const g = (bigint >> 8) & 255;
        const b = bigint & 255;
        return { r, g, b };
    } catch (e) {
        return { r: 0, g: 0, b: 0 };
    }
};

// The CSS is defined as a string with the global blur, unique hover, and fade-in effects
const cssStyles = `
/* --- Global & Layout Styles --- */
.bg-animated-container {
// background:red;
// margin-top:20px;
padding-top :66px;
padding-bottom :66px;
    transition: filter 0.5s ease-in-out;
    position: relative;
    min-height: 100vh;
    overflow: hidden; /* Important for the full-screen background */
}

/* THE BACKGROUND LAYER: Handles Opacity (0.2) and Animation */
.bg-layer {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0; /* Ensures it is behind the content */
    
    /* APPLIED OPACITY: rgba(0, 0, 0, 0.2) for blackish background with 20% opacity */
    background-color: rgba(41, 39, 39, 0.2); 
    
    /* Subtle Background Animation (using a radial gradient) */
    background-image: radial-gradient(circle at 10% 10%, #3e1f57 1%, transparent 3%),
                      radial-gradient(circle at 80% 90%, #6f2a6f 1%, transparent 3%),
                      radial-gradient(circle at 40% 50%, #4a217c 1%, transparent 3%);
    background-size: 300% 300%;
    animation: background-pan 60s linear infinite alternate;
    // margin-top: -30px;
    // padding:30px 40px;
}

@keyframes background-pan {
    0% {
        background-position: 0% 0%;
    }
    100% {
        background-position: 100% 100%;
    }
}

.font-\[Inter\] {
    font-family: Inter, sans-serif;
}

.title-section {
    max-width: 1200px;
    color: white;
    font-size:18px;
    margin: 0 auto;
    padding: 0 30px;
    z-index: 1; /* Bring content above the new background layer */
    position: relative;
    // background: red;
    
    transition: filter 0.5s ease-in-out;
    text-align: center; 
}

/* FIX: Only blur the title section directly */
.blur-active .title-section {
    filter: blur(5px);
}

.card-list-container {
    display: grid;
    /* Sets up a responsive 3-column grid for desktop */
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); 
    gap: 35px; 
    padding: 30px;
    margin: 0 auto;
    max-width: 1200px;
    z-index: 1; /* Bring content above the new background layer */
    position: relative;
    
    /* Crucial for enabling the 3D perspective */
    perspective: 1500px; 
    transition: filter 0.5s ease-in-out;
}

/* --- Individual Card Style --- */
.exact-card {
    display: flex;
    flex-direction: column; 
    align-items: flex-start;
    /* Card content must be fully opaque white */
    background-color: #fff; 
    border-radius: 16px; 
    padding: 30px; 
    
    /* Initial subtle shadow for depth */
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05); 
    
    position: relative;
    overflow: hidden;
    height: 100%; 
    
    /* Enable 3D transforms */
    transform-style: preserve-3d; 
    
    /* Extreme Animation base state: only vertical lift/fade */
    transition: transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1), 
                box-shadow 0.6s cubic-bezier(0.2, 0.8, 0.2, 1),
                filter 0.5s ease-in-out; 
    cursor: pointer;
    
    border: 1px solid #e0e0e0; /* Subtle base border */
    z-index: 10; /* Ensure card content is above ::after and the BG layer */
}

/* FIX: When the global blur is active, apply blur ONLY to cards that are NOT hovered */
.blur-active .exact-card:not(:hover) {
    filter: blur(5px);
    z-index: 5; /* Keep them below the hovered card */
}
/* Ensure the hovered card remains sharp and lifted on top */
.blur-active .exact-card:hover {
    filter: blur(0);
    z-index: 100; /* Bring the hovered card fully to the front */
}


/* New: Animated Glowing Border ::after (The Power-up Effect) */
.exact-card::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--c1); /* Use accent color */
    border-radius: 16px;
    z-index: -1; /* Place behind the main card content */
    
    /* Start scaled down/invisible */
    transform: scale(0.98); 
    opacity: 0;
    
    transition: all 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);
}

.exact-card:hover::after {
    /* Scale up slightly more aggressively and blur for intense soft glow */
    transform: scale(1.03); 
    opacity: 1;
    filter: blur(20px); 
}

.exact-card:hover {
    /* Vertical lift and subtle scale for dramatic fade-in/expansion */
    transform: translateY(-15px) scale(1.01); 
    
    /* Main shadow remains, the glow comes from ::after */
    box-shadow: 0 45px 90px rgba(0, 0, 0, 0.4); 
    border-color: #fff; /* Blend the original border into the background on hover */
}

/* --- Inner Shine/Flare Effect (::before) */
.exact-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%; /* Start off-screen to the left */
    width: 200%;
    height: 100%;
    /* Gradient for the subtle white shine */
    background: linear-gradient(
        to right, 
        transparent 0%, 
        rgba(255, 255, 255, 0.15) 20%, 
        rgba(255, 255, 255, 0.45) 50%, 
        rgba(255, 255, 255, 0.15) 80%, 
        transparent 100%
    );
    transform: skewX(-20deg); /* Angle the shine */
    transition: transform 0.6s ease-out; /* Faster sweep */
    pointer-events: none; 
    z-index: 5;
}

.exact-card:hover::before {
    /* Sweep the shine across the card on hover */
    transform: translate(180%, 0) skewX(-20deg); /* Longer sweep distance */
}

/* --- Content Wrapper for Parallax Effect --- */
.card-content-wrapper {
    width: 100%;
    transition: transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);
    z-index: 10;
    position: relative; /* Ensure it's layered correctly */
}

.exact-card:hover .card-content-wrapper {
    /* Slight forward movement to emphasize depth (Parallax) */
    transform: translateZ(10px); 
}


/* --- Icon Placeholder Styles (Updated for single SVG) --- */
.icon-placeholder {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 55px; /* Slightly larger container */
    height: 55px; 
    margin-bottom: 20px; 
    margin-top: 5px; 
    border-radius: 10px;
    background-color: #f0f0f5; /* Light background for the icon */
    position: relative;
    overflow: hidden;
    transition: transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.05);
}

.icon-svg {
    /* Use the variable for the icon color */
    color: var(--c1); 
    transition: transform 0.6s;
}

.exact-card:hover .icon-placeholder {
    /* Subtle parallax movement on the icon container */
    transform: translateY(-5px) translateZ(10px); 
    /* Give the icon background a glow effect on hover */
    box-shadow: 0 0 15px rgba(var(--c1-r), var(--c1-g), var(--c1-b), 0.5);
}

.exact-card:hover .icon-svg {
    /* Subtle shake/rotate effect on the icon itself */
    transform: scale(1.1) rotate(-5deg); 
}

/* --- Content Area Styles --- */
.card-title {
    font-size: 1.35em; 
    font-weight: 800; 
    color: #1a1a1a; 
    margin-top: 0;
    margin-bottom: 12px;
    transition: text-shadow 0.6s;
}

.exact-card:hover .card-title {
    /* Subtle accent glow on the text */
    text-shadow: 0 0 5px rgba(var(--c1-r), var(--c1-g), var(--c1-b), 0.5);
}

.card-description {
    font-size: 1em;
    color: #444; 
    line-height: 1.7; 
    margin-bottom: 25px;
    flex-grow: 1; 
}

.card-link {
    font-size: 1em;
    font-weight: 700;
    color: #1a1a1a; /* Base link color is black */
    text-decoration: none;
    display: inline-flex; /* Use inline-flex for button-like appearance */
    align-items: center;
    padding: 8px 0; /* Base padding */
    border-radius: 6px;
    transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    position: relative;
    z-index: 10;
}

.card-link:hover {
    color: #fff; /* White text on hover, as requested */
    background-color: var(--c1); /* Accent color background to ensure contrast */
    padding: 8px 15px; /* Increase horizontal padding to form button */
    transform: translateX(0px); 
}

/* --- Responsive Adjustments --- */
@media (max-width: 768px) {
    .card-list-container {
        grid-template-columns: 1fr; 
        gap: 20px;
        padding: 24px 35px;
        perspective: none; 
    }
    .exact-card {
        padding: 25px;
        
        transform: none !important;
    }
}
`;

// Component to handle the grid layout and card mapping
const DataCardGrid = () => {
    // State to track which card is currently being hovered
    const [hoveredCardId, setHoveredCardId] = useState(null);

    // Determines if the global blur class should be applied
    const isBlurActive = hoveredCardId !== null;

    return (
        <div className={`bg-animated-container min-h-screen py-16 font-[Inter] ${isBlurActive ? 'blur-active' : ''}`}>
            {/* Inject the CSS directly using a style tag */}
            <style>{cssStyles}</style> 
            
            {/* Background Layer with Animation and Opacity 0.20 */}
            <div className="bg-layer"></div>
            
            <div className="title-section text-center mb-16">
                {/* Main Title Color: White (text-white) */}
                <h1 className="text-5xl font-extrabold text-white">Our Professional Services</h1>
                {/* Subtitle Color: Lighter Gray for readability */}
                <p className="text-gray-400 mt-3 text-xl">Discover our tailored writing solutions and elevated experience.</p>
            </div>
            
            <div className="card-list-container">
                {cardData.map((item) => {
                    const [color1, color2] = item.slist;
                    const rgb = hexToRgb(color1); 
                    
                    return (
                        <div 
                            key={item.id}
                            className="exact-card group" 
                            style={{ 
                                '--c1': color1, 
                                '--c2': color2,
                                '--c1-r': rgb.r, 
                                '--c1-g': rgb.g,
                                '--c1-b': rgb.b,
                            }}
                            onMouseEnter={() => setHoveredCardId(item.id)}
                            onMouseLeave={() => setHoveredCardId(null)}
                        >
                            {/* Content wrapper for the parallax effect */}
                            <div className="card-content-wrapper">
                                {/* Icon Placeholder (Single SVG Icon) */}
                                <div className="icon-placeholder">
                                    <div className="icon-svg">
                                        <IconRenderer 
                                            name={item.icon} 
                                            color={color1} 
                                            size={26}
                                        />
                                    </div>
                                </div>
                                
                                {/* The Content Area */}
                                <div className="card-right-section">
                                    <h3 className="card-title">{item.title}</h3>
                                    <p className="card-description">{item.ptext}</p>
                                    <a href="#" className="card-link">{item.link}</a>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default DataCardGrid;