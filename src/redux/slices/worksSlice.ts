import { createSlice } from "@reduxjs/toolkit";


export enum CATEGORIES {
  layouts,
  webApps,
}

export interface worksState {
  categories: CATEGORIES;
}

const initialState: worksState = {
  categories: CATEGORIES.layouts,
};

export const worksSlice = createSlice({
  name: "works",
  initialState,
  reducers: {
    categoriesChange: (state) => {
      if (state.categories === CATEGORIES.layouts)
        state.categories = CATEGORIES.webApps;
      else state.categories = CATEGORIES.layouts;
    },
  },
});

export const { categoriesChange } = worksSlice.actions;

export default worksSlice.reducer;
