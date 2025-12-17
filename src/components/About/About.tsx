import React, { useState } from "react";
import styles from "./About.module.css";

const About: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const galleryImages = [
    "/images/gallery_1.jpg",
    "/images/gallery_2.jpg",
    "/images/gallery_3.jpg",
    "/images/gallery_4.jpg",
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === galleryImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };

  return (
    <section id="about" className={`${styles.about} section`}>
      <div className="container">
        <h2 className="title">О нашей школе</h2>

        <div className={styles.contentWrapper}>
          <div className={styles.textContent}>
            <h3 className={styles.subtitle}>
              Music Stars - современная музыкальная школа для всех!
            </h3>
            <p className="description">
              Наша музыкальная школа создана для тех, кто хочет открыть для себя
              мир музыки независимо от возраста и уровня подготовки. Мы уверены,
              что музыкальные занятия это отражение внутреннего мира и
              самовыражения.
            </p>

            <div className={styles.whyUs}>
              <h4 className={styles.whyUsTitle}>
                Почему выбирают Music Stars?
              </h4>
              <div className={styles.advantagesGrid}>
                <div className={styles.advantage}>
                  <img
                    src="/icons/thumbsup.svg"
                    alt="Преподаватель"
                    className="mainIcon"
                    loading="lazy"
                  />
                  <div className={styles.advantageText}>
                    <strong>Опытный преподаватель</strong>
                    <span>Образование консерватории, 15 лет преподавания</span>
                  </div>
                </div>
                <div className={styles.advantage}>
                  <img
                    src="/icons/light.svg"
                    alt="Индивидуальность"
                    className="mainIcon"
                    loading="lazy"
                  />
                  <div className={styles.advantageText}>
                    <strong>Раскрываем индивидуальность</strong>
                    <span>
                      Не просто уроки, а персональный творческий путь для
                      каждого ученика
                    </span>
                  </div>
                </div>
                <div className={styles.advantage}>
                  <img
                    src="/icons/clock.svg"
                    alt="Формат"
                    className="mainIcon"
                    loading="lazy"
                  />
                  <div className={styles.advantageText}>
                    <strong>Гибкий формат</strong>
                    <span>Онлайн из любой точки мира или офлайн в Москве</span>
                  </div>
                </div>
                <div className={styles.advantage}>
                  <img
                    src="/icons/puzzle.svg"
                    alt="Подход"
                    className="mainIcon"
                    loading="lazy"
                  />
                  <div className={styles.advantageText}>
                    <strong>Современный подход</strong>
                    <span>
                      Учим играть хиты, импровизировать и сочинять. От классики
                      до рока и джаза
                    </span>
                  </div>
                </div>
                <div className={styles.advantage}>
                  <img
                    src="/icons/notemusic.svg"
                    alt="Возраст"
                    className="mainIcon"
                    loading="lazy"
                  />
                  <div className={styles.advantageText}>
                    <strong>Музыка всем возрастам покорна</strong>
                    <span>
                      Готовые программы для детей от 3 лет, подростков и
                      взрослых
                    </span>
                  </div>
                </div>
                <div className={styles.advantage}>
                  <img
                    src="/icons/star.svg"
                    alt="Результаты"
                    className="mainIcon"
                    loading="lazy"
                  />
                  <div className={styles.advantageText}>
                    <strong>Яркие результаты</strong>
                    <span>
                      Концерты и отчетные выступления, где каждый становится
                      звездой
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.galleryImageContainer}>
            {galleryImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Фото школы ${index + 1}`}
                className={`${styles.galleryImage} ${
                  index === currentImageIndex ? styles.active : ""
                }`}
              />
            ))}

            <button
              className={`${styles.galleryButton} ${styles.leftButton}`}
              onClick={prevImage}
              aria-label="Предыдущее фото"
            >
              ‹
            </button>

            <button
              className={`${styles.galleryButton} ${styles.rightButton}`}
              onClick={nextImage}
              aria-label="Следующее фото"
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
