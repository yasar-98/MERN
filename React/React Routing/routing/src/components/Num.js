import React from 'react'

const Num = (props) => {
    if (isNaN(props.id)){
    return (
        <div>
            <p>the word is {props.id} </p>
        </div>
    )}else{
        return (
            <div>
                <p>The number is: {props.id}</p>
            </div>
        );
    
    }
}

export default Num
