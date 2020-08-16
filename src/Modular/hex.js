import React from 'react'

const hex = (props) =>{
    return(
        <div>
            <h2 className={'text'} style={{color: props.textColor}}>The current color is:</h2>
            <h1 className={'text'} style={{color: props.textColor}}>{props.hexColor}</h1>
        </div>
    )
}

export default hex;