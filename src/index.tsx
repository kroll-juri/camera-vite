import { StrictMode } from 'react';

import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import { fetchCameraListData } from '@store/api-action/api-action';

import { App } from '@app/App';
import { store } from '@app/store';

store.dispatch(fetchCameraListData());

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
      <ToastContainer />
    </Provider>
  </StrictMode>,
);
