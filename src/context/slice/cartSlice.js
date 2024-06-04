import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartData: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, { payload }) => {
      let index = state.cartData?.findIndex((el) => el.id === payload.id);
      if (index < 0) {
        state.cartData = [...state.cartData, { ...payload, count: 1 }];
      }
    },
    remove: (state, { payload }) => {
      state.cartData = state.cartData?.filter((el) => el.id !== payload.id);
    },
    incAmount: (state) => {},
    decAmount: (state) => {},
    removeAll: (state) => {},
  },
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
