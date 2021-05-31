import React, { useState } from 'react'
import {Collapse} from 'react-collapse'

export default function ChooseLanguage({mainLang,setMainLang,transLang,setTransLang}) {

    const [showMainLangOptions,setShowMainLangOptions] = useState(true)
    const [showTransLangOptions, setShowTransLangOptions] = useState(true)

    function changeLanguage(e){
        if(e.target.name==="mainLang"){
            setMainLang(e.target.value);
            setShowMainLangOptions(!showMainLangOptions);
        }else{
            setTransLang(e.target.value);
            setShowTransLangOptions(!showTransLangOptions);
        }
    }

    return (
        <div>
            <span>Translate from:</span>
            <button onClick={()=>{
                setShowMainLangOptions(!showMainLangOptions);
            }}>{mainLang}</button>
            <Collapse isOpened={showMainLangOptions}>
                <fieldset onChange={changeLanguage} id="mainLang">
                    <span>English <input type="radio" value="eng" name="mainLang"/></span>
                    <span>Swedish <input defaultChecked type="radio" value="swe" name="mainLang"/></span>
                    <span>Serbian <input type="radio" value="srb" name="mainLang"/></span>
                </fieldset>
            </Collapse>
            <span>Translate to:</span>
            <button onClick={()=>{
                setShowTransLangOptions(!showTransLangOptions);
            }}>{transLang}</button>
            <Collapse isOpened={showTransLangOptions}>
            <fieldset onChange={changeLanguage} id="transLang">
                <span>English <input defaultChecked type="radio" value="eng" name="transLang"/></span>
                <span>Swedish <input type="radio" value="swe" name="transLang"/></span>
                <span>Serbian <input type="radio" value="srb" name="transLang"/></span>
            </fieldset>
            </Collapse>
            
        </div>
    )
}
