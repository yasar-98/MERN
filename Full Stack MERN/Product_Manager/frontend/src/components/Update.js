import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';
export default props => {
    const { id } = props;
        const [title, setTitle] = useState(""); 
        const [price, setPrice] = useState("");
        const [description, setDescription] = useState("");    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
            .then(res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
    }, [])
    const updateproduct = e => {
        e.preventDefault();
        axios.put("http://localhost:8000/api/"+ id + "/edit", {
            title,
            price,
            description
        })
            .then(res => console.log(res));
            navigate("/products/"+id)
    }
    return (
        <div>
            <h1>Update a product</h1>
            <form onSubmit={updateproduct}>
                <p>
                <label>Title</label><br/>
                <input type="text" onChange={(e)=>setTitle(e.target.value)} value={title}/>
                </p>
                <p>
                    <label>Price</label><br/>
                    <input type="text" onChange={(e)=>setPrice(e.target.value)} value={price}/>
                </p>
                <p>
                    <label>Description</label><br/>
                    <input type="text" onChange={(e)=>setDescription(e.target.value)} value={description}/>
                </p>
                <input type="submit" />
            </form>
        </div>
    )
}