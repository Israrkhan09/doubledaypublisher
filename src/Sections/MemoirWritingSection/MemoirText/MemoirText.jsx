import React from 'react';
import './MemoirText.css'; 
import book1 from '../../HomeSections/images/main-memoirs/memoirs-1.jpg'; 
import book2 from '../../HomeSections/images/main-memoirs/memoirs-2.jpg'; 

const MemoirText = () => {
  return (
    <section className="memoir-sticky-services-section">
      <div className="memoir-sticky-container">

        {/* LEFT COLUMN: PINNED MEMOIR BOOKS */}
        <div className="memoir-sticky-left">
          <div className="memoir-sticky-wrapper">
            <div className="memoir-sticky-image-container">
              <img
                src={book1}
                alt="Bestselling Memoir Book Cover"
                className="memoir-sticky-image"
              />
              <img
                src={book2}
                alt="Bestselling Memoir Book Cover 2"
                className="memoir-sticky-image"
              />
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: SCROLLABLE MEMOIR DETAILS */}
        <div className="memoir-sticky-right">
          <h2 className="memoir-sticky-heading">
            WHY CHOOSE OUR MEMOIR WRITING SERVICES
          </h2>
          <div className="memoir-sticky-divider"></div>

          <p className="memoir-sticky-desc">
            Pegasus Writing is an expert at writing down the essentials of your life’s tale and preserving your unique experience for future generations. Our experienced memoirists collaborate with you closely to better understand your personal experiences and ensure that every detail is meticulously created to capture your emotions, voice and the most important moments.
          </p>

          <p className="memoir-sticky-desc">
            We offer memoir writing services specifically designed to aid you in telling your story with clarity and authenticity. You may want to share your personal story, successes or a profound lesson. Our writers will help you through this process of creating an engaging story.
          </p>

          <p className="memoir-sticky-desc">
            We know the importance of relationships with people, which is why we provide customized writing services targeting your needs. From concept creation through final edits, Our team is committed to creating a professional and polished memoir that is a hit with readers. Our skilled writers will help you tell your story with care and professionalism.
          </p>

          <p className="memoir-sticky-desc">
            Do you want a full storytelling experience? Please look at the possibilities of our Book Writing Services or learn our options to enhance your story with Audiobook Services to reach a larger audience. We at Pegasus Writing are dedicated to transforming your memoir into a lasting legacy.
          </p>
        </div>

      </div>
    </section>
  );
};

export default MemoirText;