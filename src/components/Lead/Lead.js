import styles from "./Lead.module.css";
import route from "../../Images/route.svg";
import { useContext } from "react";
import { LanguageContext } from "../App/App";

function Lead() {
  const textContent = useContext(LanguageContext);
  return (
    <section className={styles.wrapper}>
      <h1 className={styles.title}>{textContent.lead.title}</h1>
      <h2 className={styles.subtitle}>
        Настоящая страна не в выпусках новостей, а здесь.
      </h2>
      <figure className={styles.backgroundPhoto}>
        <img src={route} className={styles.stopovers} alt="route" />
      </figure>
      <figcaption className={styles.caption}>ваша полка — верхняя</figcaption>
    </section>
  );
}

export default Lead;
