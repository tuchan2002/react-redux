import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const postSlice = createSlice({
  name: "post",
  initialState: {
    posts: [{ title: "Hi!", description: "Hello World.", tag: 0 }],
  },
  reducers: {
    createPost(state, action) {
      state.posts = [action.payload, ...state.posts];
    },
  },
});

const postReducer = postSlice.reducer;

export const { createPost } = postSlice.actions;

export default postReducer;
