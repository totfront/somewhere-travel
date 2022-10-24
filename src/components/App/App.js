import styles from "./App.module.css";
import Header from "../Header/Header";
import Lead from "../Lead/Lead";

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Lead />
    </div>
  );
}

export default App;
