import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useEffect, createContext, useContext, useState } from "react";
import { motion, useMotionTemplate, useMotionValue, animate } from "framer-motion";

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

const AuroraContext = createContext(null);
export const useAuroraColor = () => useContext(AuroraContext);

const styles = {
  backgroundContainer: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    zIndex: -1,
    overflow: "hidden",
  },
  starsCanvasWrapper: {
    position: "absolute",
    inset: 0,
    zIndex: 0,
  },
};

export const GlobalAuroraBackground = ({ children }) => {

  const color = useMotionValue(COLORS_TOP[0]);

  const [isLight, setIsLight] = useState(false);

  // detect theme
  useEffect(() => {

    const checkTheme = () => {
      const light = document.body.classList.contains("light-mode");
      setIsLight(light);
    };

    checkTheme();

    const observer = new MutationObserver(checkTheme);

    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();

  }, []);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, [color]);

  const backgroundImage = useMotionTemplate`
  radial-gradient(
    125% 125% at 50% 0%,
    ${isLight ? "#ffffff" : "#020617"} 50%,
    ${color}
  )`;

  return (

    <AuroraContext.Provider value={color}>

      <motion.div
        style={{
          ...styles.backgroundContainer,
          backgroundImage,
          backgroundColor: isLight ? "#ffffff" : "#020617",
        }}
      >

        {/* Stars only in dark mode */}
        {!isLight && (
          <div style={styles.starsCanvasWrapper}>
            <Canvas>
              <Stars radius={70} count={3500} factor={6} fade speed={3} />
            </Canvas>
          </div>
        )}

      </motion.div>

      {children}

    </AuroraContext.Provider>
  );
};