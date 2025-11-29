import React, { useState, useMemo, useCallback } from 'react';

const CARD_DATA = [
  { id: 1, name: "Jordan R. - Novelist", num: "1/7", angle: 4, imageURL: "/images/book1.jpg", desc: "Creativity is the antidote to existential despair. Finding beauty in the details." },
  { id: 2, name: "Shyamanta B. - Designer", num: "2/7", angle: -8, imageURL: "/images/book2.jpg", desc: "Design is not just what it looks like and feels like. Design is how it works." },
  { id: 3, name: "Luke C. - Photographer", num: "3/7", angle: 7, imageURL: "/images/book3.jpg", desc: "A photograph is a secret about a secret. The more it tells you the less you know." },
  { id: 4, name: "Ilham R. - Developer", num: "4/7", angle: -11, imageURL: "/images/book4.jpg", desc: "The greatest glory in living lies not in never falling, but in rising every time we fall." },
  { id: 5, name: "Sarah P. - Architect", num: "5/7", angle: 13, imageURL: "/images/book5.jpg", desc: "Architecture is the thoughtful making of space. It's about light and human connection." },
  { id: 6, name: "Caleb G. - Analyst", num: "6/7", angle: -17, imageURL: "/images/book6.jpg", desc: "Data is the new oil. It can be refined into knowledge, which can generate growth." },
  { id: 7, name: "Austin B. - Manager", num: "7/7", angle: 20, imageURL: "/images/book7.jpg", desc: "A good manager is a balancer—part visionary, part tactician, and part cheerleader." },
];

const RotatingCardStack = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const totalCards = CARD_DATA.length;

  const handleNext = useCallback(() => {
    setCurrentCardIndex((prev) => (prev + 1) % totalCards);
  }, [totalCards]);

  const handlePrev = useCallback(() => {
    setCurrentCardIndex((prev) => (prev - 1 + totalCards) % totalCards);
  }, [totalCards]);

  const cardStyles = useMemo(() => {
    return CARD_DATA.map((card, index) => {
      const isActive = index === currentCardIndex;
      const distance = Math.abs(index - currentCardIndex);
      const wrappedDistance = Math.min(distance, totalCards - distance);
      const zIndex = isActive ? 50 : (50 - wrappedDistance * 5);
      const translateY = `${wrappedDistance * 6}px`; // reduced to avoid scroll
      const initialAngle = `${card.angle}deg`;
      const nonActiveTransform = `translateY(${translateY}) scale(0.95) rotate(${initialAngle})`;
      const activeTransform = 'translateY(0) scale(1) rotate(0deg)';

      return {
        ...card,
        isActive,
        zIndex,
        cardTransform: isActive ? activeTransform : nonActiveTransform,
      };
    });
  }, [currentCardIndex, totalCards]);

  return (
    <section style={styles.appSection}>
      <div style={styles.appContainer}>
        <h2 style={styles.headerTitle}>Meet Our Creators</h2>
        <div style={styles.cardsWrapper}>
          {cardStyles.map((card) => (
            <div
              key={card.id}
              style={{
                ...styles.cardComponent,
                ...(card.isActive ? styles.cardActive : {}),
                zIndex: card.zIndex,
                transform: card.cardTransform,
              }}
            >
              <div style={styles.cardContent}>
                <img
                  src={card.imageURL}
                  alt={card.name}
                  style={styles.cardImage}
                  onError={(e) => (e.target.src = '/images/fallback.jpg')}
                />
                <h3>{card.name}</h3>
                <p>{card.desc}</p>
                <span>{card.num}</span>
              </div>
            </div>
          ))}
        </div>
        <div style={styles.navButtons}>
          <button onClick={handlePrev}>← Prev</button>
          <button onClick={handleNext}>Next →</button>
        </div>
      </div>
    </section>
  );
};

export default RotatingCardStack;

const styles = {
  appSection: {
    padding: '3rem 1rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#f0f3ff',
  },
  appContainer: {
    maxWidth: '56rem',
    width: '100%',
    margin: '0 auto',
  },
  headerTitle: {
    textAlign: 'center',
    fontSize: '2.5rem',
    fontWeight: 900,
    color: '#1f2937',
    marginBottom: '2rem',
  },
  cardsWrapper: {
    position: 'relative',
    width: '100%',
    minHeight: '330px',
    display: 'grid',
    placeItems: 'center',
    overflow: 'hidden', // ✅ prevents scroll overflow
  },
  cardComponent: {
    gridArea: '1/1',
    placeSelf: 'center',
    opacity: 0,
    backgroundColor: 'white',
    padding: '1.5rem',
    borderRadius: '1.5rem',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    transition: 'transform 0.8s ease, opacity 0.5s ease',
    width: '95%',
    maxWidth: '900px',
    boxSizing: 'border-box',
  },
  cardActive: {
    opacity: 1,
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1.5rem',
  },
  cardImage: {
    width: '200px',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '1rem',
  },
  navButtons: {
    marginTop: '2rem',
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center',
  },
};
