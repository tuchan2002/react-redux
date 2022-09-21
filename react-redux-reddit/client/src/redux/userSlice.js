import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Reducer Thunk
export const updateUser = createAsyncThunk(
  "user/updateUser",
  async (newUserProfile) => {
    const response = await axios.put(
      "http://localhost:5000/user/update",
      newUserProfile
    );
    return response.data;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    profile: {
      name: "Tu Chan",
      age: 20,
      about: "I'm a software engineer",
      avatar:
        "https://preview.redd.it/rrz3hmsxcll71.png?width=640&crop=smart&auto=webp&s=87cc5ed38d8f088ef9fffef7a4c5756b64309d6a",
      theme: "#ff9051",
    },
  },
  reducers: {},
  extraReducers: {
    [updateUser.pending]: (state, action) => {
      console.log("Loading...");
    },
    [updateUser.fulfilled]: (state, action) => {
      console.log("Done!");
      state.profile = action.payload;
    },
    [updateUser.rejected]: (state, action) => {
      console.log("Error!");
    },
  },
});

const userReducer = userSlice.reducer;

export const { update } = userSlice.actions;

export default userReducer;
