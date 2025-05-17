import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState={
    isLeading : false,
    isError: false,
    posts: [],
    error: null
}  

const fetchPosts = createAsyncThunk('posts/fetchPosts', async ()=>{

})

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    extraReducers: (builder)=> {
        builder.addCase
    }
})