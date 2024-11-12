
import {configureStore} from '@reduxjs/toolkit';
import videosReducer from '../feature/videos/videosSlice';
import tagsReducer from '../feature/tags/tagsSlice'
import videoReducer from '../feature/video/videoSlice';
const store=configureStore({
   reducer:{
    videos:videosReducer,
    tags:tagsReducer,
    video:videoReducer
   },
   devTools: true
})

export default store;