import { Namespace } from '@namespace/namespace';

import { State } from '@shared-types/types';

export const getBasketCameraList = (state: Pick<State, Namespace.Basket>) => state[Namespace.Basket].basketData;
