const initialState = {
    products: [
        {
            id: 1,
            product: 'Hello',
            description: ""
        },
    ],
}

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_PRODUCTS':
            return {
                ...state,
                products: action.payload
            }

        default:
            return state;
    }
}

export const selectedProductsReducer = (state = {}, action) => {
    // console.log(type);
    switch (action.type) {
        case 'SELECTED_PRODUCT':
            return { ...state, ...action.payload };
        case 'REMOVE_SELECTED_PRODUCT':
            return {};
        default:
            return state;
    }
};