import React from "react";
import { motion, AnimatePresence } from "framer-motion";

// ⭐ EXTREMELY DETAILED EXPLANATIONS FOR ALL BOOKS
const detailedExplanations = {
    1: `
“Science Fiction: The Evolutionary Mythology of the Future” presents a deep intellectual journey into the origins,
purpose, and future trajectory of science fiction as a cultural force. Lombardo positions science fiction not merely
as entertainment, but as a powerful tool that shapes humanity’s evolving self-understanding.

He explains how early mythmakers, philosophers, and visionaries unknowingly laid the foundation for modern sci-fi storytelling.
These ancient stories — involving gods, creation, cosmic battles, and heroic journeys — eventually transformed into futuristic
narratives exploring space travel, advanced technology, artificial intelligence, and the evolution of human consciousness.

Lombardo argues that science fiction is humanity’s *forward-looking mythology*, a narrative system designed not to explain
the past but to imagine what humanity might one day become. He discusses how breakthroughs in physics, biology,
astronomy, and psychology helped reshape the narrative frameworks of sci-fi literature, transforming it into a genre that
simultaneously entertains and challenges philosophical assumptions.

This volume examines iconic works, key thinkers, and major thematic shifts that shaped science fiction’s rise as a global
cultural force. Lombardo’s analysis shows how the genre expands imagination, encourages innovation, and prepares society
for the unknown — making science fiction one of the most intellectually valuable forms of storytelling.
    `,

    2: `
“Rumsfeld” delivers an uncompromising investigation into the political machine surrounding Donald Rumsfeld, one of the most
influential yet controversial figures in American defense history. Andrew Cockburn does not merely recount events — he analyzes
the personality, ideology, and calculated strategies that shaped Rumsfeld’s decades-long career in Washington.

The book traces Rumsfeld’s transformation from an ambitious young congressman to a powerful bureaucratic tactician and eventually
to the U.S. Secretary of Defense who presided over the wars in Iraq and Afghanistan. Cockburn highlights Rumsfeld’s mastery in
consolidating power through policy restructuring, media control, and internal political maneuvering.

A central focus is the Iraq War: flawed intelligence, strategic mismanagement, public messaging failures, and the long-term global
ramifications of choices made under his command. Cockburn provides firsthand accounts, secret memos, and internal testimony
that reveal how decisions were made behind closed doors — often shaped by ideology rather than strategic logic.

The book exposes how leadership at the highest levels can reshape nations, destabilize regions, and permanently alter foreign policy.
It remains a critical study of political power, military influence, and the consequences of flawed decision-making in global affairs.
    `,

    3: `
“Crashback” explores the escalating confrontation between the United States and China in the Pacific — a geopolitical
struggle that could define global power for generations. Michael Fabey, drawing from confidential interviews, naval intelligence,
and on-the-ground reporting, reveals how both nations maneuver for dominance in contested waters.

The book details ship encounters that nearly sparked conflict, stealth surveillance missions, electronic warfare, naval
shadowing, and territorial standoffs around the South China Sea. Fabey describes how China uses rapid naval expansion,
artificial island construction, and aggressive patrol strategies to assert power, challenging long-standing U.S. maritime control.

He underscores how the U.S. Navy, though technologically advanced, faces increasing pressure due to political constraints,
strategic uncertainty, and China’s evolving military doctrine.

“Crashback” paints a vivid picture of the Pacific as a high-stakes chessboard where every miscalculation —
whether diplomatic, military, or technological — could push the world toward catastrophic conflict.
It highlights the urgent need for international diplomacy in an era of rising global tension.
    `,

    4: `
“You Like It Darker” showcases Stephen King’s mastery of atmospheric horror, human psychology, and emotional storytelling.
This collection contains stories that explore fate, obsession, guilt, mortality, and the shadows lurking beneath ordinary life.

King excels at turning simple moments into chilling revelations — a quiet room becomes menacing, a conversation reveals
hidden fears, a memory transforms into supernatural horror. He blends suspense with deeply human emotion, showing how
the most terrifying monsters often originate from within.

The stories also explore moral ambiguity and the fragile boundary between sanity and madness. King’s characters confront
forces beyond their control, whether supernatural or psychological, creating tension that builds slowly and erupts suddenly.

“You Like It Darker” not only entertains but also reflects on the darker emotional truths that shape the human experience.
It is a compelling blend of mystery, horror, and introspection — all delivered in King’s unmistakable voice.
    `,

    5: `
“The Gwendy Trilogy” follows the extraordinary life of Gwendy Peterson, whose destiny becomes intertwined with a mysterious
box capable of granting unimaginable power — and inflicting irreversible harm. Across the trilogy, Stephen King and Richard
Chizmar craft a narrative rich with symbolism, emotion, and supernatural intrigue.

The box serves as a metaphor for temptation, responsibility, and the morally complex choices individuals must make when given
power they do not fully understand. As Gwendy matures, the burden grows heavier: political conspiracies emerge, cosmic forces
intervene, and her connection to the box shapes the fate of countless lives.

The trilogy expands from small-town mystery to interdimensional horror, exploring themes of memory, trauma, growth, and the
inescapable pull of destiny. Gwendy’s emotional evolution — from a hopeful young girl to a responsible adult and eventually a
protector burdened by cosmic significance — gives the story powerful emotional depth.

With its mix of suspense, supernatural elements, and character-driven drama, the trilogy represents one of the most imaginative
and emotionally resonant collaborations between King and Chizmar.
    `,

    6: `
“The Long Walk” is one of Stephen King’s most psychologically intense works — a haunting exploration of endurance,
suffering, identity, and the merciless pressure of societal expectations. The premise is deceptively simple: one hundred boys
must walk without stopping; slowing down leads to death.

But beneath the surface lies a profound reflection on humanity.

As the Walk progresses, physical pain merges with emotional unraveling. Hallucinations, fear, paranoia, and fleeting connections
between the boys reveal how extreme circumstances strip individuals to their core. King exposes the fragile nature of hope,
friendship, and survival, illustrating how even moments of compassion exist alongside deep cruelty.

The Walk symbolizes life itself — relentless, unforgiving, and filled with both meaning and despair. Each mile brings revelations
about mortality, ambition, and the quiet tragedies hidden behind human resilience.

“The Long Walk” remains a powerful psychological study of what drives individuals forward when every step is agony and every
moment could be their last. It is a story of endurance and the haunting cost of perseverance in a world designed to push people
to their limits.
    `,
};

