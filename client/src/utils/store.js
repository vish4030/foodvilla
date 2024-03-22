import { configureStore } from "@reduxjs/toolkit";

import cartSlice from "../components/CartSlice";


export default store = configureStore({
    reducer:{
        cart:cartSlice
    }
})