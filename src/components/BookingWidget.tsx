import React, { useState } from 'react';
import { useLanguage } from './LanguageProvider';
import styles from './BookingWidget.module.css';

const BookingWidget = () => {
  const { t } = useLanguage();
  const [isBooked, setIsBooked] = useState(false);

  const handleBooking = () => {
    const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSfXpeiDnls7z9cbSRDHPGcFyVQO_L0-wv9rUDHvRiviF95rHw/viewform";
    window.open(googleFormUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className={styles.widgetWrapper}>
      <button 
        className={`${styles.searchBtn} ${isBooked ? styles.success : ''}`}
        onClick={handleBooking}
      >
        {isBooked ? t('booking_confirm_msg') : t('nav_book')}
      </button>

      <div className={styles.infoLine}>
        <span>✨ {t('info_best_price')}</span>
        <span>🏨 {t('info_verified')}</span>
        <span>🍽️ {t('info_jain_food')}</span>
      </div>
    </div>
  );
};

export default BookingWidget;
