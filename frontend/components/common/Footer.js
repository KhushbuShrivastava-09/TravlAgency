import styles from "../styles/Footer.module.css";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa"; 
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <div className={styles.footerSection}>
            <h3>Travabay</h3>
            <p>
            Travabay Holidays Your gateway to unforgettable journeys! From breathtaking domestic escapes to mesmerizing international adventures, we craft tailor-made travel experiences designed just for you. Explore. Dream. Discover with Travabay.
            </p>
          </div>
          {/* Column 2: Travel Specialists */}
          <div className={styles.footerSection}>
            <h3>Categories</h3>
            <ul>
              <li>
                <a href="#">
                  International Trips <span>&rarr;</span>
                </a>
                <hr className={styles.ruler} />
              </li>
              <li>
                <a href="#">
                  India Trips <span>&rarr;</span>
                </a>
                <hr className={styles.ruler} />
              </li>
              <li>
                <a href="#">
                  Weekend Trips <span>&rarr;</span>
                </a>
                <hr className={styles.ruler} />
              </li>
              <li>
                <a href="#">
                  Group Tours <span>&rarr;</span>
                </a>
                <hr className={styles.ruler} />
              </li>
              <li>
                <a href="#">
                  Honeymoon Packages <span>&rarr;</span>
                </a>
              </li>
            </ul>
            <div className={styles.socialIcons}>
              <a href="https://www.facebook.com/people/Travabay-Holidays/61555526094194/" className={styles.facebook}>
                <FaFacebookF />
              </a>
              <a href="https://www.instagram.com/travabay/" className={styles.instagram}>
                <FaInstagram />
              </a>
              <a href="https://www.linkedin.com/company/102466205/admin/page-posts/published/" className={styles.linkedin}>
                <FaLinkedinIn />
              </a>
            </div>
          </div>
          {/* Column 3: Quick links */}
          <div className={styles.footerSection}>
            <h3>Quick Links</h3>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
              <Link href="/about">About Us</Link>
              </li>
              <li>
              <Link href="/gallery">Gallery</Link>
              </li>
              <li>
              <Link href="/blogs">Blog</Link>
              </li>
              <li>
              <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          {/* Column 4: Newsletter */}
          <div className={styles.footerSection}>
            <h3>Blogs</h3>
            <p>Inspiration, ideas, news and your feedback.</p>
           
          </div>
        </div>
      </footer>
      <div className={styles.bottomBarWrapper}>
        <div className={styles.bottomBar}>
          <p>
            Copyright © 2025 ICEICO | <a href="#">Privacy Policy</a> |{" "}
            <a href="/about">About Us</a> | <a href="#">FAQ</a> |{" "}
            <a href="/contact">Contact Support</a>
          </p>
          <p>Designed by ICEICO</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
