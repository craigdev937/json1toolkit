import { configureStore } from "@reduxjs/toolkit";
import { TaskReducer } from "./TaskSlice";

export const RootReducer = configureStore({
    reducer: {
        tasks: TaskReducer
    },
});



