import { createSlice } from "@reduxjs/toolkit";

const threadSlice = createSlice({
  name: "threads",
  initialState: [],
  reducers: {
    createComment: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { createComment } = threadSlice.actions;
export default threadSlice.reducer;
