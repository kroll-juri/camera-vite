import { Basket } from '@basket-page/components/Basket';
import { BreadCrumbs } from '@components/blocks/BreadCrumbs';

export const BasketPage = () => {
  return (
    <div className="page-content">
      <BreadCrumbs />
      <Basket />
    </div>
  );
};
