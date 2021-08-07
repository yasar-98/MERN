import React, {useState, useEffect} from 'react'
import Form from '../components/Form'
import Header from '../components/Header'
import axios from 'axios'
import {navigate} from '@reach/router'


const Edit = (props) => {
    const [name, setName] = useState("")
    const [loaded, setLoaded] = useState(false)
    const [errors, setErrors] = useState([]); 

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${props.id}`)
            .then(res => {
                setName(res.data.name)
                setLoaded(true)
            });
    }, [])

    const updateAuthor = (name) => {
        axios.put(`http://localhost:8000//api/${props.id}/edit`, {name})
        .then(res => {
            setName(res.data.name)
            navigate("/")
        })
        .catch(err=>{
            console.log(err.response.data.errors);
            const errorResponse = err.response.data.errors;
            const errorArr = [];
            for (const key of Object.keys(errorResponse)) {
                errorArr.push(errorResponse[key].message)
            }
            setErrors(errorArr);
        })
    }

    return (
        <div>
            <Header header="Favourite Author" route="/" redirect="Home" content="Edit this author:"></Header>
            {loaded && <Form initialName={name} saveAuthor={updateAuthor} errors={errors}></Form>}
        </div>
    )
}

export default Edit
