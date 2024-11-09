import React from "react";
import styles from "./InfoBlock.module.css";
import Image from "next/image";
import bgInfo from "../../img/infoBlock/bgInfo.png";

const InfoBlock = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <Image
          width={1440}
          height={560}
          src={bgInfo}
          alt={"bgInfo"}
          className={styles.img}
        />
        <div className={styles.textContainer}>
          <h2 className={styles.title}>СТРОИМ И ПРОДАЕМ ДОМА С 2019 ГОДА</h2>
          <h3 className={styles.subtitle}>
            Компания «Status House» - это надежный и профессиональный партнер в
            мире строительства каркасных домов.
          </h3>
          <p className={styles.desc}>
            Мы уделяем особое внимание созданию современных, экологичных и
            энергоэффективных жилых помещений, соответствующих самым высоким
            стандартам качества. На протяжении многих лет мы успешно реализуем
            проекты различной сложности. Наша компания стремится предоставить
            клиентам лучшие решения для создания комфортного и уютного жилья.{" "}
          </p>
        </div>
      </div>
    </section>
  );
};

export default InfoBlock;
