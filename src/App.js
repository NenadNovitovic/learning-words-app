import React, {useState} from 'react'
import ChooseLanguage from './ChooseLanguage';
import WordCheck from './WordCheck'

function App() {
  const [mainLanguage, setMainLanguage] = useState("swe");
  const [translatedLanguage, setTranslatedLanguage] = useState("eng");

  return (
      <div className="container">
        <ChooseLanguage mainLang={setMainLanguage} transLang={setTranslatedLanguage}/>
        <WordCheck mainLang={mainLanguage} transLang={translatedLanguage}/>
      </div>
  );
}

export default App;


/**/