import React from 'react'

const ShowBoxes = (props) => {
    const inlineStyle={
        display : 'inline-block',
        margin: '10px'
    }
    

    return (
        <div>
            {
                props.inputs.map( (box, i) => {
                return( 
                <div key={ i } style= {inlineStyle}>
                    <p style= {{
                        backgroundColor : box.color,
                        width : '200px' ,
                        height : '200px' ,
                        }}>
                    </p>
                </div>
                );
                } )
            } 
        </div>
    )
}

export default ShowBoxes
