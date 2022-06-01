import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { collection, addDoc, doc } from 'firebase/firestore';
import { database } from "../../config/firebase";
export const getPosts = createAsyncThunk('posts/getPosts')

export const createPosts = createAsyncThunk(
    'posts/create',
    async function (data, thunkAPI) {
        const state = thunkAPI.getState()
        const col = collection(database, 'posts')
        const doc = await addDoc(col, {
            idUser: state.auth.user.id,
            ...data
        })

        return doc.data()
    }
)

const initialState = {
    posts: [],
    loading: false
}

const postSlice = createSlice({
    name: 'posts',
    initialState,
    extraReducers: {

    }
})

export default postSlice.reducer
