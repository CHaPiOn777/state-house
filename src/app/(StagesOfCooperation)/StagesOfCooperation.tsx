"use client";
import Title from "@/components/title";
import React from "react";
import styles from "./StagesOfCooperation.module.css";
import Span from "@/ui/Span";
import Number1 from "@/img/icons/numbers/Number1";
import HouseIcon from "@/img/HouseIcon.png";
import Stars from "@/img/Stars.png";
import House from "@/img/House.png";
import Number2 from "@/img/icons/numbers/Number2";
import Number3 from "@/img/icons/numbers/Number3";
import Number4 from "@/img/icons/numbers/Number4";
import Number5 from "@/img/icons/numbers/Number5";
import Image from "next/image";
import Garanties from "@/app/(StagesOfCooperation)/_components/Garanties/Garanties";
import useWindowSize from "@/hooks/useWindowSize";
import { Swiper, SwiperSlide } from "swiper/react";

const StagesOfCooperation = () => {
  const { width } = useWindowSize();

  const dataObj = [
    {
      Icon: <Number1 size={width === "small" ? "48" : "91"} />,
      desc: "Согласование проекта",
    },
    {
      Icon: <Number2 size={width === "small" ? "48" : "91"} />,
      desc: "Заключение договора",
    },
    {
      Icon: <Number3 size={width === "small" ? "48" : "91"} />,
      desc: "Доставка матерталов",
    },
    {
      Icon: <Number4 size={width === "small" ? "48" : "91"} />,
      desc: "Строительство вашего дома",
    },
    {
      Icon: <Number5 size={width === "small" ? "48" : "91"} />,
      desc: "Сдача объекта",
    },
  ];

  return (
    <section id="price" className="containerSectionColumn">
      <Image
        width={width === "small" ? 304 : 704}
        height={width === "small" ? 184 : 426}
        className={styles.house}
        src={House}
        alt="Дом"
      />
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

      <div className={styles.textBlockContainer}>
        <div className={styles.descBclock}>
          <Image
            src={HouseIcon}
            alt="иконка дома"
            width={width === "small" ? 80 : 222}
            height={width === "small" ? 96 : 226}
          />
          <div className={styles.textBlock}>
            <h4 className={styles.subtitle}>
              Компания <Span text="«Status House»" /> гордится своей репутацией
              надежного и профессионального застройщика каркасных домов.
            </h4>
            {width !== "small" && (
              <p className={styles.descReputacion}>
                Мы стремимся предоставить нашим клиентам не просто жилье, но и
                надежность, комфорт и уверенность в каждом построенном доме.
                Поэтому мы <Span text="предоставляем гарантии" />, которые
                делают наше сотрудничество с вами еще более уверенным и
                безопасным.
              </p>
            )}
          </div>
          <Image
            src={Stars}
            alt="иконка дома"
            width={170}
            height={150}
            className={styles.stars}
          />
        </div>
        {width === "small" && (
          <p className={styles.descReputacion}>
            Мы стремимся предоставить нашим клиентам не просто жилье, но и
            надежность, комфорт и уверенность в каждом построенном доме. Поэтому
            мы <Span text="предоставляем гарантии" />, которые делают наше
            сотрудничество с вами еще более уверенным и безопасным.
          </p>
        )}
      </div>
      <Garanties />
    </section>
  );
};

export default StagesOfCooperation;
