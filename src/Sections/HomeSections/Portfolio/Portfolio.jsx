// src/components/PortfolioShowcase.jsx

import React, { useState, useEffect } from 'react';
import './Portfolio.css';
import './PortfolioAnimation.css';
// import MoodBoardModal from '../MoodBoardModal/MoodBoardModal'; 
import useIntersectionObserver from '../hooks/UserObservationSection';
import QuickViewModal from '../QuickViewModel/QuickView';

// --- Imported Image Assets ---
import fictionCover1 from '../images/fiction/new-update-2-removebg-preview.png';
import fictionCover2 from '../images/fiction/fiction2.jpeg';
import fictionCover3 from '../images/fiction/fiction3.jpeg';
import fictionCover4 from '../images/fiction/fiction4.jpeg';
import fictionCover5 from '../images/fiction/section-image.png';
import fictionCover6 from '../images/fiction/section-image1.png';
import fictionCover7 from '../images/fiction/new-updated-removebg-preview.png';
import fictionCover8 from '../images/fiction/new-updated-3.png';
import fictionCover9 from '../images/fiction/new-update-2-removebg-preview.png';
import fictionCover10 from '../images/fiction/section-image1.png';

import nonfiction1 from '../images/nonfiction/nonfiction1.jpg';
import nonfiction2 from '../images/nonfiction/nonfiction2.jpg';
import nonfiction3 from '../images/nonfiction/nonfiction3.jpg';
import nonfiction4 from '../images/nonfiction/nonfiction4.jpg';
import nonfiction5 from '../images/nonfiction/nonfiction5.jpg';
import nonfiction6 from '../images/nonfiction/nonfiction6.jpg';

import memoirs1 from '../images/Memoirs/memoirs1.jpg';
import memoirs2 from '../images/Memoirs/memoirs2.jpg';
import memoirs3 from '../images/Memoirs/memoirs3.jpg';
import memoirs4 from '../images/Memoirs/memoirs4.jpg';
import memoirs5 from '../images/Memoirs/memoirs5.jpg';
import memoirs6 from '../images/Memoirs/memoirs6.jpg';
import memoirs7 from '../images/Memoirs/memoirs7.jpg';
// --- End Imported Image Assets ---


// Define the book categories
const bookCategories = [
    { id: 'fiction', name: 'Fiction Book', query: 'Best selling Fiction Book Covers 2024' },
    { id: 'nonfiction', name: 'Non-Fiction Book', query: 'Top rated Non-Fiction Book Covers' },
    { id: 'memoir', name: 'Memoir', query: 'Memoir Book Covers emotional design' },
    { id: 'fantasy', name: 'Fantasy & Sci-Fi', query: 'Epic Fantasy and Sci-Fi Book Covers' },
    { id: 'children', name: "Children's Book", query: 'Bright Childrens Book Covers' },
];

