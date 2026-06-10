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
import { Modal } from '../ModernBookSlider/Modal';

// Variants for the section container scroll animation
const sectionVariants = {
  // hidden: { opacity: 0, y: 50, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    // scale: 1,
    // transition: {
    //   duration: 1.0,
    //   ease: [0.17, 0.55, 0.55, 1],
    //   when: 'beforeChildren',
    //   staggerChildren: 0.1,
    // },
  },
};

const carouselStyles = {
  sectionContainer: {
    backgroundColor: "var(--hero-bg)", 
    color: "var(--text-color)",
   
    padding: '80px 0 4rem 0',
    opacity: 0.95,
    minHeight: '68vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    position: 'relative',
    className: 'book-carousel-section',
  },
  swiperWrapper: {
    maxWidth: '1300px',
    width: '100%',
    height: '100%',
    marginLeft: '35px',
  },
};

export const BookCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Modal state
  const [selectedBook, setSelectedBook] = useState(null);
  const openModal = (book) => setSelectedBook(book);
  const closeModal = () => setSelectedBook(null);

  return (
    <>
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
          effect={'fade'}
          fadeEffect={{ crossFade: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{
            clickable: true,
            renderBullet: (index, className) =>
              `<span class="${className}"></span>`,
          }}
          loop={true}
          style={carouselStyles.swiperWrapper}
          allowTouchMove={false}
          onSwiper={(swiper) => setActiveIndex(swiper.realIndex)}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        >
          {bookData.map((book, index) => (
            <SwiperSlide key={book.id}>
              <BookCard
                book={book}
                isActive={index === activeIndex % bookData.length}
                openModal={openModal}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* CSS */}
        <style>{`
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

          .book-carousel-section::before {
            content: "";
            position: absolute;
            top: -100%;
            left: -100%;
            width: 300%;
            height: 300%;
            pointer-events: none;
            z-index: 0;
            opacity: 0.05;
            background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAAUVRYbWNgYGBgYGJwEGHcR2rYGEhABH5Fw1Yg2oAwZ3rYAUj/E2oR5QyP5Qyf5QyP5Qyf5QyP5Qyf5Qyf5Qyf5Qyf5Qyf5QxfAD/xR263h0B9wAAAABJRU5ErkJggg==");
            animation: grain 8s steps(10) infinite;
          }

          .swiper-pagination-bullet {
            background-color: #d1d5db;
            opacity: 1;
            width: 8px;
            height: 8px;
            margin: 0 10px;
            margin-left: 60px;
            transition: background-color 0.3s ease, width 0.3s ease, height 0.3s ease;
            border-radius: 50%;
            cursor: pointer;
          }

          .swiper-pagination-bullet-active {
            background-color: #8b5cf6;
            width: 10px;
            height: 10px;
          }

          @media (min-width: 769px) {
            .swiper-pagination-bullet {
              width: 10px;
              height: 10px;
              margin-left: 50px;
              margin: 20px 20px;
              margin-top: 10px;
            }
            .swiper-pagination-bullet-active {
              width: 12px;
              height: 12px;
            }
          }

          .swiper-pagination {
            position: absolute;
            bottom: 2rem;
            left: 50%;
            transform: translateX(-50%);
            width: 200px;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-left: 20px;
            z-index: 1;
          }

          /* FIX BULLETS ALWAYS CENTERED */
          .swiper {
            margin-left: 0 !important;
            width: 100% !important;
          }

          .swiper-pagination {
            margin-left: 0 !important;
            left: 50% !important;
            transform: translateX(-50%) !important;
          }

          /* ⭐⭐⭐ MOBILE FIXES BELOW ⭐⭐⭐ */
          @media (max-width: 768px) {

            /* Fix spacing left & right */
            .book-carousel-section {
              padding-left: 1rem !important;
              padding-right: 1rem !important;
            }

            /* Prevent carousel touching screen edges */
            .swiper {
              width: 100% !important;
              padding: 0 0.5rem !important;
            }

            .swiper-slide {
              width: 100% !important;
              display: flex;
              justify-content: center;
            }

            /* Fix bullets inside/outside issue */
            .swiper-pagination-bullet {
              margin-left: 0 !important;
              margin-right: 8px !important;
            }

            /* Keep bullets always centered */
            .swiper-pagination {
              bottom: 1.5rem !important;
              width: auto !important;
              margin-left: 0 !important;
            }
          }
        `}</style>
      </motion.section>

      <Modal book={selectedBook} onClose={closeModal} />
    </>
  );
};
