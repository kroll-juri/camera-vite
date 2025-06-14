import { Link } from 'react-router-dom';

import { routeConfig } from '@app/AppRouter/routeConfig';

export const IconBasket = () => {
  return (
    <Link
      className="header__basket-link"
      to={routeConfig.Basket}
    >
      <svg
        width="16"
        height="16"
        aria-hidden="true"
      >
        <use xlinkHref="#icon-basket"></use>
      </svg>
    </Link>
  );
};
