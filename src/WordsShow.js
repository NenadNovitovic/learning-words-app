import React from 'react'
import Word from './Word'

export default function WordsShow({reci}) {
    return (
        reci.map(word=>{
            return <Word key={word.id} word={word}/>
        })
        
    )
}
