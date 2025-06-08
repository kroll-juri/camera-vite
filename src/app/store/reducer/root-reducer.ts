import { cameraSlice } from '@store/slice';
import { Namespace } from '@namespace/namespace';

import { combineReducers } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  [Namespace.Camera]: cameraSlice.reducer,
});

export default rootReducer;
