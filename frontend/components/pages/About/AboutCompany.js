import styles from "../../styles/About/AboutCompany.module.css";
import Image from "next/image";
import planeImg from "/public/images/company1.png";

const AboutCompany = () => {
  const stats = [
    { label: "Flights", percent: 94 },
    { label: "Hotels", percent: 87 },
    { label: "Cars", percent: 45 },
    { label: "Cruises", percent: 51 },
  ];

  return (
    <section className={styles.about}>
      <h2 className={styles.title}>ABOUT OUR COMPANY</h2>
      <p className={styles.subtitle}>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
        nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
        volutpat.
      </p>

      <div className={styles.container}>
        <div className={styles.imageBox}>
          <Image src={planeImg} alt="Plane" className={styles.image} />
        </div>

        <div className={styles.content}>
          <h3 className={styles.heading}>TRAVEL AGENCY</h3>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat.
          </p>

          {stats.map((item, index) => (
            <div key={index} className={styles.progressWrapper}>
              <div className={styles.progressLabel}>
                <span>{item.label}</span>
                <span className={styles.percent}>{item.percent}%</span>
              </div>
              <div className={styles.progressBar}>
                <div
                  className={styles.progressFill}
                  style={{ "--percent": `${item.percent}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutCompany;
