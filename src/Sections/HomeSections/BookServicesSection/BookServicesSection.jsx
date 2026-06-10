import React, { useState } from 'react';
import { Link } from "react-router-dom";

// --- SVG Icon Definitions ---
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
            return (
                <svg {...defaultProps} viewBox="0 0 24 24">
                    <path d="M12.67 19.1c.97-.97 1.25-2.28.87-3.48a4.98 4.98 0 0 1-4.83-4.83c-1.2-.38-2.51-.1-3.48.87L2 15l7 7 3.67-3.9z" />
                    <path d="M16 11l4-4 2-2.5L16 2l-2 2-4 4" />
                </svg>
            );
        case 'BookOpen':
            return (
                <svg {...defaultProps} viewBox="0 0 24 24">
                    <path d="M2 12s3 4 8 4 8-4 8-4M2 12V6s3 4 8 4 8-4 8-4V12M2 12c.7-.7 1.5-1 2.5-1 2 0 4 1 6 1s4-1 6-1c1 0 1.8.3 2.5 1M10 16v3M10 16h4M14 16v3M12 19v3" />
                </svg>
            );
        case 'FileText':
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

const cardData = [
    { id: 1, slist: ['#a6c869', '#37a65a'], title: 'Ghost Writing Services', ptext: 'Our team of professional editors and ghostwriters provides top-notch ghostwriting services to help you pull your book all together.', link: '/ghost-writing', icon: 'Feather' },
    { id: 2, slist: ['#ebac79', '#d65b56'], title: 'Fiction Writing Services', ptext: 'Seeking an authentic writing and editing source to eliminate all mistakes? Our team has the editors onboard to fine-tune your script!', link: '/fiction-writing', icon: 'BookOpen' },
    { id: 3, slist: ['#5c7aff', '#3452cc'], title: 'Non-Fiction Writing Services', ptext: 'Our Book Proofreading service ensures your manuscript is free from errors and ready to captivate readers with its brilliance.', link: '/non-fiction-writing', icon: 'FileText' },
    { id: 4, slist: ['#90cbb7', '#2fb1a9'], title: 'Memoir Writing Services', ptext: 'Transform your script into a beautifully formatted book that attracts readers from the first page to the last with our expert service.', link: '/memoir-writing', icon: 'Scroll' },
    { id: 5, slist: ['#8a7876', '#32201c'], title: 'Story Writing Services', ptext: 'Great ideas for your book cover design but lacking the ability to execute them? You need professional assistance, and you are good to go!', link: '/story-writing', icon: 'Sparkles' },
    { id: 6, slist: ['#8c67d6', '#694fb3'], title: 'Script Writing Services', ptext: 'Maximize your book sales potential with the best book promotion services offered by a leading book marketing company.', link: '/script-writing', icon: 'Film' }
];

const hexToRgb = (hex) => {
    if (!hex || typeof hex !== 'string' || hex.length !== 7 || hex[0] !== '#') return { r: 0, g: 0, b: 0 };
    const bigint = parseInt(hex.slice(1), 16);
    return { r: (bigint >> 16) & 255, g: (bigint >> 8) & 255, b: bigint & 255 };
};

