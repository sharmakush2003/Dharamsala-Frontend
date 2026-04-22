'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/components/LanguageProvider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from './page.module.css';

const TemplePage = () => {
  const { t } = useLanguage();

  return (
    <main className={styles.main}>
      <Navbar forceDark={true} />
      {/* Top Section: Split Layout (Centered Container) */}
      <section className={styles.splitSection}>
        <div className={styles.container}>
          <div className={styles.splitWrapper}>
            <motion.div 
              className={styles.videoSide}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <video 
                autoPlay 
                muted 
                loop 
                playsInline 
                preload="auto"
                className={styles.splitVideo}
              >
                <source src="/temple-video.mp4" type="video/mp4" />
              </video>
            </motion.div>
            <motion.div 
              className={styles.contentSide}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className={styles.heritageBrief}>
                <h1 className={styles.mainTitle}>{t('temple_new_heritage_title')}</h1>
                <div className={styles.accentLine}></div>
                
                <div className={styles.quoteWrapper}>
                  <p className={styles.heritageQuote}>{t('temple_new_quote')}</p>
                </div>

                <div className={styles.narrativeBrief}>
                  <p>{t('temple_new_p1')}</p>
                  <p>{t('temple_new_p2')}</p>
                  <p>{t('temple_new_p3')}</p>
                  <p>{t('temple_new_p4')}</p>
                  <p>{t('temple_new_p5')}</p>
                  <p>{t('temple_new_p6')}</p>
                </div>

                <div className={styles.shortMeta}>
                  <div className={styles.metaBox}>
                    <span className={styles.label}>{t('temple_new_loc_label')}</span>
                    <span className={styles.value}>{t('temple_new_loc_val')}</span>
                  </div>
                  <div className={styles.metaBox}>
                    <span className={styles.label}>{t('temple_new_her_label')}</span>
                    <span className={styles.value}>{t('temple_new_her_val')}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>



      <Footer />
    </main>
  );
};

export default TemplePage;
