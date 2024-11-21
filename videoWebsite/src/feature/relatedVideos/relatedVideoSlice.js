import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getRelatedVideos } from "./relatedVideosApi"

const initialState={
relatedVideos:[],
  isLoading:false,
  isError:false,
  error:''
}

//async Thunk
export const fetchrelatedVideosAsync=createAsyncThunk('relatedVideos/fetchrelatedVideos',async ({tags,id})=>{
    const relatedVideos=await getRelatedVideos({tags,id});
  
    return relatedVideos;
})

const relatedVideosSlice=createSlice({
    name:'relatedVideos',
    initialState,
    extraReducers: (builder)=>{
        builder
        .addCase(fetchrelatedVideosAsync.pending,(state)=>{
            state.isError=false,
            state.isLoading=true
        })
        .addCase(fetchrelatedVideosAsync.fulfilled,(state,action)=>{
            
            state.isLoading=false
            state.relatedVideos=action.payload
        })
        .addCase(fetchrelatedVideosAsync.rejected,(state,action)=>{
            
            state.isError=true,
            state.isLoading=false,
            state.relatedVideos=[],
            state.error=action.error?.message
        }) 
    }
})

export default relatedVideosSlice.reducer;

