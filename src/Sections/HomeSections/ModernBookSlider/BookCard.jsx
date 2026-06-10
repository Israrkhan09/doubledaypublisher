import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

export const BookCard = ({ book, isActive, openModal }) => {
    const controls = useAnimation();
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (isActive) controls.start("visible");
        else controls.start("hidden");
    }, [isActive]);

    return (
        <motion.div
            initial="hidden"
            animate={controls}
            variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 20 },
            }}

            /* 🔥 FIXED + RESPONSIVE + SAME LAYOUT ON EVERY SLIDE */
            style={{
                display: "flex",
                flexDirection: isMobile ? "column" : "row",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                maxWidth: "950px",
                minHeight: isMobile ? "auto" : "450px",  // 🔥 SAME HEIGHT FOR ALL SLIDES
                padding: "2rem",
                gap: "2rem",
                margin: "0 auto",
                backgroundColor: "#0A0F1F",
                borderRadius: "1.5rem",
                border: "1px solid rgba(255,255,255,0.15)",
                color: "white",
            }}
        >
            {/* IMAGE BLOCK – FIXED WIDTH & FIXED FLEX -> NO SHIFT */}
            <motion.div
                style={{
                    flex: "0 0 260px", // 🔥 Image stays fixed on every slide
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <motion.img
                    src={book.image}
                    alt={book.alt}
                    style={{
                        width: isMobile ? "200px" : "260px",
                        height: isMobile ? "300px" : "400px",
                        objectFit: "contain",
                    }}
                />
            </motion.div>

            {/* CONTENT BLOCK – FIXED FLEX -> Same alignment every slide */}
            <motion.div
                style={{
                    flex: 1,  // 🔥 Content always stays in same place
                    textAlign: isMobile ? "center" : "left",
                }}
            >
                <span style={{ opacity: 0.6 }}>{book.genre}</span>
                <h2 style={{ fontSize: isMobile ? "26px" : "34px" }}>
                    {book.title}
                </h2>
                <p style={{ opacity: 0.7, fontStyle: "italic" }}>
                    {book.author}
                </p>
                <p style={{ opacity: 0.8, marginBottom: "1.5rem" }}>
                    {book.description}
                </p>

                <button
                    onClick={() => openModal(book)}
                    style={{
                        background: "white",
                        color: "black",
                        padding: "10px 18px",
                        borderRadius: "6px",
                        fontWeight: "600",
                        cursor: "pointer",
                        border: "none",
                    }}
                >
                    Read More
                </button>
            </motion.div>
        </motion.div>
    );
};
