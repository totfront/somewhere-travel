import styles from "./App.module.css";
import Header from "../Header/Header";
import Lead from "../Lead/Lead";
import Place from "../Place/Place";
import PhotoGrid from "../PhotoGrid/PhotoGrid";
import Intro from "../Intro/Intro";

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Lead />
      <Intro />
      <PhotoGrid />
      <Place />
    </div>
  );
}

export default App;
