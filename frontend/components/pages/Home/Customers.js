"use client";
import { useEffect } from "react";
import styles from "../../styles/Customers.module.css";
import Image from "next/image";

const HappyCustomers = () => {
  useEffect(() => {
    // Animate progress bars on mount
    const bars = document.querySelectorAll(`.${styles.progressFill}`);
    bars.forEach((bar) => {
      const width = bar.getAttribute("data-width");
      bar.style.width = width;
    });
  }, []);

  return (
    <div className={styles.happyCustomers}>
      <div className={styles.contentWrapper}>
        {/* Left Section (Image) */}
        <div className={styles.leftSection}>
          <Image
            src="/images/customers.png"
            alt="Happy Couple"
            width={500}
            height={400}
            className={styles.customerImage}
          />
        </div>

        {/* Right Section */}
        <div className={styles.rightSection}>
          <h2>HAPPY CUSTOMERS</h2>
          <p className={styles.subtitle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
            aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud
            exerci tation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            <br /><br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
          </p>

          {/* Satisfaction Bars */}
          <div className={styles.satisfactionBars}>
            <div className={styles.bar}>
              <span>Flights</span>
              <div className={styles.progressWrapper}>
                <div className={styles.progress}>
                  <div className={styles.progressFill} data-width="94%"></div>
                </div>
                <span className={styles.percentage}>94%</span>
              </div>
            </div>
            <div className={styles.bar}>
              <span>Hotels</span>
              <div className={styles.progressWrapper}>
                <div className={styles.progress}>
                  <div className={styles.progressFill} data-width="87%"></div>
                </div>
                <span className={styles.percentage}>87%</span>
              </div>
            </div>
            <div className={styles.bar}>
              <span>Cars</span>
              <div className={styles.progressWrapper}>
                <div className={styles.progress}>
                  <div className={styles.progressFill} data-width="48%"></div>
                </div>
                <span className={styles.percentage}>48%</span>
              </div>
            </div>
            <div className={styles.bar}>
              <span>Cruises</span>
              <div className={styles.progressWrapper}>
                <div className={styles.progress}>
                  <div className={styles.progressFill} data-width="51%"></div>
                </div>
                <span className={styles.percentage}>51%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HappyCustomers;
