import React from 'react'

const rgb = (props) =>{
    return(
        <div className={'rgbtext'} onClick={(event)=>event.stopPropagation()}>
            <h3 style={{color: props.textColor}}>{props.rgbColor}</h3>
        </div>
    )
}

export default rgb;