import { useDispatch } from 'react-redux';

import { AppDispatchType } from '@shared-types/types';

export const useAppDispatch = () => useDispatch<AppDispatchType>();
