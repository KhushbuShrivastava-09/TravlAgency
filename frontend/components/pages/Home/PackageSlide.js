"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "../../styles/Home/PackageSlide.module.css";

const destinations = [
  { name: "Bali", price: "44,999", img: "/images/leh.jpg" },
  { name: "Maldives", price: "74,999", img: "/images/shimla.jpg" },
  { name: "Singapore", price: "34,999", img: "/images/spain.jpg" },
  { name: "Thailand", price: "44,999", img: "/images/europe.jpg" },
  { name: "Vietnam", price: "57,999", img: "/images/leh.jpg" },
];

export default function RomanticEscapes() {
  return (
    <div className={styles.wrapper}>
      {/* HERO SECTION */}
      <div className={styles.hero}>
        <div className={styles.overlay}></div>
        <div className={styles.heroContent}>
          <h1>Romantic Escapes</h1>
          <p>Where Forever Begins...Together!</p>
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
            1280: { slidesPerView: 4 },
          }}
        >
          {destinations.map((d, i) => (
            <SwiperSlide key={i}>
              <div className={styles.card}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={d.img}
                    alt={d.name}
                    width={400}
                    height={280}
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
  );
}
