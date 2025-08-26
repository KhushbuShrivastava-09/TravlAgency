'use client';
import React from 'react';
import styles from '../../styles/Home/WhyBest.module.css';
import { FaPlane, FaCompass, FaFlag, FaComments } from 'react-icons/fa';


const WhyBest = () => {
  const features = [
    {
      icon: <FaPlane />,
      title: 'Amazing Travel',
      description: 'Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim.',
      link: '#'
    },
    {
      icon: <FaCompass />,
      title: 'Discover',
      description: 'Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim.',
      link: '#'
    },
    {
      icon: <FaFlag />,
      title: 'Book Your Trip',
      description: 'Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim.',
      link: '#'
    },
    {
      icon: <FaComments />,
      title: 'Nice Support',
      description: 'Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim.',
      link: '#'
    }
  ];

  return (
    <section className={styles.whyBestSection}>
      <h2 className={styles.title}>WHY TO CHOOSE US</h2>
      <p className={styles.subtitle}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
        laoreet dolore magna aliquam erat volutpat.
      </p>
      <div className={styles.cardsContainer}>
        {features.map((feature, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.icon}>{feature.icon}</div>
            <h3 className={styles.cardTitle}>{feature.title}</h3>
            <p className={styles.cardDescription}>{feature.description}</p>
            <a href={feature.link} className={styles.readMore}>Read More →</a>
          </div>
        ))}
      </div>
      
    </section>
  );
};

export default WhyBest;