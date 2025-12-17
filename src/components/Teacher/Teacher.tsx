import React from "react";
import styles from "./Teacher.module.css";

const Teacher: React.FC = () => {
  return (
    <section id="teacher" className="section">
      <div className="container">
        <h2 className="title">Преподаватель</h2>
        <div className={styles.content}>
          <div className={styles.placeholder}></div>

          <div className={styles.info}>
            <h3 className={styles.name}>Суслова Анна Дмитриевна</h3>

            <div className="description">
              <p>
                Моя миссия — раскрывать личный потенциал через музыку.
                <br /> Мои уроки фортепиано — это система, которая учит не
                только нотам, но и уверенности, дисциплине, творческому мышлению
                для достижения целей в музыке и жизни.
              </p>
              <p>Давайте раскроем ваш талант вместе!</p>
            </div>

            <div className={styles.education}>
              <h4>Образование</h4>
              <ul>
                <li>
                  Нижегородская государственная консерватория им. М.И. Глинки
                </li>
                <li>Опыт преподавания: 15 лет</li>
                <li>Лауреат международных конкурсов</li>
              </ul>
            </div>

            <div className={styles.approach}>
              <div className={styles.titleWithIcon}>
                <img
                  src="/icons/notes.svg"
                  alt="Методика"
                  className="mainIcon"
                  loading="lazy"
                />
                <h4 className={styles.approachTitle}>
                  Моя методика: музыка как система развития личности
                </h4>
              </div>

              <div className={styles.methodology}>
                <div className={styles.methodologyItem}>
                  <strong>От цели — к результату</strong>
                  <p>
                    Мой подход выходит далеко за рамки стандартного обучения.
                    Это продуманная система, где освоение инструмента становится
                    инструментом личного роста.
                  </p>
                </div>

                <div className={styles.methodologyItem}>
                  <strong>Творчество с первого урока</strong>
                  <p>
                    Я совмещаю классическую базу (постановка рук, теория,
                    сольфеджио) с репертуаром, который искренне нравится ученику
                    — от классики до современных хитов.
                    <br /> Скучным упражнениям — нет!
                  </p>
                </div>

                <div className={styles.methodologyItem}>
                  <strong>Главный результат — уверенность в себе</strong>
                  <p>
                    Мои ученики не просто учатся, а раскрывают свою
                    индивидуальность, находят смелость для самовыражения и
                    познают себя.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Teacher;
