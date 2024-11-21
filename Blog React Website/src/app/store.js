import { configureStore } from "@reduxjs/toolkit";
import postSliceReducer from '../feature/postApi/postSlice'
const store=configureStore({
    reducer:{
        postSlice:postSliceReducer
    }
})

export default store;