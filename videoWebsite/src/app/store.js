
import {configureStore} from '@reduxjs/toolkit';
import reducer from '../feature/Counter';
const store=configureStore({
    reducer:reducer
})

export default store;