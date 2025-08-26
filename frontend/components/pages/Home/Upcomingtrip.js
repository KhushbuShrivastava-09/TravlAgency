'use client';
import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image from 'next/image';
import styles from '../../styles/Home/Upcomingtrip.module.css';

const UpcomingTripsSlider = () => {
  const [trips, setTrips] = useState([
    {
      id: 1,
      title: 'Exotic Maldives Escape',
      description: 'Enjoy 5 days of luxury in the Maldives with pristine beaches and overwater villas.',
      image: '/images/shimla.jpg',
      date: 'Sep 10, 2025',
    },
    {
      id: 2,
      title: 'Swiss Alps Adventure',
      description: 'Explore the stunning Swiss Alps with a 7-day skiing and sightseeing tour.',
      image: '/images/spain.jpg',
      date: 'Oct 15, 2025',
    },
    {
      id: 3,
      title: 'Cultural Japan Tour',
      description: 'Discover Japan’s heritage with a 10-day tour including Tokyo and Kyoto.',
      image: '/images/leh.jpg',
      date: 'Nov 5, 2025',
    },
    {
      id: 4,
      title: 'Cultural Japan Tour',
      description: 'Discover Japan’s heritage with a 10-day tour including Tokyo and Kyoto.',
      image: '/images/europe.jpg',
      date: 'Nov 5, 2025',
    },
  ]);

  return (
    <div className={styles.sliderContainer}>
      <h2 className={styles.sliderTitle}>Upcoming Trips</h2>
      <p className={styles.sliderDescription}>Explore our upcoming trips and plan your next adventure.</p>
      <Carousel
        showThumbs={false}
        autoPlay={true}
        infiniteLoop={true}
        interval={5000}
        showStatus={false}
        showIndicators={true}
        className={styles.carousel}
      >
        {trips.map((trip) => (
          <div key={trip.id} className={styles.slide}>
            <div className={styles.imageContainer}>
              <Image src={trip.image} alt={trip.title} className={styles.slideImage} width = {1000} height={500} />
            </div>
            <div className={styles.content}>
              <h3 className={styles.tripTitle}>{trip.title}</h3>
              <p className={styles.tripDescription}>{trip.description}</p>
              <p className={styles.tripDate}>Date: {trip.date}</p>
              <button className={styles.bookButton}>Book Now</button>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default UpcomingTripsSlider;