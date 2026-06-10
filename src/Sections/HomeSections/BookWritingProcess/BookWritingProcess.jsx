import React, { useState, useEffect, useRef } from "react";
import { ClipboardList, BookOpen, ThumbsUp, Rocket } from "lucide-react";

const stepsData = [
  {
    id: 1,
    icon: ClipboardList,
    title: "Order Details & Outline",
    description: "Call us now and give us the details of your book. Our experts will create an outline accordingly.",
  },
  {
    id: 2,
    icon: BookOpen,
    title: "Chapters Delivery",
    description: "Next, we will begin drafting the chapters as per the outline, and send them to you for feedback.",
  },
  {
    id: 3,
    icon: ThumbsUp,
    title: "Feedback & Approval",
    description: "Our professional book writers will cater to your comments and feedback and revise the content accordingly.",
  },
  {
    id: 4,
    icon: Rocket,
    title: "Publication",
    description: "Pegasus Writing will expertly publish the book and actively promote it to significantly boost sales.",
  },
];

const BookWritingProcess = () => {
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

  const styles = `
    .process-section {
        padding: 130px 20px 100px;
        background-color: rgb(10, 15, 31);
        text-align: center;
        position: relative;
        z-index: 1;
        transition: background-color 0.4s ease, padding 0.4s ease;
    }

    .process-heading {
        font-size: clamp(28px, 4vw, 36px);
        font-weight: 700;
        color: #ffffff;
        margin: 0 auto 10px;
        text-transform: uppercase;
        letter-spacing: 0.01em;
        line-height: 1.2;
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .process-heading.visible {
        opacity: 1;
        transform: translateY(0);
    }

    .process-underline {
        width: 80px;
        height: 3px;
        background-color: #ffffff;
        margin: 15px auto 50px;
        border-radius: 2px;
    }

    .process-grid {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        gap: 28px;
        max-width: 1200px;
        margin: 0 auto;
    }

    @media (min-width: 640px) {
        .process-grid {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media (min-width: 1024px) {
        .process-grid {
            grid-template-columns: repeat(4, 1fr);
        }
    }

    /* --- 3D FLIP CARD CONTAINER --- */
    .process-card-outer {
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

    .process-card-outer.visible {
        opacity: 1;
        transform: translateY(0);
    }

    .process-card-inner {
        position: relative;
        width: 100%;
        height: 100%;
        text-align: center;
        transition: transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.3s ease;
        transform-style: preserve-3d;
        border-radius: 16px;
        box-shadow: 0 10px 30px rgba(10, 15, 31, 0.05);
    }

    .process-card-outer:hover .process-card-inner {
        transform: rotateY(180deg) translateY(-5px);
        box-shadow: 0 20px 40px rgba(10, 15, 31, 0.15);
    }

    [data-theme='dark'] .process-card-inner, .dark-mode .process-card-inner {
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    }

    [data-theme='dark'] .process-card-outer:hover .process-card-inner, .dark-mode .process-card-outer:hover .process-card-inner {
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
    }

    /* --- CARD FACES --- */
    .process-card-face {
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

    /* Front Side - White/Navy Theme */
    .process-card-front {
        background-color: #ffffff;
        color: #0A0F1F;
        transform: rotateY(0deg);
        border: 1px solid rgba(10, 15, 31, 0.08);
    }

    [data-theme='dark'] .process-card-front, .dark-mode .process-card-front {
        background-color: #1f2937;
        color: #ffffff;
        border: 1px solid rgba(255, 255, 255, 0.05);
    }

    /* Back Side - Navy Theme */
    .process-card-back {
        background-color: rgb(22, 30, 57);
        color: #ffffff;
        transform: rotateY(180deg);
        border: 1px solid rgba(255, 255, 255, 0.2);
    }

    [data-theme='dark'] .process-card-back, .dark-mode .process-card-back {
        background-color: #111827;
        border: 1px solid rgba(255, 255, 255, 0.05);
    }

    /* --- 3D POP-OUT DEPTH EFFECTS --- */
    .process-icon-wrapper {
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
    }

    [data-theme='dark'] .process-icon-wrapper, .dark-mode .process-icon-wrapper {
        background-color: #ffffff;
        color: #0A0F1F;
        box-shadow: 0 4px 10px rgba(255, 255, 255, 0.15);
    }

    .process-card-back .process-icon-wrapper {
        background-color: #ffffff;
        color: #0A0F1F;
        box-shadow: 0 4px 10px rgba(255, 255, 255, 0.2);
    }

    [data-theme='dark'] .process-card-back .process-icon-wrapper, .dark-mode .process-card-back .process-icon-wrapper {
        background-color: #0A0F1F;
        color: #ffffff;
        box-shadow: 0 4px 10px rgba(10, 15, 31, 0.25);
    }

    .process-card-title {
        font-size: 20px;
        font-weight: 700;
        color: #0A0F1F;
        margin-bottom: 14px;
        transform: translateZ(40px);
    }

    [data-theme='dark'] .process-card-title, .dark-mode .process-card-title {
        color: #ffffff;
    }

    .process-card-back .process-card-title {
        color: #ffffff !important;
    }

    [data-theme='dark'] .process-card-back .process-card-title, .dark-mode .process-card-back .process-card-title {
        color: #ffffff !important;
    }

    .process-card-description {
        font-size: 15px;
        line-height: 1.6;
        color: #4b5563;
        margin: 0;
        transform: translateZ(30px);
    }

    [data-theme='dark'] .process-card-description, .dark-mode .process-card-description {
        color: #94a3b8;
    }

    .process-card-back .process-card-description {
        color: #e2e8f0 !important;
    }

    /* --- MOBILE STYLING --- */
    @media (max-width: 768px) {
        .process-section {
            padding: 170px 20px 80px;
        }
        .process-card-outer {
            height: 290px;
        }
        .process-card-face {
            padding: 24px 20px;
        }
        .process-icon-wrapper {
            width: 55px;
            height: 55px;
            margin-bottom: 14px;
        }
        .process-card-title {
            margin-bottom: 10px;
        }
    }
  `;

  return (
    <section ref={sectionRef} className="process-section">
      <style>{styles}</style>
      
      <h2 className={`process-heading ${isVisible ? "visible" : ""}`}>
        Our Easy 4-Step Book Writing Process Below.
      </h2>
      <div className="process-underline"></div>

      <div className="process-grid">
        {stepsData.map((step, index) => {
          const Icon = step.icon;
          return (
            <div
              key={step.id}
              className={`process-card-outer ${isVisible ? "visible" : ""}`}
              style={{ animationDelay: `${0.1 + index * 0.15}s` }}
            >
              <div className="process-card-inner">
                
                {/* FRONT FACE */}
                <div className="process-card-face process-card-front">
                  <div className="process-icon-wrapper">
                    <Icon size={28} />
                  </div>
                  <h3 className="process-card-title">{step.title}</h3>
                  <p className="process-card-description">{step.description}</p>
                </div>

                {/* BACK FACE */}
                <div className="process-card-face process-card-back">
                  <div className="process-icon-wrapper">
                    <Icon size={28} />
                  </div>
                  <h3 className="process-card-title">{step.title}</h3>
                  <p className="process-card-description">{step.description}</p>
                </div>

              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default BookWritingProcess;
