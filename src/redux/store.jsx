import { combineReducers, configureStore } from "@reduxjs/toolkit";
import categoryReducer from './slices/selectedCategory.jsx'
import cartReducer from './slices/cartSlice.jsx';
import productReducer from './slices/SpecificProduct.jsx';
import storage from "redux-persist/lib/storage"
import persistReducer from "redux-persist/lib/persistReducer";
import persistStore from "redux-persist/es/persistStore";
const rootReducers = combineReducers({
    category:categoryReducer,
    cart:cartReducer,
    specific:productReducer
})

const persistConfig = {
    key:"root",
    storage,
    version:1
}

const persistedReducer = persistReducer(persistConfig,rootReducers);

export const store = configureStore({
    reducer:persistedReducer,
    middleware:(getDefaultMiddleware) => {
        return getDefaultMiddleware({serializableCheck:false});
    }
});

export const persistor = persistStore(store);