import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

export const login = createAsyncThunk('auth/login', async (data, thunkAPI) => {
    const { idProvider, provider } = data
    const user = await axios.post('/api/auth/login', { idProvider, provider })

    console.log(data);

    return { ...data, idUser: user.data.id }
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
    }
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        // logIn(state, action) {
        //     state.logged = true
        //     state.loading = false
        //     state.user.name = action.payload.name
        //     state.user.email = action.payload.email
        //     state.user.id = action.payload.id
        //     state.user.profilePic = action.payload.profilePic
        // },
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
            state.logged = true
            state.loading = false
            state.user.name = action.payload.name
            state.user.email = action.payload.email
            state.user.id = action.payload.id
            state.user.idUser = action.payload.idUser
            state.user.profilePic = action.payload.profilePic
        })
    }
})

export const { logOut } = authSlice.actions
export default authSlice.reducer