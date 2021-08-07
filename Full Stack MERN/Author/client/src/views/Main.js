import React, {useState,useEffect} from 'react'
import DeleteButton from '../components/DeleteButton'
import axios from 'axios'
import {navigate} from '@reach/router'
import Header from '../components/Header'

const Main = () => {
    const [authors, setAuthors] = useState([])
    const [loaded, setLoaded] = useState(false)
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
        .then(res=>{
            setAuthors(res.data);
            setLoaded(true);
        })
    }, [])

    const removeFromDOM = authorID => {
        setAuthors(authors.filter(author => author._id !== authorID))
        // navigate("/")

    }

    return (
        <div>
            <Header header="Favourite Author" route="/new" redirect="Add an author" content="We have quotes by:"></Header>
            {loaded && <table>
                <thead>
                    <tr>
                        <th>Author</th>
                        <th>Actions available</th>
                    </tr>
                </thead>
                <tbody>
                {authors.map((author,i) => { return <tr key={i}>
                        <td>{author.name}</td>
                        <td>
                            <button onClick={() => navigate("/edit/"+ author._id)}>Edit</button>
                            <DeleteButton id={author._id} successDelete={removeFromDOM} ></DeleteButton>
                        </td>
                    </tr>
                    })}
                </tbody>
            </table>}
        </div>
    )
}

export default Main