import { createSlice } from "@reduxjs/toolkit";

const countSlice = createSlice({
    name: "timer",
    initialState: {
        timer: 2,
    },
    reducers: {
        increment: (state) => {
            state.timer = state.timer + 1
        }
    }
})

export const {increment} = countSlice.actions;
export default countSlice.reducer