import React,{useEffect} from 'react'
import axios from 'axios';
import { Link } from '@reach/router';

const ProductList = (props) => {
const { removeFromDom } = props;
    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/products/' + productId)
            .then(res => {
                removeFromDom(productId)
            })
    }
    return (
        <div>
            All Products:
            {props.products.map((product, key)=>{
                return <div> <Link to = {"/products/" + product._id} key={key}>{product.title}</Link>
                <button onClick={(e)=>{deleteProduct(product._id)}}>
                        Delete
                    </button>
                    </ div>
            })}
            
        </div>
    )
}

export default ProductList
