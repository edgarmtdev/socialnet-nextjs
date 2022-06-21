import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

export const login = createAsyncThunk('auth/login', async (data, thunkAPI) => {
    const { idProvider, provider, name, profilePic } = data
    const user = await axios.post('/api/auth/login', { idProvider, provider, name, profilePic })
    console.log(user.data);
    return { ...data, idUser: user.data.id, background: user.data.background }
})

const initialState = {
    logged: false,
    loading: false,
    user: {
        name: '',
        email: '',
        id: '',
        idUser: '',
        profilePic: '',
        background: ''
    }
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logOut(state, action) {
            state.logged = false
            state.loading = false
            state.user.name = ''
            state.user.email = ''
            state.user.id = ''
            state.user.profilePic = ''
        }
    },
    extraReducers: (builder) => {
        builder.addCase(login.fulfilled, (state, action) => {
            console.log(action.payload);
            state.logged = true
            state.loading = false
            state.user.name = action.payload.name
            state.user.email = action.payload.email
            state.user.id = action.payload.id
            state.user.idUser = action.payload.idUser
            state.user.profilePic = action.payload.profilePic
            state.user.background = action.payload.background
        })
    }
})

export const { logOut } = authSlice.actions
export default authSlice.reducer