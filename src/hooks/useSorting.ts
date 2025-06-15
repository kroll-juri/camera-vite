import { useMemo } from 'react';

import { useSearchParams } from 'react-router-dom';

import { Camera } from '@slice/camera/types/types';

export const useSorting = <T extends Camera>(list: T[]) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get('sort') || 'price';
  const order = searchParams.get('order') || 'asc';

  const sortedList = useMemo(
    () =>
      [...list].sort((a, b) => {
        const aVal = sortBy === 'price' ? a.price : a.rating;
        const bVal = sortBy === 'price' ? b.price : b.rating;
        return order === 'asc' ? aVal - bVal : bVal - aVal;
      }),
    [list, sortBy, order],
  );

  const handleTypeChange = (value: string) => {
    const params = new URLSearchParams(searchParams);
    params.set('sort', value);
    setSearchParams(params);
  };

  const handleOrderChange = (value: string) => {
    const params = new URLSearchParams(searchParams);
    params.set('order', value);
    setSearchParams(params);
  };

  return {
    sortParams: { sortBy, order },
    sortedCamerasList: sortedList,
    handleTypeChange,
    handleOrderChange,
  };
};
