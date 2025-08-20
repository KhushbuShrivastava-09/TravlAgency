import styles from '../../styles/Customers.module.css';
import Image from 'next/image';

const PartnerLogos = () => {
  return (
    <div className={styles.logoSection}>
      <div className={styles.logoWrapper}>
        <Image src="/images/p1.jpg" alt="Logo1" width={120} height={80} className={styles.logoImage}/>
        <Image src="/images/p2.jpg" alt="Logo2" width={120} height={80} className={styles.logoImage}/>
        <Image src="/images/p3.jpg" alt="Logo3" width={120} height={80} className={styles.logoImage}/>
        <Image src="/images/p4.jpg" alt="Logo4" width={120} height={80} className={styles.logoImage}/>
        <Image src="/images/p5.jpg" alt="Logo5" width={120} height={80} className={styles.logoImage}/>
        <Image src="/images/p6.jpg" alt="Logo6" width={120} height={80} className={styles.logoImage}/>
      </div>
    </div>
  );
};

export default PartnerLogos;
