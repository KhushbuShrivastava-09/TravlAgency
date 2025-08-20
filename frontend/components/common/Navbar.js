'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import styles from '../styles/Navbar.module.css';
import { FaEnvelope, FaPhoneAlt, FaFacebookF, FaTwitter, FaGooglePlusG, FaInstagram, FaVimeoV, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      {/* Top Bar */}
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
            <FaFacebookF className={styles.icon} />
            <FaTwitter className={styles.icon} />
            <FaGooglePlusG className={styles.icon} />
            <FaInstagram className={styles.icon} />
            <FaVimeoV className={styles.icon} />
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className={styles.mainNav}>
        {/* Logo */}
        <div className={styles.logo}>
          <Image src="/images/logo.jpg" alt="Travel Agency Logo" width={150} height={50} className={styles.logoImage} />
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Links */}
        <nav className={`${styles.navLinks} ${menuOpen ? styles.showMenu : ''}`}>
          <div className={styles.navDropdown}>
            <Link href="/" className={styles.navLink} style={{ color: '#55C3BC' }}>Home ▾</Link>
            <div className={styles.dropdownContent}>
              <Link href="#">Home 1</Link>
              <Link href="#">Home 2</Link>
              <Link href="#">Home 3</Link>
            </div>
          </div>
          <Link href="/about" className={styles.navLink}>About Us</Link>
          <Link href="#" className={styles.navLink}>Gallery</Link>
          <div className={styles.navDropdown}>
            <Link href="#" className={styles.navLink}>Pages ▾</Link>
            <div className={styles.dropdownContent}>
              <Link href="#">Page 1</Link>
              <Link href="#">Page 2</Link>
              <Link href="#">Page 3</Link>
            </div>
          </div>
          <div className={styles.navDropdown}>
            <Link href="#" className={styles.navLink}>Blog ▾</Link>
            <div className={styles.dropdownContent}>
              <Link href="#">Blog Post 1</Link>
              <Link href="#">Blog Post 2</Link>
              <Link href="#">Blog Post 3</Link>
            </div>
          </div>
          <Link href="/contact" className={styles.navLink}>Contacts</Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
