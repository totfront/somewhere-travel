import styles from "./Place.module.css";
import imgKosa from "../../images/place/kosa.png";
import imgKolsky from "../../images/place/kolsky.png";
import imgBaikal from "../../images/place/baikal.png";
import imgKarelia from "../../images/place/kareliya.png";
import imgAltai from "../../images/place/altai.png";

function Place() {
  return (
    <section className={styles.wrapper}>
      <article className={styles.article}>
        <div className={styles.articleHeader}>
          <h2 className={styles.title}>Куршская коса</h2>
          <h3 className={styles.subtitle}>
            <span className={styles.url}>URL</span>
            <a href="#" className={styles.link}>
              park-kosa.ru
            </a>
          </h3>
        </div>
        <div className={styles.articleContent}>
          <img className={styles.img} src={imgKosa} alt="Kurshskaya Kosa"></img>
          <div className={styles.paragraphs}>
            <p className={styles.paragraph}>
              Здесь, посреди лесов и песчаных дюн, вы сможете увидеть два водных
              горизонта — спокойного Куршского залива с одной стороны и
              подёрнутого рябью волн Балтийского моря с другой. Уникальная
              природная зона на краю российского анклава.
            </p>
            <p className={styles.paragraph}>
              На этом Калининградская область не заканчивается. Для
              путешественника и исследователя там же по соседству — самая
              западная точка России, Балтийская коса, — и немецкое наследие
              россыпи небольших приморских городов. Атмосфера здешних мест
              исключает суету, окуная в спокойствие природы и запах стального,
              прохладного моря.
            </p>
          </div>
        </div>
      </article>
      <article className={styles.article}>
        <div className={styles.articleHeader}>
          <h2 className={styles.title}>Кольский</h2>
          <h3 className={styles.subtitle}>
            <span className={styles.url}>URL</span>
            <a href="#" className={styles.link}>
              National Geographic
            </a>
          </h3>
        </div>
        <div className={styles.articleContent}>
          <img
            className={styles.img}
            src={imgKolsky}
            alt="Kolsky Peninsula"
          ></img>
          <div className={styles.paragraphs}>
            <p className={styles.paragraph}>
              Почти весь полуостров находится за Полярным кругом. Саамская
              тундра, от которой на юг — тайга, а на север — Ледовитый океан,
              прикидывающийся Баренцевым морем.
            </p>
            <p className={styles.paragraph}>
              Возможно, вы смотрели Звягинцева и даже слышали историю
              арктического фестиваля в Териберке. Возможно, слово «Хибины» не
              осталось под снегом школьных воспоминаний об уроках географии.
              Возможно, вы не интересовались пронизывающей земную кору
              сверхглубокой скважиной, а от апатитов вас давно накрывает апатия.
              Но ваша мечта увидеть северное сияние начинает сбываться с билетом
              в Мурманск.
            </p>
          </div>
        </div>
      </article>
      <article className={styles.article}>
        <div className={styles.articleHeader}>
          <h2 className={styles.title}>Алтай</h2>
          <h3 className={styles.subtitle}>
            <span className={styles.url}>URL</span>
            <a href="#" className={styles.link}>
              Facebook
            </a>
          </h3>
        </div>
        <div className={styles.articleContent}>
          <img className={styles.img} src={imgAltai} alt="Altai Forest"></img>
          <div className={styles.paragraphs}>
            <p className={styles.paragraph}>
              Алтай — одно из красивейших мест в России. В первую очередь из-за
              гор: если ехать вдоль хребта, вы увидите склоны, усыпанные
              соснами, горные реки и озёра. А если вы откроете в автомобиле
              окна, сможете познакомиться с невидимым чудом здешних мест —
              горным воздухом.
            </p>
            <p className={styles.paragraph}>
              Климат на Алтае умеренный, поэтому ехать сюда лучше всего летом.
              Так вы увидите всё разнообразие местной флоры и фауны. По лесам
              Алтая бродят лоси, над хребтами летают орлы, а на равнинах пасутся
              косули. И знаменитые манулы — тоже обитатели Алтайского края.
            </p>
          </div>
        </div>
      </article>
      <article className={styles.article}>
        <div className={styles.articleHeader}>
          <h2 className={styles.title}>Зимний Байкал</h2>
          <h3 className={styles.subtitle}>
            <span className={styles.url}>URL</span>
            <a href="#" className={styles.link}>
              https://vk.com/baikalmile
            </a>
          </h3>
        </div>
        <div className={styles.articleContent}>
          <img
            className={styles.img}
            src={imgBaikal}
            alt="Baikal Lake on ice"
          ></img>
          <div className={styles.paragraphs}>
            <p className={styles.paragraph}>
              Всем известен Байкал как крупнейшее озеро в мире. Многие также
              знают, что это самый большой источник пресной воды и одно из
              красивейших мест в России.
            </p>
            <p className={styles.paragraph}>
              Конечно, это всё так. Но Байкал ещё идеальное место для 
              соревнований по скийорингу. Это такой вид спорта, когда лыжник
              привязывает себя к мотоциклу, и тандем старается развить как можно
              бóльшую скорость на льду. В марте 2019 года на фестивале
              «Байкальская миля» был поставлен мировой рекорд — 197.011 км/ч.
            </p>
          </div>
        </div>
      </article>
      <article className={styles.article}>
        <div className={styles.articleHeader}>
          <h2 className={styles.title}>Карелия</h2>
          <h3 className={styles.subtitle}>
            <span className={styles.url}>URL</span>
            <a href="#" className={styles.link}>
              http://vodlozero.ru/
            </a>
          </h3>
        </div>
        <div className={styles.articleContent}>
          <img
            className={styles.img}
            src={imgKarelia}
            alt="Karelian Lake and Forest"
          ></img>
          <div className={styles.paragraphs}>
            <p className={styles.paragraph}>
              Сибирь заканчивается не на Урале, а в Карелии: образующая тайгу
              сибирская лиственница не растёт западнее Водлозера. Зато здесь она
              вымахивает на 30 метров — леса карельских национальных парков
              из-за непроходимых болот никогда не знали топора. Некоторым соснам
              уже больше чем полтысячелетия. Прикоснитесь к живому существу,
              видевшему солнце раньше, чем увидал его Иван Грозный. В
              девственном лесу на сотню километров не встретишь тропы. А на
              редких тропинках деревья в паре метров от земли помечены
              медвежьими когтями. Чтобы все знали, кто тут хозяин.
            </p>
          </div>
        </div>
      </article>
    </section>
  );
}

export default Place;
