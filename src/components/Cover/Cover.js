import coverPhoto from "../../images/coverPhoto.png";
import styles from "./Cover.module.css";

function Cover() {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>До Байкала «на собаках»</h2>
      <h3 className={styles.subtitle}>
        По мотивам учебной темы о Транссибе — путешествие от столицы до Байкала
        на электричках.
      </h3>
    </section>
  );
}

export default Cover;
