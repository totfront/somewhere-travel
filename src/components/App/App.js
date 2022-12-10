import styles from "./App.module.css";
import Header from "../Header/Header";
import Lead from "../Lead/Lead";
import Intro from "../Intro/Intro";
function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Lead />
      <Intro />
    </div>
  );
}

export default App;
