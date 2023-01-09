import styles from "./App.module.css";
import Header from "../Header/Header";
import Lead from "../Lead/Lead";
import Place from "../Place/Place";
import PhotoGrid from "../PhotoGrid/PhotoGrid";
import Intro from "../Intro/Intro";
import Cover from "../Cover/Cover";

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Lead />
      <Intro />
      <PhotoGrid />
      <Place />
      <Cover />
    </div>
  );
}

export default App;
