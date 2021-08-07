import React,{useState} from 'react'
import {navigate} from '@reach/router'

const Form = (props) => {
    const [name, setName] = useState(props.initialName)
    const submitHandler = (e) =>{
        e.preventDefault()
        props.saveAuthor(name);
    }
    return (
        <div>
        <form onSubmit={submitHandler}>
            {props.errors.map((err, index) => <p key={index}>{err}</p>)}
            Name: <input name="name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <button onClick={() => navigate("/")}>Cancel</button>
            <input type="submit" value="Submit" />
        </form>

        </div>
    )
}

export default Form
