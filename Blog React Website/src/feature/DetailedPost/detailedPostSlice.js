import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { fetchDataForDetailedPost } from "./fetchPostWIthID"
import { savedDataUpdate } from "../filter/filterApi";

const initialState={
    post:{},
    isLoading:false,
    isError:false,
    error:'',
}

export const fetchDetailedDataThunk= createAsyncThunk('detailedDta/fetchDetailedDataThunk',async (id)=>{
    const response= await fetchDataForDetailedPost(id);
    return response;
});

export const updateDataThunk=createAsyncThunk('updateData/updateDataThunk',async({id,data})=>{
    const response=await savedDataUpdate(id,data);
    return response;
})


const detailedPostSlice=createSlice({
    name:'detailedPost',
    initialState,
    reducers:{
    },
    extraReducers:(builder)=>{
        builder
        .addCase(fetchDetailedDataThunk.pending,(state)=>{
            state.isLoading=true,
            state.isError=false,
            state.error='',
            state.post={}
        })
        .addCase(fetchDetailedDataThunk.fulfilled,(state,action)=>{
            state.isLoading=false,
            state.isError=false,
            state.error='',
            state.post=action.payload
        })
        .addCase(fetchDetailedDataThunk.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.error = action.error.message;
            state.post = {}; 
          })

          .addCase(updateDataThunk.pending, (state) => {
            state.isLoading = true; // Set loading to true when the update starts
            state.isError = false;
            state.error = "";
          })
          .addCase(updateDataThunk.fulfilled, (state, action) => {
            state.isLoading = false; // Reset loading when the update is successful
            state.isError = false;
            state.error = "";
          
            // Update the specific post
            if (state.post.id === action.payload.id) {
              state.post = { ...state.post, ...action.payload }; // Merge updated data
            }
          })
          .addCase(updateDataThunk.rejected, (state, action) => {
            state.isLoading = false; // Reset loading when the update fails
            state.isError = true;
            state.error = action.error.message;
          });
    }
})

export default detailedPostSlice.reducer;
