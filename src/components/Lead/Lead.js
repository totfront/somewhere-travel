import styles from "./Lead.module.css";
import route from "../../images/route.svg";

function Lead() {
  return (
    <>
      <p className={styles.title}>Путешествия по России</p>
      <p className={styles.subtitle}>
        Настоящая страна не в выпусках новостей, а здесь.
      </p>
      <figure className={styles.figure}>
        <figcaption className={styles.caption}>ваша полка — верхняя</figcaption>
      </figure>
    </>
  );
}

export default Lead;
