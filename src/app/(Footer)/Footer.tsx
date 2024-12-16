"use client";
import React from "react";
import styles from "./Footer.module.css";
import logo from "../../img/Logo.png";
import Image from "next/image";
import ModalCall from "@/components/modal-call";
import { Button } from "@/ui/buttons/Button";
import useWindowSize from "@/hooks/useWindowSize";

const Footer = () => {
  const { width } = useWindowSize();

  return (
    <footer id="contacts" className={styles.footer}>
      <div className={styles.section}>
        <div className={styles.sectionText}>
          <div className={styles.logoBlock}>
            <Image width={92} height={110} src={logo} alt="logo" />
            <p className={styles.text}>
              Строительство и продажа <br /> каркасных домов
            </p>
          </div>
          <div className={styles.listsBlock}>
            <ul className={styles.list}>
              <li className={`${styles.text} ${styles.textStyles}`}>
                О компании
              </li>
              <li className={styles.text}>
                <a href="#catalog"> Каталог</a>
              </li>
              <li className={styles.text}>
                <a href="#price"> Оплата и доставка</a>
              </li>
              <li className={styles.text}>
                <a href="#reviews"> Отзывы</a>
              </li>
            </ul>
            <ul className={`${styles.list} ${styles.listRight}`}>
              <li className={`${styles.text} ${styles.textStyles}`}>
                Контакты
              </li>
              <li className={`${styles.text} ${styles.textRight}`}>
                8-999-858-14-78
              </li>
              <li className={`${styles.text} ${styles.textRight}`}>
                Эл почта: pikaby777@rambler.ru
              </li>
              <li className={`${styles.text} ${styles.textRight}`}>
                г. Щёлково Микрорайон Богородский д.1
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.footerBlock}>
          <p>
            2019-2023 © «Status House» Политика конфиденциальности, не является
            пуличной офертой
          </p>
          {width === "large" && (
            <ModalCall>
              <Button type="transparent" styleBtn={styles.button}>
                Рассчитать стоимость
              </Button>
            </ModalCall>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
