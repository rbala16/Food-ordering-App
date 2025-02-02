import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        items:[],
        isCartOpen: false,
    },
    reducers:{
        addItem: (state, action) => {
            const existingItem = state.items.find(
                (item) => item.card.info.name === action.payload.card.info.name
            );

            if (existingItem) {
                // If the item already exists, increase the quantity
                existingItem.quantity += 1;
            } else {
                // If it's a new item, add it with an initial quantity of 1
                state.items.push({ ...action.payload, quantity: 1 });
            }
        },
        removeItem: (state, action) => {
            const existingItem = state.items.find(
                (item) => item.card.info.name === action.payload.card.info.name
            );

            if (existingItem) {
                if (existingItem.quantity > 1) {
                    // Decrease the quantity if greater than 1
                    existingItem.quantity -= 1;
                } else {
                    // Remove the item from the cart if quantity is 1
                    state.items = state.items.filter(
                        (item) => item.card.info.name !== action.payload.card.info.name
                    );
                }
            }
        },
        deleteItem: (state, action) => {
            state.items = state.items.filter(
              (item) => item.card.info.name !== action.payload.card.info.name
            );
          },
        clearCart: (state) => {
            state.items = []; // Clear all items from the cart
        } ,
        toggleCart: (state) => {
            state.isCartOpen = !state.isCartOpen; // Toggle the cart open/close state
          },
    }
})

//export actions and reducer
export const {addItem,removeItem,clearCart,toggleCart,deleteItem} = cartSlice.actions;
export default cartSlice.reducer;