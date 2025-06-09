import { ReactNode } from 'react';

export interface ModalComponentProps {
  children: ReactNode;
  className: string;
  isActive: boolean;
}
