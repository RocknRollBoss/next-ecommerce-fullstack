import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";

export type SortType =
  | "rating_desc"
  | "rating_asc"
  | "price_desc"
  | "price_asc";

export interface Filters {
  category?: string | null;
  sort?: SortType | null;
}
export interface FiltersState {
  filters: Filters;
}

const initialState: FiltersState = {
  filters: {
    category: null,
    sort: null,
  },
};

export const slice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setFilters: (state, action: PayloadAction<Filters>) => {
      state.filters = action.payload;
    },
  },
});

export const { setFilters } = slice.actions;
export const filters = slice.reducer;
export const selectFilters = (state: RootState) => state.filters;
