'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';

import { useLanguage } from './LanguageProvider';
interface NavbarProps {
  forceDark?: boolean;
}

const Navbar = ({ forceDark = false }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    handleScroll(); // Set initial state
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'hi' : 'en');
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`${styles.navbar} ${(scrolled || forceDark) ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <Link href="/home" className={styles.logo}>
          <div className={styles.logoWrapper}>
            <Image 
              src="/logo.png" 
              alt="Jain Logo" 
              width={50} 
              height={50} 
              className={styles.logoImage}
            />
            <div className={styles.logoTexts}>
              <span className={styles.logoText}>{t('site_name')}</span>
              <span className={styles.logoSubtext}>{t('site_sub')}</span>
            </div>
          </div>
        </Link>
        <div className={`${styles.links} ${menuOpen ? styles.menuOpen : ''}`}>
          <Link href="/home" className={styles.link} onClick={() => setMenuOpen(false)}>{t('nav_home')}</Link>
          <Link href="/about" className={styles.link} onClick={() => setMenuOpen(false)}>{t('nav_about')}</Link>
          <Link href="/history" className={styles.link} onClick={() => setMenuOpen(false)}>{t('nav_history')}</Link>
          <Link href="/temple" className={styles.link} onClick={() => setMenuOpen(false)}>{t('nav_temple')}</Link>
          <Link href="/trust-committee" className={styles.link} onClick={() => setMenuOpen(false)}>{t('nav_trust')}</Link>
          <Link href="/contact" className={styles.link} onClick={() => setMenuOpen(false)}>{t('nav_contact')}</Link>
          <Link href="/rooms" className={styles.link} onClick={() => setMenuOpen(false)}>{t('nav_rooms')}</Link>
          
          <div className={styles.mobileOnly}>
            <button className={styles.langBtn} onClick={toggleLanguage}>
              {language === 'en' ? 'हिन्दी' : 'English'}
            </button>
          </div>
        </div>

        <div className={styles.desktopActions}>
          <button className={styles.langBtn} onClick={toggleLanguage}>
            {language === 'en' ? 'हिन्दी' : 'English'}
          </button>
        </div>

        <button 
          className={`${styles.hamburger} ${menuOpen ? styles.active : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
