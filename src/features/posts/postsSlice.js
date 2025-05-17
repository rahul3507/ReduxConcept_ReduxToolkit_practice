import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getPosts } from "./postsApi"

const initialState={
    isLeading : false,
    isError: false,
    posts: [],
    error: null
}  
//async thunk
const fetchPosts = createAsyncThunk('posts/fetchPosts', async ()=>{
    const posts = await getPosts();
    return posts;
})

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    extraReducers: (builder)=> {
        builder.addCase(fetchPosts.pending, (state)=>{
            state.isError = false;
            state.isLeading=true;
        })
    }
})