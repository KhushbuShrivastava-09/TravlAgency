'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import styles from '../styles/Navbar.module.css';
import { FaEnvelope, FaPhoneAlt, FaFacebookF, FaInstagram, FaLinkedinIn, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      {/* Part 1: Contact Info with Language and Social Icons */}
      <div className={styles.topBar}>
        <div className={styles.contactInfo}>
          <span className={styles.contactItem}><FaEnvelope /> support@travelagency.com |</span>
          <span className={styles.contactItem}><FaPhoneAlt /> +917 3386831</span>
        </div>
        <div className={styles.languageSocial}>
          <div className={styles.languageDropdown}>
            <span className={styles.language}>
              <Image src="/uk-flag.svg" alt="UK Flag" width={16} height={12} className={styles.flag} /> English ▾ |
            </span>
            <div className={styles.dropdownContent}>
              <Link href="#"><Image src="/es-flag.svg" alt="Spain Flag" width={16} height={12} className={styles.flag} /> Spanish</Link>
              <Link href="#"><Image src="/fr-flag.svg" alt="France Flag" width={16} height={12} className={styles.flag} /> French</Link>
            </div>
          </div>
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
      </div>

      {/* Part 2: Main Navbar with Logo and Links */}
      <div className={styles.mainNav}>
        <div className={styles.logo}>
          <Link href = "/" className={styles.logoLink}><Image src="/images/logo.png" alt="Travel Agency Logo" width={150} height={50} className={styles.logoImage} /></Link>
        </div>
        <div className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
        <nav className={`${styles.navLinks} ${menuOpen ? styles.showMenu : ''}`}>
          <div className={styles.navDropdown}>
            <Link href="/" className={styles.navLink} style={{ color: '#55C3BC' }}>Upcoming Trips</Link>
          </div>
          <Link href="/about" className={styles.navLink}>About Us</Link>
          <Link href="/gallery" className={styles.navLink}>Gallery</Link>
          <Link href="/gallery" className={styles.navLink}>Corporate Bookings</Link>
          <Link href="/blogs" className={styles.navLink}>Blog</Link>
          <Link href="/contact" className={styles.navLink}>Contact Us</Link>
        </nav>
      </div>

      {/* Part 3: Category Links Only */}
      <div className={styles.bottomBar}>
        <div className={styles.categoryLinks}>
          <div className={styles.categoryDropdown}>
            <Link href="/international" className={styles.categoryLink}>International Trips ▾</Link>
            <div className={styles.categoryDropdownContent}>
              <Link href="/international/europe" className={styles.dropdownItem}>Europe</Link>
              <Link href="/international/asia" className={styles.dropdownItem}>Asia</Link>
              <Link href="/international/america" className={styles.dropdownItem}>America</Link>
            </div>
          </div>
          <div className={styles.categoryDropdown}>
            <Link href="/india" className={styles.categoryLink}>India Trips ▾</Link>
            <div className={styles.categoryDropdownContent}>
              <Link href="/india/north" className={styles.dropdownItem}>North India</Link>
              <Link href="/india/south" className={styles.dropdownItem}>South India</Link>
              <Link href="/india/east" className={styles.dropdownItem}>East India</Link>
            </div>
          </div>
          <div className={styles.categoryDropdown}>
            <Link href="/weekend" className={styles.categoryLink}>Weekend Trips ▾</Link>
            <div className={styles.categoryDropdownContent}>
              <Link href="/weekend/hills" className={styles.dropdownItem}>Hill Stations</Link>
              <Link href="/weekend/beach" className={styles.dropdownItem}>Beaches</Link>
              <Link href="/weekend/city" className={styles.dropdownItem}>City Breaks</Link>
            </div>
          </div>
          <div className={styles.categoryDropdown}>
            <Link href="/group" className={styles.categoryLink}>Group Tours ▾</Link>
            <div className={styles.categoryDropdownContent}>
              <Link href="/group/family" className={styles.dropdownItem}>Family Tours</Link>
              <Link href="/group/friends" className={styles.dropdownItem}>Friends Tours</Link>
              <Link href="/group/corporate" className={styles.dropdownItem}>Corporate Tours</Link>
            </div>
          </div>
          <Link href="/honeymoon" className={styles.categoryLink}>Honeymoon Packages</Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;