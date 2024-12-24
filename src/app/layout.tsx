import clsx from "clsx";
import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import styles from "./page.module.css";

import Footer from "@/app/(Footer)/Footer";
import Header from "@/app/(Header)/Header";

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "State House - Строительство и продажа каркасных домов в Москве и московской области",
  description:
    "State House - Строительство и продажа каркасных домов в Москве и московской области",
  keywords:
    "state-house, каркасные дома, строительство домов, построить дом в Москве",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <head>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
      </head>
      <body className={clsx(nunitoSans.className, styles.body)}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
