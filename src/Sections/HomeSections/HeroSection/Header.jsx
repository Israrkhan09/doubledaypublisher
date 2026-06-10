import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  motion,
  useMotionValue,
  useMotionTemplate,
  animate,
} from "framer-motion";
import { GetQuotePopup } from "../GetQuotePopup/GetQuotePopup";
import googleLogo from "../images/homeHeroImages/GMB.jpg";
import facebookLogo from "../images/homeHeroImages/facebook-logo.jpg";
import trustLogo from "../images/homeHeroImages/trust-pilot.webp";
import './HeroSection.css'

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];
const MOBILE_BREAKPOINT = 768;


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

const styles = {
  sectionContainer: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    overflowX: "hidden",
    backgroundColor: "var(--hero-bg)",
    color: "var(--text-color)",
  },

  contentGrid: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "flex-start",
    maxWidth: "1200px",
    margin: "0 auto",
    width: "100%",
    padding: "10px 40px",
    gap: "2rem",
  },

  heroTextContainer: {
    flex: "1 1 auto",
    maxWidth: "600px",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    marginTop: "50px",
  },

  mainHeadline: {
    fontSize: "40px",
    fontWeight: 700,
    lineHeight: 1.2,
    marginBottom: "0px",
    color: "var(--headline-color)"
  },

  subHeadline: {
    fontSize: "16px",
    lineHeight: 1.6,
    color: "var(--headline-color)",
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
  },

  formField: {
    marginBottom: "0.75rem",
  },

  input: {
    width: "100%",
    padding: "0.75rem 1rem",
    borderRadius: "6px",
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
  },

  ctaRow: {
    display: "flex",
    gap: "10px",
    flexWrap: "wrap",
    marginBottom: "5px",
  },

  trustContainer: {
    display: "flex",
    gap: "16px",
    alignItems: "center",
    marginTop: "-18px",
  },

  trustLogo: {
    height: "110px",
    width: "110px",
    objectFit: "contain",
  },

  discountHeader: {
    display: "flex",
    alignItems: "center",
    marginBottom: "1rem",
    gap: "0.9rem",
    flexWrap: "wrap",
    color: "white",
  },

  discountText: {
    fontWeight: 700,
    flexGrow: 1,
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.07 } },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};


