"use client";
import clsx from "clsx";
import Image from "next/image";
import React from "react";
import "../globals.css";
import logo from "../../img/Logo.png";
import styles from "../page.module.css";
import { Button } from "@/ui/buttons/Button";
import BurgerMenu from "@/ui/buttons/BurgerMenu";
import useWindowSize from "@/hooks/useWindowSize";
import Menu from "@/app/(Header)/Menu";
import ListNumber from "@/app/(Header)/ListNumber";
import ModalCall from "@/components/modal-call";
const Header = () => {
  const { width } = useWindowSize();
  const size: Record<string, Record<"width", number>> = {
    small: {
      width: 53,
    },
    medium: {
      width: 53,
    },
    large: {
      width: 92,
    },
  };
  return (
    <header className={styles.header}>
      <div className={clsx("container", styles.container)}>
        <div className={styles.topContainer}>
          <div className={styles.logo}>
            <Image width={size[width].width} src={logo} alt="logo" />
            {width !== "small" && (
              <h1 className={styles.logo__title}>
                Строительство и продажа каркасных домов
              </h1>
            )}
          </div>
          {width === "large" && <ListNumber />}
          <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
            {width !== "small" && (
              <ModalCall>
                <Button type="transparent">Заказать звонок</Button>
              </ModalCall>
            )}
            {width !== "large" && <BurgerMenu />}
          </div>
        </div>
        {width === "large" && <Menu />}
      </div>
    </header>
  );
};

export default Header;
