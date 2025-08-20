import Image from "next/image";
import Breadcrumb from "./Breadcrumb";
import styles from "../../styles/About/Hero.module.css";


export default function AboutPage() {
  return (
    <div className={styles.container}>
      {/* Flags Image */}
      <div className={styles.bannerWrapper}>
        <Image
          src="/images/about_banner.jpg"  
          alt="Flags Banner"
          width={1200}
          height={300}
          className={styles.bannerImage}
          priority
        />
      </div>

      {/* Breadcrumb */}
      <Breadcrumb />
      
    </div>
  );
}
