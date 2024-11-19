import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    cart : []
}
export const CartSlice = createSlice({
    name:"cart",
    initialState ,
    reducers:{
        add : (state,action) =>{
            state.cart.push(action.payload) 
        },
        remove : (state,action) => { 
            const newArray = state.cart.filter((item) => item.id !== action.payload);
            state.cart = newArray;
        }
    }
});

export const {add , remove} = CartSlice.actions 
export default CartSlice.reducer ;