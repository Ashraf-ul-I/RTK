import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getTags } from "./tagsApi"

const initialState={
  tags:[],
  isLoading:false,
  isError:false,
  error:''
}

//async Thunk
export const fetchTagsAsync=createAsyncThunk('tags/fetchTags',async ()=>{
    const tags=await getTags();
  
    return tags;
})

const tagsSlice=createSlice({
    name:'tags',
    initialState,
    extraReducers: (builder)=>{
        builder
        .addCase(fetchTagsAsync.pending,(state)=>{
            state.isError=false,
            state.isLoading=true
        })
        .addCase(fetchTagsAsync.fulfilled,(state,action)=>{
            
            state.isLoading=false
            state.tags=action.payload
        })
        .addCase(fetchTagsAsync.rejected,(state,action)=>{
            
            state.isError=true,
            state.isLoading=false,
            state.tags=[],
            state.error=action.error?.message
        }) 
    }
})

export default tagsSlice.reducer;

