import { combineReducers, configureStore } from "@reduxjs/toolkit";
import categoryReducer from './slices/selectedCategory.jsx'
import cartReducer from './slices/cartSlice.jsx';
import productReducer from './slices/SpecificProduct.jsx';
const rootReducers = combineReducers({
    category:categoryReducer,
    cart:cartReducer,
    specific:productReducer
})

export const store = configureStore({
    reducer:rootReducers
})