const cssStyles = `
/* Main Container */
.bg-animated-container {
    background-color: var(--hero-bg); 
    padding: 80px 0;
    position: relative;
    min-height: 100vh;
    overflow: hidden;
    transition: background-color 0.4s ease;
}

/* Background Overlay Logic */
.bg-layer {
    position: absolute;
    top: 0; left: 0; width: 100%; height: 100%;
    z-index: 0;
    /* Dark Mode Overlay */
    background-color: rgba(10, 10, 15, 0.4); 
    background-image: radial-gradient(circle at 10% 10%, #3e1f57 1%, transparent 3%),
                      radial-gradient(circle at 80% 90%, #6f2a6f 1%, transparent 3%);
    background-size: 300% 300%;
    animation: background-pan 60s linear infinite alternate;
}

/* Force pure white background in light mode */
[data-theme='light'] .bg-layer, .light-mode .bg-layer {
    background-color: #F7F9FC !important;
    background-image: none !important;
}

@keyframes background-pan {
    0% { background-position: 0% 0%; }
    100% { background-position: 100% 100%; }
}

/* Header Section */
.title-section {
    max-width: 1200px;
    margin: 0 auto 60px;
    padding: 0 20px;
    z-index: 1;
    position: relative;
    text-align: center; 
}

.title-section h1 {
    font-size: clamp(28px, 4vw, 36px);
    line-height: 1.2;
    color: var(--headline-color);
    font-weight: 700;
}

.title-section p {
    color: var(--text-color);
    opacity: 0.8;
    font-size: 16px;
}

/* Responsive Grid */
.card-list-container {
    display: grid;
    /* 1 column mobile, 2 columns tablet, 3 columns desktop */
    grid-template-columns: 1fr;
    gap: 30px; 
    padding: 0 20px;
    margin: 0 auto;
    max-width: 1200px;
    z-index: 1;
    position: relative;
}

@media (min-width: 640px) {
    .card-list-container { grid-template-columns: repeat(2, 1fr); }
}

@media (min-width: 1024px) {
    .card-list-container { grid-template-columns: repeat(3, 1fr); }
}

/* Individual Card Styling */
.exact-card {
    display: flex;
    flex-direction: column; 
    background-color: #ffffff; /* Always keep card white for contrast */
    border-radius: 20px; 
    padding: 40px; 
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05); 
    transition: all 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);
    cursor: pointer;
    border: 1px solid rgba(0,0,0,0.05);
}

.exact-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 25px rgba(0, 0, 0, 0.08);
}

/* Icon Styles */
.icon-placeholder {
    width: 60px; height: 60px; 
    margin-bottom: 25px; 
    border-radius: 12px;
    background-color: rgba(var(--c1-r), var(--c1-g), var(--c1-b), 0.1);
    display: flex; align-items: center; justify-content: center;
}

/* FIXED TEXT COLOR: Forces Black/Dark Gray inside white cards */
.card-title {
    font-size: 1.4rem;
    font-weight: 800;
    color: #111827 !important; /* Force dark gray/black */
    margin-bottom: 12px;
}

.card-description {
    font-size: 16px;
    color: #4b5563 !important; /* Force readable gray */
    line-height: 1.6;
    margin-bottom: 30px;
    flex-grow: 1;
}

/* Fixed "Learn More" Button */
.learn-more-btn {
    padding: 12px 24px;
    background: transparent;
    color: #111827 !important; /* Start black */
    border: 2px solid #111827;
    border-radius: 10px;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.3s ease;
}

.exact-card:hover .learn-more-btn {
    background-color: var(--c1);
    border-color: var(--c1);
    color: #FFFFFF !important; /* Turns white on color background */
}

`;

const DataCardGrid = () => {
    const [hoveredCardId, setHoveredCardId] = useState(null);
    const isBlurActive = hoveredCardId !== null;

    return (
        <div className={`bg-animated-container ${isBlurActive ? 'blur-active' : ''}`}>
            <style>{cssStyles}</style> 
            <div className="bg-layer"></div>
            
            <div className="title-section">
                <h1>Our Professional Services</h1>
                <p>Discover our tailored writing solutions and elevated experience.</p>
            </div>
            
            <div className="card-list-container">
                {cardData.map((item) => {
                    const [color1, color2] = item.slist;
                    const rgb = hexToRgb(color1); 
                    
                    return (
                        <div 
                            key={item.id}
                            className="exact-card" 
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
                            <div className="icon-placeholder">
                                <IconRenderer name={item.icon} color={color1} size={28} />
                            </div>
                            
                            <h3 className="card-title">{item.title}</h3>
                            <p className="card-description">{item.ptext}</p>
                            
                            <Link to={item.link} style={{ textDecoration: 'none' }}>
                                <button className="learn-more-btn">
                                    Learn More
                                </button>
                            </Link>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default DataCardGrid;