"use client";
import Title from "@/components/title";
import React from "react";
import styles from "./StagesOfCooperation.module.css";
import Span from "@/ui/Span";
import Number1 from "@/img/icons/numbers/Number1";
import HouseIcon from "@/img/HouseIcon.png";
import Number2 from "@/img/icons/numbers/Number2";
import Number3 from "@/img/icons/numbers/Number3";
import Number4 from "@/img/icons/numbers/Number4";
import Number5 from "@/img/icons/numbers/Number5";
import Image from "next/image";
import Garanties from "@/app/(StagesOfCooperation)/_components/Garanties/Garanties";

const StagesOfCooperation = () => {
  const dataObj = [
    { Icon: <Number1 />, desc: "Согласование проекта" },
    { Icon: <Number2 />, desc: "Заключение договора" },
    { Icon: <Number3 />, desc: "Доставка матерталов" },
    { Icon: <Number4 />, desc: "Строительство вашего дома" },
    { Icon: <Number5 />, desc: "Сдача объекта" },
  ];
  return (
    <section id="price" className="containerSectionColumn">
      <Title title={`ЭТАПЫ СОТРУДНИЧЕСТВА С НАМИ`} />
      <p className={styles.desc}>
        Мы делаем <Span text={"полностью работу"} /> под ключ, вам не нужно ни о
        чем беспокоиться
      </p>
      <ul className={styles.list}>
        {dataObj.map(({ Icon, desc }, index) => (
          <li key={index} className={styles.listItem}>
            <div>{Icon}</div>
            <p className={styles.itemText}>{desc}</p>
          </li>
        ))}
      </ul>
      <div className={styles.descBclock}>
        <Image src={HouseIcon} alt="иконка дома" width={222} height={226} />
        <div className={styles.textBlock}>
          <h4 className={styles.subtitle}>
            Компания <Span text="«Status House»" /> гордится своей репутацией
            надежного и профессионального застройщика каркасных домов.
          </h4>
          <p className={styles.descReputacion}>
            Мы стремимся предоставить нашим клиентам не просто жилье, но и
            надежность, комфорт и уверенность в каждом построенном доме. Поэтому
            мы <Span text="предоставляем гарантии" />, которые делают наше
            сотрудничество с вами еще более уверенным и безопасным.
          </p>
        </div>
      </div>
      <Garanties />
    </section>
  );
};

export default StagesOfCooperation;
