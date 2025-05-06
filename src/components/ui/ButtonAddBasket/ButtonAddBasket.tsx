import { ButtonAddBasketProps } from '@app-ui/ButtonAddBasket/types/types';
import { IconAddBasket } from '@app-ui/IconAddBasket';

import { useAppDispatch } from '@hooks/useAppDispatch';

import { setBasketData } from '@slice/basket/basket-slice/basket-slice';
import { setModalClose, setModalOpen } from '@slice/modal/modal-slice/modal-slice';

import { addToLocalStorage } from '@utils/functions/localStorage/add-to-localstorage';

import { modalController } from '@components/blocks/ModalComponent/helpers';

export const ButtonAddBasket = ({ activeCard, className }: ButtonAddBasketProps) => {
  const dispatch = useAppDispatch();

  return (
    <button
      className={`btn btn--purple ${className}`}
      type="button"
      onClick={() => {
        dispatch(setModalClose());
        dispatch(
          setModalOpen({
            name: modalController.success,
            title: modalController.addBasketTitle,
          }),
        );
        dispatch(setBasketData(addToLocalStorage(activeCard)));
      }}
    >
      <IconAddBasket />
      Добавить в корзину
    </button>
  );
};
