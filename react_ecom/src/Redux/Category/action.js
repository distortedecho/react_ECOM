import { createAsyncThunk } from "@reduxjs/toolkit";

export const getCategories = createAsyncThunk(
    'getCategories',
    ()=>{
        const categories = fetch("https://jade-outrageous-seal.cyclic.app/create")
        .then((res)=>res.json());
        return categories;
    }
)