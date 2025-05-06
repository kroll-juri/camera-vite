import { useEffect } from 'react';

import { useAppDispatch } from '@hooks/useAppDispatch';

import { setModalClose } from '@slice/modal/modal-slice/modal-slice';

export const useModalClose = () => {
  const dispatch = useAppDispatch();

  const handleOnEscapePressClose = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      dispatch(setModalClose());
    }
  };

  const handleOnOverlayClickClose = () => {
    dispatch(setModalClose());
  };

  useEffect(() => {
    document.addEventListener('keydown', handleOnEscapePressClose);
    return () => {
      document.removeEventListener('keydown', handleOnEscapePressClose);
    };
  }, []);

  return handleOnOverlayClickClose;
};
