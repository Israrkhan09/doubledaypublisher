import React from "react";
import book1 from "../../HomeSections/images/SliderSection-Imagess/slider-1.jpg";
import book2 from "../../HomeSections/images/SliderSection-Imagess/slider-2.jpg";

const GhostCTASection = () => {
  const customStyles = `
    .ghost-cta-section {
        padding: 90px 20px;
        background-color: #0A0F1F; /* Dark background */
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        z-index: 1;
        overflow: hidden;
    }

    .ghost-cta-container {
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

    .ghost-cta-left {
        flex: 1;
        min-width: 300px;
        max-width: 650px;
        text-align: left;
    }

    .ghost-cta-title {
        font-size: clamp(22px, 5.5vw, 35px);
        font-weight: 600;
        color: #ffffff;
        line-height: 1.25;
        margin-bottom: 20px;
        text-transform: uppercase;
        letter-spacing: 0.02em;
    }

    .ghost-cta-desc {
        font-size: 16px;
        line-height: 1.6;
        color: #d1d5db;
        margin-bottom: 30px;
        max-width: 550px;
    }

    .ghost-cta-buttons {
        display: flex;
        flex-wrap: wrap;
        gap: 15px;
    }

    .ghost-cta-btn-outline {
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

    .ghost-cta-btn-outline:hover {
        background-color: #ffffff;
        color: #0A0F1F;
        box-shadow: 0 0 15px rgba(255, 255, 255, 0.4);
    }

    .ghost-cta-btn-solid {
        padding: 12px 28px;
        background-color: #ffffff; /* White background */
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

    .ghost-cta-btn-solid:hover {
        background-color: rgba(255, 255, 255, 0.85); /* Off-white on hover */
        box-shadow: 0 0 15px rgba(255, 255, 255, 0.4);
    }

    .ghost-cta-right {
        flex: 1;
        min-width: 300px;
        max-width: 500px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
    }

    .ghost-cta-book {
        width: clamp(110px, 38vw, 170px);
        height: auto;
        border-radius: 6px;
        box-shadow: 0 15px 35px rgba(0, 0, 0, 0.6);
        transition: all 0.4s ease;
    }

    .ghost-cta-book:hover {
        transform: translateY(-10px) rotate(2deg) scale(1.05);
        box-shadow: 0 25px 50px rgba(0, 0, 0, 0.8);
    }

    @media (max-width: 900px) {
        .ghost-cta-container {
            flex-direction: column;
            text-align: center;
        }

        .ghost-cta-left {
            max-width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .ghost-cta-title {
            text-align: center;
        }

        .ghost-cta-desc {
            text-align: center;
        }

        .ghost-cta-buttons {
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            justify-content: center;
            width: 100%;
            gap: 10px;
        }

        .ghost-cta-btn-outline,
        .ghost-cta-btn-solid {
            padding: 10px 18px;
            font-size: 13px;
            flex: 1;
            max-width: 160px;
            white-space: nowrap;
        }
    }
  `;

  return (
    <section className="ghost-cta-section">
      <style>{customStyles}</style>
      <div className="ghost-cta-container">
        {/* LEFT COLUMN: CONTENT */}
        <div className="ghost-cta-left">
          <h2 className="ghost-cta-title">
            Want to Write the Book of Your Dreams? Hire Skilled Ghostwriters Online to Boost Your Writing
          </h2>
          <p className="ghost-cta-desc">
            Writing books has never been easier. Contact us today to get access to our skilled ghostwriters online!
          </p>
          <div className="ghost-cta-buttons">
            <a href="/contact-us" className="ghost-cta-btn-outline">
              Get Started
            </a>
            <a href="tel:8882842123" className="ghost-cta-btn-solid">
              888-284-2123
            </a>
          </div>
        </div>

        {/* RIGHT COLUMN: BOOK COVERS */}
        <div className="ghost-cta-right">
          <img src={book1} alt="Bestselling Fiction Book Cover" className="ghost-cta-book" />
          <img src={book2} alt="Bestselling Children's Book Cover" className="ghost-cta-book" />
        </div>
      </div>
    </section>
  );
};

export default GhostCTASection;
