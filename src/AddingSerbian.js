import React, {useState,useRef} from 'react'
import words from './wordsdata.json'
import WordsShow from './WordsShow';

export default function AddingSerbian() {
    const [wordsList , setWordsList] = useState(
        words.map( ( word,idx ) => {
            return {
                id:idx,
                swe:word.swe,
                eng:word.eng,
                srb:word.srb
            }
        })
    )
    const inputTextField = useRef();
    const [ wordIndex, setWordIndex] = useState(0)
    function addSerbianTranslation(e){
        e.preventDefault();
        wordsList[wordIndex].srb= inputTextField.current.value;
        if(wordIndex+3>=wordsList.length){
            console.log("PAZI")
        }else{
        setWordIndex(wordIndex+1);
        }
        inputTextField.current.value="";
    }
    function makeSweEngFromArray(){
        return words.map( ( word,idx ) => {
             return {
                 id:idx,swe:word.mainLanguage,
                 eng:word.translatedLanguage
             }
         })
     }
     function logujJSON(){
         console.log(JSON.stringify(wordsList));
     }
    return (
        <div>{wordsList[wordIndex].eng}
            <form onSubmit={addSerbianTranslation}>
            	<input ref={inputTextField} type="text"/>Translate to serb
            </form>
            <button onClick={logujJSON}>Pisi JSON</button>
            <WordsShow reci={wordsList}/>
        </div>
    )
}
