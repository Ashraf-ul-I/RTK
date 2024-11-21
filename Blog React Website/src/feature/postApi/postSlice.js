import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { postFetchingApi } from "./postFetchingApi"

const initialState={
    post:[],
    isLoading:false,
    isErros:false,
    error:''
}

export const getPostData = createAsyncThunk(
    'getPostData/fetchingPostApi',
    async (id, { rejectWithValue }) => {
      try {
        const posts = await postFetchingApi();
        return posts; 
      } catch (error) {
        return rejectWithValue(error.response?.data || 'Something went wrong');
      }
    }
  );
  

const postSlice=createSlice({
    name:'postslice',
    initialState,
    extraReducers: (builder)=>{
        builder
        .addCase(getPostData.pending,(state,action)=>{
            state.isLoading=true;
            state.isErros=false;
            state.error='';
            state.post=[]

        })

        .addCase(getPostData.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.isErros=false;
            state.error='';
            state.post=action.payload

        })

        .addCase(getPostData.rejected, (state, action) => {
            state.isLoading = false;
            state.isErros = true;
            state.error = action.error.message;
            state.post = []; 
          });
          
    }
})

export default postSlice.reducer;