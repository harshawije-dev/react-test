import { createSlice } from "@reduxjs/toolkit";

const threadSlice = createSlice({
  name: "threads",
  initialState: {
    value: 0,
    arr: [],
  },
  reducers: {
    createComment: (state, action) => {
      state.arr.push(action.payload);
    },
    addReactions: (state) => {
      state.value += 1;
    },
  },
});

export const { createComment } = threadSlice.actions;
export default threadSlice.reducer;
