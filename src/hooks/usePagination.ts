import { useEffect, useState } from 'react';

import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';

import { MAX_AMOUNT_SHOWED_CARDS } from '@main-page/const/const';

export const usePagination = (maxAmountPages: number) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const initialPage = parseInt(searchParams.get('page') || '1', 10);

  const normalizeRangeStart = (page: number): number => {
    if (page <= 2) return 1;
    if (page >= maxAmountPages - 1) return Math.max(maxAmountPages - 2, 1);
    return page - 1;
  };

  const [page, setPage] = useState(initialPage);
  const [rangeStart, setRangeStart] = useState(normalizeRangeStart(initialPage));

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [page]);

  useEffect(() => {
    const newParams = new URLSearchParams(location.search);
    if (page !== 1) {
      newParams.set('page', page.toString());
    } else {
      newParams.delete('page');
    }

    navigate(`${location.pathname}?${newParams.toString()}`, { replace: true });
  }, [page, location.pathname]);

  const handlePageClick = (value: string) => {
    const newPage = parseInt(value, 10);
    setPage(newPage);
    setRangeStart(normalizeRangeStart(newPage));
  };

  const handleNextRange = () => {
    const newStart = Math.min(rangeStart + 1, maxAmountPages - 2);
    setRangeStart(newStart);
    setPage(newStart);
  };

  const handlePrevRange = () => {
    const newStart = Math.max(rangeStart - 1, 1);
    setRangeStart(newStart);
    setPage(newStart + 2);
  };

  const sliceShowInitialRange = {
    showMin: (page - 1) * MAX_AMOUNT_SHOWED_CARDS,
    showMax: page * MAX_AMOUNT_SHOWED_CARDS,
  };

  return {
    page,
    sliceShowInitialRange,
    handlePageClick,
    handleNextRange,
    handlePrevRange,
    rangeStart,
  };
};
