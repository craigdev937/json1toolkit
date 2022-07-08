import { configureStore } from "@reduxjs/toolkit";

export const RootReducer = configureStore({
    reducer: {
        tasks: () => "RTK Query CRUD"
    },
});



