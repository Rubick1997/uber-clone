import { configureStore } from "@reduxjs/toolkit";
import navReducer from "./navReducer";
import stateReducer from "./stateReducer";

export const store = configureStore({
  reducer: { nav: navReducer, state: stateReducer },
});

export type RootState = ReturnType<typeof store.getState>;
