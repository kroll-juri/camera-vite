import { useEffect } from 'react';

import { modalController } from '@components/blocks/ModalComponent/helpers';
import { ModalComponentProps } from '@components/blocks/ModalComponent/types/types';

export const ModalComponent = ({ children, className = '', isActive, setModalState }: ModalComponentProps) => {
  const handleOnEscapePressClose = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      modalController.handleChangeModalState(setModalState, false);
    }
  };

  const handleOnOverlayClickClose = () => {
    modalController.handleChangeModalState(setModalState, false);
  };
  useEffect(() => {
    if (isActive) {
      modalController.addScrollLockBody();
    } else {
      modalController.removeScrollLockBody();
    }
  }, [isActive]);

  useEffect(() => {
    document.addEventListener('keydown', handleOnEscapePressClose);
    return () => {
      document.removeEventListener('keydown', handleOnEscapePressClose);
    };
  }, []);

  return (
    <div className={`modal ${isActive ? 'is-active' : ''} ${className}`}>
      <div className="modal__wrapper">
        <div
          className="modal__overlay"
          onClick={handleOnOverlayClickClose}
        ></div>
        <div className="modal__content">{children}</div>
      </div>
    </div>
  );
};
