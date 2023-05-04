import CardLogin from '@/components/CardLogin';
import Image from 'next/image';
import styles from '../styles/index.module.css';

export default function Home() {
  return (
    <div className={styles.background}>
      <div className={styles.center}>
        <Image src="/images/logo-dark.png" width="300" height="300" alt="logo"></Image>
        <CardLogin />
      </div>
    </div>
  );
}
