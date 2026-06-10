import React from 'react';
import './NonFictionBest.css'; 
import stackedBooksImage from '../NonFictionImages/Gemini_Generated_Image_859guz859guz859g-removebg-preview.png'; 

const NonFictionBest = () => {
  return (
    <section className="nonfiction-sticky-services-section">
      <div className="nonfiction-sticky-container">

        {/* LEFT COLUMN: PINNED BOOK STACK */}
        <div className="nonfiction-sticky-left">
          <div className="nonfiction-sticky-wrapper">
            <div className="nonfiction-sticky-image-container">
              <div className="nonfiction-image-stack">
                <img
                  src={stackedBooksImage}
                  alt="Stack of non-fiction books"
                  className="nonfiction-stacked-books-image"
                />
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: SCROLLABLE NON-FICTION DETAILS */}
        <div className="nonfiction-sticky-right">
          <h2 className="nonfiction-sticky-heading">
            DISCOVER OUR EXPERTISE IN NON-FICTION WRITING SERVICES
          </h2>
          <div className="nonfiction-sticky-divider"></div>

          <p className="nonfiction-sticky-desc">
            At Pegasus Writing, we specialize in creating captivating, informative, well-researched, and interesting non-fiction that captivates readers and offers value. Our writers are proficient in various non-fiction genres, ranging from technology and business to self-help and lifestyle. We ensure that every article is meticulously studied and crafted to meet the particular demands of your target readership.
          </p>

          <p className="nonfiction-sticky-desc">
            If you require a stimulating article, a lucid ebook, or an insightful guide, Our professional writing service is designed to convey your message effectively and clearly. We focus on providing precise, high-quality content representing your distinctive voice and knowledge.
          </p>

          <p className="nonfiction-sticky-desc">
            With many years of experience in non-fiction writing, we are aware of the importance of providing material that is not just informative but also entertaining. Our writers are skilled in making difficult topics understandable and relatable, ensuring your readers are engaged throughout the process.
          </p>

          <p className="nonfiction-sticky-desc">
            For more details on our writing service, check out the pages of our book writing service or our book publication service.
            Let us assist you in creating powerful non-fiction content that connects with your readers and makes you an authority in your area of expertise.
          </p>
        </div>

      </div>
    </section>
  );
};

export default NonFictionBest;
