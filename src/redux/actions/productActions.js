import axios from "axios";


// export const setproducts = (products) => {
//     return {
//         type: 'SET_PRODUCTS',
//         payload: products,
//     };
// };


// export const selectedproduct = (product) => {
//     return {
//         type: 'SELECTED_PRODUCT',
//         payload: product,
//     }
// }

// export const removeSelectedProduct = () => {
//     return {
//         type: 'REMOVE_SELECTED_PRODUCT',
//     }
// }

export const setproducts = () => {
    return async (dispatch) => {
        const response = await axios.get('https://fakestoreapi.com/products')
            .catch(err => console.log(err))
        dispatch({
            type: 'SET_PRODUCTS',
            payload: response.data,
        })
    }
}

export const selectedproduct = (productId) => {
    return async (dispatch) => {
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`)
            .catch(err => console.log(err))
        dispatch({
            type: 'SELECTED_PRODUCT',
            payload: response.data,
        })
    }
}

export const removeSelectedProduct = () => {
    return dispatch => {
        dispatch({
            type: 'REMOVE_SELECTED_PRODUCT',
        })
    }
}