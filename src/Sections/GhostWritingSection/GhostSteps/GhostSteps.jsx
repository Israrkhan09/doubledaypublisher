import React, { useEffect, useRef, useState } from "react";
import { Search, PenTool, Lightbulb, FileCheck } from "lucide-react";

// Data for the ghostwriting steps
const ghostSteps = [
  {
    id: 1,
    icon: Search,
    title: "Share Your Vision",
    frontText:
      "Share your ghostwriting ideas, themes, and book vision. We will craft a tailored outline to bring your story to life.",
    backText:
      "We gather your unique stories, experiences, and core messages, ensuring every detail of your book is captured.",
  },
  {
    id: 2,
    icon: PenTool,
    title: "Drafting & Editing",
    frontText:
      "Our expert writers draft your chapters meticulously, focusing on clarity, narrative flow, and grammar to capture your true voice.",
    backText:
      "We structure your narrative into a compelling story arc, highlighting key events and milestones.",
  },
  {
    id: 3,
    icon: Lightbulb,
    title: "Review & Feedback",
    frontText:
      "We share chapters with you for review, incorporating your feedback and refining every detail to match your expectations.",
    backText:
      "Our team refines every sentence for maximum engagement, ensuring a flawless narrative that sounds exactly like you.",
  },
  {
    id: 4,
    icon: FileCheck,
    title: "Final Polish & Publish",
    frontText:
      "We perform a final conceptual and structural polish, preparing your book for formatting, cover design, and publication.",
    backText:
      "We handle formatting, cover designs, and platform submissions, successfully launching your book to the world.",
  },
];

const GhostStepsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  const customStyles = `
    .memoir-section {
        padding: 130px 20px 100px;
        background-color: rgb(10, 15, 31);
        text-align: center;
        position: relative;
        z-index: 1;
        transition: background-color 0.4s ease, padding 0.4s ease;
    }

    .memoir-heading {
        font-size: 35px;
        font-weight: 600;
        color: #ffffff;
        margin: 0 auto 10px;
        text-transform: uppercase;
        letter-spacing: 0.01em;
        line-height: 1.2;
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
    }

    @media (max-width: 1024px) {
        .memoir-heading {
            font-size: 30px;
        }
    }

    .memoir-heading.visible {
        opacity: 1;
        transform: translateY(0);
    }

    .memoir-underline {
        width: 80px;
        height: 3px;
        background-color: #ffffff;
        margin: 15px auto 50px;
        border-radius: 2px;
    }

    .cards-grid {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        gap: 28px;
        max-width: 1200px;
        margin: 0 auto;
    }

    @media (min-width: 640px) {
        .cards-grid {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media (min-width: 1024px) {
        .cards-grid {
            grid-template-columns: repeat(4, 1fr);
        }
    }

    /* --- 3D FLIP CARD CONTAINER --- */
    .flip-card-outer {
        width: 100%;
        max-width: 350px;
        height: 380px;
        perspective: 1000px;
        background-color: transparent;
        margin: 0 auto;
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .flip-card-outer.visible {
        opacity: 1;
        transform: translateY(0);
    }

    .flip-card-inner {
        position: relative;
        width: 100%;
        height: 100%;
        text-align: center;
        transition: transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.3s ease;
        transform-style: preserve-3d;
        border-radius: 16px;
        box-shadow: 0 10px 30px rgba(10, 15, 31, 0.05);
    }

    .flip-card-outer:hover .flip-card-inner {
        transform: rotateY(180deg) translateY(-5px);
        box-shadow: 0 20px 40px rgba(10, 15, 31, 0.15);
    }

    [data-theme='dark'] .flip-card-inner, .dark-mode .flip-card-inner {
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    }

    [data-theme='dark'] .flip-card-outer:hover .flip-card-inner, .dark-mode .flip-card-outer:hover .flip-card-inner {
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
    }

    /* --- CARD FACES --- */
    .card-face {
        position: absolute;
        width: 100%;
        height: 100%;
        backface-visibility: hidden;
        -webkit-backface-visibility: hidden;
        border-radius: 16px;
        padding: 40px 24px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        transform-style: preserve-3d;
    }

    /* Front Side - White Theme */
    .card-front {
        background-color: #ffffff;
        color: #0A0F1F;
        transform: rotateY(0deg);
        border: 1px solid rgba(10, 15, 31, 0.08);
    }

    [data-theme='dark'] .card-front, .dark-mode .card-front {
        background-color: #1f2937;
        color: #ffffff;
        border: 1px solid rgba(255, 255, 255, 0.05);
    }

    /* Back Side - Navy Theme */
    .card-back {
        background-color: rgb(22, 30, 57);
        color: #ffffff;
        transform: rotateY(180deg);
        border: 1px solid rgba(255, 255, 255, 0.2);
    }

    [data-theme='dark'] .card-back, .dark-mode .card-back {
        background-color: #111827;
        border: 1px solid rgba(255, 255, 255, 0.05);
    }

    /* --- 3D POP-OUT DEPTH EFFECTS --- */
    .card-icon-wrapper {
        width: 65px;
        height: 65px;
        border-radius: 50%;
        background-color: #0A0F1F;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 24px;
        color: #ffffff;
        box-shadow: 0 4px 10px rgba(10, 15, 31, 0.15);
        transform: translateZ(50px);
        transform-style: preserve-3d;
        flex-shrink: 0;
    }

    [data-theme='dark'] .card-icon-wrapper, .dark-mode .card-icon-wrapper {
        background-color: #ffffff;
        color: #0A0F1F;
        box-shadow: 0 4px 10px rgba(255, 255, 255, 0.15);
    }

    .card-back .card-icon-wrapper {
        background-color: #ffffff;
        color: #0A0F1F;
        box-shadow: 0 4px 10px rgba(255, 255, 255, 0.2);
    }

    [data-theme='dark'] .card-back .card-icon-wrapper, .dark-mode .card-back .card-icon-wrapper {
        background-color: #0A0F1F;
        color: #ffffff;
        box-shadow: 0 4px 10px rgba(10, 15, 31, 0.25);
    }

    .card-title {
        font-size: 18px;
        font-weight: 700;
        color: #0A0F1F;
        margin-bottom: 14px;
        transform: translateZ(40px);
        line-height: 1.3;
    }

    [data-theme='dark'] .card-title, .dark-mode .card-title {
        color: #ffffff;
    }

    .card-back .card-title {
        color: #ffffff !important;
    }

    .card-description {
        font-size: 14px;
        line-height: 1.6;
        color: #4b5563;
        margin: 0;
        transform: translateZ(30px);
    }

    [data-theme='dark'] .card-description, .dark-mode .card-description {
        color: #94a3b8;
    }

    .card-back .card-description {
        color: #e2e8f0 !important;
    }

    /* --- MOBILE STYLING --- */
    @media (max-width: 768px) {
        .memoir-section {
            padding: 100px 20px 80px;
        }
        .flip-card-outer {
            height: 290px;
        }
        .card-face {
            padding: 24px 20px;
        }
        .card-icon-wrapper {
            width: 55px;
            height: 55px;
            margin-bottom: 14px;
        }
        .card-title {
            margin-bottom: 10px;
        }
    }
  `;

  return (
    <section ref={sectionRef} className="memoir-section">
      <style>{customStyles}</style>

      <h2 className={`memoir-heading ${isVisible ? "visible" : ""}`}>
        OUR 4-STEP GHOSTWRITING PROCESS
      </h2>
      <div className="memoir-underline"></div>

      <div className="cards-grid">
        {ghostSteps.map((step, index) => {
          const Icon = step.icon;
          return (
            <div
              key={step.id}
              className={`flip-card-outer ${isVisible ? "visible" : ""}`}
              style={{ transitionDelay: `${0.1 + index * 0.15}s` }}
            >
              <div className="flip-card-inner">
                
                {/* FRONT FACE */}
                <div className="card-face card-front">
                  <div className="card-icon-wrapper">
                    <Icon size={28} />
                  </div>
                  <h3 className="card-title">{step.title}</h3>
                  <p className="card-description">{step.frontText}</p>
                </div>

                {/* BACK FACE */}
                <div className="card-face card-back">
                  <div className="card-icon-wrapper">
                    <Icon size={28} />
                  </div>
                  <h3 className="card-title">{step.title}</h3>
                  <p className="card-description">{step.backText}</p>
                </div>

              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default GhostStepsSection;
