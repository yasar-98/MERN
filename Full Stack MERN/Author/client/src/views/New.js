import React, {useState} from 'react'
import axios from 'axios'
import Form from '../components/Form'
import Header from '../components/Header'
import {navigate} from '@reach/router'

const New = () => {
    const [errors, setErrors] = useState([]); 

    const createAuthor = (name) => {
        axios.post('http://localhost:8000/api/authors/new', {name})
        .then(res => {
            console.log(res)            
            navigate("/")})
        .catch(err=>{
            const errorResponse = err.response.data.errors; // Get the errors from err.response.data
            const errorArr = []; // Define a temp error array to push the messages in
            for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                errorArr.push(errorResponse[key].message)
            }
            // Set Errors
            setErrors(errorArr);
        })
    }
    return (
        <div>
            <Header header="Favourite Author" route="/" redirect="Home" content="Add a new author:"></Header>
            <Form initialName="" saveAuthor={createAuthor} errors={errors}></Form>
        </div>
    )
}

export default New
