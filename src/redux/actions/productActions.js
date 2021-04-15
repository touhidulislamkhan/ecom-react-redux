export const setproducts = (products) => {
    return {
        type: 'SET_PRODUCTS',
        payload: products,
    };
};

export const selectedproduct = (product) => {
    return {
        type: 'SELECTED_PRODUCT',
        payload: product,
    }
}

export const removeSelectedProduct = () => {
    return {
        type: 'REMOVE_SELECTED_PRODUCT',
    }
}