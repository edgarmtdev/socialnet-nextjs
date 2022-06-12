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

export const sendFriendshipRequest = createAsyncThunk(
    'users/sendFriendshipReq',
    async function (data, thunkAPI) {
        const { idFriend } = data
        const state = thunkAPI.getState()
        const idUser = state.auth.user.idUser
        const users = await axios.post('/api/users/friendShipRequest', {
            idUser, idFriend
        })

        return users.data
    }
)

export const acceptFriendshipRequest = createAsyncThunk(
    'users/acceptFriendshipReq',
    async function (data, thunkAPI) {
        const { idFriend, accepted } = data
        const state = thunkAPI.getState()
        const idUser = state.auth.user.idUser
        const users = await axios.post('/api/users/friendShipResponse', {
            idUser, idFriend, accepted
        })
        return users.data
    }
)

const initialState = {
    people: [],
    receivedReq: [],
    sendedReq: [],
    friends: [],
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
                state.receivedReq = action.payload.receivedReq
                state.sendedReq = action.payload.sendedReq
                state.people = action.payload.people
                state.friends = action.payload.friends
                state.loading = false
            })
            .addCase(getUsers.pending, (state, action) => {
                state.loading = true
            })
        builder.addCase(sendFriendshipRequest.rejected, (state, action) => {
            state.loading = false
        })
            .addCase(sendFriendshipRequest.fulfilled, (state, action) => {
                state.receivedReq = action.payload.receivedReq
                state.sendedReq = action.payload.sendedReq
                state.people = action.payload.people
                state.friends = action.payload.friends
                state.loading = false
            })
            .addCase(sendFriendshipRequest.pending, (state, action) => {
                state.loading = true
            })
        builder.addCase(acceptFriendshipRequest.rejected, (state, action) => {
            state.loading = false
        })
            .addCase(acceptFriendshipRequest.fulfilled, (state, action) => {
                state.receivedReq = action.payload.receivedReq
                state.sendedReq = action.payload.sendedReq
                state.people = action.payload.people
                state.friends = action.payload.friends
                state.loading = false
            })
            .addCase(acceptFriendshipRequest.pending, (state, action) => {
                state.loading = true
            })

    }
})

export default usersSlice.reducer
