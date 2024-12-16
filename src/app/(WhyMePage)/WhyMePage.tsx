"use client";
import React from "react";
import smeta from "../../img/whymeimg/smeta.png";
import cashe from "../../img/whymeimg/cashe.png";
import price from "../../img/whymeimg/price.png";
import individ from "../../img/whymeimg/individ.png";
import clock from "../../img/whymeimg/clock.png";
import styles from "./whypage.module.css";

import Card from "@/app/(WhyMePage)/_components/Card";
import clsx from "clsx";
import Title from "@/components/title";
import useWindowSize from "@/hooks/useWindowSize";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
const WhyMePage = () => {
  const { width } = useWindowSize();

  const data = [
    {
      id: 1,
      img: smeta,
      title: "УТВЕРЖДЕННАЯ СМЕТА",
      desc: "Ведём объект от начала и до конца согласно договора. Ни каких скрытых платежей, только подробная смета",
      isVerical: width === "large" ? true : false,
    },
    {
      id: 2,
      img: cashe,
      title: "КОНТРОЛЬ КАЧЕСТВА",
      desc: "Мы знаем и соблюдаем все нормы и правила строительства, а так же технологии отделочных работ",
      isVerical: false,
    },
    {
      id: 3,
      img: price,
      title: "МАКСИМАЛЬНАЯ ВЫГОДА",
      desc: "С нами вы получаете готовый дом с рациональной экономией",
      isVerical: false,
    },
    {
      id: 4,
      img: individ,
      title: "ИНДИВИДУАЛЬНОСТЬ",
      desc: "Индивидуальный подход к каждому клиенту",
      isVerical: false,
    },
    {
      id: 5,
      img: clock,
      title: "КОНТРОЛЬ КАЧЕСТВА",
      desc: "За сроки, указанные в договоре, отвечаем собственной репутацией",
      isVerical: false,
    },
  ];
  return (
    <section className={clsx("containerSectionColumn", styles.sectionMyPage)}>
      <Title title={`ПОЧЕМУ СТОИТ ОБРАТИТЬСЯ К НАМ`} />
      {width === "large" ? (
        <ul className={styles.cardList}>
          {data.map(({ id, img, title, desc, isVerical }) => (
            <Card
              isVerical={isVerical}
              key={id}
              img={img}
              title={title}
              desc={desc}
            />
          ))}
        </ul>
      ) : (
        <Swiper
          spaceBetween={"20px"}
          slidesPerView={"auto"}
          slidesPerGroup={1}
          slidesOffsetBefore={20}
          grabCursor={true}
          modules={[Pagination]}
          pagination={{ clickable: true }}
          className={styles.cardList}
        >
          {data.map(({ id, img, title, desc, isVerical }) => (
            <SwiperSlide key={id}>
              <Card isVerical={isVerical} img={img} title={title} desc={desc} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </section>
  );
};

export default WhyMePage;
