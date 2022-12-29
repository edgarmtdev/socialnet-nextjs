import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import filterData from "../../utils/filterData";

export const getPosts = createAsyncThunk(
  "posts/getPosts",
  async function (data, thunkAPI) {
    const state = thunkAPI.getState();
    const posts = await axios.get(
      `/api/posts/getall/${state.auth.user.idUser}`
    );
    return posts.data;
  }
);

export const newPost = createAsyncThunk(
  "posts/create",
  async function (data, thunkAPI) {
    const state = thunkAPI.getState();
    const result = await axios.post("/api/posts/create", {
      ...data,
      author: state.auth.user.idUser,
    });
    return result.data;
  }
);

export const getofFriends = createAsyncThunk(
  "posts/getOfFriends",
  async function (data, thunkAPI) {
    const state = thunkAPI.getState();
    try {
      const posts = await axios.get(
        `/api/posts/getOfFriends/${state.auth.user.idUser}`
      );
      return posts.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const likePost = createAsyncThunk(
  "posts/likes",
  async function (data, thunkAPI) {
    const state = thunkAPI.getState();
    const { idPost } = data;
    try {
      const post = await axios.post("/api/posts/like", {
        idUser: state.auth.user.idUser,
        idPost,
      });
      return { post: post.data, idUser: state.auth.user.idUser };
    } catch (error) {
      console.log(error);
    }
  }
);

export const dislikePost = createAsyncThunk(
  "posts/dislikes",
  async function (data, thunkAPI) {
    const state = thunkAPI.getState();
    const { idPost } = data;
    try {
      const post = await axios.post("/api/posts/dislike", {
        idUser: state.auth.user.idUser,
        idPost,
      });
      return { post: post.data, idUser: state.auth.user.idUser };
    } catch (error) {
      console.log(error);
    }
  }
);

export const addComment = createAsyncThunk(
  "posts/addComment",
  async function (data, thunkAPI) {
    const state = thunkAPI.getState();
    const { idPost, body } = data;
    const comment = await axios.post("/api/posts/comments/create", {
      idUser: state.auth.user.idUser,
      idPost,
      body,
    });
    return { post: idPost, comment: comment.data };
  }
);

const initialState = {
  data: [],
  dataOfFriends: [],
  load: false,
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.rejected, (state, action) => {
        state.data = undefined;
        state.dataOfFriends = undefined;
        state.loading = false;
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(getPosts.pending, (state, action) => {
        state.data = undefined;
        state.dataOfFriends = undefined;
        state.loading = true;
      });

    builder
      .addCase(newPost.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(newPost.rejected, (state, action) => {
        state.data = [];
        state.loading = false;
      })
      .addCase(newPost.fulfilled, (state, action) => {
        state.loading = false;
        state.data = [...state.data, action.payload];
      });

    builder
      .addCase(getofFriends.rejected, (state, action) => {
        state.loading = false;
      })
      .addCase(getofFriends.fulfilled, (state, action) => {
        state.dataOfFriends = action.payload;
        state.loading = false;
      })
      .addCase(getofFriends.pending, (state, action) => {
        state.loading = true;
      });

    builder
      .addCase(addComment.pending, (state, action) => {
        state.loading = false;
      })
      .addCase(addComment.fulfilled, (state, action) => {
        state.loading = false;
        filterData(state.data, action.payload.post, action.payload.comment);
        filterData(
          state.dataOfFriends,
          action.payload.post,
          action.payload.comment
        );
      })
      .addCase(addComment.rejected, (state, action) => {
        state.loading = false;
      });
    builder
      .addCase(likePost.rejected, (state, action) => {
        state.loading = false;
      })
      .addCase(likePost.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(likePost.pending, (state, action) => {
        state.loading = false;
      });
    builder
      .addCase(dislikePost.rejected, (state, action) => {
        state.loading = false;
      })
      .addCase(dislikePost.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(dislikePost.pending, (state, action) => {
        state.loading = false;
      });
  },
});

export default postSlice.reducer;
