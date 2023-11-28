import Image from "next/image";
import styles from "./page.module.css";
import bg from "../img/bg.png";

export default function Home() {
  return (
    <main className={styles.main}>
      <Image
        src={bg}
        width={1440}
        height={950}
        alt="Фон"
        className={styles.bg}
      />
      <div className={styles.title}>СТРОИТЕЛЬСТВО ЖИЛЫХ ДОМОВ</div>
      {/* <div className={styles.}></div> */}
    </main>
  );
}
