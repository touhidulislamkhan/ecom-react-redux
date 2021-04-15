import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setproducts } from '../redux/actions/productActions'
import ProductComponent from './ProductComponent'

function ProductListing() {

    // const products = useSelector((state) => state.allproducts.products)
    // console.log(products);
    const dispatch = useDispatch();

    const fetchProducts = async () => {
        const response = await axios.get('https://fakestoreapi.com/products')
            .catch(err => console.log('Err', err.message))
        // console.log(response.data);
        dispatch(setproducts(response.data));
    }

    useEffect(() => {
        fetchProducts();
    }, [])

    return (
        <div className="ui grid container">
            <ProductComponent />
        </div>
    )
}

export default ProductListing
