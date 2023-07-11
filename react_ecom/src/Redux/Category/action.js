import { createAsyncThunk } from "@reduxjs/toolkit";

export const getCategories = createAsyncThunk(
    'getCategories',
    ()=>{
        const categories = fetch("http://localhost:8080/create")
        .then((res)=>res.json());
        return categories;
    }
)