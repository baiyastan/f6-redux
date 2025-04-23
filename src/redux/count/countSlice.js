import { createSlice } from "@reduxjs/toolkit";

const countSlice = createSlice({
    name: "timer",
    initialState: {
        timer: 2,
        text: ""
    },
    reducers: {
        increment: (state) => {
            state.timer = state.timer + 1
        }, 
        sendText: (state, action) => {
            state.text = action.payload
        }
    }
})

export const {increment, sendText} = countSlice.actions;
export default countSlice.reducer