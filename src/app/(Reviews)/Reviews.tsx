"use client";
import React from "react";
import styles from "./Reviews.module.css";
import clsx from "clsx";
import Title from "@/components/title";
import Span from "@/ui/Span";
import AvatarImg from "@/ui/avatarName/AvatarImg";
import Image from "next/image";
import slava from "../../img/reviews/slava.png";
import miha from "../../img/reviews/miha.png";
import denis from "../../img/reviews/denis.png";
import Quotes from "@/img/icons/quotes";
import AvatarName from "@/ui/avatarName/AvatarName";
import { Swiper, SwiperSlide } from "swiper/react";
import useWindowSize from "@/hooks/useWindowSize";
const Reviews = () => {
  const { width } = useWindowSize();

  const data = [
    {
      text: "Алексея посоветовали знакомые. Приятно удивлен профессионализмом и отношением к работе. Пока заказывал каркас под крышу на 150 м2. Всем доволен, надеюсь по весне они же будут доделывать дом. Рад знакомству!",
      name: "Вячеслав",
      date: "28.10.2023",
      avatar: <Image width={84} height={84} alt="аватар клиента" src={slava} />,
    },
    {
      text: "Алексей и его команда строили мне этот дом (на 170 кв м плюс терраса) в Подмосковье: с самого каркаса и далее по всем этапам, включая внутреннюю отделку и массу доп. работ по ходу (монтаж системы вентиляции)",
      name: "Денис",
      date: "15.11.2023",
      avatar: <Image width={84} height={84} alt="аватар клиента" src={denis} />,
    },
    {
      text: "Выполнена работа по ремонту потолка в каркасном доме. Алексей приезжал несколько раз,все подробно рассказал,предложил 2 варианта,в том числе и бюджетный. Работу выполнили быстро и качественно. Рекомендую!",
      name: "Галина",
      date: "12.05.2024",
      avatar: null,
    },
    {
      text: "Строились летом 2022. Строительство проходило по проэкту , что очень порадовало, по срокам тоже всё порадовало. Отдельное спасибо за индивидуальный подход. Главное что этот человек реально знает все ...",
      name: "Михаил",
      date: "03.06.2022",
      avatar: <Image width={84} height={84} alt="аватар клиента" src={miha} />,
    },
    {
      text: "Алексея посоветовали знакомые. Приятно удивлен профессионализмом и отношением к работе. Пока заказывал каркас под крышу на 150 м2. Всем доволен, надеюсь по весне они же будут доделывать дом. Рад знакомству!",
      name: "Вячеслав",
      date: "28.10.2023",
      avatar: <Image width={84} height={84} alt="аватар клиента" src={slava} />,
    },
    {
      text: "Алексей и его команда строили мне этот дом (на 170 кв м плюс терраса) в Подмосковье: с самого каркаса и далее по всем этапам, включая внутреннюю отделку и массу доп. работ по ходу (монтаж системы вентиляции)",
      name: "Денис",
      date: "15.11.2023",
      avatar: <Image width={84} height={84} alt="аватар клиента" src={denis} />,
    },
    {
      text: "Выполнена работа по ремонту потолка в каркасном доме. Алексей приезжал несколько раз,все подробно рассказал,предложил 2 варианта,в том числе и бюджетный. Работу выполнили быстро и качественно. Рекомендую!",
      name: "Галина",
      date: "12.05.2024",
      avatar: null,
    },
    {
      text: "Строились летом 2022. Строительство проходило по проэкту , что очень порадовало, по срокам тоже всё порадовало. Отдельное спасибо за индивидуальный подход. Главное что этот человек реально знает все ...",
      name: "Михаил",
      date: "03.06.2022",
      avatar: <Image width={84} height={84} alt="аватар клиента" src={miha} />,
    },
  ];
  return (
    <section id="reviews" className={clsx("containerSectionColumn")}>
      <Title title="ЧТО ГОВОРЯТ О НАС НАШИ КЛИЕНТЫ" />
      <p className={styles.desc}>
        Мы гордимся успешными проектами и довольными клиентами, которые выбрали{" "}
        <Span text={"«Status House»"} /> для <Span text={"строительства"} />{" "}
        своего дома
      </p>
      <Swiper
        slidesPerView={"auto"}
        slidesPerGroup={width === "small" ? 1 : 2}
        spaceBetween={15}
        loop
        // className={styles.list}
        grabCursor={true}
        className={styles.swiper}
      >
        {data.map(({ text, name, date, avatar }, index) => (
          <SwiperSlide
            className={styles.listItem}
            style={{
              flexDirection: index % 2 !== 0 ? "column-reverse" : "column",
            }}
            key={index}
          >
            <div
              className={`${styles.descBlock} ${
                index % 2 !== 0 ? styles.alternateDescBlock : ""
              }`}
            >
              <Quotes />
              <p className={styles.descItem}>{text}</p>
            </div>
            <div className={styles.avatarBlock}>
              {!!avatar ? (
                <div className={styles.avatar}>{avatar}</div>
              ) : (
                <AvatarName letter={name.slice(0, 1).toUpperCase()} />
              )}
              <div className={styles.nameBlock}>
                <h4 className={styles.name}>{name}</h4>
                <p className={styles.date}>{date}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Reviews;
