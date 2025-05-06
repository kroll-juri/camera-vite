import { useEffect } from 'react';

import { useNavigate, useParams } from 'react-router-dom';

import { useAppSelector } from '@hooks/useAppSelector';

import { fetchCurrentCamera, fetchReviewData, fetchSimilarListData } from '@store/api-action/api-action';
import { getCurrentCamera, getSimilarList } from '@slice/camera/camera-selectors/camera-selectors';
import { getReviewList } from '@slice/review/review-selectors/review-selectors';

import { routeConfig } from '@app/AppRouter/routeConfig';
import { store } from '@app/store';

import { BreadCrumbs } from '@components/blocks/BreadCrumbs';
import { PageContent } from '@components/blocks/PageContent';
import { Product } from '@product-page/components/Product';
import { ReviewsList } from '@product-page/components/ReviewsList';
import { SimilarList } from '@product-page/components/SimilarList';

export const ProductPage = () => {
  const { id: cameraId } = useParams();
  const navigate = useNavigate();
  const currentCamera = useAppSelector(getCurrentCamera);
  const currentReviewList = useAppSelector(getReviewList);
  const similarList = useAppSelector(getSimilarList);

  useEffect(() => {
    if (cameraId) {
      store.dispatch(fetchCurrentCamera(cameraId));
      store.dispatch(fetchReviewData(cameraId));
      store.dispatch(fetchSimilarListData(cameraId));
    } else {
      navigate(routeConfig.NotFound);
    }
  }, [cameraId]);

  return (
    <div className="page-content">
      <BreadCrumbs />
      {currentCamera && (
        <PageContent>
          <Product props={currentCamera} />
        </PageContent>
      )}
      {currentCamera && (
        <PageContent>
          <SimilarList props={similarList} />
        </PageContent>
      )}
      {currentReviewList && (
        <PageContent>
          <ReviewsList
            props={currentReviewList}
            activeCard={currentCamera}
          />
        </PageContent>
      )}
    </div>
  );
};
