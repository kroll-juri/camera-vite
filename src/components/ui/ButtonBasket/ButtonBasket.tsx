import { Link } from 'react-router-dom';

import { IconBasket } from '@app-ui/IconBasket';

import { routeConfig } from '@app/AppRouter/routeConfig';

export const ButtonBasket = () => {
  return (
    <Link
      className="btn btn--purple-border product-card__btn product-card__btn--in-cart"
      to={`${routeConfig.Basket}`}
    >
      <IconBasket />В корзине
    </Link>
  );
};
