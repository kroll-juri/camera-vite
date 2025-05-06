import { fetchPromoListData } from '@store/api-action/api-action';
import { Namespace } from '@namespace/namespace';
import { PromoInitialState } from '@slice/promo/types/types';

import { createSlice } from '@reduxjs/toolkit';

const initialState: PromoInitialState = {
  promo: [],
};

export const promoSlice = createSlice({
  name: Namespace.Promo,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchPromoListData.fulfilled, (state, action) => {
      state.promo = action.payload;
    });
  },
});
