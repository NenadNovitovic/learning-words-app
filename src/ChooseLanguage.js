import React from 'react'

export default function ChooseLanguage({mainLang,transLang}) {

    function changeLanguage(e){
        if(e.target.name==="mainLang"){
            mainLang(e.target.value);
        }else{
            transLang(e.target.value);
        }
    }

    return (
        <div>
            <span>Translate from:</span>
            <fieldset onChange={changeLanguage} id="mainLang">
                English <input type="radio" value="eng" name="mainLang"/>
                Swedish <input defaultChecked type="radio" value="swe" name="mainLang"/>
                Serbian <input type="radio" value="srb" name="mainLang"/>
            </fieldset>
            <span>Translate to:</span>
            <fieldset onChange={changeLanguage} id="transLang">
                English <input defaultChecked type="radio" value="eng" name="transLang"/>
                Swedish <input type="radio" value="swe" name="transLang"/>
                Serbian <input type="radio" value="srb" name="transLang"/>
            </fieldset>
        </div>
    )
}
