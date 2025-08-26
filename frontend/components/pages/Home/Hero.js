'use client';
import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel CSS
import { FaPlane, FaHotel, FaCar, FaShip } from 'react-icons/fa'; // Professional icons
import styles from '../../styles/Home/Hero.module.css';

const Hero = () => {
  const [activeTab, setActiveTab] = useState('Flights');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

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
        <div className={styles.carouselSlide}>
          <div className={styles.overlayText}>
            <h2>Welcome To Our</h2>
            <h1>Travel Agency</h1>
            <p>Lorem ipsum dolor eleifend option congue nihil imperdiet doming id quod.</p>
          </div>
        </div>
        <div className={styles.carouselSlide}>
          <div className={styles.overlayText}>
            <h2>7 - Day Tour</h2>
            <h1>AMAZING CARIBBEAN</h1>
            <p>Lorem ipsum dolor eleifend option congue nihil imperdiet doming id quod.</p>
          </div>
        </div>
        <div className={styles.carouselSlide}>
          <div className={styles.overlayText}>
            <h2>10 - Day Tour</h2>
            <h1>EUROPE ADVENTURE</h1>
            <p>Explore the wonders of Europe with our guided tours.</p>
          </div>
        </div>
      </Carousel>

      {/* Tabs and Search Form */}
      <div className={styles.searchSection}>
        <div className={styles.tabs}>
          <button
            className={`${styles.tab} ${activeTab === 'Flights' ? styles.active : ''}`}
            onClick={() => handleTabChange('Flights')}
          >
            <FaPlane /> Flights
          </button>
          <button
            className={`${styles.tab} ${activeTab === 'Hotels' ? styles.active : ''}`}
            onClick={() => handleTabChange('Hotels')}
          >
            <FaHotel /> Hotels
          </button>
          <button
            className={`${styles.tab} ${activeTab === 'Cars' ? styles.active : ''}`}
            onClick={() => handleTabChange('Cars')}
          >
            <FaCar /> Cars
          </button>
          <button
            className={`${styles.tab} ${activeTab === 'Cruises' ? styles.active : ''}`}
            onClick={() => handleTabChange('Cruises')}
          >
            <FaShip /> Cruises
          </button>
        </div>

        {/* Conditional Search Form based on active tab */}
        <form className={styles.searchForm}>
          {activeTab === 'Flights' && (
            <div className={styles.formFields}>
              <div className={styles.formGroup}>
                <label>From City/Airport</label>
                <input type="text" placeholder="Enter a departure city or airport" />
              </div>
              <div className={styles.formGroup}>
                <label>To City/Airport</label>
                <input type="text" placeholder="Enter a destination city or airport" />
              </div>
              <div className={styles.formGroup}>
                <label>Departure Date</label>
                <input type="date" />
              </div>
              <div className={styles.formGroup}>
                <label>Return Date</label>
                <input type="date" />
              </div>
              <div className={styles.formGroup}>
                <label>Adults</label>
                <select>
                  <option>1</option>
                  <option>2</option>
                </select>
              </div>
              <button type="submit" className={styles.searchButton}>SEARCH</button>
            </div>
          )}
          {activeTab === 'Hotels' && (
            <div className={styles.formFields}>
              <div className={styles.formGroup}>
                <label>City or Hotel Name</label>
                <input type="text" placeholder="Enter a destination or hotel name" />
              </div>
              <div className={styles.formGroup}>
                <label>Check-In</label>
                <input type="date" />
              </div>
              <div className={styles.formGroup}>
                <label>Check-Out</label>
                <input type="date" />
              </div>
              <div className={styles.formGroup}>
                <label>Adult</label>
                <select>
                  <option>1</option>
                  <option>2</option>
                </select>
              </div>
              <button type="submit" className={styles.searchButton}>SEARCH</button>
            </div>
          )}
          {activeTab === 'Cars' && (
            <div className={styles.formFields}>
              <div className={styles.formGroup}>
                <label>Pickup Location</label>
                <input type="text" placeholder="Enter pickup location" />
              </div>
              <div className={styles.formGroup}>
                <label>Pickup Date</label>
                <input type="date" />
              </div>
              <div className={styles.formGroup}>
                <label>Return Date</label>
                <input type="date" />
              </div>
              <div className={styles.formGroup}>
                <label>Car Type</label>
                <select>
                  <option>Economy</option>
                  <option>Luxury</option>
                </select>
              </div>
              <button type="submit" className={styles.searchButton}>SEARCH</button>
            </div>
          )}
          {activeTab === 'Cruises' && (
            <div className={styles.formFields}>
              <div className={styles.formGroup}>
                <label>Destination</label>
                <input type="text" placeholder="Enter a destination" />
              </div>
              <div className={styles.formGroup}>
                <label>Departure Date</label>
                <input type="date" />
              </div>
              <div className={styles.formGroup}>
                <label>Duration</label>
                <select>
                  <option>7 Days</option>
                  <option>14 Days</option>
                </select>
              </div>
              <div className={styles.formGroup}>
                <label>Adults</label>
                <select>
                  <option>1</option>
                  <option>2</option>
                </select>
              </div>
              <button type="submit" className={styles.searchButton}>SEARCH</button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Hero;