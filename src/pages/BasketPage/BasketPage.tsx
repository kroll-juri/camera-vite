import { Basket } from '@basket-page/components/Basket';
import { BreadCrumbs } from '@basket-page/components/BreadCrumbs';

export const BasketPage = () => {
  return (
    <div className="page-content">
      <BreadCrumbs />
      <Basket />
    </div>
  );
};
