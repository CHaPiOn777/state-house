import Image from "next/image";
import React from "react";
import houseEnd from "../../img/houseEnd.png";
import styles from "./End.module.css";

const End = () => {
  return (
    <section
      style={{
        background: "black",
        display: "flex",
        flexDirection: "column",
        gap: "24px",
      }}
    >
      <h3 className={styles.title}>
        Мы предлагаем индивидуальный подход, качественное строительство,
        соблюдение сроков и прозрачность во всех процессах
      </h3>
      <p className={styles.text}>
        Полагайтесь на нас, и ваш дом будет построен с учетом ваших потребностей
        и пожеланий, без лишних забот и стресса
      </p>
      {/* <Image width={1440} height={1464} src={houseEnd} alt={"Фон"} /> */}
    </section>
  );
};

export default End;
