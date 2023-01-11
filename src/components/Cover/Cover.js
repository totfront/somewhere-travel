import trainsPhoto from "../../images/coverPhoto.png";
import styles from "./Cover.module.css";

function Cover() {
  return (
    <section className={styles.wrapper}>
      <img
        src={trainsPhoto}
        alt="Train station"
        className={styles.coverPhoto}
      ></img>
      <div className={styles.text}>
        <h2 className={styles.title}>До Байкала «на собаках»</h2>
        <h3 className={styles.subtitle}>
          По мотивам учебной темы о Транссибе — путешествие от столицы до
          Байкала на электричках.
        </h3>
      </div>
      <div className={styles.rectangle} />
    </section>
  );
}

export default Cover;
