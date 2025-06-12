import { ChildrenProps, SetState } from '@shared-types/types';

export interface ModalComponentProps extends ChildrenProps {
  className: string;
  isActive: boolean;
  setModalState: SetState<boolean>;
}
