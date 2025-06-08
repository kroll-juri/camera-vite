import { BreadCrumbs } from '@components/blocks/BreadCrumbs';

import { Basket } from '@basket-page/components/Basket';

export const BasketPage = () => {
  return (
    <div className="page-content">
      <BreadCrumbs />
      <Basket />
    </div>
  );
};
