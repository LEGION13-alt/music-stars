import React, { useState, useEffect } from "react";
import styles from "./Header.module.css";
import logo from "../../../public/images/logo.png";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const handleOverlayClick = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscKey);
    return () => {
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [isMenuOpen]);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        <nav className={styles.nav}>
          <img
            src={logo}
            alt="Music Stars Logo"
            className={styles.logo}
            width="60"
            height="60"
          />
          <button
            className={styles.burgerMenu}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>

          {isMenuOpen && (
            <div className={styles.overlay} onClick={handleOverlayClick} />
          )}

          <ul
            className={`${styles.navLinks} ${isMenuOpen ? styles.active : ""}`}
          >
            <li>
              <a href="#home" onClick={() => scrollToSection("home")}>
                Главная
              </a>
            </li>
            <li>
              <a href="#about" onClick={() => scrollToSection("about")}>
                О школе
              </a>
            </li>
            <li>
              <a href="#services" onClick={() => scrollToSection("services")}>
                Направления
              </a>
            </li>
            <li>
              <a href="#teacher" onClick={() => scrollToSection("teacher")}>
                Преподаватель
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => scrollToSection("contact")}>
                Контакты
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
