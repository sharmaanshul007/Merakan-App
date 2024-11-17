import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    selectedCategories:[]
}

export const CategorySlice = createSlice({
    "name":"category",
    initialState,
    reducers:{
        setCategory:(state,action)=>{
            state.selectedCategories = action.payload
        },
        addCategory:(state,action)=>{
            const newCategory = [...state.selectedCategories,action.payload];
            state.selectedCategories = newCategory;
        },
        removeCategory:(state,action)=>{
            state.selectedCategories = state.selectedCategories.filter(category => category !== action.payload);
        }
    }
}
);
export const {setCategory,addCategory,removeCategory} = CategorySlice.actions;
export default CategorySlice.reducer;