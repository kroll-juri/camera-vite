import { useState } from 'react';

import { MAX_AMOUNT_SHOWED_CARDS } from '@main-page/const/const';

export const usePagination = () => {
  const [page, setPage] = useState(1);

  const sliceShowInitialRange = {
    showMin: 0 + (page - 1) * MAX_AMOUNT_SHOWED_CARDS,
    showMax: MAX_AMOUNT_SHOWED_CARDS * page,
  };

  const handleShowNewCardsClick = (value: string) => {
    setPage(+value);
  };

  return {
    sliceShowInitialRange,
    handleShowNewCardsClick,
    page,
  };
};
