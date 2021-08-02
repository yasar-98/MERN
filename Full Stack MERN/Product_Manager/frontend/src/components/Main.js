import React, { useEffect, useState } from 'react';
import ProductForm from '../components/ProductForm';
import ProductList from './ProductList';
import axios from 'axios';

const Main = () => {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(()=>{
        axios.get('http://localhost:8000/api/products')
            .then(res=>{
                setProducts(res.data);
                setLoaded(true);
                console.log(res.data)
            });
            
    },[])
const removeFromDom = productId => {
        setProducts(products.filter(product => product._id != productId));
    }
    const updateDom = () => {
         axios.get('http://localhost:8000/api/products')
            .then(res=>{
                setProducts(res.data);
                setLoaded(true);
                console.log(res.data)
            });
    }
    return (
        <div>
           <ProductForm updateDom={updateDom}/>
           <hr/>
            {loaded && <ProductList products={products} removeFromDom={removeFromDom}/>}

        </div>
    )
}

export default Main

