import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    sing: []
} 

export const singInSlice = createSlice({
    name: 'sing',
    initialState,
    reducers: {
        addName: (state, { payload }) => {
            state.sing = []
            state.sing.push( payload )
        }
    }
})

export default singInSlice.reducer

export let singInName = state => state.sing.sing

export let { addName } = singInSlice.actions