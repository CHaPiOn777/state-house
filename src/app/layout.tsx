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
    "фывфы фыв йцкдльпждьррк ьsd;lfmsd;lgm; wm sdlkgmmskdgm ;;ds,f ;lwe,t;lwmm gl",
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
      <head>
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
      </head>
      <body className={clsx(nunitoSans.className, styles.body)}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
