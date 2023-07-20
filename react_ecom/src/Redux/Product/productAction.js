import { createAsyncThunk } from "@reduxjs/toolkit";

export const getProducts = createAsyncThunk(
    'getProducts',
    async ()=>{
        const productData = await fetch("https://jade-outrageous-seal.cyclic.app/getProducts")
            .then((res)=>res.json());

        return productData;
    }
)