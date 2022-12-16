import styles from "./PhotoGrid.module.css";
import trainPhoto from "../../Images/photogrid/photogrid_1.png";
import cloudsPhoto from "../../Images/photogrid/photogrid_2.png";
import wolfPhoto from "../../Images/photogrid/photogrid_3.png";
import forestPhoto from "../../Images/photogrid/photogrid_4.png";
import carPhoto from "../../Images/photogrid/photogrid_5.png";
import beachPhoto from "../../Images/photogrid/photogrid_6.png";
import mountainsPhoto from "../../Images/photogrid/photogrid_7.png";
import roadSignPhoto from "../../Images/photogrid/photogrid_8.png";
import mistyPhoto from "../../Images/photogrid/photogrid_9.png";
import treesPhoto from "../../Images/photogrid/photogrid_10.png";
import cliffPhoto from "../../Images/photogrid/photogrid_11.png";
import topsPhoto from "../../Images/photogrid/photogrid_12.png";

function PhotoGrid() {
  return (
    <section className={styles.photoGrid}>
      <ul>
        <li>
          <img src={trainPhoto} className={styles.photo} alt="Train window" />
        </li>
        <li>
          <img
            src={cloudsPhoto}
            className={styles.photo}
            alt="Clouds in the sky"
          />
        </li>
        <li>
          <img
            src={wolfPhoto}
            className={styles.photo}
            alt="A wolf in the field"
          />
        </li>
        <li>
          <img src={forestPhoto} className={styles.photo} alt="Misty forest" />
        </li>
        <li>
          <img src={carPhoto} className={styles.photo} alt="A car on ice" />
        </li>
        <li>
          <img src={beachPhoto} className={styles.photo} alt="Beach" />
        </li>
        <li>
          <img
            src={mountainsPhoto}
            className={styles.photo}
            alt="Snowy mountains"
          />
        </li>
        <li>
          <img src={roadSignPhoto} className={styles.photo} alt="Road sign" />
        </li>
        <li>
          <img
            src={mistyPhoto}
            className={styles.photo}
            alt="Misty mountains"
          />
        </li>
        <li>
          <img
            src={treesPhoto}
            className={styles.photo}
            alt="Mountainous forest"
          />
        </li>
        <li>
          <img src={cliffPhoto} className={styles.photo} alt="Cliffs" />
        </li>
        <li>
          <img
            src={topsPhoto}
            className={styles.photo}
            alt="Cloudy mountain tops"
          />
        </li>
      </ul>
    </section>
  );
}

export default PhotoGrid;
