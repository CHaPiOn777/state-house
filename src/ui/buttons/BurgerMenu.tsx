"use client";
import React, { useState } from "react";
import styles from "./style.module.css";
import ListNumber from "@/app/(Header)/ListNumber";
import Menu from "@/app/(Header)/Menu";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <ul
        className={`${styles.burger} ${isOpen ? styles.open : ""}`}
        onClick={toggleMenu}
      >
        <li className={styles.line}></li>
        <li className={styles.line}></li>
        <li className={styles.line}></li>
      </ul>
      <div className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}>
        <div className={styles.container}>
          <Menu />
          <ListNumber />
        </div>
      </div>
    </>
  );
};

export default BurgerMenu;
