import { Dispatch, SetStateAction } from 'react';

import { SortParams } from '@main-page/types/types';

const PriceValue = {
  price: 'от',
  priceUp: 'до',
} as const;

const CamerasCategory = {
  photocamera: 'Фотоаппарат',
  videocamera: 'Видеокамера',
} as const;

const CamerasType = {
  digital: 'Цифровая',
  film: 'Плёночная',
  snapshot: 'Моментальная',
  collection: 'Коллекционная',
} as const;

const CamerasLevel = {
  zero: 'Нулевой',
  'non-professional': 'Любительский',
  professional: 'Профессиональный',
} as const;

const CamerasFilterGroups = {
  level: 'Уровень',
  type: 'Тип камеры',
};

type SortType = 'price' | 'popularity';

type SortOrder = 'increase' | 'decrease';

export interface SortFormProps {
  sortType: SortType;
  sortOrder: SortOrder;
  handleInputChange: Dispatch<SetStateAction<SortParams>>;
}

export { CamerasCategory, CamerasFilterGroups, CamerasLevel, CamerasType, PriceValue };

export type { SortOrder, SortType };
