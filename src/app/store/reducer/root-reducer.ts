import { cameraSlice } from '@store/slice';
import { Namespace } from '@namespace/namespace';
import { reviewSlice } from '@slice/review/review-slice/review-slice';

import { combineReducers } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  [Namespace.Camera]: cameraSlice.reducer,
  [Namespace.Review]: reviewSlice.reducer,
});

export default rootReducer;
