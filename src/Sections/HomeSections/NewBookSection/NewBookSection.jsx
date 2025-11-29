import React, { useState, useEffect, useRef } from 'react';
import sectionImage from '../images/fiction/background-2.png'; 

// All custom CSS is defined here and injected via a <style> tag in the render.
const getCustomStyles = () => `
    /* Animation Styles */
    /* Base state: Hidden and slightly down */
    .scroll-reveal {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        will-change: opacity, transform;
    }
    /* Visible state: Opaque and in place */
    .is-visible {
        opacity: 1;
        transform: translateY(0);
    }

    /* Outer Wrapper (Overall Page Background) */
    .section-outer-wrapper {
        // background-color: #f2bdbdff;
        background-color: #ffffffff;
        padding: 40px 0;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        font-family: 'Inter', sans-serif;
        color: #555;
        /* Added min-height to enable scrolling and showcase the animation */
        min-height: 50vh; 
    }

    /* Left Content Block (The Beige Container) */
    .content-block-left-v3 {
        background-color: #F5F5F7;
        // background-color: #8f7358ff;
        width: 800px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        min-height: 300px;
        padding: 15px 30px 10px 30px;
        border-radius: 10px;
        margin-right: -1px;
        box-sizing: border-box;
        z-index: 1;
        text-align: left;
        margin-top: 55px;
    }

    /* Right Image Column */
    .image-column-right-v3 {
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        margin-left: 25px;
        border-radius: 10px;
        height: 355px;
        gap: 10px;
        max-width: 350px;
        overflow: hidden;
        // background-color: #d29428;
    }

    .image-column-right-v3 .product-image-v3 {
        max-width: 100%;
        width: 450px;
        height: 360px;
        display: block;
        border-radius: 10px;
        margin-top: 54px;
    }

    /* Text Styling */
    .main-title-text-v3 {
        font-size: 37px;
        font-weight: 800;
        color: #000000ff;
        margin: 0 0 10px 0;
        line-height: 1.1;
    }

    .title-divider-v3 {
        width: 100%;
        height: 1px;
        background-color: #ccc;
        margin-bottom: 30px;
    }

    /* Inner 2-column grid for sub-sections */
    .inner-content-grid-v3 {
        flex-grow: 1;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 30px;
    }

    .sub-section-item-v3 h3 {
        font-size: 0.82em;
        font-weight: 700;
        margin: 0 0 10px 0;
        color: #222;
        line-height: 1.3;
    }

    .sub-section-item-v3 p {
        font-size: 0.74em;
        line-height: 1.6;
        color: #555;
    }

    /* Icon styles */
    .icon-wrap-v3 {
        font-size: 1.0em;
        margin-bottom: 10px;
        width: 25px;
        height: 25px;
        border: 1px solid #555;
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #222;
    }
    .icon-symbol {
        font-size: 1.1em;
        line-height: 1;
        display: inline-block;
    }

    /* --- Responsive Adjustments --- */
    @media (max-width: 1100px) {
        .content-block-left-v3 {
            width: 55%;
        }
        .image-column-right-v3 {
            height: 400px;
        }
        .image-column-right-v3 .product-image-v3 {
            width: 350px;
        }
    }

    @media (max-width: 900px) {
        .section-outer-wrapper {
            flex-direction: column;
            align-items: center;
            padding: 40px 20px;
        }

        .content-block-left-v3 {
            width: 100%;
            margin-right: 0;
            padding: 30px;
            margin-bottom: 30px;
            min-height: auto; /* Remove fixed height on mobile */
        }

        .image-column-right-v3 {
            width: 100%;
            max-width: 100%;
            height: auto;
            overflow: visible;
            margin-left: 0;
        }

        .image-column-right-v3 .product-image-v3 {
            width: 100%;
            max-width: 100%;
        }

        .inner-content-grid-v3 {
            grid-template-columns: 1fr;
            gap: 20px;
        }
    }
`;

