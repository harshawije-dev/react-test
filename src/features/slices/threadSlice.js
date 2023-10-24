import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  threadsArray: [],
};

const threadSlice = createSlice({
  name: "threads",
  initialState,
  reducers: {
    createComment: (state, action) => {
      state.threadsArray.push(action.payload);
    },
    addReactions: (state) => {
      state.value += 1;
    },
  },
});

export const { createComment } = threadSlice.actions;
export default threadSlice.reducer;
