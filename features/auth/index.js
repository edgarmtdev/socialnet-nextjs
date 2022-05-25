import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    logged: false,
    loading: false,
    user: {
        name: '',
        email: '',
        id: '',
        profilePic: ''
    }
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logIn(state, action) {
            state.logged = true
            state.loading = false
            state.user.name = action.payload.name
            state.user.email = action.payload.email
            state.user.id = action.payload.id
            state.user.profilePic = action.payload.profilePic
        },
        logOut(state, action) {
            state.logged = false
            state.loading = false
            state.user.name = ''
            state.user.email = ''
            state.user.id = ''
            state.user.profilePic = ''
        }
    }
})

export const { logIn, logOut } = authSlice.actions
export default authSlice.reducer