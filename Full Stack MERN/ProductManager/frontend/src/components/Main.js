import React, { useEffect, useState } from 'react';
import ProductForm from '../components/ProductForm';
import ProductList from './ProductList';
import axios from 'axios';

export default () => {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(()=>{
        axios.get('http://localhost:8000/api/products')
            .then(res=>{
                setProducts(res.data);
                setLoaded(true);
            });
    },[])
  
    return (
        <div>
           <ProductForm/>
           <hr/>
            {loaded && <ProductList products={products}/>}

        </div>
    )
}