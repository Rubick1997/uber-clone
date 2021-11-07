import { createSlice, createSelector } from "@reduxjs/toolkit";
import { RootState } from "./store";

const initialState = {
  origin: null,
  destination: null,
  travelTimeinformation: null,
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
      state.travelTimeinformation = action.payload;
    },
  },
});

export const { setOrigin, setDestination, setTravelTimeInformation } =
  navReducer.actions;

export const selectNavs = createSelector(
  (state: RootState) => ({
    origin: state.nav.origin,
    destination: state.nav.destination,
    traveklTimeInformation: state.nav.travelTimeinformation,
  }),
  (state) => state
);

export default navReducer.reducer;
