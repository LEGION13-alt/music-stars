import React from "react";
import styles from "./Hero.module.css";

const Hero: React.FC = () => {
  return (
    <section id="home" className={styles.hero}>
      <div className="container">
        <div className={styles.heroContent}>
          <h1 className={styles.title}>Music Stars</h1>
          <p className={styles.subtitle}>
            Музыкальная школа для детей и взрослых в Москве и онлайн
          </p>
          <p className={styles.description}>
            Обучение игре на фортепиано и сольфеджио для любого возраста и
            уровня подготовки.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
