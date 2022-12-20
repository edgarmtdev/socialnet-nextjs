import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const login = createAsyncThunk("auth/login", async (data, thunkAPI) => {
  const user = await axios.post("/api/auth/login", data);
  const result = user.data;
  return {
    ...result,
    idUser: user.data.id,
    background: user.data.background,
  };
});

export const signUp = createAsyncThunk(
  "auth/updateProviders",
  async function (data, thunkAPI) {
    const newUser = await axios.post("/api/auth/signup", data);
    return newUser.data;
  }
);

const initialState = {
  logged: false,
  loading: false,
  user: {
    name: "",
    email: "",
    idUser: undefined,
    profilePic: "",
    background: "",
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logOut(state, action) {
      state.logged = false;
      state.loading = false;
      state.user.name = "";
      state.user.email = "";
      state.user.idUser = undefined;
      (state.user.profilePic = ""), (state.user.background = "");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.logged = true;
      state.loading = false;
      state.user.name = action.payload.name;
      state.user.email = action.payload.email;
      state.user.idUser = action.payload.idUser;
      state.user.profilePic = action.payload.profilePic;
      state.user.background = action.payload.background;
    });

    builder.addCase(signUp.fulfilled, (state, action) => {
      console.log(action.payload);
      state.logged = true;
      state.loading = false;
      state.user.name = action.payload.name;
      state.user.email = action.payload.email;
      state.user.idUser = action.payload.id;
      state.user.profilePic = action.payload.profilePic;
      state.user.background = action.payload.background;
    });
  },
});

export const { logOut } = authSlice.actions;
export default authSlice.reducer;
