import ReactFocusLock from 'react-focus-lock';

import { useModalClose } from '@hooks/useModalClose';

import { ModalComponentProps } from '@components/blocks/ModalComponent/types/types';

export const ModalComponent = ({ children, className = '', isActive }: ModalComponentProps) => {
  const handleOnOverlayClickClose = useModalClose();

  return (
    <ReactFocusLock>
      <div className={`modal ${isActive ? 'is-active' : ''} ${className}`}>
        <div className="modal__wrapper">
          <div
            className="modal__overlay"
            onClick={handleOnOverlayClickClose}
          ></div>
          <div className="modal__content">{children}</div>
        </div>
      </div>
    </ReactFocusLock>
  );
};
