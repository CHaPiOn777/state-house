"use client";
import React from "react";
import styles from "./CatalogProjects.module.css";
import clsx from "clsx";
import Title from "@/components/title";
import { Swiper, SwiperSlide } from "swiper/react";
// import house1 from "../../img/projects/1.png";
// import house2 from "../../img/projects/2.png";
import house3 from "../../img/projects/40.jpeg";
import house5 from "../../img/projects/5.png";
import house4 from "../../img/projects/10.jpeg";
import house1 from "../../img/projects/20.jpeg";
import house2 from "../../img/projects/30.jpeg";
import ProjectCard from "@/app/(CatalogProjects)/_components/ProjectCard";
import { Pagination } from "swiper/modules";
import useWindowSize from "@/hooks/useWindowSize";
const CatalogProjects = () => {
  const projects = [
    {
      title: "ПРОЕКТ  КАКОГО ТО ДОМА",
      img: house1,
      price: 1110000,
      square: 200,
      floors: 2,
      bedrooms: 2,
    },
    {
      title: "ПРОЕКТ  КАКОГО ТО ДОМА",
      img: house2,
      price: 1110000,
      square: 200,
      floors: 2,
      bedrooms: 2,
    },
    {
      title: "ПРОЕКТ  КАКОГО ТО ДОМА",
      img: house3,
      price: 1110000,
      square: 200,
      floors: 2,
      bedrooms: 2,
    },
    {
      title: "ПРОЕКТ  КАКОГО ТО ДОМА",
      img: house4,
      price: 1110000,
      square: 200,
      floors: 2,
      bedrooms: 2,
    },
    {
      title: "ПРОЕКТ  КАКОГО ТО ДОМА",
      img: house5,
      price: 1110000,
      square: 200,
      floors: 2,
      bedrooms: 2,
    },
  ];
  function formatNumber(num: number) {
    return new Intl.NumberFormat("ru-RU").format(num);
  }
  const { width } = useWindowSize();

  return (
    <section
      id="catalog"
      className={clsx("containerSectionColumn", styles.projects)}
    >
      <Title title={`ПРОЕКТЫ ДОМОВ И ЦЕНЫ НА СТРОИТЕЛЬСТВО`} />
      <Swiper
        slidesPerView={"auto"}
        slidesPerGroup={1}
        centeredSlides
        loop
        className={styles.swiper}
        slidesOffsetBefore={
          width === "large" ? 20 : width === "small" ? 0 : -20
        }
        grabCursor={true}
        modules={[Pagination]}
        pagination={{ clickable: true }}
      >
        {projects.map(
          ({ title, img, price, square, floors, bedrooms }, index) => (
            <SwiperSlide key={index}>
              <ProjectCard
                title={title}
                img={img}
                price={formatNumber(price)}
                square={square}
                floors={floors}
                bedrooms={bedrooms}
              />
            </SwiperSlide>
          )
        )}
      </Swiper>
    </section>
  );
};

export default CatalogProjects;
