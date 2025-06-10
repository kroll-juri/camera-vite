import ReactFocusLock from 'react-focus-lock';

import { ModalComponentProps } from '@components/blocks/ModalComponent/types/types';

import { useModalClose } from '@hooks/useModalClose';

export const ModalComponent = ({ children, className = '', isActive, setModalState }: ModalComponentProps) => {
  const handleOnOverlayClickClose = useModalClose(setModalState, isActive);

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
