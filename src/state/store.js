import { configureStore } from "@reduxjs/toolkit";
import applicationReducer from "./application/applicationSlice";
export const store = configureStore({
  reducer: { application: applicationReducer },
});
