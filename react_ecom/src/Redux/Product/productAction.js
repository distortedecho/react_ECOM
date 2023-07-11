import { createAsyncThunk } from "@reduxjs/toolkit";

export const getProducts = createAsyncThunk(
    'getProducts',
    async ()=>{
        const productData = await fetch("http://localhost:8080/getProducts")
            .then((res)=>res.json());

        return productData;
    }
)