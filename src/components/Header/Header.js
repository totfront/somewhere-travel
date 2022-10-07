import styles from "./Header.module.css";
import headerLogo from "../../images/__logo.svg";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logoWrapper}>
        <img className="headerImage" src={headerLogo} alt="Map of Russia"></img>
        <p className={styles.imageSignature}>Россия</p>
      </div>
      <div className={styles.links}>
        <a href="#" className={`${styles.link} ${styles.ruLink}`}>
          Ru
        </a>
        <a href="#" className={`${styles.link} ${styles.enLink}`}>
          En
        </a>
      </div>
    </header>
  );
}

export default Header;
