import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getVideos } from "./videosApi"

const initialState={
  videos:[],
  isLoading:false,
  isError:false,
  error:''
}

//async Thunk
export const fetchVideosAsync=createAsyncThunk('videos/fetchVideos',async ()=>{
    const videos=await getVideos();
  
    return videos;
})

const videoSlice=createSlice({
    name:'videos',
    initialState,
    extraReducers: (builder)=>{
        builder
        .addCase(fetchVideosAsync.pending,(state)=>{
            state.isError=false,
            state.isLoading=true
        })
        .addCase(fetchVideosAsync.fulfilled,(state,action)=>{
            
            state.isLoading=false
            state.videos=action.payload
        })
        .addCase(fetchVideosAsync.rejected,(state,action)=>{
            
            state.isError=true,
            state.isLoading=false,
            state.videos=[],
            state.error=action.error?.message
        }) 
    }
})

export default videoSlice.reducer;

