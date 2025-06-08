import { BreadCrumbs } from '@product-page/components/BreadCrumbs';
import { Product } from '@product-page/components/Product';
import { ReviewsList } from '@product-page/components/ReviewsList';

export const ProductPage = () => {
  return (
    <div className="page-content">
      <BreadCrumbs />
      <Product />
      <ReviewsList />
    </div>
  );
};
