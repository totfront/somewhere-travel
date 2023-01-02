import styles from "./App.module.css";
import Header from "../Header/Header";
import Lead from "../Lead/Lead";
import PhotoGrid from "../PhotoGrid/PhotoGrid";
import languageRu from "../../shared/data/textsRu.json";
import languageEng from "../../shared/data/textsEn.json";
import { createContext, useState } from "react";

export const LanguageContext = createContext(null);

function App() {
  const [language, setLanguage] = useState("ru");

  return (
    <LanguageContext.Provider
      value={language === "ru" ? languageRu : languageEng}
    >
      <div className={styles.app}>
        <Header setLanguage={setLanguage} />
        <Lead />
        <PhotoGrid />
      </div>
    </LanguageContext.Provider>
  );
}

export default App;
