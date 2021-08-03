import React, { useEffect } from 'react'
import axios from 'axios';
import { Link } from '@reach/router';
import DeleteButton from '../components/DeleteButton';
const ProductList = (props) => {
    const { products } = props;
    return (
        <div>
            All Products:
            {products.map((product, key) => {
                return <div> <p style={{marginRight:'10px', display:'inline-block'}}><Link to={"/products/" + product._id} key={key} >{product.title}</Link> </p>
                    
                    <Link to={"/products/" + product._id + "/edit"}>
                        Edit
                    </Link>
                    <DeleteButton productId={product._id} successCallback={() => props.removeFromDom(product._id)} />
                </ div>
            })}

        </div>
    )
}

export default ProductList
