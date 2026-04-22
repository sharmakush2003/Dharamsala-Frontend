'use client';

import { useRouter } from 'next/navigation';
import styles from './page.module.css';
export default function WelcomePage() {
  const router = useRouter();

  const handleGuestEntry = () => {
    router.push('/home');
  };

  return (
    <div className={styles.welcomeContainer}>
      <div className={styles.card}>
        <div className={styles.logo}>🏯</div>
        <h1 className={styles.title}>Jain Dharamsala</h1>
        <p className={styles.subtitle}>
          Welcome to heart of peaceful staying. Experience serenity and Jain hospitality at its finest.
        </p>

        <div className={styles.buttonGroup}>
          <button 
            type="button"
            onClick={handleGuestEntry} 
            className={styles.primaryButton}
          >
            Explore Now
          </button>
        </div>
      </div>
    </div>
  );
}
