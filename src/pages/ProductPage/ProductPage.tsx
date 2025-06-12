import { useEffect } from 'react';

import { useNavigate, useParams } from 'react-router-dom';

import { BreadCrumbs } from '@components/blocks/BreadCrumbs';

import { useAppSelector } from '@hooks/useAppSelector';

import { fetchCurrentCamera, fetchReviewData } from '@store/api-action/api-action';
import { getCurrentCamera } from '@slice/camera/camera-selectors/camera-selectors';
import { getReviewList } from '@slice/review/review-selectors/review-selectors';

import { routeConfig } from '@app/AppRouter/routeConfig';
import { store } from '@app/store';

import { Product } from '@product-page/components/Product';
import { ReviewsList } from '@product-page/components/ReviewsList';

export const ProductPage = () => {
  const { id: cameraId } = useParams();
  const navigate = useNavigate();
  const currentCamera = useAppSelector(getCurrentCamera);
  const currentReviewList = useAppSelector(getReviewList);

  useEffect(() => {
    if (cameraId) {
      store.dispatch(fetchCurrentCamera(cameraId));
      store.dispatch(fetchReviewData(cameraId));
    } else {
      navigate(routeConfig.NotFound);
    }
  }, [cameraId]);

  return (
    <div className="page-content">
      <BreadCrumbs />
      {currentCamera && <Product props={{ ...currentCamera }} />}
      {currentReviewList && <ReviewsList reviewsList={currentReviewList} />}
    </div>
  );
};
