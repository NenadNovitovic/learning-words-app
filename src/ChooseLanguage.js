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
        
        console.log("promena "+e);
    }

    return (
        <div>
            <span>Translate from:</span>
            <button  className="button-6" onClick={()=>{
                setShowMainLangOptions(!showMainLangOptions);
            }}>{mainLang}</button>
            <Collapse isOpened={showMainLangOptions}>
                <fieldset onChange={changeLanguage} id="mainLang">
                    <label>English <input type="radio" value="eng" name="mainLang"/></label>
                    <label>Swedish <input defaultChecked type="radio" value="swe" name="mainLang"/></label>
                    <label>Serbian <input type="radio" value="srb" name="mainLang"/></label>
                </fieldset>
            </Collapse>
            <span>Translate to:</span>
            <button className="button-6" onClick={()=>{
                setShowTransLangOptions(!showTransLangOptions);
            }}>{transLang}</button>
            <Collapse isOpened={showTransLangOptions}>
            <fieldset onChange={changeLanguage} id="transLang">
                <label>English <input defaultChecked type="radio" value="eng" name="transLang"/></label>
                <label>Swedish <input type="radio" value="swe" name="transLang"/></label>
                <label>Serbian <input type="radio" value="srb" name="transLang"/></label>
            </fieldset>
            </Collapse>
            
        </div>
    )
}
