import styles from "./Intro.module.css";

function Intro() {
  return (
    <section className={styles.wrapper}>
      <title className={styles.title}>Чего мы там не видели?</title>
      <p className={styles.Introtext}>
        По опросам ВЦИОМ, 95% россиян мечтают куда-нибудь поехать, но только 36%
        планируют провести отпуск в родной стране. Мол, чего мы тут, дома, не
        видели? На самом деле, Россия — это целая вселенная с ласковым морем
        юга, густыми лесами Саян и суровыми льдами плато Путорана. А ещё увидеть
        все эти красоты можно без миллионов на счету, загранпаспорта и
        многочасовых перелетов. Как, например, Вера Башмакова — смелая молодая
        мама, которая взяла в охапку троих детей, усадила их в свою «Ладу» и
        проехала 20 тысяч километров по родной стране. Мы выбрали и описали
        некоторые интересные места, достойные вашего отпуска.
      </p>
      <ul className={styles.Introlist}>
        <li className={styles.Introitem}>
          <span className={styles.bolditem}>Часовых поясов</span> 11
        </li>
        <li className={styles.Introitem}>
          <span className={styles.bolditem}>
            Объектов природного наследия ЮНЕСКО
          </span>{" "}
          12
        </li>
        <li className={styles.Introitem}>
          <span className={styles.bolditem}>
            Объектов культурного наследия ЮНЕСКО
          </span>{" "}
          16
        </li>
        <li className={styles.Introitem}>
          <span className={styles.bolditem}>Природных заповедников</span> 105
        </li>
        <li className={styles.Introitem}>
          <span className={styles.bolditem}>Аэропортов</span> 241
        </li>
      </ul>
    </section>
  );
}

export default Intro;
