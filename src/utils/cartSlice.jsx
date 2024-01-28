import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {//initialstate is predefined. It show the initial state of cart
        items: []
    },
    reducers: {
        /*We will write reducer and action function here*/
        addItem: (state, action) => {
            /*
            Based on state it will perform action
            */
            state.items.push(action.payload)
        },
        removeItem: (state, action) => {
            //Logic for removing item based on action
            state.items.pop()
        },
        clearCart: (state, action) => {
            //Clear the cart due to
            state.items.length = 0
        },
    },
})
export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;