import { combineReducers, configureStore } from "@reduxjs/toolkit";
import categoryReducer from './slices/selectedCategory.jsx'
import cartReducer from './slices/cartSlice.jsx';
const rootReducers = combineReducers({
    category:categoryReducer,
    cart:cartReducer,
})

export const store = configureStore({
    reducer:rootReducers
})