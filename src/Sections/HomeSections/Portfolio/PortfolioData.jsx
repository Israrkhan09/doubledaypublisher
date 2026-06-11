import React, { useState, useMemo, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";

// Portfolio Images
import image_path_1 from "../images/main-fiction/Fiction-1.jpg";
import image_path_2 from "../images/main-fiction/Fiction-2.jpg";
import image_path_3 from "../images/main-fiction/Fiction-3.jpg";
import image_path_4 from "../images/main-fiction/Fiction-4.jpg";
import image_path_5 from "../images/main-fiction/Fiction-5.jpg";
// import image_path_6 from "../images/main-fiction/Fiction-6.jpg";

import image_path_7 from "../images/main-nonfiction/nonfiction-1.jpg";
import image_path_8 from "../images/main-nonfiction/nonfiction-2.jpg";
import image_path_9 from "../images/main-nonfiction/nonfiction-3.jpg";
import image_path_10 from "../images/main-nonfiction/nonfiction-4.jpg";
import image_path_11 from "../images/main-nonfiction/nonfiction-5.jpg";
// import image_path_12 from "../images/main-nonfiction/nonfiction-6.jpg";

import image_path_13 from "../images/main-memoirs/memoirs-1.jpg";
import image_path_14 from "../images/main-memoirs/memoirs-2.jpg";
import image_path_15 from "../images/main-memoirs/memoirs-3.jpg";
import image_path_16 from "../images/main-fantasy/fantasy-9.jpg";
import image_path_17 from "../images/main-fantasy/fantasy-10.jpg";
// import image_path_18 from "../images/main-fantasy/fantasy-11.jpg";

import image_path_19 from "../images/main-fantasy/fantasy-1.jpg";
import image_path_20 from "../images/main-fantasy/fantasy-2.jpg";
import image_path_21 from "../images/main-fantasy/fantasy-3.jpg";
import image_path_22 from "../images/main-fantasy/fantasy-4.jpg";
import image_path_23 from "../images/main-fantasy/fantasy-5.jpg";
// import image_path_24 from "../images/main-fantasy/fantasy-6.jpg";

import image_path_25 from "../images/main-children/children-1.jpg";
import image_path_26 from "../images/main-children/children-2.jpg";
import image_path_27 from "../images/main-children/children-3.jpg";
import image_path_28 from "../images/main-children/children-4.jpg";
import image_path_29 from "../images/main-children/children-5.jpg";
// import image_path_30 from "../images/main-children/children-6.jpg";

// Doubleday Images
import db_12_1 from "../../../assets/doubleday-images/12-1.webp";
import db_3_1 from "../../../assets/doubleday-images/3-1.webp";
import db_4_1 from "../../../assets/doubleday-images/4-1.webp";
import db_6_1 from "../../../assets/doubleday-images/6-1.webp";
import db_7_1 from "../../../assets/doubleday-images/7-1.webp";
import db_8_1 from "../../../assets/doubleday-images/8-1.webp";
import db_9_1 from "../../../assets/doubleday-images/9-1.webp";
import db_b_10 from "../../../assets/doubleday-images/b-10.webp";
import db_f_1 from "../../../assets/doubleday-images/f-1.webp";
import db_f_10 from "../../../assets/doubleday-images/f-10.webp";
import db_f_11 from "../../../assets/doubleday-images/f-11.webp";
import db_f_5 from "../../../assets/doubleday-images/f-5.webp";
import db_f_6 from "../../../assets/doubleday-images/f-6.webp";
import db_f_7 from "../../../assets/doubleday-images/f-7.webp";

import './minPortfolio.css'

const categories = [
  "All",
  "Fiction Book",
  "Non-Fiction Book",
  "Memoir",
  "Fantasy & Sci-Fi",
  "Children's Book",
];

const portfolioCovers = [
  // Fiction Book (10 images total - 5 original, 5 Doubleday)
  { id: 101, src: image_path_1, title: "Circe", category: "Fiction Book" },
  { id: 102, src: image_path_2, title: "Bright Edge", category: "Fiction Book" },
  { id: 103, src: image_path_3, title: "The Overstory", category: "Fiction Book" },
  { id: 104, src: image_path_4, title: "Fiction Title A", category: "Fiction Book" },
  { id: 105, src: image_path_5, title: "Fiction Title B", category: "Fiction Book" },
  { id: 106, src: db_f_1, title: "Fiction DB 1", category: "Fiction Book" },
  { id: 107, src: db_f_5, title: "Fiction DB 2", category: "Fiction Book" },
  { id: 108, src: db_f_6, title: "Fiction DB 3", category: "Fiction Book" },
  { id: 109, src: db_f_7, title: "Fiction DB 4", category: "Fiction Book" },
  { id: 110, src: db_f_10, title: "Fiction DB 5", category: "Fiction Book" },

  // Non-Fiction Book (10 images total - 5 original, 5 Doubleday)
  { id: 201, src: image_path_7, title: "Greenwood", category: "Non-Fiction Book" },
  { id: 202, src: image_path_8, title: "Digital Age", category: "Non-Fiction Book" },
  { id: 203, src: image_path_9, title: "Non-Fiction A", category: "Non-Fiction Book" },
  { id: 204, src: image_path_10, title: "Non-Fiction B", category: "Non-Fiction Book" },
  { id: 205, src: image_path_11, title: "Non-Fiction C", category: "Non-Fiction Book" },
  { id: 206, src: db_f_11, title: "Non-Fiction DB 1", category: "Non-Fiction Book" },
  { id: 207, src: db_12_1, title: "Non-Fiction DB 2", category: "Non-Fiction Book" },
  { id: 208, src: db_3_1, title: "Non-Fiction DB 3", category: "Non-Fiction Book" },
  { id: 209, src: db_4_1, title: "Non-Fiction DB 4", category: "Non-Fiction Book" },
  { id: 210, src: db_6_1, title: "Non-Fiction DB 5", category: "Non-Fiction Book" },

  // Memoir (10 images total - 5 original, 5 Doubleday)
  { id: 301, src: image_path_13, title: "The Great Game", category: "Memoir" },
  { id: 302, src: image_path_14, title: "Memoir B", category: "Memoir" },
  { id: 303, src: image_path_15, title: "Memoir C", category: "Memoir" },
  { id: 304, src: image_path_16, title: "Memoir D", category: "Memoir" },
  { id: 305, src: image_path_17, title: "Memoir E", category: "Memoir" },
  { id: 306, src: db_7_1, title: "Memoir DB 1", category: "Memoir" },
  { id: 307, src: db_8_1, title: "Memoir DB 2", category: "Memoir" },
  { id: 308, src: db_9_1, title: "Memoir DB 3", category: "Memoir" },
  { id: 309, src: db_b_10, title: "Memoir DB 4", category: "Memoir" },
  { id: 310, src: db_f_1, title: "Memoir DB 5", category: "Memoir" },

  // Fantasy & Sci-Fi (10 images total - 5 original, 5 Doubleday)
  { id: 401, src: image_path_19, title: "Aperture", category: "Fantasy & Sci-Fi" },
  { id: 402, src: image_path_20, title: "Stars Fall", category: "Fantasy & Sci-Fi" },
  { id: 403, src: image_path_21, title: "Fantasy A", category: "Fantasy & Sci-Fi" },
  { id: 404, src: image_path_22, title: "Fantasy B", category: "Fantasy & Sci-Fi" },
  { id: 405, src: image_path_23, title: "Fantasy C", category: "Fantasy & Sci-Fi" },
  { id: 406, src: db_f_5, title: "Fantasy DB 1", category: "Fantasy & Sci-Fi" },
  { id: 407, src: db_f_6, title: "Fantasy DB 2", category: "Fantasy & Sci-Fi" },
  { id: 408, src: db_f_7, title: "Fantasy DB 3", category: "Fantasy & Sci-Fi" },
  { id: 409, src: db_f_10, title: "Fantasy DB 4", category: "Fantasy & Sci-Fi" },
  { id: 410, src: db_f_11, title: "Fantasy DB 5", category: "Fantasy & Sci-Fi" },

  // Children's Book (10 images total - 5 original, 5 Doubleday)
  { id: 501, src: image_path_25, title: "Kids Adventure", category: "Children's Book" },
  { id: 502, src: image_path_26, title: "Children A", category: "Children's Book" },
  { id: 503, src: image_path_27, title: "Children B", category: "Children's Book" },
  { id: 504, src: image_path_28, title: "Children C", category: "Children's Book" },
  { id: 505, src: image_path_29, title: "Children D", category: "Children's Book" },
  { id: 506, src: db_12_1, title: "Children DB 1", category: "Children's Book" },
  { id: 507, src: db_3_1, title: "Children DB 2", category: "Children's Book" },
  { id: 508, src: db_4_1, title: "Children DB 3", category: "Children's Book" },
  { id: 509, src: db_6_1, title: "Children DB 4", category: "Children's Book" },
  { id: 510, src: db_7_1, title: "Children DB 5", category: "Children's Book" }
];


const scrollItemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
const coverItemVariants = {
  hidden: { opacity: 0, y: 100, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6 } },
  exit: (exitDelay) => ({
    opacity: 0,
    y: -40,
    transition: { duration: 0.25, delay: exitDelay },
  }),
};
const splitTextParent = { visible: { transition: { staggerChildren: 0.04 } } };
const splitTextChild = {
  hidden: { y: "120%", opacity: 0 },
  visible: { y: "0%", opacity: 1, transition: { duration: 0.45 } },
};

