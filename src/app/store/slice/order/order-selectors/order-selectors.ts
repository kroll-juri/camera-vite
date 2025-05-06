import { Namespace } from '@namespace/namespace';

import { State } from '@shared-types/types';

export const getOrderLoading = (state: State) => state[Namespace.Order].loading;

export const getOrderSuccess = (state: State) => state[Namespace.Order].success;
