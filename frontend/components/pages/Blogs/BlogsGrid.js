"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "../../styles/Blogs/BlogsGrid.module.css";

const blogs = [
  {
    id: 1,
    image: "/images/leh.jpg",
    date: "22 Aug, 2025",
    readTime: "4 minutes read",
    title: "Shopping in Hoi An, Vietnam: Unique Things to Buy in 2025",
    description:
      "Explore shopping in Hoi An with our ultimate guide. From bustling markets to hidden boutiques, discover...",
    tags: ["shopping", "Travel", "Vietnam"],
    link: "/blogs/shopping-in-hoi-an",
  },
  {
    id: 2,
    image: "/images/shimla.jpg",
    date: "22 Aug, 2025",
    readTime: "5 minutes read",
    title: "Best Places to Visit in India in October: Top Travel Picks",
    description:
      "October in India brings cool breezes, festive colors and stunning escapes from Himalayan hills to calm tropic...",
    tags: ["General", "Places To Visit"],
    link: "/blogs/places-to-visit-in-october",
  },
  {
    id: 3,
    image: "/images/spain.jpg",
    date: "21 Aug, 2025",
    readTime: "6 minutes read",
    title: "55 Fantastic Places To Visit In Delhi 2025",
    description:
      "Discover the best places to visit in Delhi with monuments, temples, and parks! Explore incredible...",
    tags: ["Delhi", "Places To Visit", "Travel"],
    link: "/blogs/places-to-visit-in-delhi",
  },
];

export default function BlogsGrid() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    // Fetch destinations from backend API
    // Replace '/api/destinations' with your actual backend endpoint
    fetch('/api/destinations')
      .then((res) => res.json())
      .then((data) => setDestinations(data))
      .catch((error) => console.error('Error fetching destinations:', error));
  }, []);

  return (
    <div>
      {/* Navigation Tabs and Search Bar */}
      <div className={styles.navWrapper}>
        <div className={styles.tabs}>
          <div
            className={`${styles.tab} ${styles.dropdownTab}`}
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            Destinations ▼
            {isDropdownOpen && (
              <div className={styles.dropdownMenu}>
                {destinations.length > 0 ? (
                  destinations.map((dest) => (
                    <Link
                      key={dest.id}
                      href={dest.link || `/destinations/${dest.slug}`}
                      className={styles.dropdownItem}
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      {dest.name}
                    </Link>
                  ))
                ) : (
                  <div className={styles.dropdownItem}>Loading...</div>
                )}
              </div>
            )}
          </div>
          <Link href="/blogs" className={styles.tab}>
            All Blogs
          </Link>
          <Link href="/places-to-visit" className={styles.tab}>
            Places to Visit
          </Link>
          <Link href="/things-to-do" className={styles.tab}>
            Things to Do
          </Link>
          <Link href="/places-to-eat" className={styles.tab}>
            Places to Eat
          </Link>
          <Link href="/places-to-shop" className={styles.tab}>
            Places to Shop
          </Link>
          <Link href="/travel-journal" className={styles.tab}>
            Travel Journal
          </Link>
        </div>
        <div className={styles.searchWrapper}>
          <input
            type="text"
            placeholder="Search"
            className={styles.searchInput}
          />
        </div>
      </div>

      {/* Blog Grid */}
      <div className={styles.gridWrapper}>
        {blogs.map((blog) => (
          <div key={blog.id} className={styles.card}>
            <div className={styles.imageWrapper}>
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                className={styles.image}
              />
            </div>
            <div className={styles.content}>
              <p className={styles.meta}>
                {blog.date} • {blog.readTime}
              </p>
              <h2 className={styles.title}>{blog.title}</h2>
              <p className={styles.description}>{blog.description}</p>
              <div className={styles.tags}>
                {blog.tags.map((tag, i) => (
                  <span key={i} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>
              <Link href={blog.link} className={styles.readMore}>
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}