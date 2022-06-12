import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getPosts = createAsyncThunk(
    'posts/getPosts',
    async function (data, thunkAPI) {
        const state = thunkAPI.getState()
        const posts = await axios.get(`/api/posts/getall/${state.auth.user.idUser}`)
        return posts.data
    }
)

export const newPost = createAsyncThunk(
    'posts/create',
    async function (data, thunkAPI) {
        const state = thunkAPI.getState()
        const result = await axios.post('/api/posts/create', {
            ...data,
            author: state.auth.user.idUser
        })
        return result.data
    }
)

export const getofFriends = createAsyncThunk(
    'posts/getOfFriends',
    async function (data, thunkAPI) {
        const state = thunkAPI.getState()
        try {
            const posts = await axios.get(`/api/posts/getOfFriends/${state.auth.user.idUser}`)
            return posts.data
        } catch (error) {
            console.log(error);
        }
    }
)

const initialState = {
    data: [],
    dataOfFriends: [],
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
                state.data = []
                state.loading = false
            })
            .addCase(newPost.fulfilled, (state, action) => {
                state.loading = false
            })

        builder.addCase(getPosts.rejected, (state, action) => {
            state.loading = false
        })
            .addCase(getPosts.fulfilled, (state, action) => {
                state.data = action.payload
                state.loading = false
            })
            .addCase(getPosts.pending, (state, action) => {
                state.loading = true
            })

        builder.addCase(getofFriends.rejected, (state, action) => {
            state.loading = false
        })
            .addCase(getofFriends.fulfilled, (state, action) => {
                state.dataOfFriends = action.payload
                state.loading = false
            })
            .addCase(getofFriends.pending, (state, action) => {
                state.loading = true
            })
    }
})

export default postSlice.reducer
