import { createSlice } from "@reduxjs/toolkit";

export interface worksState {
  categories: number;
}

const initialState: worksState = {
  categories: 0,
};

export const worksSlice = createSlice({
  name: "works",
  initialState,
  reducers: {
    categoriesChange: (state, action) => {
      state.categories = action.payload;
    },
  },
});

export const { categoriesChange } = worksSlice.actions;

export default worksSlice.reducer;
