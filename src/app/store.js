import { configureStore } from "@reduxjs/toolkit";
import cardSlice from "../features/cardSlice";
import userSlice from "../features/userSlice";

const appStore = configureStore({   //Sets up the Redux store and combines different slices (reducers) into one.
    reducer:{
        cart:cardSlice ,  //Maps the cart slice to the cartReducer, so all cart-related state is stored under state.cart.
        user:userSlice,
    }
})

export default appStore;