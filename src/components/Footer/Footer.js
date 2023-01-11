import styles from "./Footer.module.css";

function Footer() {
  return (
    <section className={styles.wrapper}>
      <ul className={styles.list}>
        <li className={styles.footerItem}>
          <a
            href="https://www.google.com/maps"
            target="_blank"
            className={styles.link}
          >
            Карты
          </a>
        </li>
        <li className={styles.footerItem}>
          <a
            href="https://www.gismeteo.ru/catalog/russia/"
            target="_blank"
            className={styles.link}
          >
            Погода
          </a>
        </li>
        <li className={styles.footerItem}>
          <a
            href="https://www.tutu.ru/"
            target="_blank"
            className={styles.link}
          >
            Расписание
          </a>
        </li>
        <li className={styles.footerItem}>
          <a
            href="http://www.consultant.ru/law/ref/calendar/proizvodstvennye/2023/"
            target="_blank"
            className={styles.link}
          >
            Календарь
          </a>
        </li>
        <li className={styles.footerItem}>
          <a
            href="https://34travel.me/post/5-travel-apps"
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
