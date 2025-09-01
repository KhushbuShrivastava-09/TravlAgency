'use client';
import React, { useEffect, useRef } from 'react';
import styles from '../../styles/Home/GallerySlider.module.css';

const cruisesData = [
  {
    title: 'Mediterranean 18 Night Tour',
    description: 'Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming.',
    image: '/images/leh.jpg',
  },
  {
    title: 'Greece 6 Night Tour',
    description: 'Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming.',
    image: '/images/shimla.jpg',
  },
  {
    title: 'Bahamas 7 Night Tour',
    description: 'Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming.',
    image: '/images/spain.jpg',
  },
  {
    title: 'Caribbean 10 Night Tour',
    description: 'Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming.',
    image: '/images/europe.jpg',
  },
  {
    title: 'Alaska 12 Night Tour',
    description: 'Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming.',
    image: '/images/leh.jpg',
  },
  {
    title: 'Hawaii 8 Night Tour',
    description: 'Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming.',
    image: '/images/shimla.jpg',
  },
];

const GallerySlider = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let scrollAmount = 0;
    const scrollStep = 2; // speed
    const interval = setInterval(() => {
      if (slider.scrollLeft + slider.offsetWidth >= slider.scrollWidth) {
        slider.scrollLeft = 0;
        scrollAmount = 0;
      } else {
        slider.scrollLeft += scrollStep;
        scrollAmount += scrollStep;
      }
    }, 20); // speed interval

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.headerSection}>
        <h2 className={styles.title}>Gallery</h2>
        <p className={styles.subtitle}>
          Discover amazing trips around the World with Travabay
        </p>
      </div>

      <div className={styles.autoSlider} ref={sliderRef}>
        {cruisesData.map((cruise, index) => (
          <div key={index} className={styles.card}>
            <div
              className={styles.cardImage}
              style={{ backgroundImage: `url(${cruise.image})` }}
            />
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>{cruise.title}</h3>
              <p className={styles.cardDescription}>{cruise.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GallerySlider;
