import React, { useEffect, useRef, useState } from "react";
import "./BrandSections.css";

// ==========================================================================
// MOCK REVIEWS DATA (10 Unique Reviews)
// ==========================================================================
const reviewsData = [
  {
    id: 1,
    author: "Golden Smith",
    text: "Hats off to the talented team at Doubleday Publisher for their outstanding work on my fiction book. From start to finish, they demonstrated a remarkable level of skill and dedication. A heartfelt thank you for bringing my vision to life!",
  },
  {
    id: 2,
    author: "Jayden Gardner",
    text: "Working with Doubleday Publisher was an absolute delight! Their professionalism and expertise in book writing are truly commendable. I couldn't be happier with the exceptional service they provided.",
  },
  {
    id: 3,
    author: "Abud Gordhani",
    text: "As a lifelong admirer of Leo Tolstoy's work, I was thrilled to discover Doubleday Publisher. Their promise of delivering top-notch content was not an exaggeration. My experience with them surpassed all expectations, leaving me incredibly satisfied.",
  },
  {
    id: 4,
    author: "Evelyn Monroe",
    text: "The editing team polished my manuscript to perfection. They kept my voice intact while correcting structural flows. I highly recommend their services to all aspiring authors.",
  },
  {
    id: 5,
    author: "Marcus Vance",
    text: "Doubleday Publisher helped me publish my memoir. The transition from manuscript to published book was seamless, and the cover design they created was breathtaking.",
  },
  {
    id: 6,
    author: "Clara Oswald",
    text: "From the initial outline to the final chapter, the ghostwriter assigned to my project was incredibly intuitive. They understood exactly what I wanted to say and wrote it beautifully.",
  },
  {
    id: 7,
    author: "Lucas Sterling",
    text: "Their marketing campaign gave my book the exposure it needed. I saw a significant boost in sales within the first month. Excellent work!",
  },
  {
    id: 8,
    author: "Sophia Bennett",
    text: "I was hesitant about hiring a ghostwriter, but Doubleday Publisher made me feel comfortable throughout the process. The communication was prompt and the writing was exceptional.",
  },
  {
    id: 9,
    author: "David H. Choi",
    text: "The team is professional, responsive, and highly skilled. They turned my collection of drafts into a cohesive, compelling non-fiction masterpiece. Five stars!",
  },
  {
    id: 10,
    author: "Elena Rostova",
    text: "I am amazed by the quality of the writing and formatting. They delivered chapters ahead of schedule and the revisions were handled with great care.",
  },
];

