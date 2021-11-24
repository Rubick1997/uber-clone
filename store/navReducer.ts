import { createSlice, createSelector } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { NavReducerType } from "./store.types";

const initialState: NavReducerType = {
  origin: null,
  destination: null,
  travelTimeInformation: null,
};

export const navReducer = createSlice({
  name: "nav",
  initialState: initialState,
  reducers: {
    setOrigin: (state, action) => {
      state.origin = action.payload;
    },
    setDestination: (state, action) => {
      state.destination = action.payload;
    },
    setTravelTimeInformation: (state, action) => {
      state.travelTimeInformation = action.payload;
    },
  },
});

export const { setOrigin, setDestination, setTravelTimeInformation } =
  navReducer.actions;

export const selectNavs = createSelector(
  (state: RootState) => ({
    origin: state.nav.origin,
    destination: state.nav.destination,
    travelTimeInformation: state.nav.travelTimeInformation,
  }),
  (state) => state
);

export default navReducer.reducer;
