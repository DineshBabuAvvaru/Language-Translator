import React, { useState } from "react";
import "./App.css";
import translations from "./Components/Translations";
import LanguageSelector from "./Components/LanguageSelector";
import Greetings from "./Components/Greetings";

function App() {
  const [currentLanguage, setCurrentLanguage] = useState("English");
  const [selectedTranslation, setSelectedTranslation] = useState(
    translations[currentLanguage]
  );

  const changeLanguage = (newLanguage) => {
    setCurrentLanguage(newLanguage);
    setSelectedTranslation(translations[newLanguage]);
  };
  
  return (
    <div className="App">
      <h1>Language Translation Example</h1>
      <LanguageSelector
        languages={Object.keys(translations)}
        currentLanguage={currentLanguage}
        onLanguageChange={changeLanguage}
        
      />
      <Greetings translation={selectedTranslation} />
    </div>
  );
}

export default App;
