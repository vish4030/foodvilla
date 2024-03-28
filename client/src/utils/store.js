import { configureStore } from "@reduxjs/toolkit";

import cartSlice from "../components/cart/CartSlice";


export default store = configureStore({
    reducer:{
        cart:cartSlice
    }
})