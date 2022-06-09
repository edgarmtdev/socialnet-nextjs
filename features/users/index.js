import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getUsers = createAsyncThunk(
    'users/getUsers',
    async function (data, thunkAPI) {
        const state = thunkAPI.getState()

        const users = await axios.get(`/api/users/all/${state.auth.user.idUser}`)
        return users.data
    }
)

const initialState = {
    users: [],
    loading: false
}

const usersSlice = createSlice({
    name: 'posts',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getUsers.rejected, (state, action) => {
            state.loading = false
        })
            .addCase(getUsers.fulfilled, (state, action) => {
                state.users = action.payload
                state.loading = false
            })
            .addCase(getUsers.pending, (state, action) => {
                state.loading = true
            })
    }
})

export default usersSlice.reducer
