import React from 'react'
import axios from 'axios';
import { Link } from '@reach/router';

export default props => {
    return (
        <div>
            All Products:
            {props.products.map((product)=>{
                return <p> < Link to = {"/products/" + product._id} key={product._id}>{product.title}</Link> </p>
            })}
            
        </div>
    )
}
