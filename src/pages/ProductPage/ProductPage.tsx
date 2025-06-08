import { useParams } from 'react-router-dom';

import { BreadCrumbs } from '@components/blocks/BreadCrumbs';

import { fetchCurrentCamera } from '@store/api-action/api-action';

import { store } from '@app/store';

import { Product } from '@product-page/components/Product';
import { ReviewsList } from '@product-page/components/ReviewsList';

export const ProductPage = () => {
  const { id } = useParams();

  if (id != null) {
    store.dispatch(fetchCurrentCamera(id));
  }
  return (
    <div className="page-content">
      <BreadCrumbs />
      <Product />
      <ReviewsList />
    </div>
  );
};
