import { combineReducers, configureStore } from "@reduxjs/toolkit";
import categoryReducer from './slices/selectedCategory.jsx'

const rootReducers = combineReducers({
    category:categoryReducer
})

export const store = configureStore({
    reducer:rootReducers
})