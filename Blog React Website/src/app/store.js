import { configureStore } from "@reduxjs/toolkit";
import postSliceReducer from '../feature/postApi/postSlice'
import detailedSlice from '../feature/DetailedPost/detailedPostSlice'
const store=configureStore({
    reducer:{
        postSlice:postSliceReducer,
        detailedPostSlice:detailedSlice
    }
})

export default store;