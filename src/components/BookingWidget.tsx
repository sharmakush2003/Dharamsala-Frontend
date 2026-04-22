import React, { useState } from 'react';
import { useLanguage } from './LanguageProvider';
import styles from './BookingWidget.module.css';

const BookingWidget = () => {
  const { t } = useLanguage();
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [isBooked, setIsBooked] = useState(false);

  const toggleService = (service: string) => {
    setSelectedServices(prev => 
      prev.includes(service) ? prev.filter(s => s !== service) : [...prev, service]
    );
  };

  const handleBooking = () => {
    const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSfXpeiDnls7z9cbSRDHPGcFyVQO_L0-wv9rUDHvRiviF95rHw/viewform";
    window.open(googleFormUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className={styles.widgetWrapper}>
      <div className={styles.sewaSection}>
        <h4 className={styles.sewaHeading}>{t('sewa_title')}</h4>
        <div className={styles.sewaGrid}>
          <button 
            className={`${styles.sewaBtn} ${selectedServices.includes(t('sewa_navkarsi')) ? styles.selected : ''}`}
            onClick={() => toggleService(t('sewa_navkarsi'))}
          >
            🍳 {t('sewa_navkarsi')}
          </button>
          <button 
            className={`${styles.sewaBtn} ${selectedServices.includes(t('sewa_bhojanshala')) ? styles.selected : ''}`}
            onClick={() => toggleService(t('sewa_bhojanshala'))}
          >
            🍽️ {t('sewa_bhojanshala')}
          </button>
          <button 
            className={`${styles.sewaBtn} ${selectedServices.includes(t('sewa_pooja')) ? styles.selected : ''}`}
            onClick={() => toggleService(t('sewa_pooja'))}
          >
            🙏 {t('sewa_pooja')}
          </button>
        </div>
      </div>

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
