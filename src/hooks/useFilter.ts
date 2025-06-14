import { useState } from 'react';

import { filterInputChangeHandler } from '@utils/functions/filterInputChangeHandler';

import { FilterStateProps } from '@main-page/types/types';

export const useFilter = () => {
  const initialFilterState: FilterStateProps = {
    category: '',
    type: [],
    level: [],
    priceFrom: '',
    priceTo: '',
  };

  const [filter, setFilter] = useState(initialFilterState);

  const handleFilterInputChange = filterInputChangeHandler(setFilter);

  const handleFilterResetChange = () => {
    setFilter(initialFilterState);
  };

  return {
    filter,
    setFilter,
    handleFilterInputChange,
    handleFilterResetChange,
  };
};
