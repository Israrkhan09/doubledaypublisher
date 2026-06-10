import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Award, BookOpen } from "lucide-react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

// --- Scroll Animation Hook ---
const useScrollReveal = (threshold = 0.15) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentRef = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );
    if (currentRef) observer.observe(currentRef);
    return () => { if (currentRef) observer.unobserve(currentRef); };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [ref, isVisible];
};

// --- Animation Variants ---
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const fadeLeftVariant = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const GhostServices = () => {

  const customStyles = `
    .ghost-sticky-services-section {
        padding: 100px 0;
        background-color: var(--bg-color, #f7f9fc);
        position: relative;
        transition: background-color 0.3s ease;
    }

    .ghost-sticky-container {
        display: grid;
        grid-template-columns: 1fr 1.2fr;
        gap: 30px;
        max-width: 1360px;
        margin: 0 auto;
        padding: 0 20px;
        align-items: stretch;
        box-sizing: border-box;
    }

    .ghost-sticky-left {
        position: relative;
        height: 100%;
    }

    .ghost-sticky-wrapper {
        position: sticky;
        top: 140px; /* Comfortable margin below the fixed navbar */
        align-self: start;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .ghost-sticky-image-container {
        width: 100%;
        max-width: 650px;
        border-radius: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        perspective: 1000px;
    }

    .ghost-sticky-lottie {
        width: 100%;
        height: auto;
        display: block;
        transform: scale(1.3);
        transform-origin: center;
    }

    .ghost-sticky-right {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        text-align: left;
    }

    .ghost-sticky-heading {
        font-size: 35px;
        font-weight: 600;
        color: var(--text-color);
        margin: 0 0 15px 0;
        text-transform: uppercase;
        line-height: 1.25;
        letter-spacing: 0.02em;
    }

    @media (max-width: 1024px) {
        .ghost-sticky-heading {
            font-size: 30px;
        }
    }

    .ghost-sticky-divider {
        width: 80px;
        height: 4px;
        background-color: #000000;
        margin-bottom: 30px;
        border-radius: 2px;
    }

    .ghost-sticky-desc {
        font-size: 16px;
        line-height: 1.75;
        color: #000000;
        margin: 0 0 24px 0;
    }

    .ghost-sticky-desc strong {
        font-weight: 700;
        color: #000000;
    }

    .ghost-sticky-stats-row {
        display: flex;
        gap: 40px;
        margin: 20px 0 35px 0;
    }

    .ghost-sticky-stat-item {
        display: flex;
        align-items: center;
        gap: 15px;
    }

    .ghost-sticky-stat-icon-wrapper {
        width: 52px;
        height: 52px;
        border-radius: 50%;
        background-color: rgba(0, 0, 0, 0.05);
        color: #000000;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
    }

    /* --- DARK MODE OVERRIDES --- */
    [data-theme='dark'] .ghost-sticky-divider,
    .dark-mode .ghost-sticky-divider {
        background-color: #ffffff;
    }

    [data-theme='dark'] .ghost-sticky-desc,
    .dark-mode .ghost-sticky-desc {
        color: #ffffff;
    }

    [data-theme='dark'] .ghost-sticky-desc strong,
    .dark-mode .ghost-sticky-desc strong {
        color: #ffffff;
    }

    [data-theme='dark'] .ghost-sticky-stat-icon-wrapper,
    .dark-mode .ghost-sticky-stat-icon-wrapper {
        background-color: rgba(255, 255, 255, 0.1);
        color: #ffffff;
    }

    .ghost-sticky-stat-info {
        display: flex;
        flex-direction: column;
    }

    .ghost-sticky-stat-number {
        font-size: 24px;
        font-weight: 800;
        color: var(--text-color);
        line-height: 1.1;
    }

    .ghost-sticky-stat-label {
        font-size: 13.5px;
        font-weight: 500;
        color: var(--text-color);
        opacity: 0.75;
        margin-top: 2px;
    }

    .ghost-sticky-learn-more {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        font-size: 14px;
        font-weight: 700;
        color: var(--text-color);
        text-transform: uppercase;
        letter-spacing: 1.5px;
        text-decoration: none;
        width: fit-content;
        transition: color 0.3s ease, transform 0.3s ease;
    }

    .ghost-sticky-learn-more:hover {
        color: #14b8a6;
        transform: translateX(4px);
    }

    .ghost-sticky-learn-more .arrow {
        transition: transform 0.3s ease;
    }

    .ghost-sticky-learn-more:hover .arrow {
        transform: translateX(4px);
    }

    /* --- RESPONSIVE MEDIA QUERIES --- */
    @media (max-width: 900px) {
        .ghost-sticky-services-section {
            padding: 60px 0;
        }

        .ghost-sticky-container {
            grid-template-columns: 1fr;
            gap: 50px;
        }

        .ghost-sticky-left {
            height: auto;
            width: 100%;
        }

        .ghost-sticky-wrapper {
            position: relative;
            top: 0;
            margin-bottom: 20px;
            width: 100%;
            display: flex;
            justify-content: center;
        }

        .ghost-sticky-image-container {
            width: 100%;
            max-width: 450px;
            margin: 0 auto;
        }

        .ghost-sticky-lottie {
            width: 100% !important;
            height: auto !important;
            transform: scale(1.3);
        }

        .ghost-sticky-right {
            text-align: center;
            align-items: center;
        }

        .ghost-sticky-divider {
            margin-left: auto;
            margin-right: auto;
        }

        .ghost-sticky-stats-row {
            justify-content: center;
            width: 100%;
        }
    }

    @media (max-width: 600px) {
        .ghost-sticky-stats-row {
            flex-direction: row;
            justify-content: center;
            gap: 15px;
            margin: 25px 0;
            width: 100%;
        }
        
        .ghost-sticky-stat-item {
            flex: 1 1 0px;
            min-width: 130px;
            max-width: 170px;
            justify-content: center;
            gap: 8px;
        }

        .ghost-sticky-stat-icon-wrapper {
            width: 42px;
            height: 42px;
        }

        .ghost-sticky-stat-icon-wrapper svg {
            width: 20px !important;
            height: 20px !important;
        }

        .ghost-sticky-stat-number {
            font-size: 18px;
        }

        .ghost-sticky-stat-label {
            font-size: 11px;
            line-height: 1.2;
            text-align: left;
        }
        
        .ghost-sticky-right {
            align-items: stretch;
        }
    }
  `;

  const [sectionRef, isSectionVisible] = useScrollReveal(0.1);
  const [rightRef, isRightVisible] = useScrollReveal(0.1);

  return (
    <section ref={sectionRef} className="ghost-sticky-services-section">
      <style>{customStyles}</style>
      <div className="ghost-sticky-container">

        {/* LEFT COLUMN: PINNED BOOK WRITING ILLUSTRATION */}
        <motion.div
          className="ghost-sticky-left"
          variants={fadeLeftVariant}
          initial="hidden"
          animate={isSectionVisible ? "visible" : "hidden"}
        >
          <div className="ghost-sticky-wrapper">
            <div className="ghost-sticky-image-container">
              <DotLottieReact
                src="https://lottie.host/c74f14f2-ffd1-4dbd-a200-da00eceb39fe/Od7hAJhDgt.lottie"
                loop
                autoplay
                className="ghost-sticky-lottie"
              />
            </div>
          </div>
        </motion.div>

        {/* RIGHT COLUMN: SCROLLABLE GHOSTWRITING DETAILS */}
        <motion.div
          className="ghost-sticky-right"
          ref={rightRef}
          variants={containerVariants}
          initial="hidden"
          animate={isRightVisible ? "visible" : "hidden"}
        >
          <motion.h2 className="ghost-sticky-heading" variants={fadeUpVariant}>
            EVER DREAM OF BEING A BESTSELLING AUTHOR?
          </motion.h2>
          <motion.div className="ghost-sticky-divider" variants={fadeUpVariant}></motion.div>

          <motion.p className="ghost-sticky-desc" variants={fadeUpVariant}>
            Doubleday Publisher provides top quality ghostwriting services that translate your thoughts into expertly written content. When you’re writing your book, article blog, or other written work, our team of experienced writers will ensure that your idea is delivered accurately and professionally.
          </motion.p>

          <motion.p className="ghost-sticky-desc" variants={fadeUpVariant}>
            Our ghostwriters are skilled in adjusting to your style and voice, ensuring your message is conveyed effectively and clearly. We are aware of the importance of collaboration and confidentiality. That is why we offer an uncomplicated experience through the entire writing process, from the initial idea to the final draft.
          </motion.p>

          <motion.p className="ghost-sticky-desc" variants={fadeUpVariant}>
            With a wide range of writers with expertise in various styles and genres, We can tackle any task. You may be an entrepreneur searching for captivating blog posts or an author looking to write a novel. Our ghostwriting services can be tailored to meet your needs. We proudly provide top-quality, original content within the desired time frame.
          </motion.p>

          <motion.p className="ghost-sticky-desc" variants={fadeUpVariant}>
            Our dedication to excellence and confidentiality ensures that you can count on our team to help bring your thoughts to life. You have complete control over your work. We can help you reach your writing goals by providing expert support.
          </motion.p>

          <motion.p className="ghost-sticky-desc" variants={fadeUpVariant}>
            Find out how the book writing services can assist you in writing a captivating and well-structured manuscript. You can also visit our professional <strong>editing services</strong> for your book. Editing services to refine your <strong>manuscript</strong> further.
          </motion.p>

          {/* STATISTICS GRID */}
          <motion.div className="ghost-sticky-stats-row" variants={fadeUpVariant}>
            <motion.div className="ghost-sticky-stat-item" variants={fadeUpVariant}>
              <div className="ghost-sticky-stat-icon-wrapper">
                <Award size={26} />
              </div>
              <div className="ghost-sticky-stat-info">
                <span className="ghost-sticky-stat-number">10+</span>
                <span className="ghost-sticky-stat-label">Years of Experience</span>
              </div>
            </motion.div>

            <motion.div className="ghost-sticky-stat-item" variants={fadeUpVariant}>
              <div className="ghost-sticky-stat-icon-wrapper">
                <BookOpen size={26} />
              </div>
              <div className="ghost-sticky-stat-info">
                <span className="ghost-sticky-stat-number">700+</span>
                <span className="ghost-sticky-stat-label">Books Written</span>
              </div>
            </motion.div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
};

export default GhostServices;