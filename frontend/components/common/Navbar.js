"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import styles from "../styles/Navbar.module.css";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import Modal from "../../components/CorporateModal"; // Adjust path as needed
import { motion, AnimatePresence } from "framer-motion"; // Import Framer Motion

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isCorporateModalOpen, setIsCorporateModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [isForgotPasswordModalOpen, setIsForgotPasswordModalOpen] = useState(false);
  
  const openCorporateModal = () => setIsCorporateModalOpen(true);
  const closeCorporateModal = () => setIsCorporateModalOpen(false);

  const openLoginModal = () => setIsLoginModalOpen(true);
  const closeLoginModal = () => setIsLoginModalOpen(false);

  const openRegisterModal = () => setIsRegisterModalOpen(true);
  const closeRegisterModal = () => setIsRegisterModalOpen(false);

  const openForgotPasswordModal = () => setIsForgotPasswordModalOpen(true);
  const closeForgotPasswordModal = () => setIsForgotPasswordModalOpen(false);

  return (
    <header className={styles.header}>
      {/* TopBar */}
      <div className={styles.topBar}>
        <div className={styles.contactInfo}>
          <span className={styles.contactItem}>
            <FaEnvelope /> support@travelagency.com |
          </span>
          <span className={styles.contactItem}>
            <FaPhoneAlt /> +917 3386831
          </span>
        </div>
        <div className={styles.languageSocial}>
          <div className={styles.socialIcons}>
            <a
              href="https://www.facebook.com/people/Travabay-Holidays/61555526094194/"
              className={styles.facebook}
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/travabay/"
              className={styles.instagram}
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/company/102466205/admin/page-posts/published/"
              className={styles.linkedin}
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* MainNav */}
      <div className={styles.mainNav}>
        <div className={styles.logo}>
          <Link href="/" className={styles.logoLink}>
            <Image
              src="/images/logo.png"
              alt="Travel Agency Logo"
              width={150}
              height={50}
              className={styles.logoImage}
            />
          </Link>
        </div>
        <div
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Desktop Nav Links */}
        <nav className={styles.navLinks}>
          <Link href="/upcomingtrips" className={styles.navLink} style={{ color: "#157DC2" }}>
            Upcoming Trips
          </Link>
          <Link href="/about" className={styles.navLink}>
            About Us
          </Link>
          <Link href="/gallery" className={styles.navLink}>
            Gallery
          </Link>
          <Link href="/corporate" onClick={(e) => { e.preventDefault(); openCorporateModal(); }} className={styles.navLink}>
            Corporate Bookings
          </Link>
          <Link href="/blogs" className={styles.navLink}>
            Blog
          </Link>
          <Link href="/contact" className={styles.navLink}>
            Contact Us
          </Link>
          <Link href="/login" onClick={(e) => { e.preventDefault(); openLoginModal(); }} className={styles.navLink}>
            LogIn
          </Link>
          <Link href="/register" onClick={(e) => { e.preventDefault(); openRegisterModal(); }} className={styles.navLink}>
            Register
          </Link>
        </nav>
      </div>

      {/* BottomBar Categories (Desktop Only) */}
      <div className={styles.bottomBar}>
        <div className={styles.categoryLinks}>
          <div className={styles.categoryDropdown}>
            <Link href="/international" className={styles.categoryLink}>
              International Trips ▾
            </Link>
            <div className={styles.categoryDropdownContent}>
              <Link href="/international/europe" className={styles.dropdownItem}>
                Europe
              </Link>
              <Link href="/international/asia" className={styles.dropdownItem}>
                Asia
              </Link>
              <Link href="/international/america" className={styles.dropdownItem}>
                America
              </Link>
            </div>
          </div>

          <div className={styles.categoryDropdown}>
            <Link href="/india" className={styles.categoryLink}>
              India Trips ▾
            </Link>
            <div className={styles.categoryDropdownContent}>
              <Link href="/india/north" className={styles.dropdownItem}>
                North India
              </Link>
              <Link href="/india/south" className={styles.dropdownItem}>
                South India
              </Link>
              <Link href="/india/east" className={styles.dropdownItem}>
                East India
              </Link>
            </div>
          </div>

          <div className={styles.categoryDropdown}>
            <Link href="/weekend" className={styles.categoryLink}>
              Weekend Trips ▾
            </Link>
            <div className={styles.categoryDropdownContent}>
              <Link href="/weekend/hills" className={styles.dropdownItem}>
                Hill Stations
              </Link>
              <Link href="/weekend/beach" className={styles.dropdownItem}>
                Beaches
              </Link>
              <Link href="/weekend/city" className={styles.dropdownItem}>
                City Breaks
              </Link>
            </div>
          </div>

          <div className={styles.categoryDropdown}>
            <Link href="/group" className={styles.categoryLink}>
              Group Tours ▾
            </Link>
            <div className={styles.categoryDropdownContent}>
              <Link href="/group/family" className={styles.dropdownItem}>
                Family Tours
              </Link>
              <Link href="/group/friends" className={styles.dropdownItem}>
                Friends Tours
              </Link>
              <Link href="/group/corporate" className={styles.dropdownItem}>
                Corporate Tours
              </Link>
            </div>
          </div>

          <Link href="/honeymoon" className={styles.categoryLink}>
            Honeymoon Packages
          </Link>
        </div>
      </div>

      {/* Mobile Combined Menu */}
      {menuOpen && (
        <div className={styles.mobileMenu}>
          <nav className={styles.mobileNavLinks}>
            <Link href="/upcomingtrips" className={styles.navLink}>
              Upcoming Trips
            </Link>
            <Link href="/about" className={styles.navLink}>
              About Us
            </Link>
            <Link href="/gallery" className={styles.navLink}>
              Gallery
            </Link>
            <Link href="/corporate" onClick={(e) => { e.preventDefault(); openCorporateModal(); }} className={styles.navLink}>
              Corporate Bookings
            </Link>
            <Link href="/blogs" className={styles.navLink}>
              Blog
            </Link>
            <Link href="/contact" className={styles.navLink}>
              Contact Us
            </Link>
            <Link href="/login" onClick={(e) => { e.preventDefault(); openLoginModal(); }} className={styles.navLink}>
              LogIn
            </Link>
            <Link href="/register" onClick={(e) => { e.preventDefault(); openRegisterModal(); }} className={styles.navLink}>
              Register
            </Link>
          </nav>

          <div className={styles.mobileCategories}>
            <p className={styles.mobileTitle}>Categories</p>
            <div className={styles.categoryLinks}>
              <div className={styles.categoryDropdown}>
                <Link href="/international" className={styles.categoryLink}>
                  International Trips ▾
                </Link>
                <div className={styles.categoryDropdownContent}>
                  <Link href="/international/europe" className={styles.dropdownItem}>
                    Europe
                  </Link>
                  <Link href="/international/asia" className={styles.dropdownItem}>
                    Asia
                  </Link>
                  <Link href="/international/america" className={styles.dropdownItem}>
                    America
                  </Link>
                </div>
              </div>

              <div className={styles.categoryDropdown}>
                <Link href="/india" className={styles.categoryLink}>
                  India Trips ▾
                </Link>
                <div className={styles.categoryDropdownContent}>
                  <Link href="/india/north" className={styles.dropdownItem}>
                    North India
                  </Link>
                  <Link href="/india/south" className={styles.dropdownItem}>
                    South India
                  </Link>
                  <Link href="/india/east" className={styles.dropdownItem}>
                    East India
                  </Link>
                </div>
              </div>

              <div className={styles.categoryDropdown}>
                <Link href="/weekend" className={styles.categoryLink}>
                  Weekend Trips ▾
                </Link>
                <div className={styles.categoryDropdownContent}>
                  <Link href="/weekend/hills" className={styles.dropdownItem}>
                    Hill Stations
                  </Link>
                  <Link href="/weekend/beach" className={styles.dropdownItem}>
                    Beaches
                  </Link>
                  <Link href="/weekend/city" className={styles.dropdownItem}>
                    City Breaks
                  </Link>
                </div>
              </div>

              <div className={styles.categoryDropdown}>
                <Link href="/group" className={styles.categoryLink}>
                  Group Tours ▾
                </Link>
                <div className={styles.categoryDropdownContent}>
                  <Link href="/group/family" className={styles.dropdownItem}>
                    Family Tours
                  </Link>
                  <Link href="/group/friends" className={styles.dropdownItem}>
                    Friends Tours
                  </Link>
                  <Link href="/group/corporate" className={styles.dropdownItem}>
                    Corporate Tours
                  </Link>
                </div>
              </div>

              <Link href="/honeymoon" className={styles.categoryLink}>
                Honeymoon Packages
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Corporate Modal with Animation */}
      <AnimatePresence>
        {isCorporateModalOpen && (
          <Modal isOpen={isCorporateModalOpen} onClose={closeCorporateModal}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.3 }}
              className={styles.modalContent}
            >
              <button className={styles.closeButton} onClick={closeCorporateModal}>
                &times;
              </button>
              <h2 className={styles.modalTitle}>Corporate Booking</h2>
              <form className={styles.modalForm}>
                <div className={styles.formGroup}>
                  <label>Name</label>
                  <input type="text" className={styles.formInput} placeholder="Enter name" />
                </div>
                <div className={styles.formGroup}>
                  <label>Email Id</label>
                  <input type="email" className={styles.formInput} placeholder="Enter email" />
                </div>
                <div className={styles.formGroup}>
                  <label>Phone Number</label>
                  <input type="tel" className={styles.formInput} placeholder="Enter phone number" />
                </div>
                <div className={styles.formGroup}>
                  <label>Company Name</label>
                  <input type="text" className={styles.formInput} placeholder="Enter company name" />
                </div>
                <div className={styles.formGroup}>
                  <label>Destination</label>
                  <input type="text" className={styles.formInput} placeholder="Enter destination" />
                </div>
                <button type="submit" className={styles.submitButton}>
                  Send Enquiry
                </button>
              </form>
            </motion.div>
          </Modal>
        )}
      </AnimatePresence>

      {/* Login Modal with Animation */}
      <AnimatePresence>
        {isLoginModalOpen && (
          <Modal isOpen={isLoginModalOpen} onClose={closeLoginModal}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.3 }}
              className={styles.modalContent}
            >
              <button className={styles.closeButton} onClick={closeLoginModal}>
                &times;
              </button>
              <h2 className={styles.modalTitle}>Log In</h2>
              <form className={styles.modalForm}>
                <div className={styles.formGroup}>
                  <label>Email</label>
                  <input type="email" className={styles.formInput} placeholder="Enter your email" />
                </div>
                <div className={styles.formGroup}>
                  <label>Password</label>
                  <input type="password" className={styles.formInput} placeholder="Enter your password" />
                </div>
                <button type="submit" className={styles.submitButton}>
                  Log In
                </button>
                <p className={styles.forgotPassword}>
                  <Link href="#" onClick={(e) => { e.preventDefault(); openForgotPasswordModal(); }}>Forgot Password?</Link>
                </p>
              </form>
            </motion.div>
          </Modal>
        )}
      </AnimatePresence>

      {/* Register Modal with Animation */}
      <AnimatePresence>
        {isRegisterModalOpen && (
          <Modal isOpen={isRegisterModalOpen} onClose={closeRegisterModal}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.3 }}
              className={styles.modalContent}
            >
              <button className={styles.closeButton} onClick={closeRegisterModal}>
                &times;
              </button>
              <h2 className={styles.modalTitle}>Register</h2>
              <form className={styles.modalForm}>
                <div className={styles.formGroup}>
                  <label>Full Name</label>
                  <input type="text" className={styles.formInput} placeholder="Enter your full name" />
                </div>
                <div className={styles.formGroup}>
                  <label>Email</label>
                  <input type="email" className={styles.formInput} placeholder="Enter your email" />
                </div>
                <div className={styles.formGroup}>
                  <label>Password</label>
                  <input type="password" className={styles.formInput} placeholder="Create a password" />
                </div>
                <div className={styles.formGroup}>
                  <label>Phone Number</label>
                  <input type="tel" className={styles.formInput} placeholder="Enter phone number" />
                </div>
                <button type="submit" className={styles.submitButton}>
                  Register
                </button>
              </form>
            </motion.div>
          </Modal>
        )}
      </AnimatePresence>

      {/* Forgot Password Modal with Animation */}
      <AnimatePresence>
        {isForgotPasswordModalOpen && (
          <Modal isOpen={isForgotPasswordModalOpen} onClose={closeForgotPasswordModal}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.3 }}
              className={styles.modalContent}
            >
              <button className={styles.closeButton} onClick={closeForgotPasswordModal}>
                &times;
              </button>
              <h2 className={styles.modalTitle}>Forgot Password</h2>
              <form className={styles.modalForm}>
                <div className={styles.formGroup}>
                  <label>Email</label>
                  <input type="email" className={styles.formInput} placeholder="Enter your email" />
                </div>
                <button type="submit" className={styles.submitButton}>
                  Reset Password
                </button>
                <p className={styles.forgotPassword}>
                  <Link href="#" onClick={(e) => { e.preventDefault(); closeForgotPasswordModal(); openLoginModal(); }}>Back to Log In</Link>
                </p>
              </form>
            </motion.div>
          </Modal>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;