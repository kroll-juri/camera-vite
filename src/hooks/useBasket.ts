import { useEffect } from 'react';

import { useAppDispatch } from '@hooks/useAppDispatch';

import { postOrderAction } from '@store/api-action/api-action';
import { setBasketData } from '@slice/basket/basket-slice/basket-slice';
import { Camera } from '@slice/camera/types/types';
import { setModalOpen } from '@slice/modal/modal-slice/modal-slice';
import { resetOrderState } from '@slice/order/order-slice/order-slice';

import { CAMERA_CART_LOCALSTORAGE_KEY } from '@utils/const/const';
import { getFromLocalStorage } from '@utils/functions/localStorage/get-from-localstorage';

import { modalController } from '@components/blocks/ModalComponent/helpers';

export const useBasket = <T extends number>(list: T[], status: boolean) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const handleStorageUpdate = (e: StorageEvent) => {
      if (e.key === CAMERA_CART_LOCALSTORAGE_KEY) {
        const newData = getFromLocalStorage<Camera>(CAMERA_CART_LOCALSTORAGE_KEY);
        dispatch(setBasketData(newData));
      }
    };

    window.addEventListener('storage', handleStorageUpdate);
    return () => window.removeEventListener('storage', handleStorageUpdate);
  }, [dispatch]);

  const handleOrderSubmit = () => {
    dispatch(
      postOrderAction({
        coupon: null,
        camerasIds: list,
      }),
    );
  };

  useEffect(() => {
    if (status) {
      dispatch(
        setModalOpen({
          name: modalController.success,
          title: modalController.thanksForPurchasing,
        }),
        dispatch(resetOrderState()),
        dispatch(setBasketData([])),
      );
    }
  }, [status]);

  return { handleOrderSubmit };
};
