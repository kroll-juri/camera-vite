import { Link } from 'react-router-dom';

import { IconBasket } from '@app-ui/IconBasket';

import { useAppSelector } from '@hooks/useAppSelector';

import { getBasketCameraList } from '@slice/basket/basket-selectors/basket-selectors';

import { routeConfig } from '@app/AppRouter/routeConfig';

export const BasketCountItem = () => {
  const basketCameraList = useAppSelector(getBasketCameraList);

  return (
    <Link
      className="header__basket-link"
      to={routeConfig.Basket}
    >
      <IconBasket />
      <span className="header__basket-count">{basketCameraList.length}</span>
    </Link>
  );
};
