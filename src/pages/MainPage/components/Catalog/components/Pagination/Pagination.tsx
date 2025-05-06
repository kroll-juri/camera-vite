import { useMemo } from 'react';

import { paginationPages } from '@utils/functions/common/createEmptyArray';
import { PaginationItem } from './components/PaginationItem';

import { PaginationListProps } from '@main-page/types/types';

export const Pagination = ({
  maxAmount,
  page,
  onClickHandler,
  handleNextRange,
  handlePrevRange,
  rangeStart,
}: PaginationListProps) => {
  const pagesToShow = useMemo(() => {
    return paginationPages.map((_, i) => rangeStart + i).filter((p) => p <= maxAmount);
  }, [rangeStart, maxAmount]);

  const showNext = rangeStart + 3 <= maxAmount;
  const showPrev = rangeStart > 1;

  return (
    <div className="pagination">
      <ul className="pagination__list">
        {showPrev && (
          <li className="pagination__item">
            <button
              className="pagination__link pagination__link--text"
              onClick={handlePrevRange}
              disabled={!showPrev}
            >
              Назад
            </button>
          </li>
        )}

        {pagesToShow.map((num) => (
          <PaginationItem
            key={num}
            value={num}
            isActive={page === num}
            onClickHandler={onClickHandler}
          />
        ))}

        {showNext && (
          <li className="pagination__item">
            <button
              className="pagination__link pagination__link--text"
              onClick={handleNextRange}
              disabled={!showNext}
            >
              Далее
            </button>
          </li>
        )}
      </ul>
    </div>
  );
};
