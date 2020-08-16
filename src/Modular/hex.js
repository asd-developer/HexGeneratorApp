import React from 'react'

const hex = (props) =>{
    return(
        <div>
            <h2>The current color is:</h2>
            <h1>{props.color}</h1>
        </div>
    )
}

export default hex;