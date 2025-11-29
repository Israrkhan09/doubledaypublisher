import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useMotionTemplate, animate, color } from "framer-motion";

// Aurora colors (example)
const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];
const MOBILE_BREAKPOINT = 768;

// --- Custom hook ---
const useIsMobile = (breakpoint) => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const query = `(max-width: ${breakpoint}px)`;
    const mq = window.matchMedia(query);
    setIsMobile(mq.matches);
    const listener = (e) => setIsMobile(e.matches);
    mq.addEventListener("change", listener);
    return () => mq.removeEventListener("change", listener);
  }, [breakpoint]);
  return isMobile;
};

// --- Styles ---
const styles = {
  sectionContainer: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    boxSizing: "border-box",
    minHeight: "auto",
    width: "100%",
    overflowX: "hidden",
    marginTop: "6vh",
    // backgroundColor: "red",
    color: "#e5e7eb",
  },
  contentGrid: {
    display: "flex",
    // backgroundColor: "yellow",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "flex-start",
    maxWidth: "1200px",
    margin: "0 auto",
    width: "100%",
    padding:"10px 40px",
    gap: "2rem",
    boxSizing: "border-box",
  },
  heroTextContainer: {
    // backgroundColor: "blue",
    flex: "1 1 auto",
    maxWidth: "600px",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    wordBreak: "break-word",
  },
  mainHeadline: {
    fontSize: "40px",
    // background:"brown",
    fontWeight: 700,
    lineHeight: 1.2,
    marginBottom: "1rem",
  },
  subHeadline: {
    lineHeight: 1.625,
    color: "#9ca3af",
    marginBottom: "2rem",
  },
  formContainer: {
    flex: "0 0 auto",
    maxWidth: "330px",
    width: "100%",
    padding: "1.5rem",
    borderRadius: "0.75rem",
    backgroundColor: "#0A0F1F",
    border: "1px solid #374151",
    boxShadow: "0 15px 30px rgba(0,0,0,0.6)",
    boxSizing: "border-box",
  },
  formField: {
    marginBottom: "0.75rem",
  },
  input: {
    width: "100%",
    boxSizing: "border-box",
    padding: "0.75rem 1rem",
    borderRadius: "0.375rem",
    border: "1px solid #475569",
    backgroundColor: "#334155",
    color: "#e5e7eb",
    outline: "none",
  },
  ctaButton: {
    background: "white",
        color: "black",
        padding: "0.75rem 1.25rem",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer",
        fontSize: "1rem",
        fontWeight: "600",
        whiteSpace: "nowrap",
        textDecoration: "none",

  },
  discountHeader: {
    display: "flex",
    alignItems: "center",
    marginBottom: "1rem",
    textAlign:"center",
    lineHeight: 1.3,
    gap: "0.9rem",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    color: 'white',
    // padding:"10px",
    // backgroundColor:""
    // background: "linear-gradient(90deg, #1A437C , #1d4f8bff)"
  },
  discountText: {
    marginLeft: "0.1rem",
    // padding:"10px",
    // background: "linear-gradient(90deg, #1A437C , #1d4f8bff)",
    fontWeight: 700,
    flexGrow: 1,
    minWidth: "200px",
    textAlign: "left",
  },
};

// --- Framer Motion Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { delayChildren: 0.1, staggerChildren: 0.07 } },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100, damping: 15 } },
};

