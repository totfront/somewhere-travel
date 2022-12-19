import styles from "./Header.module.css";
import headerLogo from "../../Images/__logo.svg";

const changeLanguage = () => {
  
};

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logoWrapper}>
        <img className="headerImage" src={headerLogo} alt="Map of Russia"></img>
        <p className={styles.imageSignature}>Россия</p>
      </div>
      <div className={styles.links}>
        {/* rename styles */}
        <button
          type={"button"}
          onClick={changeLanguage}
          className={`${styles.link} ${styles.ruLink}`}
        >
          Ru
        </button>
        <button
          type={"button"}
          onClick={changeLanguage}
          className={`${styles.link} ${styles.enLink}`}
        >
          En
        </button>
      </div>
    </header>
  );
}

export default Header;
