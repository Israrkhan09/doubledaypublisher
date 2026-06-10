import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './FictionBest.css'; 
import stackedBooksImage from '../FictionImages/Gemini_Generated_Image_bj70rhbj70rhbj70-removebg-preview.png'; 

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

const FictionBest = () => {
  const [sectionRef, isSectionVisible] = useScrollReveal(0.1);
  const [rightRef, isRightVisible] = useScrollReveal(0.1);

  return (
    <section ref={sectionRef} className="fiction-sticky-services-section">
      <div className="fiction-sticky-container">

        {/* LEFT COLUMN: PINNED BOOK STACK */}
        <div className="fiction-sticky-left">
          <div className="fiction-sticky-wrapper">
            <motion.div
              className="fiction-sticky-image-container"
              variants={fadeLeftVariant}
              initial="hidden"
              animate={isSectionVisible ? "visible" : "hidden"}
            >
              <div className="fiction-image-stack">
                <img
                  src={stackedBooksImage}
                  alt="Stack of fiction books"
                  className="fiction-stacked-books-image"
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* RIGHT COLUMN: SCROLLABLE FICTION DETAILS */}
        <motion.div
          className="fiction-sticky-right"
          ref={rightRef}
          variants={containerVariants}
          initial="hidden"
          animate={isRightVisible ? "visible" : "hidden"}
        >
          <motion.h2 className="fiction-sticky-heading" variants={fadeUpVariant}>
            DISCOVER OUR EXPERTISE IN FICTION WRITING SERVICES
          </motion.h2>
          <motion.div className="fiction-sticky-divider" variants={fadeUpVariant}></motion.div>

          <motion.p className="fiction-sticky-desc" variants={fadeUpVariant}>
            At Pegasus Writing, we specialize in creating captivating, informative, well-researched, and interesting non-fiction that captivates readers and offers value. Our writers are proficient in various non-fiction genres, ranging from technology and business to self-help and lifestyle. We ensure that every article is meticulously studied and crafted to meet the particular demands of your target readership.
          </motion.p>

          <motion.p className="fiction-sticky-desc" variants={fadeUpVariant}>
            If you require a stimulating article, a lucid ebook, or an insightful guide, Our professional writing service is designed to convey your message effectively and clearly. We focus on providing precise, high-quality content representing your distinctive voice and knowledge.
          </motion.p>

          <motion.p className="fiction-sticky-desc" variants={fadeUpVariant}>
            With many years of experience in non-fiction writing, we are aware of the importance of providing material that is not just informative but also entertaining. Our writers are skilled in making difficult topics understandable and relatable, ensuring your readers are engaged throughout the process.
          </motion.p>

          <motion.p className="fiction-sticky-desc" variants={fadeUpVariant}>
            For more details on our writing service, check out the pages of our book writing service or our book publication service.
            Let us assist you in creating powerful non-fiction content that connects with your readers and makes you an authority in your area of expertise.
          </motion.p>
        </motion.div>

      </div>
    </section>
  );
};

export default FictionBest;