import React from 'react';

import Image_path_1 from '../images/Expertise-Images/manuscript-development.jpg';
import Image_path_2 from '../images/Expertise-Images/professional-edting.jpg';
import Image_path_3 from '../images/Expertise-Images/cover-and-design-format.jpg';
import Image_path_4 from '../images/Expertise-Images/publishing and strategy.jpg';

const cardData = [
    {
        id: 1,
        title: 'Manuscript Development',
        description: 'We provide detailed structural editing, plot hole analysis, and character refinement to ensure a captivating story from the ground up.',
        imageUrl: Image_path_1,
        gradient: ['#f89b29', '#ff0f7b']
    },
    {
        id: 2,
        title: 'Professional Editing',
        description: 'A meticulous process including copyediting, line editing, and final proofreading for flawless grammar and polished prose.',
        imageUrl: Image_path_2, 
        gradient: ['#43e97b', '#38f9d7']
    },
    {
        id: 3,
        title: 'Cover Design & Formatting',
        description: 'Creating eye-catching book covers and professional interior layout design for both digital and print formats (eBook and physical).',
        imageUrl: Image_path_3, 
        gradient: ['#00c6ff', '#0072ff']
    },
    {
        id: 4,
        title: 'Publishing & Strategy',
        description: 'Guidance on ISBN registration, selection of the best distribution channels, and effective launch plans for maximum market reach.',
        imageUrl: Image_path_4, 
        gradient: ['#f7971e', '#ffd200']
    },
];

const cssStyles = `
.main-section {
    background-color: rgba(249, 250, 251, 0.20); /* Light background with 0.20 opacity */
    min-height: 100vh;
    padding-top: 3rem;
    padding-bottom: 3rem;
    font-family: 'Inter', sans-serif;
}

.title-container {
    text-align: center; 
    margin-bottom: 2rem;
    padding-left: 1rem;
    padding-right: 1rem;
}

.main-title {
    font-size: 38px;
    font-weight: 800;
    color: #ffffffff;
    margin: 0;
}

.main-subtitle {
    color: #ffffffff;
    margin-top: 1rem;
    font-size: 16px;
    max-width: 48rem;
    margin-left: auto;
    margin-right: auto;
}

@keyframes gradient-shimmer {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}

.card-container {
    max-width: 1200px;
    margin: 50px auto;
    padding: 30px;
}

.card-grid {
    display: grid;
    gap: 40px;
    grid-template-columns: repeat(1, minmax(0, 1fr));
}

@media (min-width: 768px) {
    .card-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
}

@media (min-width: 1024px) {
    .card-grid {
        grid-template-columns: repeat(4, minmax(0, 1fr));
    }
}

.card {
    position: relative;
    width: 100%;
    height: 300px; 
    background: linear-gradient(-45deg, var(--g1) 0%, var(--g2) 100%);
    background-size: 300% 300%;
    animation: gradient-shimmer 6s ease infinite;
    border-radius: 16px; 
    display: flex;
    align-items: flex-end; 
    justify-content: flex-start;
    overflow: hidden;
    transition: all 1.0s cubic-bezier(0.23, 1, 0.320, 1);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2); 
    cursor: pointer;
}

.card:hover {
    transform: scale(1.03);
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
}

.card img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 16px;
    transition: all 1.0s cubic-bezier(0.23, 1, 0.320, 1);
    z-index: 1;
    opacity: 0.85; /* Reduced opacity for lighter background effect */
}

.card:hover img {
    transform: scale(1.1);
}

.card__scrim {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 16px;
    z-index: 2;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.3) 50%, rgba(0, 0, 0, 0) 100%);
    transition: background 1.0s ease;
}

.card:hover .card__scrim {
    background: linear-gradient(to top, rgba(0, 0, 0, 0.75) 0%, rgba(0, 0, 0, 0.45) 50%, rgba(0, 0, 0, 0) 100%);
}

.card__content {
    position: relative;
    width: 100%;
    padding: 24px; 
    box-sizing: border-box;
    z-index: 3;
    color: white;
}

.card__title {
    margin: 0;
    font-size: 1.8rem;
    font-weight: 800;
    text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.7);
}

.card__description {
    font-size: 1rem;
    line-height: 1.5;
    max-height: 0; 
    overflow: hidden;
    opacity: 0; 
    margin-top: 0;
    padding-top: 0;
    transition: max-height 1.2s ease-in-out, opacity 0.8s 0.3s ease-in, margin-top 1.0s ease-in-out;
}

.card:hover .card__description {
    max-height: 500px; 
    opacity: 1; 
    margin-top: 15px;
    padding-top: 5px; 
    transition: max-height 1.2s ease-in-out, opacity 0.8s 0.3s ease-in, margin-top 1.0s ease-in-out;
}
`;

const AnimatedCardSection = () => {
    return (
        <div className="main-section">
            <style>{cssStyles}</style>

            <div className="title-container">
                <h2 className="main-title">Our Expertise in Book Writing</h2>
                <p className="main-subtitle">
                    Turning Concepts into Bestsellers: Our Proven Book Writing Expertise.
                </p>
            </div>

            <div className="card-container">
                <div className="card-grid">
                    {cardData.map((card) => {
                        const [g1, g2] = card.gradient;
                        return (
                            <div 
                                key={card.id} 
                                className="card" 
                                style={{ '--g1': g1, '--g2': g2 }}
                            >
                                <img 
                                    src={card.imageUrl} 
                                    alt={card.title} 
                                    onError={(e) => { 
                                        e.target.onerror = null; 
                                        e.target.src = 'https://placehold.co/600x300/cccccc/000000?text=Image+Unavailable'; 
                                        e.target.style.opacity = '0.5'; 
                                    }}
                                />
                                <div className="card__scrim"></div>
                                <div className="card__content">
                                    <p className="card__title">{card.title}</p>
                                    <p className="card__description">{card.description}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default AnimatedCardSection;
