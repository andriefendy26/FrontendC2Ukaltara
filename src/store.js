import { configureStore } from "@reduxjs/toolkit";
import authRedcer from "./features/AuthSlice";

export const store = configureStore({
  reducer: {
    auth : authRedcer,
  },
});
