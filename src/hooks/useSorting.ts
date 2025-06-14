import { useState } from 'react';

import { Camera } from '@slice/camera/types/types';

import { SortOrder, SortType } from '@main-page/components/Catalog/components/SortForm/types/types';
import { SortParams } from '@main-page/types/types';

export const useSorting = <T extends Camera>(list: T[]) => {
  const initialState: SortParams = {
    type: 'price',
    order: 'increase',
  };
  const [sortParams, setSortParams] = useState<SortParams>(initialState);

  const sortedCamerasList = [...list].sort((a, b) => {
    const modifier = sortParams.order === 'increase' ? 1 : -1;

    if (sortParams.type === 'price') {
      return (a.price - b.price) * modifier;
    }

    if (sortParams.type === 'popularity') {
      return (a.rating - b.rating) * modifier;
    }

    return 0;
  });

  const handleTypeChange = (type: SortType) => {
    setSortParams((prev) => ({ ...prev, type }));
  };

  const handleOrderChange = (order: SortOrder) => {
    setSortParams((prev) => ({ ...prev, order }));
  };

  return {
    sortedCamerasList,
    setSortParams,
    handleTypeChange,
    handleOrderChange,
    sortParams,
  };
};
