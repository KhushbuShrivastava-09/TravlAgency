'use client';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from '../../styles/Home/GallerySlider.module.css';

const cruisesData = [
  {
    title: 'Mediterranean 18 Night Tour',
    description: 'Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming.',
    reviews: 168,
    image: '/images/leh.jpg',
  },
  {
    title: 'Greece 6 Night Tour',
    description: 'Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming.',
    reviews: 16,
    image: '/images/shimla.jpg',
  },
  {
    title: 'Bahamas 7 Night Tour',
    description: 'Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming.',
    reviews: 18,
    image: '/images/spain.jpg',
  },
  {
    title: 'Caribbean 10 Night Tour',
    description: 'Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming.',
    reviews: 120,
    image: '/images/europe.jpg',
  },
  {
    title: 'Alaska 12 Night Tour',
    description: 'Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming.',
    reviews: 85,
    image: '/images/leh.jpg',
  },
  {
    title: 'Hawaii 8 Night Tour',
    description: 'Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming.',
    reviews: 90,
    image: '/images/shimla.jpg',
  },
];

const GallerySlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,   // Desktop default
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024, // Tablet
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // Mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.headerSection}>
        <h2 className={styles.title}>Gallery</h2>
        <p className={styles.subtitle}>
          Discover amazing trips around the World with Travabay
        </p>
      </div>
      <div className={styles.sliderWrapper}>
        <Slider {...settings}>
          {cruisesData.map((cruise, index) => (
            <div key={index} className={styles.slide}>
              <div className={styles.card}>
                <div
                  className={styles.cardImage}
                  style={{ backgroundImage: `url(${cruise.image})` }}
                />
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{cruise.title}</h3>
                  <p className={styles.cardDescription}>{cruise.description}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default GallerySlider;
