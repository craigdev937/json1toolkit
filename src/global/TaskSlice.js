import { createSlice } from "@reduxjs/toolkit";
import { API } from "./FetchAPI";

const initialState = {
    tasks: [],
    loading: false,
    error: null
};

const TaskSlice = createSlice({
    name: "tasks",
    initialState: initialState,
    reducers: {},
    extraReducers: {
        [API.fetchAll.rejected]: (state, action) => {
            state.loading = false,
            state.error = action.payload
        },
        [API.fetchAll.pending]: (state) => {
            state.loading = true
        },
        [API.fetchAll.fulfilled]: (state, action) => {
            state.loading = false,
            state.tasks = [...action.payload]
        },
    },
});

export const TaskReducer = TaskSlice.reducer;


