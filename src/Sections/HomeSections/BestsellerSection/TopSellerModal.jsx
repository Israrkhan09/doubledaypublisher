// components/TopSellerModal.jsx
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export const TopSellerModal = ({ book, onClose }) => {
    if (!book) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100vw",
                    height: "100vh",
                    backdropFilter: "blur(6px)",
                    background: "rgba(0,0,0,0.7)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    zIndex: 99999,
                    cursor: "default",
                }}
            >
                <motion.div
                    initial={{ scale: 0.85, opacity: 0, y: 60 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.8, opacity: 0, y: 40 }}
                    transition={{ duration: 0.35, type: "spring" }}
                    onClick={(e) => e.stopPropagation()}
                    style={{
                        width: "92%",
                        maxWidth: "760px",
                        background: "#0A0F1F",
                        padding: "2rem 1.5rem",
                        borderRadius: "18px",
                        border: "1px solid rgba(255,255,255,0.15)",
                        position: "relative",
                        color: "white",
                        maxHeight: "90vh",
                        overflowY: "auto",
                    }}
                >
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        style={{
                            position: "absolute",
                            top: "15px",
                            right: "15px",
                            fontSize: "22px",
                            background: "transparent",
                            border: "none",
                            color: "white",
                            cursor: "pointer",
                        }}
                    >
                        ✕
                    </button>

                    {/* Image */}
                    <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
                        <img
                            src={book.imageURL}
                            alt={book.title}
                            style={{
                                width: "220px",
                                height: "320px",
                                objectFit: "cover",
                                borderRadius: "10px",
                                boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
                            }}
                        />
                    </div>

                    {/* Title */}
                    <h2 style={{ fontSize: "30px", marginBottom: "10px", fontWeight: 700 }}>
                        {book.title}
                    </h2>

                    {/* Author */}
                    <p
                        style={{
                            fontStyle: "italic",
                            opacity: 0.75,
                            marginBottom: "1rem",
                            fontSize: "17px",
                        }}
                    >
                        by {book.author}
                    </p>

                    {/* 🔥 FULL LONG DETAILED EXPLANATION */}
                    <p
                        style={{
                            fontSize: "16px",
                            lineHeight: "1.7",
                            opacity: 0.95,
                            whiteSpace: "pre-line",
                        }}
                    >
                        “The Splinter in the Sky” is an intricately layered science-fiction
                        political thriller that blends empire, espionage, rebellion, and deeply
                        personal grief into an expansive galactic narrative. Kemi Ashing-Giwa
                        crafts a universe shaped by colonial violence and cultural tension,
                        where the smallest personal actions can ignite galaxy-shifting
                        consequences. At its center is Enitan Ijebu, a determined woman whose
                        life is transformed the moment her sister is murdered and she herself is
                        abducted by the empire that has long oppressed her people.

                        Rather than following the traditional hero’s-journey structure, the novel
                        positions Enitan as a lone, unwilling participant in a vast imperial machine—one
                        who must learn to survive, adapt, and manipulate the very politics designed to
                        break people like her. Her mission begins as a simple quest for justice but
                        evolves into something far more dangerous as she becomes entangled in the
                        highest levels of political power.

                        Ashing-Giwa’s worldbuilding is richly atmospheric, culturally grounded,
                        and infused with complexity—drawing inspiration from African mythology,
                        post-colonial studies, and real liberation movements. Themes of cultural
                        erasure, grief, systemic oppression, and resistance shape Enitan’s
                        journey as she uncovers the mechanisms that keep the empire in power.

                        “The Splinter in the Sky” is ultimately a story of reclamation—of heritage,
                        identity, and agency. Through vivid prose, emotional weight, and sharp political
                        insight, it reminds us that even the smallest spark of resistance can fracture an
                        empire built on silence.
                    </p>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};
