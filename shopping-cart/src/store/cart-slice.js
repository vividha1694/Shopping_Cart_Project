import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [
    { title: "Test Item", quantity: 3, total: 18, price: 6 },
    { title: "lifeboy", quantity: 10, total: 500, price: 50 },
  ],
};

const cartSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    add(state, action) {
      state.items = [...state.items, action.payload];
    },
  },
});
export const cartSliceActions = cartSlice.actions;

export default cartSlice.reducer;
