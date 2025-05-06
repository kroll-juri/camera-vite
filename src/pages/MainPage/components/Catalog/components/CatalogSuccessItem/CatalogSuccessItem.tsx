import { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import { ButtonContinueShopping } from '@app-ui/ButtonContinueShopping';
import { IconClose } from '@app-ui/IconClose';
import { IconSuccess } from '@app-ui/IconSuccess';

import { useAppDispatch } from '@hooks/useAppDispatch';
import { useAppSelector } from '@hooks/useAppSelector';

import { getModalTitle } from '@slice/modal/modal-selectors/modal-selectors';
import { setModalClose } from '@slice/modal/modal-slice/modal-slice';

import { routeConfig } from '@app/AppRouter/routeConfig';

import { modalController } from '@components/blocks/ModalComponent/helpers';

export const CatalogSuccessItem = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const title = useAppSelector(getModalTitle);

  useEffect(() => {
    modalController.addScrollLockBody();

    return () => modalController.removeScrollLockBody();
  }, []);

  return (
    <>
      <p className="title title--h4">{title}</p>
      <IconSuccess />
      <div className="modal__buttons">
        <ButtonContinueShopping />
        <button
          className="btn btn--purple modal__btn modal__btn--fit-width"
          onClick={() => {
            navigate(routeConfig.Basket);
            dispatch(setModalClose());
          }}
        >
          Перейти в корзину
        </button>
      </div>
      <button
        className="cross-btn"
        type="button"
        aria-label="Закрыть попап"
        onClick={() => {
          dispatch(setModalClose());
          {
            title === modalController.thanksForPurchasing && navigate(routeConfig.Index);
          }
        }}
      >
        <IconClose />
      </button>
    </>
  );
};
