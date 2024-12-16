"use client";
import React from "react";
import styles from "../page.module.css";
import Clock from "@/img/icons/Clock";
import Call from "@/img/icons/Call";
import WhatsApp from "@/img/icons/WhatsApp";
import Telegram from "@/img/icons/Telegram";
import clsx from "clsx";
import useWindowSize from "@/hooks/useWindowSize";
const ListNumber = () => {
  const { width } = useWindowSize();
  const SIZEICON = width === "large" ? 36 : 24;
  return (
    <ul className={styles.list}>
      <li className={styles.listItem}>
        {width === "large" && <Clock />}
        Пн - Вс с 9:00 - 18:00
      </li>
      <li className={styles.listItem}>
        {width === "large" && <Call />}
        8-999-858-14-78
      </li>
      <li className={clsx(styles.listItem, styles.social)}>
        <a
          href="https://wa.me/89998581478"
          className={styles.linkItem}
          target="_blank"
          rel="noopener noreferrer"
        >
          <WhatsApp size={SIZEICON} />
          {width !== "large" && "WhatsApp"}
        </a>
      </li>
      <li className={clsx(styles.listItem, styles.social)}>
        <a
          href="https://t.me/status_house_pro"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.linkItem}
        >
          <Telegram size={SIZEICON} />

          {width !== "large" && "Telegram"}
        </a>
      </li>
    </ul>
  );
};

export default ListNumber;
