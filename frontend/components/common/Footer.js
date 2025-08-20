import styles from "../styles/Footer.module.css";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
  FaYoutube,
} from "react-icons/fa"; // Social icons

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <div className={styles.footerSection}>
            <h3>Travel Agency</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat.
            </p>
          </div>
          {/* Column 2: Travel Specialists */}
          <div className={styles.footerSection}>
            <h3>Travel Specialists</h3>
            <ul>
              <li>
                <a href="#">
                  First Class Flights <span>&rarr;</span>
                </a>
                <hr className={styles.ruler} />
              </li>
              <li>
                <a href="#">
                  Accessible Travel <span>&rarr;</span>
                </a>
                <hr className={styles.ruler} />
              </li>
              <li>
                <a href="#">
                  Amazing Cruises <span>&rarr;</span>
                </a>
              </li>
            </ul>
            <div className={styles.socialIcons}>
              <a href="#" className={styles.facebook}>
                <FaFacebookF />
              </a>
              <a href="#" className={styles.twitter}>
                <FaTwitter />
              </a>
              <a href="#" className={styles.instagram}>
                <FaInstagram />
              </a>
              <a href="#" className={styles.linkedin}>
                <FaLinkedinIn />
              </a>
              <a href="#" className={styles.pinterest}>
                <FaPinterestP />
              </a>
              <a href="#" className={styles.youtube}>
                <FaYoutube />
              </a>
            </div>
          </div>
          {/* Column 3: Our Twitter */}
          <div className={styles.footerSection}>
            <h3>Our Twitter</h3>
            <ul>
              <li>
                <a href="#">@travel Lorem ipsum dolor sit amet.</a>
              </li>
              <li>
                consectetur adipiscing elit <span>5 minutes ago</span>
              </li>
              <li>
                <a href="#">@leo Nam liber tempor cum soluta</a>
              </li>
            </ul>
          </div>
          {/* Column 4: Newsletter */}
          <div className={styles.footerSection}>
            <h3>Newsletter</h3>
            <p>Inspiration, ideas, news and your feedback.</p>
            <input
              type="email"
              placeholder="Email Address"
              className={styles.emailInput}
            />
            <button className={styles.submitButton}>SUBMIT</button>
            <p>
              1-917-338-6831 <br />
              <a href="#">support@templates-support.com</a>
            </p>
          </div>
        </div>
      </footer>
      <div className={styles.bottomBarWrapper}>
        <div className={styles.bottomBar}>
          <p>
            Copyright © 2017 MECOVACHE | <a href="#">Privacy Policy</a> |{" "}
            <a href="#">About Us</a> | <a href="#">FAQ</a> |{" "}
            <a href="#">Contact Support</a>
          </p>
          <p>Designed by MECOVACHE</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
