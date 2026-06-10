import React from "react";
import book1 from "../../HomeSections/images/main-nonfiction/nonfiction-1.jpg";
import book2 from "../../HomeSections/images/main-nonfiction/nonfiction-2.jpg";

const NonFictionCTASection = () => {
  const customStyles = `
    .nonfiction-cta-section {
        padding: 90px 20px;
        background-color: #0A0F1F; /* Dark background */
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        z-index: 1;
        overflow: hidden;
    }

    .nonfiction-cta-container {
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

    .nonfiction-cta-left {
        flex: 1;
        min-width: 300px;
        max-width: 650px;
        text-align: left;
    }

    .nonfiction-cta-title {
        font-size: clamp(22px, 5.5vw, 35px);
        font-weight: 600;
        color: #ffffff;
        line-height: 1.25;
        margin-bottom: 20px;
        text-transform: uppercase;
        letter-spacing: 0.02em;
    }

    .nonfiction-cta-desc {
        font-size: 16px;
        line-height: 1.6;
        color: #d1d5db;
        margin-bottom: 30px;
        max-width: 550px;
    }

    .nonfiction-cta-buttons {
        display: flex;
        flex-wrap: wrap;
        gap: 15px;
    }

    .nonfiction-cta-btn-outline {
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

    .nonfiction-cta-btn-outline:hover {
        background-color: #ffffff;
        color: #0A0F1F;
        box-shadow: 0 0 15px rgba(255, 255, 255, 0.4);
    }

    .nonfiction-cta-btn-solid {
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

    .nonfiction-cta-btn-solid:hover {
        background-color: rgba(255, 255, 255, 0.85); /* Off-white on hover */
        box-shadow: 0 0 15px rgba(255, 255, 255, 0.4);
    }

    .nonfiction-cta-right {
        flex: 1;
        min-width: 300px;
        max-width: 500px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
    }

    .nonfiction-cta-book {
        width: clamp(110px, 38vw, 170px);
        height: auto;
        border-radius: 6px;
        box-shadow: 0 15px 35px rgba(0, 0, 0, 0.6);
        transition: all 0.4s ease;
    }

    .nonfiction-cta-book:hover {
        transform: translateY(-10px) rotate(2deg) scale(1.05);
        box-shadow: 0 25px 50px rgba(0, 0, 0, 0.8);
    }

    @media (max-width: 900px) {
        .nonfiction-cta-container {
            flex-direction: column;
            text-align: center;
        }

        .nonfiction-cta-left {
            max-width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .nonfiction-cta-title {
            text-align: center;
        }

        .nonfiction-cta-desc {
            text-align: center;
        }

        .nonfiction-cta-buttons {
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            justify-content: center;
            width: 100%;
            gap: 10px;
        }

        .nonfiction-cta-btn-outline,
        .nonfiction-cta-btn-solid {
            padding: 10px 18px;
            font-size: 13px;
            flex: 1;
            max-width: 160px;
            white-space: nowrap;
        }
    }
  `;

  return (
    <section className="nonfiction-cta-section">
      <style>{customStyles}</style>
      <div className="nonfiction-cta-container">
        {/* LEFT COLUMN: CONTENT */}
        <div className="nonfiction-cta-left">
          <h2 className="nonfiction-cta-title">
            WANT TO CONVERT YOUR NON-FICTION WRITING IDEA INTO A WELL-CRAFTED BOOK?
          </h2>
          <p className="nonfiction-cta-desc">
            Seek the expertise of the masters of the craft. Our expert non-fiction writers empower you to create an impactful and polished book.
          </p>
          <div className="nonfiction-cta-buttons">
            <a href="/contact-us" className="nonfiction-cta-btn-outline">
              Get Started
            </a>
            <a href="tel:8882842123" className="nonfiction-cta-btn-solid">
              888-284-2123
            </a>
          </div>
        </div>

        {/* RIGHT COLUMN: BOOK COVERS */}
        <div className="nonfiction-cta-right">
          <img src={book1} alt="Bestselling Non-Fiction Book Cover" className="nonfiction-cta-book" />
          <img src={book2} alt="Bestselling Non-Fiction Book Cover 2" className="nonfiction-cta-book" />
        </div>
      </div>
    </section>
  );
};

export default NonFictionCTASection;