export const AuroraHero = () => {
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();
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

  const trialButtonBorder = useMotionTemplate`1px solid black`;
  const trialButtonBoxShadow = useMotionTemplate`0px 0px 10px ${color}30`;

  const sectionContainer = {
    ...styles.sectionContainer,
    padding: isMobile ? "7.5rem 1rem 2.5rem 1rem" : "6rem 2rem",
  };

  const contentGridStyle = {
    ...styles.contentGrid,
    padding: isMobile ? "10px 10px" : "10px 40px",
    justifyContent: isMobile ? "center" : "space-between",
    gap: isMobile ? "1.5rem" : "2rem",
  };

  const heroTextContainerStyle = {
    ...styles.heroTextContainer,
    textAlign: isMobile ? "center" : "left",
    alignItems: isMobile ? "center" : "flex-start",
    marginTop: isMobile ? "10px" : "50px",
  };

  const mainHeadlineStyle = {
    ...styles.mainHeadline,
    fontSize: isMobile ? "30px" : "40px",
    textAlign: isMobile ? "center" : "left",
  };

  const subHeadlineStyle = {
    ...styles.subHeadline,
    fontSize: isMobile ? "15px" : "16px",
    textAlign: isMobile ? "center" : "left",
    marginBottom: isMobile ? "1.5rem" : "2rem",
  };

  const ctaRowStyle = {
    ...styles.ctaRow,
    flexWrap: "nowrap",
    justifyContent: isMobile ? "center" : "flex-start",
    gap: isMobile ? "8px" : "10px",
  };

  const btnStyle1 = {
    ...styles.ctaButton,
    background: "#000000ff",
    color: "#ffffffff",
    padding: isMobile ? "8px 12px" : "0.75rem 1.25rem",
    fontSize: isMobile ? "0.8rem" : "1rem",
  };

  const btnStyle2 = {
    ...styles.ctaButton,
    border: trialButtonBorder,
    padding: isMobile ? "8px 12px" : "0.75rem 1.25rem",
    fontSize: isMobile ? "0.8rem" : "1rem",
  };

  const trustContainerStyle = {
    ...styles.trustContainer,
    justifyContent: isMobile ? "center" : "flex-start",
    marginTop: isMobile ? "10px" : "-18px",
    flexWrap: "nowrap",
    gap: isMobile ? "10px" : "16px",
  };

  const trustLogoStyle = {
    ...styles.trustLogo,
    height: isMobile ? "55px" : "110px",
    width: isMobile ? "85px" : "110px",
  };

  const formContainerStyle = {
    ...styles.formContainer,
    margin: isMobile ? "0 auto" : "0",
  };

  return (

    <motion.section style={sectionContainer}>
      <div style={contentGridStyle}>
        {/* LEFT CONTENT */}
        <motion.div
          style={heroTextContainerStyle}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 style={mainHeadlineStyle} variants={itemVariants}>
            TOP-NOTCH BOOK WRITING SERVICES FOR ASPIRING AUTHORS!
          </motion.h1>
 
          <motion.p style={subHeadlineStyle} variants={itemVariants}>
            We create masterpieces and help you become a bestseller. Our book
            writing service is dedicated to helping authors turn their dreams
            into published reality.
          </motion.p>
 
          {/* BUTTONS */}
 
          <motion.div style={ctaRowStyle} variants={itemVariants}>
            <motion.button
              style={btnStyle1}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => setShowPopup(true)}
            >
              Get Quote →
            </motion.button>
 
            <motion.button
              style={btnStyle2}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => navigate("/contact-us")}
            >
              Get Free Consultation →
            </motion.button>
          </motion.div>
 
          {/* TRUST LOGOS */}
 
          <motion.div style={trustContainerStyle} variants={itemVariants}>
            <img
              src={googleLogo}
              alt="Google Reviews"
              style={trustLogoStyle}
            />
            <img
              src={facebookLogo}
              alt="Facebook Reviews"
              style={trustLogoStyle}
            />
            <img
              src={trustLogo}
              alt="Trustpilot Reviews"
              style={trustLogoStyle}
            />
          </motion.div>
        </motion.div>
 
        {/* FORM */}
 
        <motion.form
          style={formContainerStyle}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          onSubmit={(e) => e.preventDefault()}
        >
          <motion.div style={styles.discountHeader} variants={itemVariants}>
            <div
              style={{
                backgroundColor: "white",
                color: "black",
                borderRadius: "50%",
                width: "55px",
                height: "55px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "0.7rem",
                fontWeight: 700,
              }}
            >
              50% off
            </div>

            <span style={styles.discountText}>
              Fill Out This Brief Form To Get Your Discount Reserved
            </span>
          </motion.div>

          <motion.div style={styles.formField} variants={itemVariants}>
            <input
              type="text"
              placeholder="Full Name"
              style={styles.input}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
            />
          </motion.div>

          <motion.div style={styles.formField} variants={itemVariants}>
            <input
              type="email"
              placeholder="Email"
              style={styles.input}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
            />
          </motion.div>

          <motion.div style={styles.formField} variants={itemVariants}>
            <input
              type="tel"
              placeholder="Phone"
              style={styles.input}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
            />
          </motion.div>

          <motion.div style={styles.formField} variants={itemVariants}>
            <textarea
              placeholder="Talk About Your Project"
              rows={4}
              style={{ ...styles.input, resize: "vertical" }}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
            />
          </motion.div>

          <motion.button
            type="submit"
            style={styles.ctaButton}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            variants={itemVariants}
          >
            Lets Talk To An Expert!
          </motion.button>
        </motion.form>
      </div>
      <GetQuotePopup
        isOpen={showPopup}
        onClose={() => setShowPopup(false)}
      />
    </motion.section>



  );

};