// --- Component ---
export const AuroraHero = () => {
  const isMobile = useIsMobile(MOBILE_BREAKPOINT);
  const color = useMotionValue(COLORS_TOP[1]);
  const focusBorderColor = useMotionTemplate`${color}`;
  const focusBoxShadow = useMotionTemplate`0 0 0 3px ${color}40`;

  const handleInputFocus = (e) => {
    animate(e.target.style, {
      borderColor: focusBorderColor.get(),
      boxShadow: focusBoxShadow.get(),
      backgroundColor: "#1f2937",
    });
  };

  const handleInputBlur = (e) => {
    animate(e.target.style, {
      borderColor: "#475569",
      boxShadow: "none",
      backgroundColor: "#334155",
    });
  };

  const trialButtonBorder = useMotionTemplate`1px solid ${color}`;
  const trialButtonBoxShadow = useMotionTemplate`0px 0px 10px ${color}30`;

  // Responsive adjustments
  const sectionContainer = {
    ...styles.sectionContainer,
    padding: isMobile ? "2rem 1rem" : "6rem 2rem",
  };
  const contentGrid = {
    ...styles.contentGrid,
    flexDirection: isMobile ? "column" : "row",
    alignItems: isMobile ? "center" : "flex-start",
    textAlign: isMobile ? "center" : "left",
  };
  const heroTextContainer = {
    ...styles.heroTextContainer,
    textAlign: isMobile ? "center" : "left",
    width: isMobile ? "100%" : "auto",
  };
  const mainHeadline = {
    ...styles.mainHeadline,
    fontSize: isMobile ? "2rem" : "2.7rem",
  };
  const subHeadline = {
    ...styles.subHeadline,
    fontSize: isMobile ? "1rem" : "1.123rem",
    margin: isMobile ? "0 auto 2rem auto" : "0 0 2rem 0",
    maxWidth: isMobile ? "90%" : "400px",
  };
  const formContainer = {
    ...styles.formContainer,
    marginTop: isMobile ? "2rem" : "0",
    margin: isMobile ? "0 auto" : "0",
    width: isMobile ? "100%" : "330px",
  };

  return (
    <motion.section style={sectionContainer}>
      <div style={contentGrid}>
        {/* Hero Text */}
        <motion.div style={heroTextContainer} variants={containerVariants} initial="hidden" animate="visible">
          <motion.h1 style={mainHeadline} variants={itemVariants}>
            Professional Book Writing Services!
          </motion.h1>
          <motion.p style={subHeadline} variants={itemVariants}>
            We create masterpieces and help you become a bestseller. Our book writing service is dedicated to helping authors turn their dreams into published reality.
          </motion.p>
          <motion.button
            style={{
              ...styles.ctaButton,
              border: trialButtonBorder,
              boxShadow: trialButtonBoxShadow,
              margin: isMobile ? "0 auto" : "0",
              maxWidth: isMobile ? "80%" : "250px",
            }}
            whileHover={{ scale: 1.015, backgroundColor: "#ffffffff" }}
            whileTap={{ scale: 0.985 }}
            variants={itemVariants}
          >
            Start free trial →
          </motion.button>
        </motion.div>

        {/* Form */}
        <motion.form style={formContainer} variants={containerVariants} initial="hidden" animate="visible" onSubmit={(e) => e.preventDefault()}>
          <motion.div style={styles.discountHeader} variants={itemVariants}>
            <div style={{ backgroundColor: "#ffffffff", color: "#000000ff", borderRadius: "50%", width: "55px", height: "55px", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "0.7rem", fontWeight: 700, flexShrink: 0 }}>
              50% off
            </div>
            <span style={styles.discountText}>Fill Out This Brief Form To Get Your Discount Reserved</span>
          </motion.div>

          <motion.div style={styles.formField} variants={itemVariants}>
            <input type="text" placeholder="Full Name" style={styles.input} onFocus={handleInputFocus} onBlur={handleInputBlur} />
          </motion.div>

          <motion.div style={styles.formField} variants={itemVariants}>
            <input type="email" placeholder="Email" style={styles.input} onFocus={handleInputFocus} onBlur={handleInputBlur} />
          </motion.div>

          <motion.div style={styles.formField} variants={itemVariants}>
            <input type="tel" placeholder="Phone" style={styles.input} onFocus={handleInputFocus} onBlur={handleInputBlur} />
          </motion.div>

          <motion.div style={styles.formField} variants={itemVariants}>
            <textarea placeholder="Talk About Your Project" rows={4} style={{ ...styles.input, resize: "vertical" }} onFocus={handleInputFocus} onBlur={handleInputBlur} />
          </motion.div>

          <motion.button type="submit" style={styles.ctaButton} whileHover={{ backgroundColor: "#ffffffff" }} whileTap={{ scale: 0.1 }} variants={itemVariants}>
            Lets Talk To An Expert!
          </motion.button>
        </motion.form>
      </div>
    </motion.section>
  );
};
