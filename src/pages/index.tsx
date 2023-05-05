import CardLogin from '@/components/CardLogin';
import Image from 'next/image';
import styles from '../styles/index.module.css';

export default function Home() {
  return (
    <div className={styles.background}>
      <div className={styles.center}>
        <div className={styles.title}>
          <Image src="/images/logo-dark.png" width="250" height="250" alt="logo"></Image>
        </div>
        <CardLogin />
      </div>
    </div>
  );
}
