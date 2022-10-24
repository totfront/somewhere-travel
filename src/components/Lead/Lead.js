import styles from "./Lead.module.css";
import route from "../../images/route.svg";

function Lead() {
  return (
    <section className={styles.wrapper}>
      <title className={styles.title}>Путешествия по России</title>
      <subtitle className={styles.subtitle}>
        Настоящая страна не в выпусках новостей, а здесь.
      </subtitle>
      <figure className={styles.figure}>
        <figcaption className={styles.caption}>ваша полка — верхняя</figcaption>
      </figure>
    </section>
  );
}

export default Lead;
