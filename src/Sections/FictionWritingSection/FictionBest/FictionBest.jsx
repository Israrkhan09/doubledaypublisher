import React from 'react';
import './FictionBest.css'; 
import stackedBooksImage from '../FictionImages/Gemini_Generated_Image_bj70rhbj70rhbj70-removebg-preview.png'; 

const FictionBest = () => {
  return (
    <section className="fiction-sticky-services-section">
      <div className="fiction-sticky-container">

        {/* LEFT COLUMN: PINNED BOOK STACK */}
        <div className="fiction-sticky-left">
          <div className="fiction-sticky-wrapper">
            <div className="fiction-sticky-image-container">
              <div className="fiction-image-stack">
                <img
                  src={stackedBooksImage}
                  alt="Stack of fiction books"
                  className="fiction-stacked-books-image"
                />
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: SCROLLABLE FICTION DETAILS */}
        <div className="fiction-sticky-right">
          <h2 className="fiction-sticky-heading">
            DISCOVER OUR EXPERTISE IN FICTION WRITING SERVICES
          </h2>
          <div className="fiction-sticky-divider"></div>

          <p className="fiction-sticky-desc">
            At Pegasus Writing, we specialize in creating captivating, informative, well-researched, and interesting non-fiction that captivates readers and offers value. Our writers are proficient in various non-fiction genres, ranging from technology and business to self-help and lifestyle. We ensure that every article is meticulously studied and crafted to meet the particular demands of your target readership.
          </p>

          <p className="fiction-sticky-desc">
            If you require a stimulating article, a lucid ebook, or an insightful guide, Our professional writing service is designed to convey your message effectively and clearly. We focus on providing precise, high-quality content representing your distinctive voice and knowledge.
          </p>

          <p className="fiction-sticky-desc">
            With many years of experience in non-fiction writing, we are aware of the importance of providing material that is not just informative but also entertaining. Our writers are skilled in making difficult topics understandable and relatable, ensuring your readers are engaged throughout the process.
          </p>

          <p className="fiction-sticky-desc">
            For more details on our writing service, check out the pages of our book writing service or our book publication service.
            Let us assist you in creating powerful non-fiction content that connects with your readers and makes you an authority in your area of expertise.
          </p>
        </div>

      </div>
    </section>
  );
};

export default FictionBest;