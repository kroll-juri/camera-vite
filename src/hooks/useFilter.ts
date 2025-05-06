import { useEffect, useState } from 'react';

import { useSearchParams } from 'react-router-dom';

import { filterInputChangeHandler } from '@utils/functions/adapters/filterInputChangeHandler';

import { FilterStateProps } from '@main-page/types/types';

const emptyFilterState: FilterStateProps = {
  category: '', // сюда попадает ключ категории
  type: [],
  level: [],
  priceFrom: '',
  priceTo: '',
};

export const useFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const parseFilterFromURL = (): FilterStateProps => ({
    category: searchParams.get('category') || emptyFilterState.category, // ключ категории из URL
    type: searchParams.getAll('type'),
    level: searchParams.getAll('level'),
    priceFrom: searchParams.get('priceFrom') || emptyFilterState.priceFrom,
    priceTo: searchParams.get('priceTo') || emptyFilterState.priceTo,
  });

  const [filter, setFilter] = useState<FilterStateProps>(parseFilterFromURL());

  const syncURL = (newFilter: FilterStateProps) => {
    const params = new URLSearchParams();
    if (newFilter.category) params.set('category', newFilter.category);
    newFilter.type.forEach((v) => params.append('type', v));
    newFilter.level.forEach((v) => params.append('level', v));
    if (newFilter.priceFrom) params.set('priceFrom', newFilter.priceFrom);
    if (newFilter.priceTo) params.set('priceTo', newFilter.priceTo);
    setSearchParams(params);
  };

  useEffect(() => {
    syncURL(filter);
  }, [filter]);

  useEffect(() => {
    setFilter(parseFilterFromURL());
  }, [searchParams.toString()]);

  const handleFilterInputChange = filterInputChangeHandler(setFilter);

  const handleFilterResetChange = () => {
    setFilter(emptyFilterState);
    setSearchParams({});
  };

  return {
    filter,
    setFilter,
    handleFilterInputChange,
    handleFilterResetChange,
  };
};
