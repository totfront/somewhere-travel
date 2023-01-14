import styles from "./Footer.module.css";

function Footer() {
  return (
    <section className={styles.wrapper}>
      <ul className={styles.list}>
        <li className={styles.footerItem}>
          <a
            href="https://www.yandex.ru/maps"
            target="_blank"
            className={styles.link}
          >
            Карты
          </a>
        </li>
        <li className={styles.footerItem}>
          <a
            href="https://www.yandex.ru/pogoda"
            target="_blank"
            className={styles.link}
          >
            Погода
          </a>
        </li>
        <li className={styles.footerItem}>
          <a
            href="https://rasp.yandex.ru/"
            target="_blank"
            className={styles.link}
          >
            Расписание
          </a>
        </li>
        <li className={styles.footerItem}>
          <a
            href="https://calendar.yandex.ru"
            target="_blank"
            className={styles.link}
          >
            Календарь
          </a>
        </li>
        <li className={styles.footerItem}>
          <a
            href="https://travel.yandex.ru"
            target="_blank"
            className={styles.link}
          >
            Путешествие
          </a>
        </li>
      </ul>
      <p className={styles.copyright}>© 2023. Роман Кош</p>
    </section>
  );
}

export default Footer;
