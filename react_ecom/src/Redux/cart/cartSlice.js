import { createSlice } from "@reduxjs/toolkit"
 
const initialState = {
    cartItems : [],
    totalItemsPrice : 0,
    totalItems : 0,
    totalQuantity : 0
}

const cartSlice = createSlice({
    name : "cartSlice",
    initialState,
    reducers:{
        addCartItem : (state,action)=>{
            let item_exists = state.cartItems.find((item)=>item.id===action.payload.id);
            if(!item_exists){
            state.cartItems = [...state.cartItems, action.payload];
            state.totalQuantity = ++state.totalQuantity;
            state.totalItemsPrice = state.totalItemsPrice+action.payload.price;
            state.totalItems = ++state.totalItems;
            localStorage.setItem('cart', JSON.stringify(state));
            console.log("storage"+localStorage.getItem('cart'));
            }
        },
        updateItemQuantity : (state,action)=>{
            let index = action.payload.key;
            if(action.payload.operator==="+"){
                ++state.cartItems[index].quantity;
                state.totalItemsPrice = state.totalItemsPrice + action.payload.item.price;
                ++state.totalQuantity;
                localStorage.setItem('cart', JSON.stringify(state));
            }else{
                if(state.cartItems[index].quantity>1){
                    --state.cartItems[index].quantity;
                    state.totalItemsPrice = state.totalItemsPrice  - action.payload.item.price;
                    --state.totalQuantity;
                    localStorage.setItem('cart', JSON.stringify(state));
                }
            }
        },
        //update global state
        deleteCartItem : (state,action) =>{
            let filteredCart = state.cartItems.filter((elem)=>{
                return elem.id !== action.payload.id;
            })
            console.log(filteredCart)
            state.cartItems = filteredCart;
            state.totalItemsPrice = state.totalItemsPrice - (action.payload.price * action.payload.quantity);
            --state.totalItems;
        }
    }
})

export const {addCartItem, updateItemQuantity, deleteCartItem} = cartSlice.actions;
export default cartSlice.reducer;