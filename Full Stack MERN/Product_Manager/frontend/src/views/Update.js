import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';
import ProductForm from '../components/ProductForm';
import DeleteButton from '../components/DeleteButton';


export default props => {
    const { id } = props;
    const [product, setProduct] = useState();
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
            .then(res => {
                setProduct(res.data);
                setLoaded(true);
            })
    }, []);
    const updateproduct = (product) => {
        axios.put("http://localhost:8000/api/" + id + "/edit", product)
            .then(res => console.log(res));
    }
    return (
        <div>
            <h1>Update a product</h1>
            {loaded && (
            <ProductForm
                    onSubmitProp={updateproduct}
                    initialTitle={product.title} initialPrice={product.price} initialDescription={product.description} />
            )}
            <DeleteButton productId={id} successCallback={() => navigate("/")} />

        </div>
    )
}