import React from "react";
import styles from "../page.module.css";

const Menu = () => {
  return (
    <menu className={styles.bottomContainer}>
      <ul className={styles.listMenu}>
        <li className={styles.menuItem}>
          <a href="#catalog"> Каталог</a>
        </li>
        <li className={styles.menuItem}>
          <a href="#reviews"> Отзывы</a>
        </li>
        <li className={styles.menuItem}>
          <a href="#price"> Оплата и доставка</a>
        </li>
        <li className={styles.menuItem}>
          <a href="#contacts"> Контакты</a>
        </li>
      </ul>
    </menu>
  );
};

export default Menu;
