import { Link } from 'react-router-dom';

import { routeConfig } from '@app/AppRouter/routeConfig';

import { PaginationItem } from '@main-page/components/Catalog/components/Pagination/components';
import { PaginationProps } from '@main-page/types/types';

export const Pagination = ({ maxAmount, page, onClickHandler }: PaginationProps) => {
  const maxAmountArray: number[] = Array.from({ length: maxAmount });

  return (
    <div className="pagination">
      <ul className="pagination__list">
        {maxAmountArray.map((_, index) => (
          <PaginationItem
            value={index + 1}
            key={index}
            page={page}
            onClickHandler={onClickHandler}
          />
        ))}
        <li className="pagination__item">
          <Link
            className="pagination__link pagination__link&#45;&#45;text"
            to={routeConfig.Index}
          >
            Далее
          </Link>
        </li>
      </ul>
    </div>
  );
};
