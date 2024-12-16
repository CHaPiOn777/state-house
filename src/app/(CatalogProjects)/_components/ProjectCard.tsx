import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React from "react";
import { SwiperSlide, useSwiper, useSwiperSlide } from "swiper/react";
import styles from "../CatalogProjects.module.css";
import { Button } from "@/ui/buttons/Button";
import ModalCall from "@/components/modal-call";
import clsx from "clsx";

const ProjectCard = ({
  title,
  img,
  price,
  square,
  floors,
  bedrooms,
}: {
  title: string;
  img: StaticImport;
  price: string;
  square: number;
  floors: number;
  bedrooms: number;
}) => {
  const { isActive } = useSwiperSlide();
  const objDesc = [
    { title: "Площадь", desc: `${square} кв. м.` },
    { title: "Этажей", desc: floors },
    { title: "Спален", desc: bedrooms },
  ];
  return (
    <div
      className={clsx(styles.card)}
      style={{
        transform: isActive ? "scale(1)" : "scale(0.85)",
        transition: "all .2s ease-in-out",
        opacity: isActive ? 1 : 0.4,
      }}
    >
      <div className={styles.imgBlock}>
        <Image className={styles.image} src={img} alt={title} />
      </div>
      <div className={styles.textBlock}>
        <div className={styles.titlesBlock}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.price}>от {price} руб.</p>
        </div>
        <div className={styles.buttonBlock}>
          <ul className={styles.descBlock}>
            {objDesc.map(({ title, desc }, index) => (
              <li key={index}>
                <p className={styles.titleDesc}>
                  {title}: <span className={styles.desc}>{desc}</span>
                </p>
              </li>
            ))}
          </ul>
          <ModalCall>
            <Button type="default" styleBtn={styles.button}>
              Рассчитать стоимость
            </Button>
          </ModalCall>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
