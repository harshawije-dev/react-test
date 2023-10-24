import { configureStore } from "@reduxjs/toolkit";
import calculateReducer from "./slices/calculateSlice";
import threadReducer from "./slices/threadSlice";

export default configureStore({
  reducer: {
    calc: calculateReducer,
    thread: threadReducer,
  },
});
