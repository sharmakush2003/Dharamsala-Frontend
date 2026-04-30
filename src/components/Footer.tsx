'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from './LanguageProvider';
import styles from './Footer.module.css';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerGrid}>
          <div className={styles.footerInfo}>
            <div className={styles.footerLogoContainer}>
              <Image 
                src="/logo.png" 
                alt="Jain Logo" 
                width={60} 
                height={60} 
                className={styles.footerLogoImage}
              />
              <div className={styles.footerLogoTexts}>
                <h3 className={styles.footerLogo}>{t('site_name')}</h3>
                <p className={styles.footerSublogo}>{t('site_sub')}</p>
              </div>
            </div>
            <p className={styles.footerAddress}>{t('footer_address')}</p>
          </div>
          
          <div className={styles.footerLinks}>
            <h4>{t('footer_links')}</h4>
            <ul>
              <li><Link href="/home">{t('nav_home')}</Link></li>
              <li><Link href="/about">{t('about_title')}</Link></li>
              <li><Link href="/history">{t('nav_history')}</Link></li>
              <li><Link href="/trust-committee">{t('nav_trust')}</Link></li>
              <li><Link href="/contact">{t('nav_contact')}</Link></li>
            </ul>
          </div>
          
          <div className={styles.footerContact}>
            <h4>{t('footer_contact')}</h4>
            <p>Phone: +91 91163 97180</p>
            
            <div style={{ marginTop: '2rem' }}>
              <span className={styles.devLabel}>Developer Contact</span>
              <p style={{ margin: 0 }}>+91 8233816674</p>
            </div>
          </div>
        </div>
        
        <div className={styles.footerBottom}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2.5rem', marginTop: '1rem' }}>
            <Link href="/" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              padding: '12px 24px',
              borderRadius: '50px',
              textDecoration: 'none',
              transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
              backdropFilter: 'blur(15px)',
              cursor: 'pointer'
            }}>
              <Image 
                src="/chittortech-logo.png" 
                alt="ChittorTech Logo" 
                width={30} 
                height={30} 
                style={{ borderRadius: '6px', objectFit: 'contain' }} 
              />
              <p style={{ 
                margin: 0, 
                fontSize: '0.95rem', 
                color: '#ffffff', 
                fontWeight: 500, 
                letterSpacing: '0.5px' 
              }}>
                Developed & Maintained by <span style={{ color: '#00ff88', fontWeight: 700, marginLeft: '4px' }}>ChittorTech</span>
              </p>
            </Link>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem', opacity: 0.8, fontSize: '0.9rem', textAlign: 'center' }}>
            <p className={styles.credit}>&copy; 2026 ChittorTech. All rights reserved.</p>
            <p className={styles.credit}>Recognized by iStart Rajasthan | Registered MSME</p>
            <p className={styles.credit}>Founder listed on Startup India BHASKAR Network</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
