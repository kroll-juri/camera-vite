import { Link } from 'react-router-dom';

import { routeConfig } from '@app/AppRouter/routeConfig';

import { PaginationItem } from '@main-page/components/Catalog/components/Pagination/components';
import { PaginationListProps } from '@main-page/types/types';

export const Pagination = ({ maxAmount, page, onClickHandler }: PaginationListProps) => {
  const maxAmountArray: number[] = Array.from({ length: maxAmount });

  return (
    <div className="pagination">
      <ul className="pagination__list">
        {maxAmountArray.map((_, index) => {
          const pageNumber = index + 1;

          return (
            <PaginationItem
              value={pageNumber}
              key={index}
              isActive={page === pageNumber}
              onClickHandler={onClickHandler}
            />
          );
        })}
        <li className="pagination__item">
          <Link
            className="pagination__link pagination__link--text"
            to={routeConfig.Index}
          >
            Далее
          </Link>
        </li>
      </ul>
    </div>
  );
};
