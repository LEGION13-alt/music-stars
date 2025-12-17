import React from "react";
import styles from "./StaticMap.module.css";

const StaticMap: React.FC = () => {
  const staticMapUrl =
    "https://static-maps.yandex.ru/1.x/?ll=37.413179,55.743537&z=16&l=map&size=600,300&pt=37.413179,55.743537,pm2rdl";
  const yandexMapsUrl =
    "https://yandex.ru/maps/?ll=37.413179%2C55.743537&pt=37.413179%2C55.743537&z=17";

  return (
    <div className={styles.mapContainer}>
      <a
        href={yandexMapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.mapLink}
      >
        <img
          src={staticMapUrl}
          alt="Расположение школы Music Stars на карте"
          className={styles.staticMap}
          loading="lazy"
        />
        <div className={styles.mapOverlay}>
          <span>Нажмите чтобы открыть в Яндекс Картах</span>
        </div>
      </a>
    </div>
  );
};

export default StaticMap;
