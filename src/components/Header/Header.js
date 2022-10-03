import styles from "./Header.module.css";
// import langLink from "./images/lang-link.png";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header__content}>
        123
        {/* <img className="headerImage" src={langLink} alt="Map of Russia"></img> */}
      </div>
    </header>
  );
}

export default Header;
