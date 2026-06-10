import React, { useEffect, useRef, useState } from "react";
import book1 from "../../HomeSections/images/SliderSection-Imagess/slider-1.jpg";
import book2 from "../../HomeSections/images/SliderSection-Imagess/slider-2.jpg";

const ScriptCTASection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Trigger once — same pattern as MemoirStepsSection
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
    .script-cta-section {
        padding: 90px 20px;
        background-color: #0A0F1F;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        z-index: 1;
        overflow: hidden;
    }

    .script-cta-container {
        display: flex;
        flex-wrap: wrap;
        max-width: 1200px;
        width: 100%;
        margin: 0 auto;
        padding: 0 20px;
        align-items: center;
        justify-content: space-between;
        gap: 40px;
    }

    .script-cta-left {
        flex: 1;
        min-width: 300px;
        max-width: 650px;
        text-align: left;
    }

    /* ── Scroll-in animations ── */
    .script-cta-title {
        font-size: 35px;
        font-weight: 600;
        color: #ffffff;
        line-height: 1.25;
        margin-bottom: 20px;
        text-transform: uppercase;
        letter-spacing: 0.02em;
        opacity: 0;
        transform: translateY(25px);
        transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1),
                    transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        transition-delay: 0s;
    }

    .script-cta-title.visible {
        opacity: 1;
        transform: translateY(0);
    }

    @media (max-width: 1024px) {
        .script-cta-title {
            font-size: 30px;
        }
    }

    .script-cta-desc {
        font-size: 16px;
        line-height: 1.6;
        color: #d1d5db;
        margin-bottom: 30px;
        max-width: 550px;
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1),
                    transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        transition-delay: 0.15s;
    }

    .script-cta-desc.visible {
        opacity: 1;
        transform: translateY(0);
    }

    .script-cta-buttons {
        display: flex;
        flex-wrap: wrap;
        gap: 15px;
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1),
                    transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        transition-delay: 0.28s;
    }

    .script-cta-buttons.visible {
        opacity: 1;
        transform: translateY(0);
    }

    .script-cta-btn-outline {
        padding: 12px 28px;
        background-color: transparent;
        color: #ffffff;
        border: 2px solid #ffffff;
        border-radius: 30px;
        font-size: 14px;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        cursor: pointer;
        transition: all 0.3s ease;
        text-decoration: none;
        display: inline-block;
        text-align: center;
    }

    .script-cta-btn-outline:hover {
        background-color: #ffffff;
        color: #0A0F1F;
        box-shadow: 0 0 15px rgba(255, 255, 255, 0.4);
    }

    .script-cta-btn-solid {
        padding: 12px 28px;
        background-color: #ffffff;
        color: #0A0F1F;
        border: none;
        border-radius: 30px;
        font-size: 14px;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        cursor: pointer;
        transition: all 0.3s ease;
        text-decoration: none;
        display: inline-block;
        text-align: center;
    }

    .script-cta-btn-solid:hover {
        background-color: rgba(255, 255, 255, 0.85);
        box-shadow: 0 0 15px rgba(255, 255, 255, 0.4);
    }

    /* Right column — slides in from right */
    .script-cta-right {
        flex: 1;
        min-width: 300px;
        max-width: 500px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
        opacity: 0;
        transform: translateX(40px);
        transition: opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1),
                    transform 0.9s cubic-bezier(0.16, 1, 0.3, 1);
        transition-delay: 0.2s;
    }

    .script-cta-right.visible {
        opacity: 1;
        transform: translateX(0);
    }

    .script-cta-book {
        width: clamp(110px, 38vw, 170px);
        height: auto;
        border-radius: 6px;
        box-shadow: 0 15px 35px rgba(0, 0, 0, 0.6);
        transition: all 0.4s ease;
    }

    .script-cta-book:hover {
        transform: translateY(-10px) rotate(2deg) scale(1.05);
        box-shadow: 0 25px 50px rgba(0, 0, 0, 0.8);
    }

    @media (max-width: 900px) {
        .script-cta-container {
            flex-direction: column;
            text-align: center;
        }

        .script-cta-left {
            max-width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .script-cta-title {
            text-align: center;
        }

        .script-cta-desc {
            text-align: center;
        }

        .script-cta-buttons {
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            justify-content: center;
            width: 100%;
            gap: 10px;
        }

        .script-cta-btn-outline,
        .script-cta-btn-solid {
            padding: 10px 18px;
            font-size: 13px;
            flex: 1;
            max-width: 160px;
            white-space: nowrap;
        }

        .script-cta-right {
            transform: translateY(30px);
        }

        .script-cta-right.visible {
            transform: translateY(0);
        }
    }
  `;

  return (
    <section ref={sectionRef} className="script-cta-section">
      <style>{customStyles}</style>
      <div className="script-cta-container">
        {/* LEFT COLUMN: CONTENT */}
        <div className="script-cta-left">
          <h2 className={`script-cta-title ${isVisible ? "visible" : ""}`}>
            WANT TO CONVERT YOUR SCRIPT WRITING IDEA INTO A CINEMATIC SCREENPLAY?
          </h2>
          <p className={`script-cta-desc ${isVisible ? "visible" : ""}`}>
            Seek the expertise of the masters of the craft. Our expert screenwriters empower you to create an impactful and polished script.
          </p>
          <div className={`script-cta-buttons ${isVisible ? "visible" : ""}`}>
            <a href="/contact-us" className="script-cta-btn-outline">
              Get Started
            </a>
            <a href="tel:8882842123" className="script-cta-btn-solid">
              888-284-2123
            </a>
          </div>
        </div>

        {/* RIGHT COLUMN: BOOK COVERS */}
        <div className={`script-cta-right ${isVisible ? "visible" : ""}`}>
          <img src={book1} alt="Bestselling Script Book Cover" className="script-cta-book" />
          <img src={book2} alt="Bestselling Script Book Cover 2" className="script-cta-book" />
        </div>
      </div>
    </section>
  );
};

export default ScriptCTASection;
