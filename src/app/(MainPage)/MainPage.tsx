"use client";
import Image from "next/image";
import React, { useState } from "react";
import styles from "../page.module.css";
import bg from "../../img/Main.png";
import bgMobile from "../../img/bgMobile.png";
import ModalCall from "@/components/modal-call";
import { Button } from "@/ui/buttons/Button";
import useWindowSize from "@/hooks/useWindowSize";

const MainPage = () => {
  const { width } = useWindowSize();
  const size: Record<string, Record<"width", number>> = {
    small: {
      width: 520,
    },
    medium: {
      width: 1124,
    },
    large: {
      width: 1440,
    },
  };
  return (
    <section className={styles.section}>
      <Image
        src={bg}
        width={size[width].width}
        // height={'auto'}
        alt="Фон"
        className={styles.bg}
      />
      <h1 className={styles.title}>СТРОИТЕЛЬСТВО ЖИЛЫХ&nbsp;ДОМОВ</h1>
      <p className={styles.subtitle}>
        Построим дом под ключ быстро, качественно и&nbsp;только
        по&nbsp;современным технологиям в&nbsp;Москве и&nbsp;московской области
      </p>
      <ModalCall>
        <Button type="default" styleBtn={styles.button}>
          Рассчитать стоимость
        </Button>
      </ModalCall>
      <input type="checkbox" id="horns" name="horns" />
    </section>
  );
};

export default MainPage;
