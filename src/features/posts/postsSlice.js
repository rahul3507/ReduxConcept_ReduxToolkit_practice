import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getPosts } from "./postsApi"

const initialState={
    isLoading : false,
    isError: false,
    posts: [],
    error: null
}  
//async thunk
export const fetchPosts = createAsyncThunk('posts/fetchPosts', async ()=>{
    const posts = await getPosts();
    console.log(posts);
    return posts;
})

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    extraReducers: (builder)=> {
        builder
            .addCase(fetchPosts.pending, (state)=>{
                state.isError = false;
                state.isLoading=true;
            })
            .addCase(fetchPosts.fulfilled, (state, action)=>{
                state.isLoading=false;
                state.posts = action.payload
            })
            .addCase(fetchPosts.rejected, ( state, action)=>{
                state.isLoading = false;
                state.isError=true;
                state.error= action.error?.message;
            })

    }
})

export default postsSlice.reducer;