import { combineReducers } from "redux";
import { productReducer, selectedProductsReducer } from "./productReducer";

const reducers = combineReducers({
    allproducts: productReducer,
    product: selectedProductsReducer,
});

export default reducers;