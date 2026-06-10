import React from "react";
import book1 from "../../HomeSections/images/main-fiction/Fiction-1.jpg";
import book2 from "../../HomeSections/images/main-fiction/Fiction-2.jpg";

const FictionCTASection = () => {
  const customStyles = `
    .fiction-cta-section {
        padding: 90px 20px;
        background-color: #0A0F1F; /* Dark background */
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        z-index: 1;
        overflow: hidden;
    }

    .fiction-cta-container {
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

    .fiction-cta-left {
        flex: 1;
        min-width: 300px;
        max-width: 650px;
        text-align: left;
    }

    .fiction-cta-title {
        font-size: clamp(22px, 5.5vw, 35px);
        font-weight: 600;
        color: #ffffff;
        line-height: 1.25;
        margin-bottom: 20px;
        text-transform: uppercase;
        letter-spacing: 0.02em;
    }

    .fiction-cta-desc {
        font-size: 16px;
        line-height: 1.6;
        color: #d1d5db;
        margin-bottom: 30px;
        max-width: 550px;
    }

    .fiction-cta-buttons {
        display: flex;
        flex-wrap: wrap;
        gap: 15px;
    }

    .fiction-cta-btn-outline {
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

    .fiction-cta-btn-outline:hover {
        background-color: #ffffff;
        color: #0A0F1F;
        box-shadow: 0 0 15px rgba(255, 255, 255, 0.4);
    }

    .fiction-cta-btn-solid {
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

    .fiction-cta-btn-solid:hover {
        background-color: rgba(255, 255, 255, 0.85); /* Off-white on hover */
        box-shadow: 0 0 15px rgba(255, 255, 255, 0.4);
    }

    .fiction-cta-right {
        flex: 1;
        min-width: 300px;
        max-width: 500px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
    }

    .fiction-cta-book {
        width: clamp(110px, 38vw, 170px);
        height: auto;
        border-radius: 6px;
        box-shadow: 0 15px 35px rgba(0, 0, 0, 0.6);
        transition: all 0.4s ease;
    }

    .fiction-cta-book:hover {
        transform: translateY(-10px) rotate(2deg) scale(1.05);
        box-shadow: 0 25px 50px rgba(0, 0, 0, 0.8);
    }

    @media (max-width: 900px) {
        .fiction-cta-container {
            flex-direction: column;
            text-align: center;
        }

        .fiction-cta-left {
            max-width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .fiction-cta-title {
            text-align: center;
        }

        .fiction-cta-desc {
            text-align: center;
        }

        .fiction-cta-buttons {
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            justify-content: center;
            width: 100%;
            gap: 10px;
        }

        .fiction-cta-btn-outline,
        .fiction-cta-btn-solid {
            padding: 10px 18px;
            font-size: 13px;
            flex: 1;
            max-width: 160px;
            white-space: nowrap;
        }
    }
  `;

  return (
    <section className="fiction-cta-section">
      <style>{customStyles}</style>
      <div className="fiction-cta-container">
        {/* LEFT COLUMN: CONTENT */}
        <div className="fiction-cta-left">
          <h2 className="fiction-cta-title">
            WANT TO CONVERT YOUR FICTION WRITING IDEA INTO A WELL-CRAFTED BOOK?
          </h2>
          <p className="fiction-cta-desc">
            Seek the expertise of the masters of the craft. Our expert fiction writers empower you to create an impactful and polished book.
          </p>
          <div className="fiction-cta-buttons">
            <a href="/contact-us" className="fiction-cta-btn-outline">
              Get Started
            </a>
            <a href="tel:8882842123" className="fiction-cta-btn-solid">
              888-284-2123
            </a>
          </div>
        </div>

        {/* RIGHT COLUMN: BOOK COVERS */}
        <div className="fiction-cta-right">
          <img src={book1} alt="Bestselling Fiction Book Cover" className="fiction-cta-book" />
          <img src={book2} alt="Bestselling Fiction Book Cover 2" className="fiction-cta-book" />
        </div>
      </div>
    </section>
  );
};

export default FictionCTASection;
