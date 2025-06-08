import { createAPI } from '@service/api/api';

import rootReducer from './reducer';

import { configureStore } from '@reduxjs/toolkit';

const api = createAPI();

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});
