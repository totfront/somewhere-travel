import styles from "./PhotoGrid.module.css";
import gridPhoto_1 from "../../images/photogrid/photogrid_1.png";
import gridPhoto_2 from "../../images/photogrid/photogrid_2.png";
import gridPhoto_3 from "../../images/photogrid/photogrid_3.png";
import gridPhoto_4 from "../../images/photogrid/photogrid_4.png";
import gridPhoto_5 from "../../images/photogrid/photogrid_5.png";
import gridPhoto_6 from "../../images/photogrid/photogrid_6.png";
import gridPhoto_7 from "../../images/photogrid/photogrid_7.png";
import gridPhoto_8 from "../../images/photogrid/photogrid_8.png";
import gridPhoto_9 from "../../images/photogrid/photogrid_9.png";
import gridPhoto_10 from "../../images/photogrid/photogrid_10.png";
import gridPhoto_11 from "../../images/photogrid/photogrid_11.png";
import gridPhoto_12 from "../../images/photogrid/photogrid_12.png";

function PhotoGrid() {
  return (
    <section className={styles.photoGrid}>
      <img src={gridPhoto_1} className={styles.photo} alt="Train window" />
      <img src={gridPhoto_2} className={styles.photo} alt="Clouds in the sky" />
      <img
        src={gridPhoto_3}
        className={styles.photo}
        alt="A wolf in the field"
      />
      <img src={gridPhoto_4} className={styles.photo} alt="Misty forest" />
      <img src={gridPhoto_5} className={styles.photo} alt="A car on ice" />
      <img src={gridPhoto_6} className={styles.photo} alt="Beach" />
      <img src={gridPhoto_7} className={styles.photo} alt="Snowy mountains" />
      <img src={gridPhoto_8} className={styles.photo} alt="Road sign" />
      <img src={gridPhoto_9} className={styles.photo} alt="Misty mountains" />
      <img
        src={gridPhoto_10}
        className={styles.photo}
        alt="Mountainous forest"
      />
      <img src={gridPhoto_11} className={styles.photo} alt="Cliffs" />
      <img
        src={gridPhoto_12}
        className={styles.photo}
        alt="Cloudy mountain tops"
      />
    </section>
  );
}

export default PhotoGrid;
