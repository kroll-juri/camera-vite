import { lazy, Suspense } from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { ScrollToTop } from '@components/utility';
import { AppLayout } from '@layout/AppLayout';

import { MainPage } from '@pages/MainPage';

import { routeConfig } from '@app/AppRouter/routeConfig';

const BasketPage = lazy(() =>
  import('@pages/BasketPage').then((module) => ({
    default: module.BasketPage,
  })),
);
const ProductPage = lazy(() =>
  import('@pages/ProductPage').then((module) => ({
    default: module.ProductPage,
  })),
);
const NotFoundPage = lazy(() =>
  import('@pages/NotFoundPage').then((module) => ({
    default: module.NotFoundPage,
  })),
);

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <ScrollToTop />
        <Routes>
          <Route
            path={routeConfig.Index}
            element={<AppLayout />}
          >
            <Route
              index
              element={<MainPage />}
            />
            <Route
              path={routeConfig.Basket}
              element={<BasketPage />}
            />
            <Route
              path={routeConfig.Product}
              element={<ProductPage />}
            />
          </Route>
          <Route
            path={routeConfig.NotFound}
            element={<NotFoundPage />}
          />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};
