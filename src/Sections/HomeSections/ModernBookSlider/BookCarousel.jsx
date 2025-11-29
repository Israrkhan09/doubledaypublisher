// sections/BookCarousel.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import { BookCard } from '../ModernBookSlider/BookCard'; 
import { bookData } from '../ModernBookSlider/BookData'; 

// Variants for the section container scroll animation
const sectionVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.98 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { 
      duration: 1.0, 
      ease: [0.17, 0.55, 0.55, 1],
      when: "beforeChildren", 
      staggerChildren: 0.1,
    } 
  },
};

const carouselStyles = {
  sectionContainer: {
    // Background remains the unique radial gradient
    background: 'radial-gradient(circle at center, rgba(42,26,64,0.4) 0%, rgba(23,17,36,0.4) 70%, rgba(14,10,21,0.4) 100%)',
    // ✅ FIX 1: Added top padding (80px) to clear the fixed navigation bar
    padding: '80px 0 4rem 0',
    opacity: 0.95, // Corrected opacity value
    minHeight: '68vh',
    // ✅ FIX 2: These properties ensure the carousel content is centered 
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    position: 'relative',
    className: 'book-carousel-section', 
  },
  swiperWrapper: {
    maxWidth: '1300px', // Restricts the internal carousel size
    width: '150%',
    height: '100%',
marginLeft:'35px',
// background:'red',
  },
};

export const BookCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0); 

  return (
    <motion.section 
        style={carouselStyles.sectionContainer}
        className="book-carousel-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
    >
      <Swiper
        modules={[Pagination, Autoplay, EffectFade]}
        spaceBetween={55}
        slidesPerView={1}
        effect={"fade"}
        fadeEffect={{
          crossFade: true,
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{ 
          clickable: true,
          // Simplified renderBullet to use injected CSS for styles (more robust)
          renderBullet: function (index, className) {
            return `<span class="${className}"></span>`;
          },
        }}
        loop={true} 
        style={carouselStyles.swiperWrapper}
        allowTouchMove={false} 
        onSwiper={(swiper) => {
          setActiveIndex(swiper.realIndex);
        }}
        onSlideChange={(swiper) => {
          setActiveIndex(swiper.realIndex); 
        }}
      >
        {bookData.map((book, index) => (
          <SwiperSlide key={book.id}>
            <BookCard book={book} isActive={index === activeIndex % bookData.length} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Inject Swiper global styles AND Animated Noise */}
      <style>{`
        /* Keyframes for the subtle noise animation */
        @keyframes grain {
            0%, 100% { transform: translate(0, 0); }
            10% { transform: translate(-5%, -10%); }
            20% { transform: translate(-15%, 5%); }
            30% { transform: translate(7%, -15%); }
            40% { transform: translate(-5%, 5%); }
            50% { transform: translate(15%, 0); }
            60% { transform: translate(-10%, -10%); }
            70% { transform: translate(5%, 15%); }
            80% { transform: translate(0, -5%); }
            90% { transform: translate(-10%, 10%); }
        }

        /* Animated Noise Overlay */
        .book-carousel-section::before {
            content: "";
            position: absolute;
            top: -100%; 
            left: -100%;
            width: 300%;
            height: 300%;
            pointer-events: none;
background:'yellow';
            z-index: 0;
            opacity: 0.05; 
            background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAAUVRYbWNgYGBgYGJwEGHcR2rYGEhABH5Fw1Yg2oAwZ3rYAUj/E2oR5QyP5Qyf5QyP5Qyf5QyP5Qyf5Qyf5Qyf5Qyf5Qyf5QxfAD/xR263h0B9wAAAABJRU5ErkJggg=="); 
            animation: grain 8s steps(10) infinite;
        }

        /* --- Swiper Pagination Styles (Responsive and Centered) --- */
        
/* Mobile/Base Styles for Pagination Dots */
        .swiper-pagination-bullet {
          background-color: #d1d5db;
          opacity: 1;
          width: 8px; 
          height: 8px; 
          margin: 0 4px;
margin-left: 60px;
          transition: background-color 0.3s ease, width 0.3s ease, height 0.3s ease;
border-radius: 50%;
          cursor: pointer;
        }

        /* Active Bullet Style */
        .swiper-pagination-bullet-active {
          background-color: #8b5cf6; // Active color (Purple)
          width: 10px; 
          height: 10px; 
        }

        /* Tablet/Desktop Styles for Pagination Dots */
        @media (min-width: 769px) {
            .swiper-pagination-bullet {
            // background-color: #d0ff37ff;
                width: 10px; 
                height: 10px; 
                margin-left:50px;
                margin: 20px 20px;
            }
            .swiper-pagination-bullet-active {
                width: 12px; 
                height: 12px; 
            }
        }
        
        /* ✅ FIX 3: This container style centers the bullets on ALL screens */
        .swiper-pagination {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          width: 200px; 
          display: flex;
          justify-content: center;
          align-items: center;
margin-left:20px;
          z-index: 1;
        }
      `}</style>
    </motion.section>
  );
};