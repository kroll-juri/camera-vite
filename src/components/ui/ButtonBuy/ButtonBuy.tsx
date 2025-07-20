import { ButtonBuyProps } from '@app-ui/ButtonBuy/types/types';

import { useAppDispatch } from '@hooks/useAppDispatch';
import { useAppSelector } from '@hooks/useAppSelector';

import { getCamerasList } from '@slice/camera/camera-selectors/camera-selectors';
import { setActiveCard, setModalOpen } from '@slice/modal/modal-slice/modal-slice';

import { modalController } from '@components/blocks/ModalComponent/helpers';

export const ButtonBuy = ({ cameraId }: ButtonBuyProps) => {
  const dispatch = useAppDispatch();
  const camerasList = useAppSelector(getCamerasList);
  const activeCard = camerasList.find((item) => item.id === cameraId);


  return (
    <button
      className="btn btn--purple product-card__btn"
      type="button"
      onClick={() => {
        dispatch(setActiveCard(activeCard));
        dispatch(
          setModalOpen({
            name: modalController.call,
            title: modalController.addBasketTitle,
          }),
        );
        console.log(activeCard);
      }}
    >
      Купить
    </button>
  );
};