// ==========================================================================
// 1. SECTION: WHY CHOOSE US
// ==========================================================================
export const WhyChooseUs = ({ title = "Helping Authors to be Number #1", desc, badge = "Why Choose Us" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Trigger once — same pattern as MemoirStepsSection & ScriptCTASection
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
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="why-choose-us-wrapper">
      <section ref={sectionRef} className="why-choose-us-section" aria-label="Why Choose Us">
        <div className="wcu-left">
          <span className={`wcu-badge wcu-anim-item ${isVisible ? "wcu-visible" : ""}`}
            style={{ transitionDelay: "0s" }}
          >{badge}</span>
          <h2 className={`wcu-title wcu-anim-item ${isVisible ? "wcu-visible" : ""}`}
            style={{ transitionDelay: "0.12s" }}
          >{title}</h2>

          {desc ? (
            <div className={`wcu-anim-item ${isVisible ? "wcu-visible" : ""}`}
              style={{ transitionDelay: "0.24s" }}
            >
              {desc}
            </div>
          ) : (
            <div className={`wcu-anim-item ${isVisible ? "wcu-visible" : ""}`}
              style={{ transitionDelay: "0.24s" }}
            >
              <p className="wcu-desc">
                Not sure why you should hire a writer for a book from <strong>Doubleday Publisher</strong>? Here's why you should count on us:
              </p>

              <p className="wcu-desc">
                Our professional book writers conduct thorough research and interviews before drafting the outline for your book. We take our inspiration from the best authors in the world, and try to replicate those writing styles.
              </p>

              <p className="wcu-desc">
                Our team plans and creates chapters based on the approved outline of your book. We also offer unlimited revisions to ensure the content stays true to your tone, voice, and personality. Besides writing, we also offer ghostwriting, book editing, marketing, and publishing services so your manuscript can reach the right target audience. We're available around the clock to discuss your project. So, what are you waiting for? Grab the phone and contact us right away!
              </p>
            </div>
          )}
        </div>

        {/* SVG slides in from the right */}
        <div className={`wcu-right wcu-anim-right ${isVisible ? "wcu-visible" : ""}`}
          style={{ transitionDelay: "0.18s" }}
        >
          {/* Modern Vector SVG Illustration representing a character with floating question marks */}
          <svg
            className="wcu-illustration"
            viewBox="0 0 500 500"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Background decorative circles */}
            <circle cx="250" cy="250" r="160" fill="#ccfbf1" fillOpacity="0.3" />
            <circle cx="220" cy="200" r="80" fill="#e0f2fe" fillOpacity="0.4" />

            {/* Standing Character representation */}
            {/* Legs */}
            <path d="M225 350 L225 430" stroke="#0A0F1F" strokeWidth="12" strokeLinecap="round" />
            <path d="M255 350 L255 430" stroke="#0A0F1F" strokeWidth="12" strokeLinecap="round" />
            {/* Shoes */}
            <path d="M210 430 H230" stroke="#0A0F1F" strokeWidth="16" strokeLinecap="round" />
            <path d="M250 430 H270" stroke="#0A0F1F" strokeWidth="16" strokeLinecap="round" />
            {/* Torso/Coat */}
            <path d="M210 240 Q240 230 270 240 V350 H210 V240 Z" fill="#0A0F1F" />
            {/* Vest */}
            <path d="M232 240 H248 V350 H232 Z" fill="#ffffff" />
            <path d="M232 240 L240 265 L248 240 Z" fill="#14b8a6" />
            {/* Head & Neck */}
            <rect x="234" y="210" width="12" height="20" fill="#ffded1" rx="4" />
            <circle cx="240" cy="180" r="30" fill="#ffded1" />
            {/* Hair */}
            <path d="M210 180 Q240 145 270 180 Q240 160 210 180 Z" fill="#0A0F1F" />
            {/* Arms pointing upwards / gesturing */}
            {/* Left Arm pointing up */}
            <path d="M210 250 Q180 230 190 190" stroke="#0A0F1F" strokeWidth="10" strokeLinecap="round" />
            <circle cx="190" cy="185" r="7" fill="#ffded1" />
            {/* Right Arm gesturing to the big question mark */}
            <path d="M270 250 Q310 260 340 230" stroke="#0A0F1F" strokeWidth="10" strokeLinecap="round" />
            <circle cx="343" cy="227" r="7" fill="#ffded1" />

            {/* LARGE MAIN QUESTION MARK GRAPHIC */}
            <g className="wcu-float-q1">
              {/* The giant teal question mark */}
              <path
                d="M310 120 Q350 80 400 120 Q440 160 380 200 T360 260"
                stroke="#14b8a6"
                strokeWidth="28"
                strokeLinecap="round"
                fill="none"
              />
              <circle cx="360" cy="310" r="16" fill="#14b8a6" />
            </g>

            {/* Smaller floating question mark 2 */}
            <g className="wcu-float-q2" opacity="0.8">
              <path
                d="M130 140 Q150 115 180 140 Q200 165 170 190 T160 220"
                stroke="#78cfc6"
                strokeWidth="12"
                strokeLinecap="round"
                fill="none"
              />
              <circle cx="160" cy="245" r="7" fill="#78cfc6" />
            </g>

            {/* Smaller floating question mark 3 */}
            <g className="wcu-float-q3" opacity="0.6">
              <path
                d="M75 250 Q90 230 110 250 Q125 270 105 290 T100 310"
                stroke="#14b8a6"
                strokeWidth="8"
                strokeLinecap="round"
                fill="none"
              />
              <circle cx="100" cy="330" r="5" fill="#14b8a6" />
            </g>
          </svg>
        </div>
      </section>
    </div>
  );
};

