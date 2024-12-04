import { configureStore } from "@reduxjs/toolkit";
import {apiSlice} from "../featured/apiSlice"; // Ensure the path is correct

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer, // Ensure reducerPath is defined correctly
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware), // Ensure middleware is defined correctly
});
