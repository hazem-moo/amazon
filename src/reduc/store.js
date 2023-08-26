import { configureStore } from "@reduxjs/toolkit";
import singInSlice from "./singInSlice";
import basketSlice from "./basketSlice";

export default configureStore({
    reducer: {
        sing: singInSlice,
        basket: basketSlice
    }
})