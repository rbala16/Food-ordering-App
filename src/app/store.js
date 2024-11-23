import { configureStore } from "@reduxjs/toolkit";
import cardSlice from "../features/cardSlice";

const appStore = configureStore({
    reducer:{
        cart:cardSlice
    }
})

export default appStore;