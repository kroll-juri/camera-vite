import { TypedUseSelectorHook,useSelector } from 'react-redux';

import { State } from '@shared-types/types';

export const useAppSelector: TypedUseSelectorHook<State> = useSelector;
