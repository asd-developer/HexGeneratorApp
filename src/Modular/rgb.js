import React from 'react'

const rgb = (props) =>{
    return(
        <>
            <h1 style={{color: props.textColor}}>{props.rgbColor}</h1>
        </>
    )
}

export default rgb;