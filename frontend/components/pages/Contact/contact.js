"use client";

import React, { useEffect, useRef } from "react";
import styles from "../../styles/Contact/contact.module.css";
// import Image from "next/image";
import {
  FaFacebookF,
  // FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  // FaPinterestP,
  // FaYoutube,
} from "react-icons/fa"; // Social icons


const Contact = () => {
  const contactRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const contact = contactRef.current;
      if (!contact) return;

      const sections = contact.querySelectorAll(`.${styles.contactInfo}, .${styles.contactForm}`);
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (sectionTop < windowHeight - 100) {
          section.classList.add(styles.visible);
        }
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.contactContainer} ref={contactRef}>
      {/* Left Section */}
      <div className={styles.contactInfo}>
        <h2>CONTACT INFO</h2>
        <p>
          Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
          molestie consequat, vel illum dolore eu feugiat nulla facilisis at
          vero eros et accumsan et iusto odio dignissim qui blandit praesent
          luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
        </p>

        <div className={styles.infoBlock}>
          <h3>ADDRESS</h3>
          <p>
            795 Fake Ave, Door 6 <br />
            Wonderland, CA 94107, USA
          </p>
          <a href="mailto:info@yourdomain.com">info@yourdomain.com</a>
        </div>

        <div className={styles.infoBlock}>
          <h3>PHONE</h3>
          <p>+440 875369208</p>
          <p>+440 353363114</p>
          <div className={styles.socialIcons}>
              <a href="https://www.facebook.com/people/Travabay-Holidays/61555526094194/" className={styles.facebook}>
                <FaFacebookF />
              </a>
              {/* <a href="#" className={styles.twitter}>
                <FaTwitter />
              </a> */}
              <a href="https://www.instagram.com/travabay/" className={styles.instagram}>
                <FaInstagram />
              </a>
              <a href="https://www.linkedin.com/company/102466205/admin/page-posts/published/" className={styles.linkedin}>
                <FaLinkedinIn />
              </a>
              {/* <a href="#" className={styles.pinterest}>
                <FaPinterestP />
              </a>
              <a href="#" className={styles.youtube}>
                <FaYoutube />
              </a> */}
            </div>
        </div>
      </div>

      {/* Right Section */}
      <div className={styles.contactForm}>
        <h2>CONTACT FORM</h2>
        <form>
          <input type="text" placeholder="Full Name" />
          <input type="email" placeholder="E-mail address" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">SEND MESSAGE</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;