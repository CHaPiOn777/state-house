"use client";

import Image from "next/image";
import styles from "./page.module.css";
import bg from "../img/Main.png";
import clsx from "clsx";
import "./globals.css";
import { Button } from "@/ui/buttons/Button";
import { useState } from "react";
import ModalCall from "@/components/modal-call";

export default function Home() {
  const [active, setActive] = useState<boolean>(false);
  return (
    <main className={clsx(styles.main, "container")}>
      <Image
        src={bg}
        width={1440}
        height={950}
        alt="Фон"
        className={styles.bg}
      />
      <h1 className={styles.title}>СТРОИТЕЛЬСТВО ЖИЛЫХ&nbsp;ДОМОВ</h1>
      <p className={styles.subtitle}>
        Построим дом под ключ быстро, качественно и&nbsp;только
        по&nbsp;современным технологиям в&nbsp;Москве и&nbsp;московской области
      </p>
      <ModalCall>
        <Button
          type="default"
          styleBtn={styles.button}
          onClick={() => setActive(true)}
        >
          Рассчитать стоимость
        </Button>
      </ModalCall>
      <input type="checkbox" id="horns" name="horns" />
    </main>
  );
}
