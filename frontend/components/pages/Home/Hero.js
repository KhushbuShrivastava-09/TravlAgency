'use client';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel CSS
import styles from '../../styles/Home/Hero.module.css';

const Hero = () => {
  return (
    <div className={styles.heroContainer}>
      <Carousel
        showThumbs={false}
        autoPlay={true}
        infiniteLoop={true}
        interval={5000}
        showStatus={false}
        className={styles.carousel}
      >
        <div className={styles.carouselSlide} style={{ backgroundImage: "url('/images/shimla.jpg')" }}>
          <div className={styles.overlayText}>
            <h2>Welcome To Our</h2>
            <h1>Travabay</h1>
          </div>
        </div>
        <div className={styles.carouselSlide} style={{ backgroundImage: "url('/images/leh.jpg')" }}>
          <div className={styles.overlayText}>
            <h2>7 - Day Tour</h2>
            <h1>AMAZING CARIBBEAN</h1>
          </div>
        </div>
        <div className={styles.carouselSlide} style={{ backgroundImage: "url('/images/spain.jpg')" }}>
          <div className={styles.overlayText}>
            <h2>10 - Day Tour</h2>
            <h1>SPAIN ADVENTURE</h1>
          </div>
        </div>
        <div className={styles.carouselSlide} style={{ backgroundImage: "url('/images/europe.jpg')" }}>
          <div className={styles.overlayText}>
            <h2>10 - Day Tour</h2>
            <h1>EUROPE ADVENTURE</h1>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Hero;