import React from 'react';
import './FictionBest.css'; 
import stackedBooksImage from '../FictionImages/Gemini_Generated_Image_bj70rhbj70rhbj70-removebg-preview.png'; 
// Import the custom hook
import useIntersectionObserver from '../FictionHook/FictionHook';

const BookImageStack = ({ isVisible }) => (
  // Apply animation classes conditionally based on isVisible prop
  <div 
    className={`image-stack-container animate-on-scroll ${isVisible ? 'slide-in-left' : ''}`}
  >
    {/* This is the large, rounded, light-blue background shape */}
    <div className="image-stack-backdrop"></div> 
    
    {/* This is the white, rounded container holding the books */}
    <div className="image-stack">
      {/* Use your single stacked image here */}
      <img
        src={stackedBooksImage}
        alt="Stack of fiction books"
        className="stacked-books-image" 
      />
    </div>
  </div>
);

const ContentBlock = ({ isVisible }) => (
  // Apply animation classes conditionally based on isVisible prop
  <div 
    className={`content-block animate-on-scroll ${isVisible ? 'slide-in-right' : ''}`}
  >
    <h2 className="content-title"> Unleash Your Novel: Key Strategies for Fiction Writers
    </h2>
    <p className="content-text">
  The world of fiction is limitless, offering endless avenues for creativity, character development, and masterful storytelling. Whether you're planning your first draft or refining a final manuscript, our resources are designed to guide you through every stage. Explore expert tips on plot structure, voice, and world-building to create a truly resonating work of art.
    </p>
    <div className="button-group"> 
      <button className="fiction-btn fiction-btn-resources">Explore Writing Guides</button>
      <button className="fiction-btn fiction-btn-community">Join Our Writer's Community</button>
    </div>
  </div>
);

const FictionBest = () => {
  // 1. Create a ref for the outer section-inner div
  const [sectionRef, isSectionVisible] = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section className="fiction-section">
      {/* 2. Attach the ref to the element being observed */}
      <div className="section-inner" ref={sectionRef}>
        {/* 3. Pass the visibility state down to children */}
        <BookImageStack isVisible={isSectionVisible} />
        <ContentBlock isVisible={isSectionVisible} />
      </div>
    </section>
  );
};

export default FictionBest;