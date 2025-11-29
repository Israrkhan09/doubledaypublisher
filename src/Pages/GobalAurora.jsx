import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useEffect, createContext, useContext } from "react";
import { motion, useMotionTemplate, useMotionValue, animate } from "framer-motion";

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

// 1. Create a Context to share the color MotionValue with any child component
const AuroraContext = createContext(null);
export const useAuroraColor = () => useContext(AuroraContext);

const styles = {
  backgroundContainer: {
    position: "fixed", // Fixed to cover the entire viewport
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    zIndex: -1, // Ensures it sits behind all page content
    backgroundColor: "#020617",
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

  useEffect(() => {
    // 2. Animate the color MotionValue
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, [color]);

  // 3. Use the animated color to drive the radial gradient background
  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;

  return (
    // 4. Provide the animated color to the context
    <AuroraContext.Provider value={color}>
      <motion.div
        style={{
          ...styles.backgroundContainer,
          backgroundImage,
        }}
      >
        <div style={styles.starsCanvasWrapper}>
          <Canvas>
            <Stars radius={70} count={3500} factor={6} fade speed={3} />
          </Canvas>
        </div>
      </motion.div>
      {/* 5. Render children (the rest of your website) above the fixed background */}
      {children} 
    </AuroraContext.Provider>
  );
};