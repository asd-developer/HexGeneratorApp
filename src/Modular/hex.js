import React from 'react'

const hex = (props) =>{
    return(
        <div onClick={(event)=>event.stopPropagation()}>
            <h2 className={'text preventselection'} style={{color: props.textColor}}>The current color is:</h2>
            <h1 className={'text'} style={{color: props.textColor}}>{props.hexColor}</h1>
        </div>
    )
}

export default hex;