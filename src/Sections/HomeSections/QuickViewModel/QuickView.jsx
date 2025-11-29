
import React from 'react';
import './QuickView.css';

const QuickViewModal = ({ book, onClose }) => {
    if (!book) return null; 

    const { 
        title, 
        author, 
        coverUrl, 
        bestsellerTag, 
        description, 
        learnMoreLink, 
        purchaseLinks 
    } = book;

    // Use specific title/author wording if the book matches the screenshot example
    const isMichelleObamaBook = book.key === 'nonfiction1';
    
    // Custom description logic for the screenshot example
    const displayDescription = isMichelleObamaBook
        ? (
            <>
                <p>#1 NEW YORK TIMES BESTSELLER • Michelle Obama's worldwide bestselling memoir, **Becoming**, has been adapted for young readers.</p>
                <p>Michelle Robinson was born on the South Side of Chicago. From her modest beginnings, she would become Michelle Obama, the inspiring and powerful...</p>
            </>
          )
        : <p>{description}</p>;


    return (
        // The modal-overlay handles the dark background and closes the modal when clicked outside
        <div className="modal-overlay" onClick={onClose}>
            {/* The actual modal content container */}
            <div 
                className="quick-view-modal-content" 
                onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside
            >
                <button className="modal-close-button" onClick={onClose}>
                    &times; {/* Close 'X' symbol */}
                </button>
                
                <div className="modal-book-details">
                    {/* LEFT SIDE: Image and Learn More */}
                    <div className="modal-book-cover-section">
                        <img 
                            src={coverUrl} 
                            alt={title} 
                            className="modal-book-image" 
                        />
                        <a href={learnMoreLink} className="modal-learn-more-link">Learn More</a>
                    </div>

                    {/* RIGHT SIDE: Text Details and Purchase Buttons */}
                    <div className="modal-book-info-section">
                        <h1 className="modal-book-title">{title}</h1>
                        <p className="modal-book-author">By **{author}**</p>
                        
                        {/* <div className="modal-bestseller-tag">{bestsellerTag}</div> */}

                        <div className="modal-book-description">
                            {displayDescription}
                            <a href="#" className="modal-read-more-link">Read more &gt;</a>
                        </div>

                        {/* Order Section */}
                        <div className="modal-order-section">
                            <h3>Paperback</h3> {/* Used "Paperback" as seen in your screenshot */}
                            <p>Preorder from:</p>
                            <div className="modal-retailer-buttons">
                                {purchaseLinks.map((link, index) => (
                                    <a 
                                        key={index}
                                        href={link.url} 
                                        className="modal-retailer-btn"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {link.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuickViewModal;