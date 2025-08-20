import styles from "../../styles/About/WhatWeOffer.module.css";
import { FaChevronRight } from "react-icons/fa";

export default function WhatWeOffer() {
  return (
    <section className={styles.offerSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>WHAT WE OFFER ?</h2>
        <p className={styles.subtitle}>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy 
          nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
        </p>

        <div className={styles.content}>
          {/* Left list */}
          <ul className={styles.list}>
            <li>
              <FaChevronRight className={styles.icon} />
              Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet;
            </li>
            <li>
              <FaChevronRight className={styles.icon} />
              Option congue nihil imperdiet doming id quod mazim placerat facer;
            </li>
            <li>
              <FaChevronRight className={styles.icon} />
              Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes;
            </li>
            <li>
              <FaChevronRight className={styles.icon} />
              Investigationes demonstraverunt lectores
            </li>
          </ul>

          {/* Right paragraph */}
          <div className={styles.rightText}>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
              euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim
              veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea
              commodo consequat. Eodem modo typi, qui nunc nobis videntur parum clari, fiant
              sollemnes in futurum. Ut wisi enim ad minim veniam, quis nostrud exerci tation
              ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
