import { configureStore } from "@reduxjs/toolkit";
import calculateReducer from "./slices/calculateSlice";

export default configureStore({
  reducer: {
    calc: calculateReducer,
  },
});
