import { configureStore } from "@reduxjs/toolkit";
import categorySlice from '../Category';
import productlice from '../Product';
import cartSlice from "../cart/cartSlice";

export const store = configureStore({
    reducer:{
        categoryReducer : categorySlice,
        pr : productlice,
        cr : cartSlice
    }
});