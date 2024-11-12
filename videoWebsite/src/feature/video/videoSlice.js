import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getVideo } from "./videoApi"

const initialState={
  video:{},
  isLoading:false,
  isError:false,
  error:''
}

//async Thunk
export const fetchVideoAsync=createAsyncThunk('video/fetchVideo',async (id)=>{
    const videos=await getVideo(id);
  
    return videos;
})

const videoSlice=createSlice({
    name:'video',
    initialState,
    extraReducers: (builder)=>{
        builder
        .addCase(fetchVideoAsync.pending,(state)=>{
            state.isError=false,
            state.isLoading=true
        })
        .addCase(fetchVideoAsync.fulfilled,(state,action)=>{
            
            state.isLoading=false
            state.video=action.payload
        })
        .addCase(fetchVideoAsync.rejected,(state,action)=>{
            
            state.isError=true,
            state.isLoading=false,
            state.video={},
            state.error=action.error?.message
        }) 
    }
})

export default videoSlice.reducer;

