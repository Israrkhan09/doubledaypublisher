// src/hooks/useIntersectionObserver.js

import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook to detect when an element scrolls into the viewport.
 * @param {object} options - Options for the Intersection Observer (root, rootMargin, threshold)
 * @returns {[object, boolean]} - A ref to attach to the element, and the visibility state.
 */
const useIntersectionObserverCon = (options) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      // Update our state when the observer callback fires
      setIsVisible(entry.isIntersecting);
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
  }, [options]); // Re-run effect if options change

  return [ref, isVisible];
};

export default useIntersectionObserverCon;