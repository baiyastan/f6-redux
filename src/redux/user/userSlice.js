 import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
 import axios from "axios";

 const API = "https://reqres.in/api/users";

 export const userFetch = createAsyncThunk(
    "user/fetch",
    async (_, thunkAPI) => {
        try {
            const res = await axios.get(API)
            return res.data.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
 )



 const userSlice = createSlice({
    name: "users",
    initialState: {
        list: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder 
            .addCase(userFetch.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(userFetch.fulfilled, (state, action) => {
                state.list = action.payload;
                state.loading = false;
            })
            .addCase(userFetch.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false
            })
    }
 })

 export default userSlice.reducer