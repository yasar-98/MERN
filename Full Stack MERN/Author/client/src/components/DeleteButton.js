import React from 'react'
import axios from 'axios'

const DeleteButton = (props) => {

    const deleteHandler = () => {
        axios.delete(`http://localhost:8000/api/${props.id}/delete`)
        .then(res => props.successDelete(props.id))
    }

    return (
        <div>
            <button onClick={deleteHandler}>Delete</button>
        </div>
    )
}

export default DeleteButton
