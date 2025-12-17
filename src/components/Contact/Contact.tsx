import React from "react";
import styles from "./Contact.module.css";
import StaticMap from "../Map/StaticMap";

const Contact: React.FC = () => {
  const contactInfo = {
    telegram: "https://t.me/anmuzstars",
    vk: "https://vk.com/muzykalnaya94",
  };

  return (
    <footer id="contact" className={styles.contact}>
      <div className="container">
        <h2 className="title">Контакты</h2>
        <div className={styles.content}>
          <div className={styles.info}>
            <h3>Свяжитесь с нами</h3>
            <div className={styles.socialLinks}>
              <div className={styles.socialIcons}>
                <a
                  href={contactInfo.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                >
                  <img
                    src="/icons/telegram_logo.svg"
                    alt="Telegram"
                    className={styles.socialIcon}
                    loading="lazy"
                  />
                  Telegram
                </a>
                <a
                  href={contactInfo.vk}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                >
                  <img
                    src="/icons/vk_logo.svg"
                    alt="VK"
                    className={styles.socialIcon}
                    loading="lazy"
                  />
                  ВКонтакте
                </a>
              </div>
            </div>
          </div>
          <div className={styles.location}>
            <div className={styles.addressItem}>
              <img
                src="/icons/location_icon.png"
                alt="Адрес"
                className={styles.addressIcon}
              />
              Москва, ул. Ярцевская, 27к8
            </div>
            <StaticMap />
          </div>
        </div>

        <div className={styles.attribution}>
          <p>
            Icons: Social Media & Brands by Good Stuff No Nonsense (CC BY 4.0) •
            Good Idea by Good stuff non sense (Free) • New year icons by Tea
            Tomescu (Free){" "}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
