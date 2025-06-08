import { store } from '@app/store';

export type State = ReturnType<typeof store.getState>;
export type AppDispatchType = typeof store.dispatch;

export interface OrderType {
  camerasIds: number[];
  coupon: string | null;
  tel: string;
}
