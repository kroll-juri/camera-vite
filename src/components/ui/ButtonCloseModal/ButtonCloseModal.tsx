import { IconClose } from '@app-ui/IconClose';

import { useAppDispatch } from '@hooks/useAppDispatch';

import { setModalClose } from '@slice/modal/modal-slice/modal-slice';

export const ButtonCloseModal = () => {
  const dispatch = useAppDispatch();
  return (
    <button
      className="cross-btn"
      type="button"
      aria-label="Закрыть попап"
      onClick={() => {
        dispatch(setModalClose());
      }}
    >
      <IconClose />
    </button>
  );
};
