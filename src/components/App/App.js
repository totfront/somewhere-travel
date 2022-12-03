import styles from "./App.module.css";
import Header from "../Header/Header";
import Lead from "../Lead/Lead";
import PhotoGrid from "../PhotoGrid/PhotoGrid";

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Lead />
      <PhotoGrid />
    </div>
  );
}

export default App;
