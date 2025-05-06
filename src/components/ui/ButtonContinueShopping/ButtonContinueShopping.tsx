import { Link } from 'react-router-dom';

import { useAppDispatch } from '@hooks/useAppDispatch';

import { setModalClose } from '@slice/modal/modal-slice/modal-slice';

import { routeConfig } from '@app/AppRouter/routeConfig';

export const ButtonContinueShopping = () => {
  const dispatch = useAppDispatch();

  return (
    <Link
      className="btn btn--transparent modal__btn"
      to={routeConfig.Index}
      onClick={() => {
        dispatch(setModalClose());
      }}
    >
      Продолжить покупки
    </Link>
  );
};
