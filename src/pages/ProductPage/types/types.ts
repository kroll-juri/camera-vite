import { ButtonHTMLAttributes } from 'react';

import { Camera } from '@slice/camera/types/types';

export interface ProductPageProps {
  props: Camera;
}

export interface CameraSpecsProps {
  props: Partial<Camera>;
}

export interface TabsButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  isActive: boolean;
  onClick: () => void;
}

export type ProductTabs = 'characteristics' | 'description';
