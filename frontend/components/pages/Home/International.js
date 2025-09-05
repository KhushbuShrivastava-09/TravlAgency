"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css/autoplay";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "../../styles/Home/International.module.css";

const destinations = [
  { name: "Bali", price: "44,999", img: "/images/leh.jpg" },
  { name: "Maldives", price: "74,999", img: "/images/shimla.jpg" },
  { name: "Singapore", price: "34,999", img: "/images/spain.jpg" },
  { name: "Thailand", price: "44,999", img: "/images/europe.jpg" },
  { name: "Vietnam", price: "57,999", img: "/images/leh.jpg" },
  { name: "Bali", price: "44,999", img: "/images/leh.jpg" },
  { name: "Maldives", price: "74,999", img: "/images/shimla.jpg" },
  { name: "Singapore", price: "34,999", img: "/images/spain.jpg" },
];

export default function RomanticEscapes() {
  return (
    <div className={styles.sectionWrapper}>
      <div className={styles.wrapper}>
        {/* HERO SECTION */}
        <div className={styles.hero}>
          {/* Dummy backend media (image + video setup) */}
          <div className={styles.mediaWrapper}>
            {/* if image */}
            {/* <Image
              src="https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg"
              alt="Hero Background" width={300} height={300}
              className={styles.mediaImage}
            /> */}
            {/* if video */}
            <video autoPlay loop muted playsInline className={styles.mediaVideo}>
              <source src="https://wanderon-video.gumlet.io/header-video+(1080p).mp4" />
            </video>
          </div>

          <div className={styles.overlay}></div>
          <div className={styles.heroContent}>
            <h1>International Trips</h1>
            <p>Discover the world, one destination at a time</p>
            <button className={styles.exploreBtn}>Explore</button>
          </div>
        </div>

        {/* SLIDER SECTION */}
        <div className={styles.sliderWrapper}>
          <Swiper
            spaceBetween={20}
            navigation={true}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            modules={[Navigation, Pagination, Autoplay]}
            className={styles.mySwiper}
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 5 }, // 👈 5 cards ek sath desktop pe
            }}
          >
            {destinations.map((d, i) => (
              <SwiperSlide key={i}>
                <div className={styles.card}>
                  <div className={styles.imageWrapper}>
                    <Image
                      src={d.img}
                      alt={d.name}
                      width={300}
                      height={350}
                      className={styles.cardImg}
                    />
                  </div>
                  <div className={styles.cardContent}>
                    <h3>{d.name}</h3>
                    <p>Starting Price Rs. {d.price}/-</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
