import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    product : {}
};

export const specificProduct = createSlice({
    "name":"specific",
    initialState,
    reducers:{
        addSpecificProduct:(state,action)=>{
            state.product = action.payload;
        }
    }
})
export const {addSpecificProduct} = specificProduct.actions;
export default specificProduct.reducer;
