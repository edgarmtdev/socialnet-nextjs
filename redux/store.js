import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../features/auth'
import postReducer from '../features/posts'
import usersReducer from "../features/users";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        post: postReducer,
        users: usersReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
})