// --- RICH DATA FOR QUICK VIEW MODAL (Truncated for brevity, kept for context) ---
const bookData = {
    fictionCover1: {
        title: "The Silent Watcher",
        author: "Anya Sharma",
        key: 'fictionCover1',
        coverUrl: fictionCover1,
        bestsellerTag: "#1 Thriller Bestseller",
        description: "A chilling psychological thriller...",
        learnMoreLink: "#",
        purchaseLinks: [{ name: "Kindle", url: "#" }]
    },
    fictionCover2: {
        title: "Neon Skies of District 9",
        author: "Kai Ren",
        key: 'fictionCover2',
        coverUrl: fictionCover2,
        bestsellerTag: "Sci-Fi Critics' Choice",
        description: "In a cyberpunk metropolis powered by dreams...",
        learnMoreLink: "#",
        purchaseLinks: [{ name: "Amazon", url: "#" }]
    },
    fictionCover3: {
        title: "The Lighthouse Keeper's Secret",
        author: "Elara Vance",
        key: 'fictionCover3',
        coverUrl: fictionCover3,
        bestsellerTag: "Global Romantic Hit",
        description: "A heartbreaking tale of a timeless love...",
        learnMoreLink: "#",
        purchaseLinks: [{ name: "iBooks", url: "#" }]
    },
    fictionCover4: {
        title: "The Whispering Woods",
        author: "Gwen Harper",
        key: 'fictionCover4',
        coverUrl: fictionCover4,
        bestsellerTag: "Indie Award Winner 2023",
        description: "A middle-grade fantasy adventure...",
        learnMoreLink: "#",
        purchaseLinks: [{ name: "Kobo", url: "#" }]
    },

    fictionCover5: {
        title: "The Silent Watcher",
        author: "Anya Sharma",
        key: 'fictionCover5',
        coverUrl: fictionCover5,
        bestsellerTag: "#1 Thriller Bestseller",
        description: "A chilling psychological thriller...",
        learnMoreLink: "#",
        purchaseLinks: [{ name: "Kindle", url: "#" }]
    },
    fictionCover6: {
        title: "Neon Skies of District 9",
        author: "Kai Ren",
        key: 'fictionCover6',
        coverUrl: fictionCover6,
        bestsellerTag: "Sci-Fi Critics' Choice",
        description: "In a cyberpunk metropolis powered by dreams...",
        learnMoreLink: "#",
        purchaseLinks: [{ name: "Amazon", url: "#" }]
    },
        fictionCover7: {
        title: "Neon Skies of District 9",
        author: "Kai Ren",
        key: 'fictionCover7',
        coverUrl: fictionCover7,
        bestsellerTag: "Sci-Fi Critics' Choice",
        description: "In a cyberpunk metropolis powered by dreams...",
        learnMoreLink: "#",
        purchaseLinks: [{ name: "Amazon", url: "#" }]
    },
    fictionCover8: {
        title: "The Lighthouse Keeper's Secret",
        author: "Elara Vance",
        key: 'fictionCover8',
        coverUrl: fictionCover8,
        bestsellerTag: "Global Romantic Hit",
        description: "A heartbreaking tale of a timeless love...",
        learnMoreLink: "#",
        purchaseLinks: [{ name: "iBooks", url: "#" }]
    },
    fictionCover9: {
        title: "The Whispering Woods",
        author: "Gwen Harper",
        key: 'fictionCover9',
        coverUrl: fictionCover9,
        bestsellerTag: "Indie Award Winner 2023",
        description: "A middle-grade fantasy adventure...",
        learnMoreLink: "#",
        purchaseLinks: [{ name: "Kobo", url: "#" }]
    },

    fictionCover10: {
        title: "The Silent Watcher",
        author: "Anya Sharma",
        key: 'fictionCover10',
        coverUrl: fictionCover10,
        bestsellerTag: "#1 Thriller Bestseller",
        description: "A chilling psychological thriller...",
        learnMoreLink: "#",
        purchaseLinks: [{ name: "Kindle", url: "#" }]
    },


    // --- NON-FICTION ---
    nonfiction1: {
        title: "Becoming: Adapted for Young Readers",
        author: "MICHELLE OBAMA",
        key: 'nonfiction1',
        coverUrl: nonfiction1,
        bestsellerTag: "#1 NEW YORK TIMES BESTSELLER",
        description: "Michelle Obama's worldwide bestselling memoir...",
        learnMoreLink: "#",
        purchaseLinks: [{ name: "Amazon", url: "#" }]
    },
    nonfiction2: { title: "The 5 AM Investor", author: "Mark Cuban", key: 'nonfiction2', coverUrl: nonfiction2, bestsellerTag: "Business Top 10", description: "A guide to maximizing personal wealth...", learnMoreLink: "#", purchaseLinks: [{ name: "Amazon", url: "#" }] },
    nonfiction3: { title: "Digital Minimalism", author: "Cal Newport", key: 'nonfiction3', coverUrl: nonfiction3, bestsellerTag: "Productivity Favorite", description: "A philosophy that helps you decide...", learnMoreLink: "#", purchaseLinks: [{ name: "Amazon", url: "#" }] },
    nonfiction4: { title: "Atomic Habits", author: "James Clear", key: 'nonfiction4', coverUrl: nonfiction4, bestsellerTag: "Global Phenomenon", description: "An easy and proven way to build good habits...", learnMoreLink: "#", purchaseLinks: [{ name: "Amazon", url: "#" }] },
    nonfiction5: { title: "The Power of Now", author: "Eckhart Tolle", key: 'nonfiction5', coverUrl: nonfiction5, bestsellerTag: "Spiritual Classic", description: "A guide to spiritual enlightenment...", learnMoreLink: "#", purchaseLinks: [{ name: "Amazon", url: "#" }] },
    nonfiction6: { title: "Sapiens: A Brief History of Humankind", author: "Yuval Noah Harari", key: 'nonfiction6', coverUrl: nonfiction6, bestsellerTag: "International Bestseller", description: "Dr. Yuval Noah Harari's acclaimed book...", learnMoreLink: "#", purchaseLinks: [{ name: "Amazon", url: "#" }] },

    // --- MEMOIRS (Truncated) ---
    memoirs1: { title: "Educated: A Memoir", author: "Tara Westover", key: 'memoirs1', coverUrl: memoirs1, bestsellerTag: "Oprah's Book Club Selection", description: "An unforgettable memoir...", learnMoreLink: "#", purchaseLinks: [{ name: "Amazon", url: "#" }] },
    memoirs2: { title: "When Breath Becomes Air", author: "Paul Kalanithi", key: 'memoirs2', coverUrl: memoirs2, bestsellerTag: "Pulitzer Finalist", description: "The powerful, unforgettable memoir...", learnMoreLink: "#", purchaseLinks: [{ name: "Amazon", url: "#" }] },
    memoirs3: { title: "Becoming", author: "Michelle Obama", key: 'memoirs3', coverUrl: memoirs3, bestsellerTag: "Global Phenomenon", description: "In a life filled with meaning...", learnMoreLink: "#", purchaseLinks: [{ name: "Amazon", url: "#" }] },
    memoirs4: { title: "Know My Name", author: "Chanel Miller", key: 'memoirs4', coverUrl: memoirs4, bestsellerTag: "Book of the Year", description: "The story of the woman...", learnMoreLink: "#", purchaseLinks: [{ name: "Amazon", url: "#" }] },
    memoirs5: { title: "Crying in H Mart", author: "Michelle Zauner", key: 'memoirs5', coverUrl: memoirs5, bestsellerTag: "Indie Bestseller", description: "A memoir about growing up Korean American...", learnMoreLink: "#", purchaseLinks: [{ name: "Amazon", url: "#" }] },
    memoirs6: { title: "A Promised Land", author: "Barack Obama", key: 'memoirs6', coverUrl: memoirs6, bestsellerTag: "Presidential Memoir", description: "A candid and deeply personal account...", learnMoreLink: "#", purchaseLinks: [{ name: "Amazon", url: "#" }] },
    memoirs7: { title: "I Know Why the Caged Bird Sings", author: "Maya Angelou", key: 'memoirs7', coverUrl: memoirs7, bestsellerTag: "Literary Classic", description: "The first of seven autobiographies...", learnMoreLink: "#", purchaseLinks: [{ name: "Amazon", url: "#" }] },

    // Placeholder data for other categories
    'https://via.placeholder.com/200x300/9C27B0/FFFFFF?text=Fantasy+Cover+1': { title: "Shadowfell Prophecy", author: "The Placeholder", key: 'fantasy1', coverUrl: 'https://via.placeholder.com/200x300/9C27B0/FFFFFF?text=Fantasy+Cover+1', bestsellerTag: "High Fantasy", description: "A world of magic...", learnMoreLink: "#", purchaseLinks: [{ name: "Buy Now", url: "#" }] },
    'https://via.placeholder.com/200x300/FFC107/333333?text=Children+Cover+1': { title: "The Magical Treehouse", author: "The Placeholder", key: 'children1', coverUrl: 'https://via.placeholder.com/200x300/FFC107/333333?text=Children+Cover+1', bestsellerTag: "Picture Book", description: "A beautifully illustrated story...", learnMoreLink: "#", purchaseLinks: [{ name: "Buy Now", url: "#" }] },
};
// --- END RICH DATA ---

