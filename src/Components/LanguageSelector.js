import React from "react";

const LanguageSelector = ({ languages, currentLanguage, onLanguageChange, onBackToEnglish    }) => {
  return (
    <div>
      {languages.map((lang) => (
        <button
          style={{ margin: "10px" }}
          key={lang}
          onClick={() => onLanguageChange(lang)}
          disabled={lang === currentLanguage} 
        >
          {lang}
        </button>
      ))}
    </div>
  );
};

export default LanguageSelector;
