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
  title: "Строительство и продажа каркасных домов",
  description: "Строительство и продажа каркасных домов",
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
      <body className={clsx(nunitoSans.className, styles.body)}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