// ==========================================================================
// 2. SECTION: REVIEWS (TESTIMONIALS CAROUSEL)
// ==========================================================================
export const ReviewsCarousel = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Trigger once
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
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // We duplicate the list to ensure seamless infinite looping marquee
  const loopedReviews = [...reviewsData, ...reviewsData];

  return (
    <section ref={sectionRef} className="reviews-section" aria-label="Client Reviews">
      <div className={`reviews-header wcu-anim-item ${isVisible ? "wcu-visible" : ""}`}
        style={{ transitionDelay: "0s" }}
      >
        <h2 className="reviews-title">Reviews from Our Clients</h2>
        <div className="reviews-underline"></div>
      </div>

      <div className={`reviews-marquee-container wcu-anim-item ${isVisible ? "wcu-visible" : ""}`}
        style={{ transitionDelay: "0.2s" }}
      >
        <div className="reviews-track">
          {loopedReviews.map((review, index) => (
            <article key={`${review.id}-${index}`} className="review-card">
              <div className="review-quote-svg">
                <svg width="36" height="26" viewBox="0 0 38 26" fill="currentColor">
                  {/* Comma 1 */}
                  <path d="M 4,12 C 4,7 7.5,4 11,4 C 14.5,4 17,6.5 17,9.5 C 17,12.5 14.5,15 11.5,15 C 10.5,15 9.8,14.7 9.8,14.7 C 9.8,17.5 12,20.5 15,22 L 13.5,24 C 9.5,22 6,18 4,12 Z" />
                  {/* Comma 2 (shifted right for clear separation) */}
                  <path d="M 22,12 C 22,7 25.5,4 29,4 C 32.5,4 35,6.5 35,9.5 C 35,12.5 32.5,15 29.5,15 C 28.5,15 27.8,14.7 27.8,14.7 C 27.8,17.5 30,20.5 33,22 L 31.5,24 C 27.5,22 24,18 22,12 Z" />
                </svg>
              </div>
              <p className="review-text">"{review.text}"</p>
              <h4 className="review-author">{review.author}</h4>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

// ==========================================================================
// 3. SECTION: WRITE YOUR DREAM BOOK WITH US! (CTA BANNER)
// ==========================================================================
export const DreamBookCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Trigger once
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
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="dream-book-section" aria-label="Dream Book Call to Action">
      {/* Upper Main CTA Grid */}
      <div className="cta-upper">
        {/* Left slides up */}
        <div className={`cta-left wcu-anim-item ${isVisible ? "wcu-visible" : ""}`}
          style={{ transitionDelay: "0s" }}
        >
          <h2 className="cta-heading">Write Your Dream Book with Us!</h2>
          <p className="cta-desc">
            At Doubleday Publisher, we're here to help you with everything you need to write your book. We can write it for you, make it look good, edit it, design the cover, and even help you tell people about it. Contact us now, and we'll be your guides every step of the way!
          </p>
          <a href="/contact" className="cta-capsule-btn">
            Consultation Now! →
          </a>
        </div>

        {/* Envelope slides in from right */}
        <div className={`cta-right wcu-anim-right ${isVisible ? "wcu-visible" : ""}`}
          style={{ transitionDelay: "0.18s" }}
        >
          {/* Clean modern mail/newsletter envelope vector illustration placeholder */}
          <svg
            className="cta-svg-envelope"
            viewBox="0 0 300 240"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Soft Shadow underneath envelope */}
            <ellipse
              className="env-shadow"
              cx="150"
              cy="215"
              rx="90"
              ry="12"
              fill="#000000"
              opacity="0.1"
            />

            {/* Mail Envelope Group */}
            <g className="env-float">
              {/* Envelope Back Body */}
              <rect x="30" y="50" width="240" height="140" rx="12" fill="#e0f2fe" />

              {/* Emerging Letter sheet */}
              <rect x="50" y="25" width="200" height="90" rx="6" fill="#ffffff" />
              <line x1="70" y1="45" x2="230" y2="45" stroke="#ccfbf1" strokeWidth="8" strokeLinecap="round" />
              <line x1="70" y1="65" x2="200" y2="65" stroke="#14b8a6" strokeWidth="8" strokeLinecap="round" />
              <line x1="70" y1="85" x2="160" y2="85" stroke="#e0f2fe" strokeWidth="8" strokeLinecap="round" />

              {/* Envelope Side Flaps */}
              <path
                d="M30 50 L150 135 L270 50 Z"
                fill="#ccfbf1"
                opacity="0.9"
              />

              {/* Envelope Front bottom flap overlapping sides */}
              <path
                d="M30 190 L120 120 Q150 100 180 120 L270 190 Z"
                fill="#14b8a6"
                opacity="0.85"
              />

              {/* Interactive badge or seal on envelope */}
              <circle cx="150" cy="130" r="20" fill="#0A0F1F" />
              <path
                d="M144 130 L148 134 L157 125"
                stroke="#14b8a6"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </svg>
        </div>
      </div>

      {/* Lower Quick Info Strip — columns stagger up */}
      <div className="cta-info-strip">
        {/* Column 1: Free Consultation */}
        <div className={`cta-info-col col-1 wcu-anim-item ${isVisible ? "wcu-visible" : ""}`}
          style={{ transitionDelay: "0.28s" }}
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            <path d="M9 11l2 2 4-4" />
          </svg>
          <span>Free Consultation</span>
        </div>

        {/* Column 2: Telephone Link */}
        <a href="tel:2146449136" className={`cta-info-col col-2 wcu-anim-item ${isVisible ? "wcu-visible" : ""}`}
          style={{ transitionDelay: "0.38s" }}
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          <span>214-644-9136</span>
        </a>

        {/* Column 3: Email Link */}
        <a href="mailto:info@doubledaypublishers.com" className={`cta-info-col col-3 wcu-anim-item ${isVisible ? "wcu-visible" : ""}`}
          style={{ transitionDelay: "0.48s" }}
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
          <span>info@doubledaypublishers.com</span>
        </a>
      </div>
    </section>
  );
};