// The existing categoryImages array is still needed to map URLs to categories
const categoryImagesMap = {
    fiction: [fictionCover1, fictionCover2, fictionCover3, fictionCover4 , fictionCover5, fictionCover6 , fictionCover7 , fictionCover8 , fictionCover9 , fictionCover10],
    nonfiction: [nonfiction1, nonfiction2, nonfiction3, nonfiction4, nonfiction5, nonfiction6],
    memoir: [memoirs1, memoirs2, memoirs3, memoirs4, memoirs5, memoirs6, memoirs7],
    fantasy: [
        'https://via.placeholder.com/200x300/9C27B0/FFFFFF?text=Fantasy+Cover+1',
        'https://via.placeholder.com/200x300/9C27B0/FFFFFF?text=Fantasy+Cover+2',
        'https://via.placeholder.com/200x300/9C27B0/FFFFFF?text=Fantasy+Cover+3',
        'https://via.placeholder.com/200x300/9C27B0/FFFFFF?text=Fantasy+Cover+4',
    ],
    children: [
        'https://via.placeholder.com/200x300/FFC107/333333?text=Children+Cover+1',
        'https://via.placeholder.com/200x300/FFC107/333333?text=Children+Cover+2',
        'https://via.placeholder.com/200x300/FFC107/333333?text=Children+Cover+3',
        'https://via.placeholder.com/200x300/FFC107/333333?text=Children+Cover+4',
    ],
};


