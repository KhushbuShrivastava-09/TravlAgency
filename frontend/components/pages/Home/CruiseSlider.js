'use client';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from '../../styles/CruiseSlider.module.css';

const cruisesData = [
  {
    title: 'Mediterranean 18 Night Tour',
    description: 'Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming.',
    reviews: 168,
    image: 'https://demo.gridgum.com/templates/Travel-agency/images/popular03.jpg',
  },
  {
    title: 'Greece 6 Night Tour',
    description: 'Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming.',
    reviews: 16,
    image: 'https://demo.gridgum.com/templates/Travel-agency/images/popular03.jpg',
  },
  {
    title: 'Bahamas 7 Night Tour',
    description: 'Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming.',
    reviews: 18,
    image: 'https://demo.gridgum.com/templates/Travel-agency/images/popular03.jpg',
  },
  {
    title: 'Caribbean 10 Night Tour',
    description: 'Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming.',
    reviews: 120,
    image: 'https://demo.gridgum.com/templates/Travel-agency/images/popular03.jpg',
  },
  {
    title: 'Alaska 12 Night Tour',
    description: 'Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming.',
    reviews: 85,
    image: 'https://demo.gridgum.com/templates/Travel-agency/images/popular03.jpg',
  },
  {
    title: 'Hawaii 8 Night Tour',
    description: 'Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming.',
    reviews: 90,
    image: 'https://demo.gridgum.com/templates/Travel-agency/images/popular03.jpg',
  },
];

const CruisesSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.headerSection}>
        <h2>Popular Cruises</h2>
        <p className={styles.subtitle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod
          tincidunt ut laoreet dolore magna aliquam erat volutpat.
        </p>
      </div>
      <div className={styles.sliderWrapper}>
        <Slider {...settings}>
          {cruisesData.map((cruise, index) => (
            <div key={index} className={styles.slide}>
              <div
                className={styles.cardImage}
                style={{ backgroundImage: `url(${cruise.image})` }}
              ></div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{cruise.title}</h3>
                <p className={styles.cardDescription}>{cruise.description}</p>
                <div className={styles.rating}>
                  {'★'.repeat(4) + '☆'}
                  <span>{cruise.reviews} Reviews</span>
                </div>
                <button className={styles.seeAllButton}>SEE ALL</button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CruisesSlider;