import { createSlice } from "@reduxjs/toolkit";
let initialState = {
    items: []
}
export let basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addItemToBasket: (state, { payload }) => {
            state.items.push( payload )
        },
        removeItemFromBasket: (state, { payload }) => {
            let idx = state.items.indexOf(payload)
            state.items.splice(idx, 1)
        }
    }
})

export default basketSlice.reducer

export let { addItemToBasket, removeItemFromBasket } = basketSlice.actions

export let selectItemWithId = (state, id) => state.basket.items.filter(el => el.id === id )

export let selectItems = state => state.basket.items