import clsx from "clsx";
import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import Image from "next/image";
import "./globals.css";
import logo from "../img/logo.svg";
import styles from "./page.module.css";

import WhatsApp from "@/img/icons/WhatsApp";
import Telegram from "@/img/icons/Telegram";
import { Button } from "@/ui/buttons/Button";
import Clock from "@/img/icons/Clock";
import Call from "@/img/icons/Call";

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Строительство и продажа каркасных домов",
  description: "Строительство и продажа каркасных домов",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={clsx(nunitoSans.className, styles.body)}>
        <header className={styles.header}>
          <div className={clsx("container", styles.container)}>
            <div className={styles.topContainer}>
              <div className={styles.logo}>
                <Image width={92} height={110} src={logo} alt="logo" />
                <h1 className={styles.logo__title}>
                  Строительство и продажа каркасных домов
                </h1>
              </div>
              <ul className={styles.list}>
                <li className={styles.listItem}>
                  <Clock />
                  Пн - Вс с 9:00 - 18:00
                </li>
                <li className={styles.listItem}>
                  <Call />
                  8-999-858-14-78
                </li>
                <li className={clsx(styles.listItem, styles.social)}>
                  <a href="#">
                    <WhatsApp />
                  </a>
                </li>
                <li className={clsx(styles.listItem, styles.social)}>
                  <a href="#">
                    <Telegram />
                  </a>
                </li>
              </ul>
              <Button type="transparent">Заказать звонок</Button>
            </div>

            <menu className={styles.bottomContainer}>
              <ul className={styles.listMenu}>
                <li className={styles.menuItem}>Каталог</li>
                <li className={styles.menuItem}>Наши работы</li>
                <li className={styles.menuItem}>Отзывы</li>
                <li className={styles.menuItem}>Оплата и доставка</li>
                <li className={styles.menuItem}>Контакты</li>
              </ul>
            </menu>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
