import React, { useState, useEffect, useRef } from "react";
import "./ModernBookSlider.css";
import image1 from "../images/fiction/fiction1.jpeg";
import image2 from "../images/fiction/fiction2.jpeg";
import image3 from "../images/fiction/fiction3.jpeg";
import image4 from "../images/fiction/fiction4.jpeg";
import image5 from "../images/fiction/section-image.png";
import image6 from "../images/fiction/section-image1.png";
import useIntersectionObserver from "../hooks/UserObservationSection"

// Book content data
const bookData = [
  {
    id: 1,
    title: "Cosmic Whispers",
    author: "A.L. Kellar",
    year: 2024,
    image: image1,
    excerpt:
      "A journey through the farthest reaches of the universe, questioning the nature of time and existence. This breathtaking blend of hard science and philosophical depth has been hailed as the sci-fi masterpiece of the decade. Available now.",
    genre: "Science Fiction",
  },
  {
    id: 2,
    title: "The Silent Garden",
    author: "Elara Vayne",
    year: 2023,
    image: image2,
    excerpt:
      "In the heart of an old English estate lies a secret waiting to be uncovered. A gripping mystery where every hidden path has a story, and every shadow holds a lie. Perfect for fans of psychological thrillers and classic whodunits.",
    genre: "Mystery / Thriller",
  },
  {
    id: 3,
    title: "Digital Renaissance",
    author: "C.R. Turing",
    year: 2025,
    image: image3,
    excerpt:
      "When the global network achieves consciousness, humanity faces its most profound challenge. This cyberpunk saga explores the ethical boundaries of technology and the tumultuous future of human creativity and control. Pre-order today.",
    genre: "Cyberpunk",
  },

  {
    id: 4,
    title: "Cosmic Whispers",
    author: "A.L. Kellar",
    year: 2024,
    image: image4,
    excerpt:
      "A journey through the farthest reaches of the universe, questioning the nature of time and existence. This breathtaking blend of hard science and philosophical depth has been hailed as the sci-fi masterpiece of the decade. Available now.",
    genre: "Science Fiction",
  },
  {
    id: 5,
    title: "The Silent Garden",
    author: "Elara Vayne",
    year: 2023,
    image: image5,
    excerpt:
      "In the heart of an old English estate lies a secret waiting to be uncovered. A gripping mystery where every hidden path has a story, and every shadow holds a lie. Perfect for fans of psychological thrillers and classic whodunits.",
    genre: "Mystery / Thriller",
  },
  {
    id: 6,
    title: "Digital Renaissance",
    author: "C.R. Turing",
    year: 2025,
    image: image6,
    excerpt:
      "When the global network achieves consciousness, humanity faces its most profound challenge. This cyberpunk saga explores the ethical boundaries of technology and the tumultuous future of human creativity and control. Pre-order today.",
    genre: "Cyberpunk",
  },
];

const ModernBookSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideRefs = useRef([]);
  const totalSlides = bookData.length;

  // Intersection Observer for scroll fade
  const [entryRef, isVisible] = useIntersectionObserver({ threshold: 0.3 });

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, 2000); // 3 seconds
    return () => clearInterval(interval);
  }, [totalSlides]);

  return (
    <div
      ref={entryRef}
      className={`slider-container ${isVisible ? "fade-in" : "fade-out"}`}
    >
      <div className="slider-wrapper">
        {/* Slides */}
        <div className="slides-container">
          {bookData.map((book, index) => (
            <div
              key={`${book.id}-${index}`}
              ref={(el) => (slideRefs.current[index] = el)}
              className={`slide-content ${
                index === currentIndex ? "active-slide" : "inactive-slide"
              }`}
            >
              <div className="book-image-area">
                <div className="book-cover">
                  <img
                    src={book.image}
                    alt={`${book.title} cover`}
                    className="book-cover-img"
                  />
                </div>
              </div>
              <div className="book-details-area">
                <span className="book-genre">{book.genre}</span>
                <h1 className="book-title">{book.title}</h1>
                <p className="book-author">
                  {book.author} ({book.year})
                </p>
                <p className="book-excerpt">{book.excerpt}</p>
                <div className="book-cta-wrapper">
                  <button className="book-read-more-btn">Read More</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="nav-dots-container">
          {bookData.map((_, index) => (
            <button
              key={index}
              className={`nav-dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ModernBookSlider;
