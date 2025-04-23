import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./count/countSlice"
import userReducer from "./user/userSlice"

const myStore = configureStore({
    reducer: {
        count: countReducer,
        users: userReducer,
    }
})

export default myStore