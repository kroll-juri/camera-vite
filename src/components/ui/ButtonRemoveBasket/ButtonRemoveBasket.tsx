import { ButtonRemoveBasketProps } from '@app-ui/ButtonRemoveBasket/types/types';

import { useAppDispatch } from '@hooks/useAppDispatch';

import { setBasketData } from '@slice/basket/basket-slice/basket-slice';
import { setModalClose } from '@slice/modal/modal-slice/modal-slice';

import { removeAllFromLocalStorage } from '@utils/functions/localStorage/remove-all-from-local-storage';

export const ButtonRemoveBasket = ({ activeCard }: ButtonRemoveBasketProps) => {
  const dispatch = useAppDispatch();

  return (
    <button
      className="btn btn--purple modal__btn modal__btn--half-width"
      type="button"
      onClick={() => {
        dispatch(setBasketData(removeAllFromLocalStorage(activeCard)));
        dispatch(setModalClose());
      }}
    >
      Удалить
    </button>
  );
};
