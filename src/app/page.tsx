// "use client";

import styles from "./page.module.css";
import clsx from "clsx";
import "./globals.css";

import MainPage from "@/app/(MainPage)/MainPage";
import WhyMePage from "@/app/(WhyMePage)/WhyMePage";
import CatalogProjects from "@/app/(CatalogProjects)/CatalogProjects";
import InfoBlock from "@/app/(InfoBlock)/InfoBlock";
import StagesOfCooperation from "@/app/(StagesOfCooperation)/StagesOfCooperation";
import Reviews from "@/app/(Reviews)/Reviews";
import End from "@/app/(End)/End";
import Footer from "@/app/(Footer)/Footer";

export default function Home() {
  return (
    <main className={clsx(styles.main, "container")}>
      <MainPage />
      <WhyMePage />
      <CatalogProjects />
      <InfoBlock />
      <StagesOfCooperation />
      <Reviews />
      {/* <End /> */}
    </main>
  );
}