const PortfolioShowcase = () => {
    // --- SCROLL ANIMATION HOOK INTEGRATION ---
    const [portfolioRef, isVisible] = useIntersectionObserver({
        threshold: 0.1, // Start animation when 10% of the section is visible
    });
    // -----------------------------------------
    
    const [activeCategory, setActiveCategory] = useState('nonfiction'); 
    const [displayedImages, setDisplayedImages] = useState(categoryImagesMap['nonfiction']);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedBook, setSelectedBook] = useState(null);
    // Key to force grid re-render and restart animation (initialized for scroll-in detection)
    const [gridKey, setGridKey] = useState('initial-load-nonfiction'); 

    // Effect to update images when category changes
    useEffect(() => {
        // Update images when activeCategory changes
        setDisplayedImages(categoryImagesMap[activeCategory] || []);
    }, [activeCategory]);
    
    const handleCategoryClick = (categoryId) => {
        
        // 1. Update the category state
        // This will trigger the useEffect above to fetch the correct images if the ID changes.
        setActiveCategory(categoryId);

        // 2. Force the grid to re-render by changing the key.
        // This is CRITICAL for running the animation on repeat clicks (like Non-Fiction).
        if (categoryId === activeCategory) {
            // If the category is the same (e.g., clicking Non-Fiction again), 
            // append a unique timestamp to force the key to change.
            setGridKey(`${categoryId}-${Date.now()}`);
        } else {
            // If the category is different, use the ID for the key.
            setGridKey(categoryId); 
        }
    };
    
    // --- MODAL HANDLERS (Unchanged) ---
    const openQuickView = (bookKey) => {
        const book = bookData[bookKey];
        if (book) {
            setSelectedBook(book);
            setIsModalOpen(true);
        } else {
            console.error("No rich data found for book key:", bookKey);
        }
    };

    const closeQuickView = () => {
        setIsModalOpen(false);
        setTimeout(() => setSelectedBook(null), 300); 
    };
    // --- END MODAL HANDLERS ---

    const getBookKeyFromUrl = (url) => {
        for (const key in bookData) {
            if (bookData[key].coverUrl === url) {
                return key;
            }
            if (typeof bookData[key].coverUrl === 'string' && bookData[key].coverUrl.startsWith('http') && bookData[key].coverUrl === url) {
                return key;
            }
        }
        return null;
    };


    return (
        <section 
            ref={portfolioRef} // 👈 Attach the ref for scroll detection
            className={`portfolio-showcase-container ${isVisible ? 'is-visible' : ''}`}
        >
            {/* Header: Fade Up, small delay */}
            <h2 
                className="portfolio-heading reveal-item fade-up"
                style={{ transitionDelay: '0s' }}
            >
                Our Award-Winning Book Cover Portfolio
            </h2>
            <p 
                className="portfolio-subtitle reveal-item fade-up"
                style={{ transitionDelay: '0.1s' }}
            >
                Explore a glimpse of the masterpieces we have crafted across various genres.
            </p>

            {/* Category Buttons: Fade Up, medium delay */}
            <div 
                className="category-buttons-wrapper reveal-item fade-up"
                style={{ transitionDelay: '0.2s' }}
            >
                {bookCategories.map((category) => (
                    <button
                        key={category.id}
                        className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
                        onClick={() => handleCategoryClick(category.id)}
                    >
                        {category.name}
                    </button>
                ))}
            </div>

            {/* Image Display Area */}
            <div className="image-display-area">
                {displayedImages.length > 0 ? (
                    // Use the changing 'gridKey' to force re-mount and animation
                    <div className="cover-grid" key={gridKey}>
                        {displayedImages.map((url, index) => {
                            const bookKey = getBookKeyFromUrl(url);
                            
                            // Check for initial load key to determine animation type
                            const isInitialLoad = gridKey.startsWith('initial-load-'); 
                            
                            // Calculate delay for the category change animation
                            const categoryChangeDelay = index * 0.08; 
                            
                            let itemClasses = "cover-image-wrapper";
                            
                            if (isInitialLoad) {
                                // Scroll-in animation on initial page load
                                itemClasses += " reveal-item fade-in-stagger";
                            } else {
                                // Click-in animation on every button click
                                itemClasses += " cover-enter-stagger";
                            }
                            
                            // Set the inline style for the click animation delay
                            const itemStyle = !isInitialLoad ? { animationDelay: `${0.05 + categoryChangeDelay}s` } : {};
                            
                            return (
                                <div 
                                    key={url}
                                    className={itemClasses}
                                    style={itemStyle}
                                >
                                    <img 
                                        src={url} 
                                        alt={`${activeCategory} book cover ${index + 1}`} 
                                        className="cover-image" 
                                    />
                                    {bookKey && (
                                        <div 
                                            className="quick-view-overlay"
                                            onClick={() => openQuickView(bookKey)}
                                        >
                                            + QUICK VIEW
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    <p className="no-images-message">No images found for this category.</p>
                )}
            </div>
            
            {/* CTA Button: Fade Up, delay after all grid items */}
            <button 
                className="portfolio-cta-btn reveal-item fade-up"
                style={{ transitionDelay: `${0.3 + displayedImages.length * 0.08 + 0.1}s` }}
            >
                View Full Portfolio
            </button>
            
            {/* --- RENDER THE MODAL --- */}
            {isModalOpen && selectedBook && (
                <QuickViewModal 
                    book={selectedBook} 
                    onClose={closeQuickView} 
                />
            )}
        </section>
    );
};

export default PortfolioShowcase;