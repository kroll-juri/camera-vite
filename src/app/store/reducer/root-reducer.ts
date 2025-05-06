import { cameraSlice } from '@store/slice';
import { Namespace } from '@namespace/namespace';
import basketSlice from '@slice/basket/basket-slice/basket-slice';
import { modalSlice } from '@slice/modal/modal-slice/modal-slice';
import { orderSlice } from '@slice/order/order-slice/order-slice';
import { promoSlice } from '@slice/promo/promo-slice/promo-slice';
import { reviewSlice } from '@slice/review/review-slice/review-slice';

import { combineReducers } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  [Namespace.Camera]: cameraSlice.reducer,
  [Namespace.Review]: reviewSlice.reducer,
  [Namespace.Basket]: basketSlice.reducer,
  [Namespace.Order]: orderSlice.reducer,
  [Namespace.Promo]: promoSlice.reducer,
  [Namespace.Modal]: modalSlice.reducer,
});

export default rootReducer;
