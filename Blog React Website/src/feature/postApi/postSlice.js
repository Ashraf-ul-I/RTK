import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { postFetchingApi } from "./postFetchingApi";

const initialState = {
  post: [],
  originalPost: [], // Backup for resetting
  isLoading: false,
  isErros: false,
  error: '',
 
};

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

const postSlice = createSlice({
  name: 'postslice',
  initialState,
  reducers: {
    filterData: (state, action) => {
      const { savedFilter } = action.payload;
      if (savedFilter === "saved") {
        state.post = state.post.filter((item) => item.isSaved === true);
      } else if (savedFilter === "All") {
        // No filter, show all posts (assuming you have an original backup state)
        state.post = state.originalPost; // Ensure you have `originalPost` stored in state
      }
    },
    
    sortPosts: (state, action) => {
      const { criteria } = action.payload;

      if (criteria === 'default' || criteria ===" ") {
        state.post = state.originalPost; // Reset to original
      } else if (criteria === 'newest') {
        console.log("1",[...state.post]);
        console.log("2",state.post)
        state.post = [...state.post].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      } else if (criteria === 'most_liked') {
        state.post = [...state.post].sort((a, b) => b.likes - a.likes);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPostData.pending, (state) => {
        state.isLoading = true;
        state.isErros = false;
        state.error = '';
        state.post = [];
      })
      .addCase(getPostData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isErros = false;
        state.error = '';
        state.post = action.payload;
        state.originalPost = [...action.payload]; // Backup
      })
      .addCase(getPostData.rejected, (state, action) => {
        state.isLoading = false;
        state.isErros = true;
        state.error = action.payload || 'Failed to fetch data';
        state.post = [];
      });
  },
});

export default postSlice.reducer;
export const { sortPosts,filterData } = postSlice.actions;
