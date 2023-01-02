import styles from "./Header.module.css";
import headerLogo from "../../Images/__logo.svg";

const Header = ({ setLanguage, language }) => {
  return (
    <header className={styles.header}>
      <div className={styles.logoWrapper}>
        <img className="headerImage" src={headerLogo} alt="Map of Russia"></img>
        <p className={styles.imageSignature}>Россия</p>
      </div>
      <div className={styles.buttons}>
        <button
          type={"button"}
          onClick={() => setLanguage("ru")}
          className={`${styles.button} ${styles.ruLink}`}
        >
          Ru
        </button>
        <button
          type={"button"}
          onClick={() => setLanguage("eng")}
          className={`${styles.button} ${styles.enLink}`}
        >
          En
        </button>
      </div>
    </header>
  );
};

export default Header;
