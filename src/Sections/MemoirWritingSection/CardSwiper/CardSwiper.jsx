import React, { Children, cloneElement, forwardRef, isValidElement, useEffect, useMemo, useRef } from 'react';
import gsap from 'gsap';

// =================================================================
// 1. CSS STYLES (Injected for single-file use)
// =================================================================
const cardSwapStyles = `
.card-swap-container {
  position: absolute;
  bottom: 0;
  right: 0;
  /* Use perspective for the 3D depth effect */
  perspective: 900px; 
  transform: translate(5%, 20%);
  transform-origin: bottom right;
  overflow: visible;
}

.card-3d {
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 12px;
  border: 1px solid #fff;
  background: #000;
  /* Essential for smooth, hardware-accelerated 3D transforms */
  transform-style: preserve-3d;
  will-change: transform;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
}

@media (max-width: 768px) {
  .card-swap-container {
    transform: scale(0.75) translate(25%, 25%);
  }
}

@media (max-width: 480px) {
  .card-swap-container {
    transform: scale(0.55) translate(25%, 25%);
  }
}
`;

// =================================================================
// 2. Helper Components and Functions
// =================================================================

export const CardSwapCard3D = forwardRef(({ customClass, ...rest }, ref) => (
  <div ref={ref} {...rest} className={`card-3d ${customClass ?? ''} ${rest.className ?? ''}`.trim()} />
));
CardSwapCard3D.displayName = 'CardSwapCard3D';

// Calculates the 3D slot position and zIndex for a card
const makeSlot = (i, distX, distY, total) => ({
  x: i * distX,
  y: -i * distY,
  z: -i * distX * 1.5, // Creates the depth effect
  zIndex: total - i
});

// Immediately sets the initial 3D position using GSAP
const placeNow = (el, slot, skew) =>
  gsap.set(el, {
    x: slot.x,
    y: slot.y,
    z: slot.z,
    xPercent: -50,
    yPercent: -50,
    skewY: skew,
    transformOrigin: 'center center',
    zIndex: slot.zIndex,
    force3D: true // Ensures hardware acceleration
  });

// =================================================================
// 3. Main CardSwap Component
// =================================================================

const CardSwap3D = ({
  width = 500,
  height = 400,
  cardDistance = 60,
  verticalDistance = 70,
  delay = 5000,
  pauseOnHover = false,
  onCardClick,
  skewAmount = 6,
  easing = 'elastic',
  children
}) => {
  // Inject the CSS styles into the DOM on mount
  useEffect(() => {
    const styleEl = document.createElement('style');
    styleEl.textContent = cardSwapStyles;
    document.head.appendChild(styleEl);
    return () => {
      document.head.removeChild(styleEl);
    };
  }, []);

  // Configuration based on the easing type
  const config =
    easing === 'elastic'
      ? {
          ease: 'elastic.out(0.6,0.9)',
          durDrop: 2,
          durMove: 2,
          durReturn: 2,
          promoteOverlap: 0.9,
          returnDelay: 0.05
        }
      : {
          ease: 'power1.inOut',
          durDrop: 0.8,
          durMove: 0.8,
          durReturn: 0.8,
          promoteOverlap: 0.45,
          returnDelay: 0.2
        };

  const childArr = useMemo(() => Children.toArray(children), [children]);
  const refs = useMemo(
    () => childArr.map(() => React.createRef()),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [childArr.length]
  );

  // Stores the current logical order of the card references (which index is in which slot)
  const order = useRef(Array.from({ length: childArr.length }, (_, i) => i));

  const tlRef = useRef(null);
  const intervalRef = useRef();
  const container = useRef(null);

  useEffect(() => {
    const total = refs.length;
    // Set initial positions
    refs.forEach((r, i) => placeNow(r.current, makeSlot(i, cardDistance, verticalDistance, total), skewAmount));

    const swap = () => {
      if (order.current.length < 2) return;

      const [front, ...rest] = order.current;
      const elFront = refs[front].current;
      const tl = gsap.timeline({ paused: true });
      tlRef.current = tl;

      // 1. Drop the front card
      tl.to(elFront, {
        y: '+=500', // Drop it down
        duration: config.durDrop,
        ease: config.ease
      });

      // 2. Promote the remaining cards to the front slots (staggered)
      tl.addLabel('promote', `-=${config.durDrop * config.promoteOverlap}`); // Start promotion before drop ends
      rest.forEach((idx, i) => {
        const el = refs[idx].current;
        const slot = makeSlot(i, cardDistance, verticalDistance, refs.length);
        tl.set(el, { zIndex: slot.zIndex }, 'promote');
        tl.to(
          el,
          {
            x: slot.x,
            y: slot.y,
            z: slot.z,
            duration: config.durMove,
            ease: config.ease
          },
          `promote+=${i * 0.15}` // Stagger the movement
        );
      });

      // 3. Return the dropped card to the back slot
      const backSlot = makeSlot(refs.length - 1, cardDistance, verticalDistance, refs.length);
      tl.addLabel('return', `promote+=${config.durMove * config.returnDelay}`);
      
      tl.call(
        () => {
          gsap.set(elFront, { zIndex: backSlot.zIndex }); // Set zIndex before the move
        },
        undefined,
        'return'
      );
      
      tl.to(
        elFront,
        {
          x: backSlot.x,
          y: backSlot.y,
          z: backSlot.z,
          duration: config.durReturn,
          ease: config.ease
        },
        'return'
      );

      // 4. Update the logical order reference after animation is complete
      tl.call(() => {
        order.current = [...rest, front];
      });
      
      tl.play(); // Start the timeline
    };

    // Run the initial swap and set the interval
    swap();
    intervalRef.current = window.setInterval(swap, delay);

    // Pause on Hover Logic
    if (pauseOnHover) {
      const node = container.current;
      const pause = () => {
        tlRef.current?.pause();
        clearInterval(intervalRef.current);
      };
      const resume = () => {
        tlRef.current?.play();
        intervalRef.current = window.setInterval(swap, delay);
      };
      node.addEventListener('mouseenter', pause);
      node.addEventListener('mouseleave', resume);
      return () => {
        node.removeEventListener('mouseenter', pause);
        node.removeEventListener('mouseleave', resume);
        clearInterval(intervalRef.current);
      };
    }
    return () => clearInterval(intervalRef.current);
    // Dependencies are props that affect initial layout or animation timing
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cardDistance, verticalDistance, delay, pauseOnHover, skewAmount, easing]);

  const rendered = childArr.map((child, i) =>
    isValidElement(child)
      ? cloneElement(child, {
          key: i,
          ref: refs[i], // Pass ref to the child component for GSAP to target
          style: { width, height, ...(child.props.style ?? {}) },
          onClick: e => {
            child.props.onClick?.(e);
            onCardClick?.(i);
          }
        })
      : child
  );

  return (
    <div ref={container} className="card-swap-container" style={{ width, height }}>
      {rendered}
    </div>
  );
};

export default CardSwap3D;