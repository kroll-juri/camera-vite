import { useEffect } from 'react';

import { modalController } from '@components/blocks/ModalComponent/helpers';

import { SetState } from '@shared-types/types';

export const useModalClose = (setFn: SetState<boolean>, activeState: boolean) => {
  const handleOnEscapePressClose = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      modalController.handleChangeModalState(setFn, false);
    }
  };

  const handleOnOverlayClickClose = () => {
    modalController.handleChangeModalState(setFn, false);
  };
  useEffect(() => {
    if (activeState) {
      modalController.addScrollLockBody();
    } else {
      modalController.removeScrollLockBody();
    }
  }, [activeState]);

  useEffect(() => {
    document.addEventListener('keydown', handleOnEscapePressClose);
    return () => {
      document.removeEventListener('keydown', handleOnEscapePressClose);
    };
  }, []);

  return handleOnOverlayClickClose;
};
