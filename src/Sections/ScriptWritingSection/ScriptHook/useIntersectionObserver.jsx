// src/hooks/useIntersectionObserver.js
// "trigger once" version — animation plays only on first scroll into view,
// does NOT reverse when scrolling back up.

import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook to detect when an element scrolls into the viewport.
 * Once the element becomes visible, the state locks to true permanently
 * so that animations only play once (scroll-down trigger only).
 * @param {object} options - Options for the Intersection Observer (root, rootMargin, threshold)
 * @returns {[object, boolean]} - A ref to attach to the element, and the visibility state.
 */
const useIntersectionObserver = (options) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        // Lock to visible permanently and stop observing
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, options);

    // Get the DOM element to observe
    const currentRef = ref.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    // Cleanup function: stop observing when the component unmounts
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []); // Empty deps — run once on mount only

  return [ref, isVisible];
};

export default useIntersectionObserver;