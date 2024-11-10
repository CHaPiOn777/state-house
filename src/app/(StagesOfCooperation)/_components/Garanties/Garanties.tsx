import GarantiesIcon1 from "@/img/icons/garanties/GarantiesIcon1";
import GarantiesIcon2 from "@/img/icons/garanties/GarantiesIcon2";
import GarantiesIcon3 from "@/img/icons/garanties/GarantiesIcon3";
import GarantiesIcon4 from "@/img/icons/garanties/GarantiesIcon4";
import React from "react";
import styles from "./Garanties.module.css";

const Garanties = () => {
  const dataObj = [
    {
      icon: <GarantiesIcon1 />,
      title: "Гарантия качества работ",
      subtitle:
        "Мы уделяем особое внимание качеству всех этапов строительства и используем только высококачественные материалы",
    },
    {
      icon: <GarantiesIcon2 />,
      title: "Гарантия наших обязательств",
      subtitle:
        "Мы всегда придерживаемся сроков и условий, оговоренных в договоре. В случае непредвиденных ситуаций, мы находим наилучшее решение",
    },
    {
      icon: <GarantiesIcon3 />,
      title: "Гарантия на материалы",
      subtitle:
        "Предоставляем гарантии на материалы, используемые в строительстве. Вы можете быть уверены, что ваш дом будет служить вам долгие годы",
    },
    {
      icon: <GarantiesIcon4 />,
      title: "Гарантийное обслуживание",
      subtitle:
        "После сдачи объекта в эксплуатацию, мы предоставляем вам гарантийное обслуживание в течение определенного срока ",
    },
  ];
  return (
    <div className={styles.content}>
      <h3 className={styles.title}>Наши гарантии включают:</h3>
      <ul className={styles.list}>
        {dataObj.map(({ icon, title, subtitle }, index) => (
          <li key={index} className={styles.listItem}>
            {icon}
            <h4 className={styles.titleItem}>{title}</h4>
            <p className={styles.subtitle}>{subtitle}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Garanties;
