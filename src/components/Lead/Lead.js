import styles from "./Lead.module.css";
import route from "../../Images/route.svg";
import texts from "../../shared/texts.json";

function Lead() {
  return (
    <section className={styles.wrapper}>
      <h1 className={styles.title}>{texts.Lead.title.ru}</h1>
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
