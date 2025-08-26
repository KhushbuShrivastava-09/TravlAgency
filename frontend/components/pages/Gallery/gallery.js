"use client";
import { useState } from "react";
import styles from "../../styles/Gallery/gallery.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Gallery() {
  const [activeTab, setActiveTab] = useState("tab1");

  const tabs = [
    { id: "tab1", label: "Nature", images: [] },
    { id: "tab2", label: "City", images: [] },
    { id: "tab3", label: "Architecture", images: [] },
    { id: "tab4", label: "Wildlife", images: [] },
  ];

  return (
    <>
      {/* Hero Section */}
      <div className={styles.heroSection}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <h1>Gallery</h1>
          <p>Explore stunning collections</p>
        </div>
      </div>

      {/* Main Content */}
      <div className={styles.contentWrapper}>
        <nav className={styles.breadcrumbs}>
          <Link href="/">Home</Link> <span>&gt;</span> <span>Gallery</span>
        </nav>

        {/* Tabs */}
        <div className={styles.tabs}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`${styles.tabButton} ${
                activeTab === tab.id ? styles.active : ""
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Contents */}
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`${styles.tabContent} ${
              activeTab === tab.id ? styles.active : ""
            }`}
          >
            <div className={styles.imageGallery}>
              {tab.images.map((src, index) => (
                <Image
                  key={index}
                  src={src}
                  alt={`${tab.label} ${index + 1}`}
                  className={`${styles.animatedImage} ${styles.visible}`}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
