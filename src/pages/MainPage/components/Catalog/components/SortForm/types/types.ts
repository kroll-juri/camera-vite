import { Dispatch, SetStateAction } from 'react';

import { SortParams } from '@main-page/types/types';

type SortType = 'price' | 'popularity';

type SortOrder = 'increase' | 'decrease';

export interface SortFormProps {
  sortType: SortType;
  sortOrder: SortOrder;
  handleInputChange: Dispatch<SetStateAction<SortParams>>;
}

export type { SortOrder, SortType };