const BookCoverItem = ({ book, index, totalItems }) => {
  const exitDelay = (totalItems - 1 - index) * 0.05;
  const enterDelay = index * 0.1;
  return (
    <motion.div
      custom={exitDelay}
      variants={coverItemVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={{
        ...coverItemVariants.visible.transition,
        delay: enterDelay,
      }}
      style={{
        borderRadius: "1rem",
        overflow: "hidden",
        cursor: "pointer",
        aspectRatio: "3/4",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "1px solid var(--portfolio-border)",
        boxShadow: "0 10px 20px var(--portfolio-shadow-idle)",
      }}
      whileHover={{
        scale: 1.05,
        boxShadow: "0 15px 35px var(--portfolio-shadow-hover)",
      }}
    >
      <img
        src={book.src}
        alt={book.title}
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    </motion.div>
  );
};

const AnimatedWord = ({ children }) => (
  <motion.span
    variants={splitTextChild}
    style={{ display: "inline-block", overflow: "hidden" }}
  >
    {children}
  </motion.span>
);

export const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState(categories[0]);
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  // Background parallax stays as it is subtle, but titleY scroll animation is removed to prevent text "moving" during scroll
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const backgroundBlur = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["blur(0px)", "blur(2px)", "blur(0px)"],
  );

  const filteredCovers = useMemo(() => {
    if (activeFilter === "All") {
      const fBook = portfolioCovers.filter(c => c.category === "Fiction Book");
      const nfBook = portfolioCovers.filter(c => c.category === "Non-Fiction Book");
      const memoir = portfolioCovers.filter(c => c.category === "Memoir");
      const fantasy = portfolioCovers.filter(c => c.category === "Fantasy & Sci-Fi");
      const children = portfolioCovers.filter(c => c.category === "Children's Book");

      const mixed = [];
      for (let i = 0; i < 3; i++) {
        if (fBook[i]) mixed.push({ ...fBook[i], id: `all-f-${i}` });
        if (nfBook[i]) mixed.push({ ...nfBook[i], id: `all-nf-${i}` });
        if (memoir[i]) mixed.push({ ...memoir[i], id: `all-m-${i}` });
        if (fantasy[i]) mixed.push({ ...fantasy[i], id: `all-fan-${i}` });
        if (children[i]) mixed.push({ ...children[i], id: `all-c-${i}` });
      }
      return mixed;
    } else {
      return portfolioCovers.filter((c) => c.category === activeFilter).slice(0, 10);
    }
  }, [activeFilter]);
  const totalFiltered = filteredCovers.length;

  return (
    <motion.section
      ref={sectionRef}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      // Removed variants={sectionVariants} so the section itself doesn't move/animate y-axis
      style={{
        padding: "5.5rem 0.5rem 7rem",
        minHeight: "100vh",
        overflow: "hidden",
        perspective: "1000px",
        backgroundColor: "var(--hero-bg)",
        color: "var(--text-color)",
        marginTop: "0px",
        position: "relative",
      }}
    >
      <style>{`
                :root {
                    --portfolio-border: rgba(0, 0, 0, 0.1);
                    --portfolio-shadow-idle: rgba(0, 0, 0, 0.05);
                    --portfolio-shadow-hover: rgba(0, 0, 0, 0.15);
                    --portfolio-text-secondary: #555;
                }
                [data-theme='dark'], .dark-mode {
                    --portfolio-border: rgba(255, 255, 255, 0.1);
                    --portfolio-shadow-idle: rgba(0, 0, 0, 0.3);
                    --portfolio-shadow-hover: rgba(0, 0, 0, 0.5);
                    --portfolio-text-secondary: #aaa;
                }
                .portfolio-grid {
                    display: grid;
                    grid-template-columns: repeat(5, 1fr);
                    gap: 2.5rem;
                }
                @media (max-width: 1024px) {
                    .portfolio-grid {
                        grid-template-columns: repeat(3, 1fr);
                        gap: 1.5rem;
                    }
                }
                @media (max-width: 768px) {
                    .portfolio-grid {
                        grid-template-columns: repeat(2, 1fr);
                        gap: 1.25rem;
                    }
                }
                [data-theme='light'] .portfolio-overlay, .light-mode .portfolio-overlay {
                    display: none !important;
                }
            `}</style>

      <motion.div
        className="portfolio-overlay"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 0,
          y: backgroundY,
          filter: backgroundBlur,
          scale: 1.1,
          opacity: 0.1,
          background: `radial-gradient(circle at 50% 50%, var(--text-color), transparent 70%)`,
        }}
      />

      {/* Title Section */}
      <motion.div
        variants={scrollItemVariants}
        style={{
          textAlign: "center",
          marginBottom: "1.5rem",
          position: "relative",
          zIndex: 1,
        }}
      >
        <motion.h2
          style={{
            marginBottom: "-20px",
            fontSize: "clamp(28px, 4vw, 36px)",
            fontWeight: 700,
            lineHeight: 1.2,
            color: "var(--headline-color)",
            display: "inline-block",
          }}
          variants={splitTextParent}
        >
          {"Our Award-Winning Book Cover Portfolio"
            .split(" ")
            .map((word, i) => (
              <span
                key={i}
                style={{ display: "inline-block", marginRight: "0.65rem" }}
              >
                <AnimatedWord>{word}</AnimatedWord>
              </span>
            ))}
        </motion.h2>
        <motion.p
          style={{
            color: "var(--headline-color)",
            fontSize: "16px",
            marginTop: "30px",
          }}
        >
          Explore the masterpieces we've built across multiple genres.
        </motion.p>
      </motion.div>

      {/* Filter Buttons */}
      <motion.div
        variants={scrollItemVariants}
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "0.75rem",
          marginBottom: "3.5rem",
          position: "relative",
          zIndex: 1,
        }}
      >
        {categories.map((c) => (
          <motion.button
            key={c}
            onClick={() => setActiveFilter(c)}
            style={{
              padding: "0.6rem 1.6rem",
              borderRadius: "999px",
              cursor: "pointer",
              fontSize: "15px",
              fontWeight: 600,
              transition: "all 0.3s ease",
              border: "1px solid var(--text-color)",
              background: activeFilter === c ? "#FFFFFF" : "transparent",
              color: activeFilter === c ? "#979797ff" : "var(--text-color)",
            }}
            whileHover={{
              scale: 1.05,
              backgroundColor:
                activeFilter === c ? "#FFFFFF" : "rgba(255, 255, 255, 0.1)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            {c}
          </motion.button>
        ))}
      </motion.div>

      {/* Portfolio Grid */}
      <motion.div
        variants={scrollItemVariants}
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 2rem",
          position: "relative",
          zIndex: 1,
        }}
      >
        <motion.div
          key={activeFilter}
          className="portfolio-grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredCovers.map((book, index) => (
              <BookCoverItem
                key={book.id}
                book={book}
                index={index}
                totalItems={totalFiltered}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </motion.div>

      {/* CTA Button */}
      {/* <motion.button variants={scrollItemVariants} 
                whileHover={{ 
                    scale: 1.05, 
                    backgroundColor: "#FFFFFF", 
                    color: "#000000"
                }} 
                whileTap={{ scale: 0.95 }}
                style={{
                    margin: "5rem auto 0",
                    padding: "14px 28px",
                    borderRadius: '100px',
                    display: "block",
                    fontSize: "15px",
                    fontWeight: 800,
                    cursor: 'pointer',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    border: '2px solid var(--text-color)',
                    background: "transparent",
                    color: 'var(--text-color)',
                    position: 'relative', 
                    zIndex: 1
                }}
            >
                VIEW FULL PORTFOLIO
            </motion.button> */}
    </motion.section>
  );
};
