import { ChangeEvent, ReactNode } from 'react';

import { store } from '@app/store';
import { Camera } from '@slice/camera/types/types';

export type State = ReturnType<typeof store.getState>;
export type AppDispatchType = typeof store.dispatch;

export interface OrderType {
  camerasIds: number[];
  coupon: string | null;
  tel?: string;
}

export interface ChildrenProps {
  children: ReactNode;
}

export interface SliderState {
  start: number;
  end: number;
}

export type EventHandler = (evt: ChangeEvent<HTMLInputElement>) => void;

export interface SimilarResponse {
  cameraId: number;
  items: Camera[];
};
