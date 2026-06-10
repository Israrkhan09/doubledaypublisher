import React from "react";
import book1 from "../../HomeSections/images/SliderSection-Imagess/slider-5.jpg";
import book2 from "../../HomeSections/images/SliderSection-Imagess/slider-6.jpg";

const StoryCTASection = () => {
  const customStyles = `
    .story-cta-section {
        padding: 90px 20px;
        background-color: #0A0F1F; /* Dark background */
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        z-index: 1;
        overflow: hidden;
    }

    .story-cta-container {
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

    .story-cta-left {
        flex: 1;
        min-width: 300px;
        max-width: 650px;
        text-align: left;
    }

    .story-cta-title {
        font-size: 35px;
        font-weight: 600;
        color: #ffffff;
        line-height: 1.25;
        margin-bottom: 20px;
        text-transform: uppercase;
        letter-spacing: 0.02em;
    }

    @media (max-width: 1024px) {
        .story-cta-title {
            font-size: 30px;
        }
    }

    .story-cta-desc {
        font-size: 16px;
        line-height: 1.6;
        color: #d1d5db;
        margin-bottom: 30px;
        max-width: 550px;
    }

    .story-cta-buttons {
        display: flex;
        flex-wrap: wrap;
        gap: 15px;
    }

    .story-cta-btn-outline {
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

    .story-cta-btn-outline:hover {
        background-color: #ffffff;
        color: #0A0F1F;
        box-shadow: 0 0 15px rgba(255, 255, 255, 0.4);
    }

    .story-cta-btn-solid {
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

    .story-cta-btn-solid:hover {
        background-color: rgba(255, 255, 255, 0.85); /* Off-white on hover */
        box-shadow: 0 0 15px rgba(255, 255, 255, 0.4);
    }

    .story-cta-right {
        flex: 1;
        min-width: 300px;
        max-width: 500px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
    }

    .story-cta-book {
        width: clamp(110px, 38vw, 170px);
        height: auto;
        border-radius: 6px;
        box-shadow: 0 15px 35px rgba(0, 0, 0, 0.6);
        transition: all 0.4s ease;
    }

    .story-cta-book:hover {
        transform: translateY(-10px) rotate(2deg) scale(1.05);
        box-shadow: 0 25px 50px rgba(0, 0, 0, 0.8);
    }

    @media (max-width: 900px) {
        .story-cta-container {
            flex-direction: column;
            text-align: center;
        }

        .story-cta-left {
            max-width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .story-cta-title {
            text-align: center;
        }

        .story-cta-desc {
            text-align: center;
        }

        .story-cta-buttons {
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            justify-content: center;
            width: 100%;
            gap: 10px;
        }

        .story-cta-btn-outline,
        .story-cta-btn-solid {
            padding: 10px 18px;
            font-size: 13px;
            flex: 1;
            max-width: 160px;
            white-space: nowrap;
        }
    }
  `;

  return (
    <section className="story-cta-section">
      <style>{customStyles}</style>
      <div className="story-cta-container">
        {/* LEFT COLUMN: CONTENT */}
        <div className="story-cta-left">
          <h2 className="story-cta-title">
            WANT TO CONVERT YOUR STORY WRITING IDEA INTO A WELL-CRAFTED BOOK?
          </h2>
          <p className="story-cta-desc">
            Seek the expertise of the masters of the craft. Our expert story writers empower you to create an impactful and polished book.
          </p>
          <div className="story-cta-buttons">
            <a href="/contact-us" className="story-cta-btn-outline">
              Get Started
            </a>
            <a href="tel:8882842123" className="story-cta-btn-solid">
              888-284-2123
            </a>
          </div>
        </div>

        {/* RIGHT COLUMN: BOOK COVERS */}
        <div className="story-cta-right">
          <img src={book1} alt="Bestselling Story Book Cover" className="story-cta-book" />
          <img src={book2} alt="Bestselling Story Book Cover 2" className="story-cta-book" />
        </div>
      </div>
    </section>
  );
};

export default StoryCTASection;
