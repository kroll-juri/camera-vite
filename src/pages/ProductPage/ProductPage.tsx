import { useEffect } from 'react';

import { useNavigate, useParams } from 'react-router-dom';

import { BreadCrumbs } from '@components/blocks/BreadCrumbs';

import { useAppSelector } from '@hooks/useAppSelector';

import { fetchCurrentCamera } from '@store/api-action/api-action';
import { getCurrentCamera } from '@slice/camera/camera-selectors/camera-selectors';

import { routeConfig } from '@app/AppRouter/routeConfig';
import { store } from '@app/store';

import { Product } from '@product-page/components/Product';
import { ReviewsList } from '@product-page/components/ReviewsList';

export const ProductPage = () => {
  const { id: cameraId } = useParams();
  const navigate = useNavigate();
  const currentCamera = useAppSelector(getCurrentCamera);

  useEffect(() => {
    if (cameraId) {
      store.dispatch(fetchCurrentCamera(cameraId));
    } else {
      navigate(routeConfig.NotFound);
    }
  }, [cameraId]);

  return (
    <div className="page-content">
      <BreadCrumbs />
      {currentCamera && <Product props={{ ...currentCamera }} />}
      <ReviewsList />
    </div>
  );
};
