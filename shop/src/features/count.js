import { createSlice } from "@reduxjs/toolkit";

const initialState = 0;
export const countSlice = createSlice({
    name : "count",
    initialState : {value : initialState},
    reducers : {
        increase : (state, action) => {
             state.value = action.payload
        }
    }
})

export const { increase } = countSlice.actions;
export default countSlice.reducer;