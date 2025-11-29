import React, { useRef, useState, useEffect } from 'react';
import './TopBooksSection.css'; 
import './SectionAnimation.css';
import useIntersectionObserver from '../hooks/UserObservationSection';

// Book cover images
import bookCover1 from '../images/Memoirs/memoirs1.jpg';
import bookCover2 from '../images/Memoirs/memoirs2.jpg';
import bookCover3 from '../images/Memoirs/memoirs3.jpg';
import bookCover4 from '../images/Memoirs/memoirs4.jpg';
import bookCover5 from '../images/Memoirs/memoirs5.jpg';
import bookCover6 from '../images/Memoirs/memoirs6.jpg';
import bookCover7 from '../images/Memoirs/memoirs7.jpg';

const TopBooksSection = () => {
    const scrollRef = useRef(null);
    const [refToObserve, isVisible] = useIntersectionObserver({ threshold: 0.1 });

    const [showFeaturedBlock, setShowFeaturedBlock] = useState(true);
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(true);

    const scrollAmount = 300;

    const books = [
        { id: 1, title: 'Be Useful: Seven Tools for Life', author: 'Arnold Schwarzenegger', imageUrl: bookCover1 },
        { id: 2, title: 'The Light We Carry', author: 'Michelle Obama', imageUrl: bookCover6 },
        { id: 3, title: 'The Overstory', author: 'Richard Powers', imageUrl: bookCover2 },
        { id: 4, title: 'Save Me (Again) - 2', author: 'Mona Kasten', imageUrl: bookCover3 },
        { id: 5, title: 'Save Me (Again) - 3', author: 'Mona Kasten', imageUrl: bookCover4 },
        { id: 6, title: 'Save Me (Again) - 4', author: 'Mona Kasten', imageUrl: bookCover5 },
        { id: 7, title: 'Extra Book 1', author: 'Author X', imageUrl: bookCover6 },
        { id: 8, title: 'Extra Book 2', author: 'Author Y', imageUrl: bookCover3 },
        { id: 9, title: 'Extra Book 3', author: 'Author Z', imageUrl: bookCover2 },
        { id: 10, title: 'Extra Book 4', author: 'Author A', imageUrl: bookCover5 },
        { id: 11, title: 'Extra Book 5', author: 'Author B', imageUrl: bookCover7 },
        { id: 12, title: 'Extra Book 6', author: 'Author C', imageUrl: bookCover7 },
    ];

    const handleScroll = () => {
        const currentRef = scrollRef.current;
        if (!currentRef) return;

        const { scrollLeft, scrollWidth, clientWidth } = currentRef;
        const scrollEnd = scrollWidth - clientWidth;
        const tolerance = 2;

        setShowFeaturedBlock(scrollLeft < tolerance);
        setShowLeftArrow(scrollLeft > tolerance);
        setShowRightArrow(scrollLeft < scrollEnd - tolerance);
    };

    useEffect(() => {
        const currentRef = scrollRef.current;
        if (currentRef) {
            handleScroll();
            currentRef.addEventListener('scroll', handleScroll);
        }
        return () => {
            if (currentRef) {
                currentRef.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);

    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        }
    };

    const containerClasses = [
        'books-section-container',
        !showFeaturedBlock ? 'feature-hidden' : '',
        isVisible ? 'is-visible' : ''
    ].join(' ').trim();

    return (
        <div ref={refToObserve} className={containerClasses}>

            {/* Featured Block */}
            {showFeaturedBlock && (
                <div className="featured-block reveal-item fade-up staggered-item" style={{ transitionDelay: '0.1s' }}>
                    <div className="featured-content">
                        <div className="header-group">
                            {/* <div className="icon-box">
                                <svg className="chart-icon" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 2H8c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM8 20V4h12v16H8zm9.5-12.5l-3.5 3.5-2-2-4 4V17h12v-2.5l-2.5-2.5zM15 9h2v2h-2z"/>
                                    <path d="M12.5 14.5l-2-2-3 3V17h10v-3.5l-5-5z"/>
                                </svg>
                            </div> */}
                            <h1>TODAY'S TOP BOOKS</h1>
                        </div>
                        <button className="check-charts-button">CHECK THE CHARTS &rarr;</button>
                    </div>
                </div>
            )}

            {/* Scrollable Book List */}
            <div className={`books-list-wrapper ${!showFeaturedBlock ? 'expanded' : ''}`} ref={scrollRef}>
                {books.map((book, index) => (
                    <div key={`${book.id}-${book.imageUrl}`} className="book-card reveal-item fade-in-stagger" style={{ transitionDelay: `${0.3 + index * 0.1}s` }}>
                        <div className="book-cover-container">
                            <div className="book-cover-placeholder">
                                <img src={book.imageUrl} alt={book.title} onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.style.display = 'none';
                                    e.target.parentNode.style.backgroundColor = '#ccc';
                                    e.target.parentNode.innerHTML += `<p>${book.title}</p>`;
                                }}/>
                            </div>
                        </div>
                        <div className="ranking-circle">{book.id}</div>
                    </div>
                ))}
            </div>

            {/* Left Arrow */}
            {showLeftArrow && <div className="scroll-arrow left" onClick={scrollLeft} />}

            {/* Right Arrow */}
            {showRightArrow && <div className="scroll-arrow right" onClick={scrollRight} />}

        </div>
    );
};

export default TopBooksSection;
