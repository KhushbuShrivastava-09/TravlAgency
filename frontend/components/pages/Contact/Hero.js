"use client";
import React, { useState } from "react";
import styles from "../../styles/Contact/Hero.module.css";

const ContactBanner = () => {
  const [mapError, setMapError] = useState(false);

  return (
    <div className={styles.bannerWrapper}>
      {!mapError ? (
        <iframe
          src="https://www.google.com/maps/embed?pb=..."
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          onError={() => setMapError(true)}
        ></iframe>
      ) : (
        <div className={styles.fallback}>
          <h2>Oops! Something went wrong.</h2>
          <p>Google Maps is not available right now. Please try again later.</p>
        </div>
      )}
       
    </div>
  );
};

export default ContactBanner;
