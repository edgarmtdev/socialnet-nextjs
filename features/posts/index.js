import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { collection, addDoc, doc } from 'firebase/firestore';
import { database } from "../../config/firebase";
export const getPosts = createAsyncThunk('posts/getPosts')

export const newPost = createAsyncThunk(
    'posts/create',
    async function (data, thunkAPI) {
        try {
            const state = thunkAPI.getState()
            const col = collection(database, 'posts')
            const doc = await addDoc(col, {
                idUser: state.auth.user.id,
                ...data
            })

            console.log(doc);

            return data
        } catch (error) {
            console.log(error);
        }
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
