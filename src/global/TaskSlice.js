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
        [API.GetOne.rejected]: (state, action) => {
            state.loading = false,
            state.error = action.payload
        },
        [API.GetOne.pending]: (state) => {
            state.loading = true
        },
        [API.GetOne.fulfilled]: (state, action) => {
            state.loading = false,
            state.task = action.payload.id
        },
        [API.Create.rejected]: (state, action) => {
            state.loading = false,
            state.error = action.payload
        },
        [API.Create.pending]: (state) => {
            state.loading = true
        },
        [API.Create.fulfilled]: (state, action) => {
            state.loading = false,
            state.tasks = [...action.payload]
        },
        [API.Update.rejected]: (state, action) => {
            state.loading = false,
            state.error = action.payload
        },
        [API.Update.pending]: (state) => {
            state.loading = true
        },
        [API.Update.fulfilled]: (state, action) => {
            state.loading = false;
            const index = state.tasks.findIndex(
                (task) => task.id === action.payload.id);
            state.tasks[index] = {
                ...state.tasks[index],
                ...action.payload
            };
        },
        [API.Delete.rejected]: (state, action) => {
            state.loading = false,
            state.error = action.payload
        },
        [API.Delete.pending]: (state) => {
            state.loading = true
        },
        [API.Delete.fulfilled]: (state, action) => {
            state.loading = false,
            state.tasks.filter(
                (task) => task.id !== action.payload.id);
        },
    },
});

export const TaskReducer = TaskSlice.reducer;


