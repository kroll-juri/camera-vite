import { Namespace } from '@namespace/namespace';
import { ModalState } from '@slice/modal/types/types';

import { modalController } from '@components/blocks/ModalComponent/helpers';
import { createSlice } from '@reduxjs/toolkit';

const initialState: ModalState = {
  name: modalController.noModal,
  title: modalController.noBasketTitle,
  activeCard: null,
};

const modalSlice = createSlice({
  name: Namespace.Modal,
  initialState,
  reducers: {
    setModalOpen(state, action) {
      state.name = action.payload.name;
      state.title = action.payload.title;
    },
    setModalClose(state) {
      state.name = modalController.noModal;
      state.title = modalController.noBasketTitle;
    },
    setActiveCard(state, action) {
      state.activeCard = action.payload;
    },
  },
});

export { modalSlice };
export const { setModalOpen, setModalClose, setActiveCard } = modalSlice.actions;
