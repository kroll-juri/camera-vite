import { useEffect } from 'react';

import { modalController } from '@components/blocks/ModalComponent/helpers';
import { ModalComponentProps } from '@components/blocks/ModalComponent/types/types';

export const ModalComponent = ({ children, className = '', isActive }: ModalComponentProps) => {
  useEffect(() => {
    modalController.addScrollLockBody();

    return modalController.removeScrollLockBody();
  }, []);

  return (
    <div className={`modal ${isActive ? 'is-active' : ''} ${className}`}>
      <div className="modal__wrapper">
        <div className="modal__overlay"></div>
        <div className="modal__content">{children}</div>
      </div>
    </div>
  );
};
