import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const getPosts = createAsyncThunk('posts/getPosts')

export const newPost = createAsyncThunk(
    'posts/create',
    async function (data, thunkAPI) {
        const state = thunkAPI.getState()
        console.log(state);
        const result = await axios.post('/api/posts/create', {
            ...data, 
            author: state.auth.user.idUser
        })
        console.log(result.data);
        return result.data
    }
)

const initialState = {
    posts: [],
    loading: false
}

const postSlice = createSlice({
    name: 'posts',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(newPost.pending, (state, action) => {
            state.loading = true
        })
            .addCase(newPost.rejected, (state, action) => {
                state.posts = []
                state.loading = false
            })
            .addCase(newPost.fulfilled, (state, action) => {
                state.loading = false
                state.posts = state.posts.push(action.payload)
            })
    }
})

export default postSlice.reducer
