import React, { useEffect, useRef, useState } from "react";
import styles from "./ContentSection.module.css";

export interface ContentSectionItem {
  id: number;
  title: string;
  description: string;
  image: string;
  ageGroup?: string;
}

export interface ContentSectionProps {
  items: ContentSectionItem[];
  sectionId: string;
  sectionTitle: string;
  additionalInfo?: string;
}

const ContentSection: React.FC<ContentSectionProps> = ({
  items,
  sectionId,
  sectionTitle,
  additionalInfo,
}) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            const itemId = parseInt(target.dataset.itemId || "0");

            setTimeout(() => {
              setVisibleItems((prev) => [...prev, itemId]);
            }, 100 * (itemId % 3));
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    const itemElements = sectionRef.current?.querySelectorAll(
      `.${styles.item}`
    );
    itemElements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id={sectionId} className="section" ref={sectionRef}>
      <div className="container">
        <h2 className="title">{sectionTitle}</h2>

        {additionalInfo && (
          <div className={styles.additionalInfo}>
            <p className={styles.additionalText}>{additionalInfo}</p>
          </div>
        )}

        <div className={styles.itemsContainer}>
          {items.map((item, index) => (
            <div
              key={item.id}
              data-item-id={item.id}
              className={`${styles.item} ${
                visibleItems.includes(item.id) ? styles.visible : ""
              }`}
            >
              <div
                className={`${styles.itemInner} ${
                  index % 2 === 1 ? styles.reversed : ""
                }`}
              >
                <div className={styles.imageWrapper}>
                  <div className={styles.imageContainer}>
                    <img
                      src={item.image}
                      alt={item.title}
                      className={styles.image}
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className={styles.contentWrapper}>
                  <div className={styles.content}>
                    <h3 className={styles.title}>{item.title}</h3>

                    {item.ageGroup && (
                      <p className={styles.ageGroup}>
                        Возраст: {item.ageGroup}
                      </p>
                    )}

                    <p className={styles.description}>{item.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
