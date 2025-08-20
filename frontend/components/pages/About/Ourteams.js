"use client"; // Already added

import React, { useEffect, useRef } from "react";
import styles from "../../styles/About/Ourteams.module.css";
import Image from "next/image";
import team2 from "../../../public/images/team02.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faGooglePlusG, faDribbble, faInstagram } from "@fortawesome/free-brands-svg-icons";

const teamMembers = [
  {
    img: team2,
    name: "Jynda Martin",
    role: "Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim.",
  },
  {
    img: team2,
    name: "George Smith",
    role: "Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim.",
  },
  {
    img: team2,
    name: "Bill Amadeus",
    role: "Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim.",
  },
  {
    img: team2,
    name: "Amanda Stoun",
    role: "Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim.",
  },
];

const Team = () => {
  const gridRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const grid = gridRef.current;
      if (!grid) return;

      const cards = grid.querySelectorAll(`.${styles.card}`);
      cards.forEach((card, index) => {
        const cardTop = card.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (cardTop < windowHeight - 100) {
          card.classList.add(styles.visible);
          const name = card.querySelector(`.${styles.name}`);
          if (name && !name.classList.contains(styles.titleAnimated)) {
            setTimeout(() => name.classList.add(styles.titleAnimated), index * 200);
          }
        }
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className={styles.team}>
      <h2 className={styles.title}>OUR TEAM</h2>
      <p className={styles.subtitle}>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
        nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
        volutpat.
      </p>

      <div className={styles.grid} ref={gridRef}>
        {teamMembers.map((member, index) => (
          <div className={`${styles.card} ${styles.load}`} key={index}>
            <Image src={member.img} alt={member.name} className={styles.image} />
            <h3 className={`${styles.name} ${styles.titleAnimTrigger}`}>{member.name}</h3>
            <p className={styles.role}>{member.role}</p>
            <div className={styles.socials}>
              <FontAwesomeIcon icon={faFacebookF} className={styles.socialIcon} />
              <FontAwesomeIcon icon={faTwitter} className={styles.socialIcon} />
              <FontAwesomeIcon icon={faGooglePlusG} className={styles.socialIcon} />
              <FontAwesomeIcon icon={faDribbble} className={styles.socialIcon} />
              <FontAwesomeIcon icon={faInstagram} className={styles.socialIcon} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;