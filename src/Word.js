import React from 'react'

export default function Word({word}) {


    return (
        <div>
            {word.eng} - {word.swe} - {word.srb}
        </div>
    )
}