export const Modal = ({ book, onClose }) => {
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
                    background: "rgba(0,0,0,0.65)",
                    backdropFilter: "blur(6px)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "1rem",
                    cursor: "pointer",
                    zIndex: 9999,
                }}
            >
                <motion.div
                    initial={{ scale: 0.85, y: 50, opacity: 0 }}
                    animate={{ scale: 1, y: 0, opacity: 1 }}
                    exit={{ scale: 0.85, y: 40, opacity: 0 }}
                    transition={{ duration: 0.35, type: "spring" }}
                    onClick={(e) => e.stopPropagation()}
                    style={{
                        width: "100%",
                        maxWidth: "700px",
                        background: "#0A0F1F",
                        borderRadius: "18px",
                        padding: "2rem",
                        border: "1px solid rgba(255,255,255,0.1)",
                        color: "white",
                        cursor: "default",
                        maxHeight: "90vh",
                        overflowY: "auto",
                        position: "relative",
                    }}
                >
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        style={{
                            position: "absolute",
                            top: "15px",
                            right: "15px",
                            fontSize: "26px",
                            background: "transparent",
                            border: "none",
                            color: "white",
                            cursor: "pointer",
                        }}
                    >
                        ✕
                    </button>

                    {/* Image */}
                    <div style={{ textAlign: "center" }}>
                        <img
                            src={book.image}
                            alt={book.title}
                            style={{
                                width: "200px",
                                height: "300px",
                                objectFit: "contain",
                                marginBottom: "1rem",
                            }}
                        />
                    </div>

                    {/* Title */}
                    <h2
                        style={{
                            fontSize: "28px",
                            textAlign: "center",
                            marginBottom: "10px",
                        }}
                    >
                        {book.title}
                    </h2>

                    {/* Author */}
                    <p
                        style={{
                            fontSize: "16px",
                            fontStyle: "italic",
                            textAlign: "center",
                            opacity: 0.8,
                            marginBottom: "1rem",
                        }}
                    >
                        {book.author}
                    </p>

                    {/* Description */}
                    <p
                        style={{
                            fontSize: "15px",
                            opacity: 0.9,
                            lineHeight: "1.6",
                            marginBottom: "1.5rem",
                        }}
                    >
                        {book.description}
                    </p>

                    {/* Detailed Explanation */}
                    <h3 style={{ fontSize: "20px", marginBottom: "8px" }}>
                        Detailed Explanation
                    </h3>

                    <p
                        style={{
                            fontSize: "15px",
                            opacity: 0.85,
                            lineHeight: "1.7",
                            whiteSpace: "pre-line",
                        }}
                    >
                        {detailedExplanations[book.id]}
                    </p>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};
