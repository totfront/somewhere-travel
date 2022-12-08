import styles from "./Place.module.css";
import imgKosa from "../../Images/place/kosa.png";
import imgKolsky from "../../Images/place/kolsky.png";
import imgBaikal from "../../Images/place/baikal.png";
import imgKarelia from "../../Images/place/kareliya.png";
import imgAltai from "../../Images/place/altai.png";

function Place() {
  return (
    <section className={styles.wrapper}>
      <section className={styles.kosa}>
        <title className={styles.title}>Куршская коса</title>
        <subtitle className={styles.subtitle}>
          <span className={styles.url}>URL</span>
          <a href="#">park-kosa.ru</a>
        </subtitle>
        <img
          className={styles.imgKosa}
          src={imgKosa}
          alt="Kurshskaya Kosa"
        ></img>
        <p className={styles.paragraph}>
          Здесь, посреди лесов и песчаных дюн, вы сможете увидеть два водных
          горизонта — спокойного Куршского залива с одной стороны и подёрнутого
          рябью волн Балтийского моря с другой. Уникальная природная зона на
          краю российского анклава.
        </p>
        <p className={styles.paragraph}>
          На этом Калининградская область не заканчивается. Для путешественника
          и исследователя там же по соседству — самая западная точка России,
          Балтийская коса, — и немецкое наследие россыпи небольших приморских
          городов. Атмосфера здешних мест исключает суету, окуная в спокойствие
          природы и запах стального, прохладного моря.
        </p>
      </section>
      <section className={styles.kolski}></section>
      <section className={styles.altai}></section>
      <section className={styles.baikal}></section>
      <section className={styles.karelia}></section>
    </section>
  );
}

export default Place;
