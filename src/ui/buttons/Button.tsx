import React, { ReactElement, ReactNode } from "react";
import classNames from "classnames/bind";
import styles from "./style.module.css";
import clsx from "clsx";
import Arrow from "@/img/icons/arrow";
import { Nunito_Sans } from "next/font/google";

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
});
type ButtonType = "transparent" | "default";

interface ButtonProps {
  type: ButtonType;
  children: ReactNode;
  buttonType?: "button" | "submit";
  style?: string;
  disabled?: boolean;
  onClick?: (e: any) => void;
  isArrow?: boolean;
  styleBtn?: string;
}

export const Button: React.FC<ButtonProps> = ({
  type,
  children,
  onClick,
  style,
  buttonType = "button",
  isArrow = false,
  styleBtn,
}: ButtonProps): ReactElement => {
  const cx = classNames.bind(styles);
  const className = cx(
    "button",
    { [`button-${type}`]: type },
    style,
    nunitoSans.className
  );
  console.log(`button-${type}`);
  const clickHandler = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    if (onClick) {
      event.preventDefault();
      event.stopPropagation();
      onClick(event);
    }
  };

  return (
    <div className={clsx(styles.btnWrapper, styleBtn)}>
      {isArrow ? <Arrow /> : null}
      <button
        type={buttonType}
        className={clsx(className)}
        // onClick={clickHandler}
      >
        {children}
      </button>
    </div>
  );
};
