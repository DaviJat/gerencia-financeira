import CardLogin from '@/components/CardLogin';
import styles from '@/styles/index.module.css';
import Image from 'next/image';

export default function Home() {
  return (
    <div className={styles.background}>
      <div className={styles.center}>
        <div className={styles.title}>
          <Image
            src="/images/logo-dark.png"
            width="250"
            height="250"
            alt="logo"
            style={{ width: 'auto', height: 'auto' }}
            priority={true}
          />
        </div>
        <CardLogin />
      </div>
    </div>
  );
}
