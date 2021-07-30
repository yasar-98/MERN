import React, { useState } from 'react';

const FormBox = (props) => {
    const [color, setColor] = useState("");
    const {inputs, setInputs} = props;

    const handleSubmit = (e) => {
        e.preventDefault();
        const newBox = {
            color
        }
        setInputs([...inputs, newBox]);
        setColor("");

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Color: </label> 
                    <input type="text" value={color} onChange={ (e) => setColor(e.target.value) } />
                </div>

                <input type="submit" value="Add Box" />
            </form>
        </div>
    )
}

export default FormBox
