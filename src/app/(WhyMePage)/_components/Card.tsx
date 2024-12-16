import Image, { StaticImageData } from "next/image";
import React from "react";
import styles from "./card.module.css";
import clsx from "clsx";

const Card = ({
  img,
  title,
  desc,
  isVerical,
}: {
  img: StaticImageData;
  title: string;
  desc: string;
  isVerical: boolean;
}) => {
  return (
    <li className={clsx(styles.card, isVerical ? styles.cardV : styles.cardH)}>
      <Image
        className={clsx(styles.img, isVerical ? styles.imgV : styles.imgH)}
        src={img}
        alt={title}
      />
      <div className={styles.textBlock}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.desc}>{desc}</p>
      </div>
    </li>
  );
};

export default Card;
