import React from 'react'

const Word = (props) => {
    return (
        <div>
            <p style={{color:props.color,backgroundColor:props.background}}>The word is:{props.str}</p>
        </div>
    )
}

export default Word
