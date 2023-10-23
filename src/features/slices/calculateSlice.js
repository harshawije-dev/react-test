import { createSlice } from "@reduxjs/toolkit";

const calculatorSlice = createSlice({
  name: "calculator",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 50;
    },
    reset: (state) => {
      state.value -= 50;
    },
  },
});

// exporting actions
export const { increment, reset } = calculatorSlice.actions;
// exporting reducer
export default calculatorSlice.reducer;
