import words from './wordsdata.json'
import React, { useState,useRef } from 'react'
import SpecificLetters from './SpecificLetters'

export default function WordCheck( {mainLang, transLang} ) {
    const [wordsList , setWordsList] = useState(
        shuffleArray( words.map( ( word,idx ) => {
        return {
            id:idx,
            swe:word.swe,
            eng:word.eng,
            srb:word.srb
        }
        }))
    )
    const [wordIndex, setWordIndex] = useState(0)
    const [correctWordsCounter, setCorrectWordsCounter] = useState(0)
    const [wrongWordsCounter, setWrongWordsCounter] = useState(0)
    const [outputMessage, setOutputMessage] = useState()
    const inputWordField = useRef();
    
    function shuffleArray(inputArray) {
        let array = inputArray;
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return inputArray;
    }

    function checkWord(e){
        e.preventDefault();

        var inputWord = inputWordField.current.value.toLowerCase().trim();
        if(wordsList.find(word=>{
          return word[transLang].toLowerCase()===inputWord;
        })){
            setCorrectWordsCounter(correctWordsCounter+1);
            setOutputMessage("Correct!");
        }else{
          setWrongWordsCounter(wrongWordsCounter+1);
          setOutputMessage("Wrong! Correct translation was: " + wordsList[wordIndex][transLang]);
        }
        if(wordIndex+1>=wordsList.length){
            setWordsList(shuffleArray(wordsList));
            setWordIndex(0)
        }else{
            setWordIndex(wordIndex+1);
        }
        inputWordField.current.value="";
      }

    return (
        <div className="checkContainer">
            <h1>Translate the word </h1>
            <span className="wordSpan"> {wordsList[wordIndex][mainLang]}</span>
            <form onSubmit={checkWord}>
                <input autoFocus ref={inputWordField} type="text"/>
            </form>
            <SpecificLetters transLang={transLang} textField={inputWordField}/>
            {outputMessage}
            <div>Correct words:{correctWordsCounter}</div>
            <div>Wrong words:{wrongWordsCounter} </div>
        </div>
    )
}
