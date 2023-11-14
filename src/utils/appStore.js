import { configureStore } from "@reduxjs/toolkit";
import  cartReducer  from "./carSlice"

const appStore= configureStore({
    reducer:{
        cart: cartReducer,
    }
});

export default appStore;