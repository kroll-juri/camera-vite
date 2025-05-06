import { ChangeEvent, ReactNode } from 'react';

import { store } from '@app/store';

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
