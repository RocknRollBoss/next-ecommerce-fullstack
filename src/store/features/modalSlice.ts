import { createSlice } from "@reduxjs/toolkit";
interface ModalState {
  openModal: boolean;
}

const initialState: ModalState = {
  openModal: false,
};

export const slice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openAuthModal(state) {
      state.openModal = true;
    },
    closeAuthModal(state) {
      state.openModal = false;
    },
  },
});

export const modal = slice.reducer;
export const { openAuthModal, closeAuthModal } = slice.actions;
