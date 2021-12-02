import { createSlice, createSelector } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { StateReducerType } from "./store.types";

const initialState: StateReducerType = {
  selected: null,
};

export const stateReducer = createSlice({
  name: "state",
  initialState: initialState,
  reducers: {
    setSelected: (state, action) => {
      state.selected = action.payload;
    },
  },
});

export const { setSelected } = stateReducer.actions;

export const selectState = createSelector(
  (state: RootState) => ({
    selected: state.state.selected,
  }),
  (state) => state
);

export default stateReducer.reducer;
