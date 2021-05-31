import React, {useState} from 'react'
import ChooseLanguage from './ChooseLanguage';
import WordCheck from './WordCheck'

function App() {
  const [mainLanguage, setMainLanguage] = useState("swe");
  const [translatedLanguage, setTranslatedLanguage] = useState("eng");

  return (
      <div className="container">
        <ChooseLanguage mainLang={mainLanguage} setMainLang={setMainLanguage} transLang={translatedLanguage} setTransLang={setTranslatedLanguage}/>
        <WordCheck mainLang={mainLanguage} transLang={translatedLanguage}/>
      </div>
  );
}

export default App;


/**/