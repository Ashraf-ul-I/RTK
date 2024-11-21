
import {configureStore} from '@reduxjs/toolkit';
import videosReducer from '../feature/videos/videosSlice';
import tagsReducer from '../feature/tags/tagsSlice'
import videoReducer from '../feature/video/videoSlice';
import relatedVideosSlice from '../feature/relatedVideos/relatedVideoSlice'
import filterReducer from '../feature/filter/filterSlice'
const store=configureStore({
   reducer:{
    videos:videosReducer,
    tags:tagsReducer,
    video:videoReducer,
    relatedVideos:relatedVideosSlice,
    filter:filterReducer
   },
   devTools: true
})

export default store;