// --- Updated Custom Intersection Observer Hook ---
// This hook now continuously observes the element and updates the visibility state.
const useIntersectionObserver = (options = { threshold: 0.1, rootMargin: '0px' }) => {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            // Update visibility state based on whether the element is intersecting (true) or not (false)
            setIsVisible(entry.isIntersecting);
            
            // NOTE: We do NOT unobserve the target, allowing the animation to fire on scroll out (reset) 
            // and scroll in (animate) repeatedly.

        }, options);

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            // Cleanup function to stop observing when the component unmounts
            if (ref.current) {
                // Ensure ref.current is not null before attempting to unobserve
                observer.unobserve(ref.current);
            }
        };
    }, [ref, options]); 

    return [ref, isVisible];
};

// --- Main Component ---
const NewBookSection = () => {
    // Note: Local image imports like 'sectionimage' cannot be resolved in this environment.
    // Using a reliable placeholder image instead.
    const SECTION_IMAGE_URL = sectionImage;

    // Apply the hook to the two main animated sections
    // Note: For 'scroll-up' animation, we keep the threshold low so the element resets when mostly out of view.
    const [contentRef, isContentVisible] = useIntersectionObserver({ threshold: 0.05 }); // Set lower threshold for quicker reset
    const [imageRef, isImageVisible] = useIntersectionObserver({ threshold: 0.05 });

    // Helper to join the animation classes
    const getAnimationClasses = (isVisible) =>
        `scroll-reveal ${isVisible ? 'is-visible' : ''}`;

    return (
        <div className="NewBookSection">
            {/* Inject custom styles */}
            <style dangerouslySetInnerHTML={{ __html: getCustomStyles() }} />

           
            {/* Outer container: Relies on .section-outer-wrapper */}
            <section className="section-outer-wrapper"> 
                
                {/* 1. The Left Content Block (The Beige Container) */}
                <div 
                    ref={contentRef} 
                    className={`content-block-left-v3 ${getAnimationClasses(isContentVisible)}`}
                > 
                    
                    <h2 className="main-title-text-v3">
                        Creativity & Self-Expression
                    </h2>
                    {/* Title divider */}
                    <div className="title-divider-v3"></div>

                    <div className="inner-content-grid-v3">
                        
                        {/* Sub-section 1 */}
                        <div className="sub-section-item-v3">
                            <div className="icon-wrap-v3">
                                {/* Using your custom symbol */}
                                <span className="icon-symbol">{'<'}</span>
                                <span className="icon-symbol">{'>'}</span>
                            </div>
                            <h3>VOICE. STRUCTURE. IMPACT.</h3>
                            <p>
                                Every book journey is founded on a deep love for creativity and self-expression, with one goal in mind: to make your story stand out. Our process began with the vision of creating a resource that makes authorship as dynamic and powerful as the message you hold.
                            </p>
                        </div>

                        {/* Sub-section 2 */}
                        <div className="sub-section-item-v3">
                            <div className="icon-wrap-v3">
                                {/* Using your custom symbol */}
                                <span className="icon-symbol">◪</span>
                            </div>
                            <h3>WE'RE MORE THAN JUST A SERVICE</h3>
                            <p>
                                We are a dedicated community committed to innovators, storytellers, and aspiring authors across all genres. The inspiration for simplifying the complex publishing landscape came from a desire to create a straightforward path that truly empowers every writer.
                            </p>
                        </div>
                    </div>
                </div>

                {/* 2. Right Image Column */}
                <div 
                    ref={imageRef} 
                    className={`image-column-right-v3 ${getAnimationClasses(isImageVisible)}`}
                    // Added a style delay for a staggered effect
                    style={{ transitionDelay: '0.15s' }}
                >
                    <img 
                        src={SECTION_IMAGE_URL} 
                        alt="A stylish product placeholder image" 
                        className="product-image-v3"
                    />
                </div>
            </section>

             {/* Added a scroll spacer below the content */}
            <div className="h-[70vh] bg-gray-100"></div>
        </div>
    );
};

export default NewBookSection;
