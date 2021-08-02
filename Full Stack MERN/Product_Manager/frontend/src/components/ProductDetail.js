import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from '@reach/router';


const ProductDetail = (props) => {
    const [product, setProduct] = useState([])
    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + props.id)
            .then(res => {
                setProduct(res.data)
                console.log(res)
            })
    }, [])
    return (
        <div>
            <h1>Title: {product.title}</h1>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
            <Link to={"/products/" + product._id + "/edit"}>
                Edit
            </Link>
        </div>
        
    )
}

export default ProductDetail
