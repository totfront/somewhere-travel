import styles from "./PhotoGrid.module.css";
import gridPhoto_1 from "../../images/photogrid_1.png";

function PhotoGrid() {
  return (
    <section className={styles.photoGrid}>
      <img src={gridPhoto_1} className={styles.photo} />
      <img src={gridPhoto_1} className={styles.photo} />
      <img src={gridPhoto_1} className={styles.photo} />
      <img src={gridPhoto_1} className={styles.photo} />
      <img src={gridPhoto_1} className={styles.photo} />
      <img src={gridPhoto_1} className={styles.photo} />
      <img src={gridPhoto_1} className={styles.photo} />
      <img src={gridPhoto_1} className={styles.photo} />
      <img src={gridPhoto_1} className={styles.photo} />
      <img src={gridPhoto_1} className={styles.photo} />
      <img src={gridPhoto_1} className={styles.photo} />
      <img src={gridPhoto_1} className={styles.photo} />
    </section>
  );
}

export default PhotoGrid;
