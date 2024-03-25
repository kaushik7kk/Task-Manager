import { createSlice } from "@reduxjs/toolkit";

export const formSlice = createSlice({
    name: 'forms',
    initialState : {
        visibility: false,
    },
    reducers: {
        // Reducer to toggle form window.
        toggleWindow: (state, action) => {
            state = {
                ...state,
                visibility: !state.visibility,
            }
            return state;
        }
    }
})

export const { toggleWindow } = formSlice.actions;

export default formSlice.reducer;