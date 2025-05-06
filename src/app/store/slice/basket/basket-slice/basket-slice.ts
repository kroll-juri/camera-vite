import { Namespace } from '@namespace/namespace';
import { BasketState } from '@slice/basket/types/types';
import { Camera } from '@slice/camera/types/types';

import { CAMERA_CART_LOCALSTORAGE_KEY } from '@utils/const/const';
import { getFromLocalStorage } from '@utils/functions/localStorage/get-from-localstorage';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: BasketState = {
  basketData: getFromLocalStorage(CAMERA_CART_LOCALSTORAGE_KEY),
};

const basketSlice = createSlice({
  name: Namespace.Basket,
  initialState,
  reducers: {
    setBasketData: (state: BasketState, action: PayloadAction<Camera[]>) => {
      state.basketData = action.payload;
      localStorage.setItem(CAMERA_CART_LOCALSTORAGE_KEY, JSON.stringify(action.payload));
    },
  },
});

export default basketSlice;
export const { setBasketData } = basketSlice.actions;
