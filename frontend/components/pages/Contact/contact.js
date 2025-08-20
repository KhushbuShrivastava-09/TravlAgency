"use client";

import React, { useEffect, useRef } from "react";
import styles from "../../styles/Contact/contact.module.css";
// import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faGooglePlusG, faDribbble, faInstagram } from "@fortawesome/free-brands-svg-icons";

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
          <div className={styles.socials}>
            <FontAwesomeIcon icon={faFacebookF} className={styles.socialIcon} />
            <FontAwesomeIcon icon={faTwitter} className={styles.socialIcon} />
            <FontAwesomeIcon icon={faGooglePlusG} className={styles.socialIcon} />
            <FontAwesomeIcon icon={faDribbble} className={styles.socialIcon} />
            <FontAwesomeIcon icon={faInstagram} className={styles.socialIcon} />
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