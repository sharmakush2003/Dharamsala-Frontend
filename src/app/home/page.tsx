'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import { useLanguage } from '@/components/LanguageProvider';
import styles from './page.module.css';
import Footer from '@/components/Footer';

export default function Home() {
  const { t } = useLanguage();

  return (
    <main className={styles.main}>
      <Navbar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Hero />
      </motion.div>
      


      <Footer />
    </main>
  );
}
