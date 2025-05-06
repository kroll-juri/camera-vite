import { Namespace } from '@namespace/namespace';

import { State } from '@shared-types/types';

export const getModalName = (state: Pick<State, Namespace.Modal>) => state[Namespace.Modal].name;

export const getModalTitle = (state: Pick<State, Namespace.Modal>) => state[Namespace.Modal].title;
