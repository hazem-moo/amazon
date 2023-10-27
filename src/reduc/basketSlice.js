import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    items: [],
    mount: 0
}

export let basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addItemToBasket: (state, { payload }) => {
            state.items = [...state.items, payload]
        },
        removeItemFromBasket: (state, action) => {
            const idx = state.items.indexOf( action.payload )
            state.items = state.itmes.splice(idx, 1)
        },
        deleteItems: (state, {payload}) => {
            // console.log( payload )
            state.items.pop()
        }
    }
})
 
export default basketSlice.reducer

export let { addItemToBasket, removeItemFromBasket, deleteItems } = basketSlice.actions

export const totalPrice = state => state.basket.items.reduce((total, itme) => total += itme.price, 0)

export let selectItemWithId = (state, id) => state.basket.items.filter(el => el.id === id )

export let selectItems = state => state.basket.items
