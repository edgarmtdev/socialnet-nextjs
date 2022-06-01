import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../features/auth'
import postReducer from '../features/posts'

export const store = configureStore({
    reducer: {
        auth: authReducer,
        post: postReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
})