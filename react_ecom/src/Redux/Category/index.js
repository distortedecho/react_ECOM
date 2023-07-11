import { createSlice } from "@reduxjs/toolkit";
import { getCategories } from "./action";

const initialState = {
    categories : [],
    status : "idle",
    error : ""
}

const categorySlice = createSlice({
    name:"Category",
    initialState,
    reducers:{},
    extraReducers:{
        [getCategories.pending] : (state, action)=>{
            state.state = "Loading...";
        },
        [getCategories.fulfilled] : (state, action)=>{
            state.state = "Success";
            state.categories = action.payload;
        },
        [getCategories.rejected] : (state, action)=>{
            state.state = "Failed";
            state.error = action.error.message;
        }
    }

})

export default categorySlice.reducer;