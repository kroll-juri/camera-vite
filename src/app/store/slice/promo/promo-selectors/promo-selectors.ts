import { Namespace } from '@namespace/namespace';

import { State } from '@shared-types/types';

export const getPromoList = (state: Pick<State, Namespace.Promo>) => state[Namespace.Promo].promo;
