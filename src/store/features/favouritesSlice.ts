import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";
import { TProduct } from "../services/products-api";

interface IFavourites {
  items: TProduct[];
}
const loadFavourites = (): TProduct[] => {
  if (typeof window !== "undefined") {
    const saved = localStorage.getItem("favourites");
    return saved ? JSON.parse(saved) : [];
  }
  return [];
};

const initialState: IFavourites = {
  items: loadFavourites(),
};

export const slice = createSlice({
  name: "favourites",
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<TProduct>) {
      const existItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (!existItem) {
        state.items.push(action.payload);
        localStorage.setItem("favourites", JSON.stringify(state.items));
      }
    },
    removeItem(state, action: PayloadAction<number>) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    clearItems(state) {
      state.items = [];
    },
  },
});

export const favourites = slice.reducer;
export const { addItem, removeItem, clearItems } = slice.actions;
export const selectFavourites = (state: RootState) => state.favourites;
