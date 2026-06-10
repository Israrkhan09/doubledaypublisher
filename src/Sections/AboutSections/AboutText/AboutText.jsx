import React, { useEffect } from "react";
import Lottie from "lottie-react";
import mailAnimation from "../../../assets/mailAnimation.json";
import "./AboutText.css";

const DreamBookSection = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 },
    );

    const elements = document.querySelectorAll(".fade-up");

    elements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <section className="dream-section">
      <div className="dream-container">
        <div className="dream-text fade-up">
          <h2>Write Your Dream Book with Us!</h2>

          <p>
            At Doubleday Publisher, we’re here to help you with everything you need
            to write your book. We can write it for you, edit it, design the
            cover, and help you promote it.
          </p>
        </div>

        <div className="dream-animation fade-up">
          <Lottie
            animationData={mailAnimation}
            loop={true}
            style={{ width: "100%", maxWidth: "420px" }}
          />
        </div>
      </div>

      <div className="contact-bar">
        <div className="contact-item fade-up">👍 Free Consultation</div>

        <div className="contact-item fade-up">📞 214-644-9136</div>

        <div className="contact-item fade-up">✉ info@doubledaypublishers.com</div>
      </div>
    </section>
  );
};

export default DreamBookSection;
