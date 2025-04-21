import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./count/countSlice"

const myStore = configureStore({
    reducer: {
        count: countReducer
    }
})

export default myStore