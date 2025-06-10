import { ReactNode } from 'react';

import { SetState } from '@shared-types/types';

export interface ModalComponentProps {
  children: ReactNode;
  className: string;
  isActive: boolean;
  setModalState: SetState<boolean>;
}
