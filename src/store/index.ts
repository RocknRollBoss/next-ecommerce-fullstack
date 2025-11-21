import { configureStore } from "@reduxjs/toolkit";
import { api } from "./services/api";
import { filters } from "./features/filtersSlice";
import { favourites } from "./features/favouritesSlice";
import { modal } from "./features/modalSlice";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    filters,
    favourites,
    modal,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
store.subscribe(() => {
  if (typeof window !== "undefined") {
    const state = store.getState();
    localStorage.setItem("favourites", JSON.stringify(state.favourites.items));
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
