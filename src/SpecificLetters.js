import React from 'react'

export default function SpecificLetters( {transLang, textField} ) {

    function swedishCharacters(){
        return  <div>
                    <button onClick={writeChar}>å</button>
                    <button onClick={writeChar}>ä</button>
                    <button onClick={writeChar}>ö</button>
                </div>
    }
    function serbianCharacters(){
        return  <div>
                    <button onClick={writeChar}>đ</button>
                    <button onClick={writeChar}>ž</button>
                    <button onClick={writeChar}>ć</button>
                    <button onClick={writeChar}>č</button>
                    <button onClick={writeChar}>š</button>
                </div>
    }

    function writeChar(e){
        textField.current.value = textField.current.value + e.target.textContent;
        textField.current.focus();
    }


    function renderCharacters(){
        if(transLang==="swe"){
            return swedishCharacters();
        }else if(transLang==="srb"){
            return serbianCharacters();
        }
    }
    return (
        <div>
            {renderCharacters()}
        </div>
    )
}
